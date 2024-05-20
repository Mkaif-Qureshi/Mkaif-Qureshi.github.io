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

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  window.addEventListener("scroll", function() {
    timelineItems.forEach(item => {
      if (isElementInViewport(item)) {
        item.querySelector(".timeline-content").classList.add("active");
      }
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.querySelector('.resume-modal .resume-close');
  var modal = document.getElementById('resumeModal');
  var body = document.body;

  openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
      body.style.overflow = 'hidden'; // Prevent scrolling of the background screen
  });

  closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      body.style.overflow = 'auto'; // Enable scrolling of the background screen
  });

  window.addEventListener('click', function (e) {
      if (e.target === modal) {
          modal.style.display = 'none';
          body.style.overflow = 'auto'; // Enable scrolling of the background screen
      }
  });
});


  
