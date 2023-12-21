

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}


function display_mobile_menu() {

    var mobile_menu = document.getElementById("Mobile_menu");
    // console.log(mobile_menu);

    if(mobile_menu.hasAttribute("data-nav-menu-open")){
        mobile_menu.removeAttribute("data-nav-menu-open");
    }else{
        mobile_menu.setAttribute("data-nav-menu-open", "1");
    }
}


var menu_button = document.getElementById("menu_button");

menu_button.addEventListener("click", display_mobile_menu);

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// document.getElementById("w-dropdown-toggle-0").addEventListener("click", display_toggle_menu_mobile);

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click', function(event) {

//     console.log(event.target);

//     if (event.target != menu_button) {
//         var mobile_menu = document.getElementById("Mobile_menu");
//         mobile_menu.removeAttribute("data-nav-menu-open");
//     }
//   })



// function display_toggle_menu_mobile() {
//     var dropdown = document.getElementById("w-dropdown-list-0");

//     // console.log(dropdown.classList);
    
//     if (dropdown.classList.contains("w--open")) {
//         dropdown.classList.remove("w--open");
//     }else{
//         dropdown.classList.add("w--open");
//     }
//   }


function display_toggle_menu() {
    var dropdown = document.getElementsByClassName("dropdown-list")[0];

    // console.log(dropdown.classList);
    
    if (dropdown.classList.contains("w--open")) {
        dropdown.classList.remove("w--open");
    }else{
        dropdown.classList.add("w--open");
    }
  }

function display_language_menu(){
    var lanugage_dropdown = document.getElementsByClassName("locale-switcher");
    console.log(lanugage_dropdown)

    for(element in lanugage_dropdown){
        if (lanugage_dropdown[element].classList.contains("w--open")) {
            lanugage_dropdown[element].classList.remove("w--open");
        }else{
            lanugage_dropdown[element].classList.add("w--open");
        }
    }
}

// Functions to switch language
const defaultLocale = "fr";
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    setLocale(defaultLocale);
    // bindLocaleSwitcher(defaultLocale);
  });

const setLocale = async (newLocale) => {
    const switcher = document.getElementById("Display_language");
    switcher.setAttribute("src", `images/flag_${newLocale}.svg`)
    if (newLocale === locale) return;
    locale = newLocale;
    console.log(newLocale)
    if(newLocale !== "en"){
        const newTranslations = await fetchTranslationsFor(newLocale);
        translations = newTranslations;
    }
    translatePage();
}

const fetchTranslationsFor = async (newLocale) => {
    const response = await fetch(`i18n/${newLocale}.json`);
    return await response.json();
  }

const translatePage = () => {
    document
      .querySelectorAll("[data-i18n]")
      .forEach(translateElement);
}

const translateElement = (element) => {
    const key = element.getAttribute("data-i18n");
    console.log(key)
    if(locale !== "en"){
        var translation = translations[key];
    }else{
        var translation = key;
    }
    element.innerText = translation;
}
