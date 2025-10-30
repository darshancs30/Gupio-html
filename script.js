const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

const form = document.getElementById('contact-form');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    msg.textContent = `Thanks, ${name}! Your message has been sent.`;
    msg.style.color = 'green';
    form.reset();
  } else {
    msg.textContent = 'Please fill out all fields.';
    msg.style.color = 'red';
  }
});
