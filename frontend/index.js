const baseURL = 'http://localhost:3000/attendance';
const form = document.getElementById('attendance-form');
const tableBody = document.getElementById('attendance-table-body');

// Load attendance data
const loadAttendance = async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log('Fetched data:', data);
        
        tableBody.innerHTML = ''; // Clear existing rows

        data.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.id}</td>
                <td>${record.name}</td>
                <td>${record.date}</td>
                <td>
                    <button class="btn btn-danger btn-sm delete-btn" data-id="${record.id}">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        // Attach delete event listeners
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', async (e) => {
                const id = e.target.getAttribute('data-id');
                console.log('Deleting record with ID:', id);
                await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
                loadAttendance();
            });
        });
    } catch (error) {
        console.error('Error loading attendance data:', error);
    }
};

// Add new attendance
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    try {
        console.log('Adding new record:', { name, date });
        await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, date })
        });
        form.reset();
        loadAttendance();
    } catch (error) {
        console.error('Error adding attendance:', error);
    }
});

// Initial load
loadAttendance();
