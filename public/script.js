const form = document.getElementById('userForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      name: document.getElementById('name').value,
      password: document.getElementById('password').value,
      course: document.getElementById('course').value,
      contact: document.getElementById('contact').value
    };

    await fetch('http://127.0.0.1:5001/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

  });
} else {
  fetchUsers();
}
async function fetchUsers() {
  // const response = await fetch('http://127.0.0.1:5001/api/users');
  const response = await fetch('http://172-31-41-153:5001/api/users');
  const users = await response.json();

  const container = document.getElementById('usersContainer');

  users.forEach((user, index) => {
    const box = document.createElement('div');
    box.className = 'user-box';

    box.innerHTML = `
      <h3>User ${index + 1}</h3>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Password:</strong> ${user.password}</p>
      <p><strong>Course:</strong> ${user.course}</p>
      <p><strong>Contact:</strong> ${user.contact}</p>
    `;

    container.appendChild(box);
  });
}
