let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function() {
  let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("hidden");
  } else {
    document.getElementById("navbar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
});


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('myModal');
  const closeModal = document.querySelector('.close');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = 'flex';
    }
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});