'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalTime = document.querySelector("[data-modal-time]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalTime.innerHTML = this.querySelector("[data-testimonials-time]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle function for the custom select
// const elementToggleFunc = function (element) {
//     element.classList.toggle("active");
// };

// Event listener for the select button
select.addEventListener("click", function () {
    elementToggleFunc(this);
});

// Add event listener to all select items
for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
    filterItems.forEach(item => {
        if (selectedValue === "tous" || selectedValue === item.dataset.category.toLowerCase()) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};

// Add event listener to all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// Sélection des éléments de navigation et des pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Fonction pour activer une page et un lien de navigation
function activatePage(pageName) {
  // Activer la page correspondante
  pages.forEach(page => {
    if (page.dataset.page === pageName) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  // Activer le lien de navigation correspondant
  navigationLinks.forEach(link => {
    if (link.textContent.trim().toLowerCase() === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Ajout de l'événement click à chaque lien de navigation
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const pageName = this.textContent.trim().toLowerCase();
    activatePage(pageName);
    window.scrollTo(0, 0);
  });
});

// Activer la première page par défaut (par exemple, "À-propos")
document.addEventListener("DOMContentLoaded", () => {
  activatePage("à-propos");
});

//contact email config
function sendWhatsApp(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  const form = event.target;
  const fullname = form.fullname.value;
  const email = form.email.value;
  const message = form.message.value;

  // Créer le message
  const whatsappMessage = `Nom: ${fullname}%0A\nEmail: ${email}%0A\nMessage: ${message}`;
  const phoneNumber = '681711540'; // Remplacez par votre numéro de téléphone

  // Créer le lien WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Ouvrir le lien WhatsApp
  window.open(whatsappLink, '_blank');
};
