const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

const bookBtn = document.querySelector('.book-btn');
if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector('.top-doctors');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function () {
    console.log('Navigating to: ' + this.getAttribute('href'));
  });
});

function bookDoctor(name, specialty, img) {
  localStorage.setItem('docName', name);
  localStorage.setItem('docSpecialty', specialty);
  localStorage.setItem('docImg', img);
  window.location.href = 'doctor-details.html';
}

window.bookDoctor = bookDoctor;
