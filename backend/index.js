const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const {format} = require('date-fns');

//middleware buat parsing JSON
app.use(express.json());
app.use(cors());

//data untuk absen
let attendance = [];

//GET untuk mengambil data absensi
app.get('/attendance', (req, res) => {
    const formattedAttendance = attendance.map(record => ({
      ...record,
      date: format(new Date(record.date), 'dd/MM/yyyy HH:mm') // Format sesuai kebutuhan
    }));
    res.json(formattedAttendance);
  });

//POST untuk nambah data
app.post('/attendance', (req, res)=> {
    const{name, date} = req.body;
    if(!name || !date){
        return res.status(400).json({
            message:'Name and date are required!'
        });
    }
    const record = {id: attendance.length + 1, name, date};
    attendance.push(record);
    res.status(201).json(record);
});

//PUT untuk update data
app.put('/attendance/:id', (req, res)=>{
    const{id} = req.params;
    const{name, date} = req.body;
    const record = attendance.find(item=> item.id === parseInt(id));
    
    if(!record){
        return res.status(404).json({
            message: 'attendance record not found!'
        });
    }
    //update data
    record.name = name || record.name;
    record.date = date || record.date;
    
    res.json(record);
});

//DELETE untuk menghapus data
app.delete('/attendance/:id', (req, res)=>{
    const{id} = req.params;

    //nyari index data yang mau diapus
    const index = attendance.findIndex(item => item.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({
            message: 'attendance record not found!'
        });
    }
    attendance.splice(index, 1);

    res.status(200).json({
        message:`attendance record with id ${id} has been deleted!`
    });
});




app.listen(port, ()=> {
    console.log(`running on port: ${port}`);
});