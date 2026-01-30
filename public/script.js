const BACKEND_URL = "http://13.201.58.102:5001";

// ---------- FORM SUBMIT LOGIC ----------
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

    const response = await fetch(`${BACKEND_URL}/api/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      // ✅ Redirect to users page
      window.location.href = "users.html";
    } else {
      alert("Failed to save data");
    }
  });
}

// ---------- USERS PAGE LOGIC ----------
const usersContainer = document.getElementById('usersContainer');

if (usersContainer) {
  fetchUsers();
}

async function fetchUsers() {
  const response = await fetch(`${BACKEND_URL}/api/users`);
  const users = await response.json();

  usersContainer.innerHTML = "";

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

    usersContainer.appendChild(box);
  });
}
