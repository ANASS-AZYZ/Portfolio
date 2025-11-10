let theme = document.getElementById("theme");
let body = document.body;

theme.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        theme.innerHTML= '<i class="bx bxs-moon"></i>';
    }else{
        theme.innerHTML = '<i class="bx bxs-sun"></i>'
    }
})

const dynamicText = document.querySelector(".dev");
const words = ["FULL STACK Developer", "Designer", "PHP DEVELOPER", "Student"];

let wordIndex = 0;   
let charIndex = 0;   
let isDeleting = false; 

function typeEffect() {
  const currentWord = words[wordIndex];
  let speed = 200;

  if (isDeleting) {
    speed = 100; 
    dynamicText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--; 
    if (charIndex === 0) {
      isDeleting = false; 
      wordIndex++; 
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  } else {
    speed = 200; 
    dynamicText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++; 
    if (charIndex === currentWord.length) {
      speed = 2000; 
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar ul');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
    button.onclick = () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filterValue = button.getAttribute('data-filter');
        skillCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all') {
                card.style.display = 'block'; 
            } else if (filterValue === cardCategory) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    };
});
var form = document.getElementById("contact-form");
var modal = document.getElementById("status-modal");
var modalContent = document.querySelector(".modal-content");
var modalMessage = document.getElementById("modal-message");
var modalIcon = document.getElementById("modal-icon");
var closeModalBtn = document.getElementById("modal-close-btn");
async function handleSubmit(event) {
    event.preventDefault();
    
    var data = new FormData(event.target);

    modalMessage.innerHTML = "Sending...";
    modalIcon.className = 'bx bx-loader-alt bx-spin';
    modalContent.classList.remove('success', 'error');
    modal.style.display = 'flex';

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            modalMessage.innerHTML = "Your message has been sent!";
            modalIcon.className = 'bx bx-check-circle';
            modalContent.classList.add('success');
            modalContent.classList.remove('error');
            form.reset();
        } else {
            modalMessage.innerHTML = "Oops! There was a problem.";
            modalIcon.className = 'bx bx-error-circle';
            modalContent.classList.add('error');
            modalContent.classList.remove('success');
        }
    }).catch(error => {
        modalMessage.innerHTML = "Oops! There was a problem.";
        modalIcon.className = 'bx bx-error-circle';
        modalContent.classList.add('error');
        modalContent.classList.remove('success');
    });
}

form.addEventListener("submit", handleSubmit);

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
}

modal.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
  