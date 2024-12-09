# Attendance App

[![Demo Video](https://via.placeholder.com/100x50/0000FF/FFFFFF.png?text=Klik+untuk+menonton)](https://github.com/user-attachments/assets/1666050e-b1e4-47aa-b4a7-f0a4915fe652)

![image](https://github.com/user-attachments/assets/7150be7b-43ba-4766-84fc-87206574c508)
![image](https://github.com/user-attachments/assets/26bff22f-8daf-49b0-8929-8ce49a993acc)





Aplikasi sederhana untuk manajemen absensi menggunakan Express.js, Docker, dan frontend dengan HTML/JavaScript.

## Environment
- Backend menggunakan Node.js dengan Express
- Frontend menggunakan HTML, JavaScript, dan Bootstrap
- Docker sebagai container

## Cara Menjalankan Aplikasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username/attendance-app.git
   cd attendance-app

2. **menjalankan Backend**
   ```bash
   cd backend
   docker build -t attendance-backend .
   docker run -p 3000:3000 attendance-backend

3. **menjalankan Frontend**
   ```bash
   cd frontend
   docker build -t attendance-frontend .
   docker run -p 8080:80 attendance-frontend

4. **akses aplikasi**
   Akses frontend di http://localhost:8080
   Akses backend di http://localhost:3000

5. **menjalankan aplikasi dengan Docker**
   docker-compose up --build
