

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


// function display_mobile_menu() {

//     var mobile_menu = document.getElementById("Mobile_menu");
//     // console.log(mobile_menu);

//     if(mobile_menu.hasAttribute("data-nav-menu-open")){
//         mobile_menu.removeAttribute("data-nav-menu-open");
//     }else{
//         mobile_menu.setAttribute("data-nav-menu-open", "1");
//     }
// }


var menu_button = document.getElementById("menu_button");

var language_button = document.getElementById("Language_Button");
var Display_language = document.getElementById("Display_language");

var product_button = document.getElementById("Product_Button");

var lanugage_dropdown = document.getElementsByClassName("locale-switcher")[0];
var dropdown = document.getElementsByClassName("dropdown-list")[0];
// menu_button.addEventListener("click", display_mobile_menu);

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// document.getElementById("w-dropdown-toggle-0").addEventListener("click", display_toggle_menu_mobile);

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {

    console.log(event.target);
    var mobile_menu = document.getElementById("Mobile_menu");

    if ((event.target === menu_button || menu_button.contains(event.target)) && !mobile_menu.hasAttribute("data-nav-menu-open")) {
        mobile_menu.setAttribute("data-nav-menu-open", "1");
    }else{
        mobile_menu.removeAttribute("data-nav-menu-open");
    }

    if ((event.target === language_button || language_button.contains(event.target)) && !lanugage_dropdown.classList.contains("w--open")) {
        lanugage_dropdown.classList.add("w--open");
    }else{
        lanugage_dropdown.classList.remove("w--open");
    }

    if ((event.target === product_button || product_button.contains(event.target)) && !dropdown.classList.contains("w--open")) {
        dropdown.classList.add("w--open");
    }else{
        dropdown.classList.remove("w--open");
    }

  })

//   function display_toggle_menu() {

//     // console.log(dropdown.classList);
    
//     if (dropdown.classList.contains("w--open")) {
//         dropdown.classList.remove("w--open");
//     }else{
//         dropdown.classList.add("w--open");
//     }
//   }

// function display_language_menu(){
    
//     console.log(lanugage_dropdown)

//     // for(element in lanugage_dropdown){
//         if (lanugage_dropdown.classList.contains("w--open")) {
//             lanugage_dropdown.classList.remove("w--open");
//         }else{
//             lanugage_dropdown.classList.add("w--open");
//         }
//     // }
// }




// Functions to switch language
const defaultLocale = "fr";
// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

// document.addEventListener("DOMContentLoaded", () => {
    
//     // bindLocaleSwitcher(defaultLocale);
//   });

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
    // console.log(key)
    if(locale !== "en"){
        var translation = translations[key];
    }else{
        var translation = key;
    }
    element.innerText = translation;
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    setLocale(defaultLocale);
    if(document.getElementById('qpz')){
        katex.render("\\displaystyle q_{p(z)} = \\left[ 1 + 7 \\cdot I_{v(z)}\\right] \\cdot \\frac{1}{2} \\cdot \\rho \\cdot v_{m(z)}^{2} = c_{e(z)} \\cdot q_{b} ", document.getElementById('qpz'), {
        throwOnError: false
        });
    }
    if(document.getElementById('ce')){
        katex.render("\\displaystyle c_{e(z)} = \\frac{q_{p(z)}}{q_{b}}", document.getElementById('ce'), {
        throwOnError: false
        });
    }
    if(document.getElementById('qb')){
        katex.render("\\displaystyle q_{b} = \\frac{1}{2} \\cdot \\rho \\cdot v_{b}^{2}", document.getElementById('qb'), {
            throwOnError: false
        });
    }
    if(document.getElementById('wind_velocity')){
        katex.render("\\displaystyle v = 3.6 \\cdot \\sqrt \\frac{q}{0.5 \\cdot \\rho} ", document.getElementById('wind_velocity'), {
            throwOnError: false
        });
    }
    if(document.getElementById('sk100')){
        katex.render("\\displaystyle s_{k} = s_{k,0}", document.getElementById('sk100'), {
            throwOnError: false
        }); 
    }
    if(document.getElementById('sk700')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 0.007 \\cdot \\frac{A - 100}{6}", document.getElementById('sk700'), {
            throwOnError: false
        });
    }
    if(document.getElementById('sn')){
        katex.render("\\displaystyle s_{n} = s_{k} \\cdot \\left[ \\frac{ 1 - V \\cdot \\frac{\\sqrt 6 }{\\pi} \\cdot [\\ln(-\\ln(1-P_{n})) + 0.57722] } {(1 + 2.5923 \\cdot V)} \\right]", document.getElementById('sn'), {
            throwOnError: false
        });
    }
    if(document.getElementById('p')){
        katex.render("\\displaystyle P_{n} = \\frac{1}{dwl}", document.getElementById('p'), {
            throwOnError: false
        });
    }
    if(document.getElementById('V')){
        katex.render("\\displaystyle V = \\frac{1.01 + 0.00248 \\cdot A}{1 + 0.00614 \\cdot A}", document.getElementById('V'), {
            throwOnError: false
        });
    }
    if(document.getElementById('vb')){
        katex.render("\\displaystyle v_{b} = c_{prob} \\cdot c_{dir} \\cdot v_{b,0} ", document.getElementById('vb'), {
            throwOnError: false
        });
    }


    if( document.getElementById('sk200')){
        katex.render("\\displaystyle s_{k} = s_{k,0}", document.getElementById('sk200'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk500_1')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + \\frac{A}{1000} - 0.2", document.getElementById('sk500_1'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk500_2')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 1.5 \\cdot \\frac{A}{1000} - 0.3", document.getElementById('sk500_2'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk1000_1')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 1.5 \\cdot \\frac{A}{1000} - 0.45", document.getElementById('sk1000_1'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk1000_2')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 3.5 \\cdot \\frac{A}{1000} - 1.3", document.getElementById('sk1000_2'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk2000_1')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 3.5 \\cdot \\frac{A}{1000} - 2.45", document.getElementById('sk2000_1'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sk2000_2')){
        katex.render("\\displaystyle s_{k} = s_{k,0} + 7 \\cdot \\frac{A}{1000} - 4.8", document.getElementById('sk2000_2'), {
            throwOnError: false
        });
    }

    if( document.getElementById('sn')){
        katex.render("\\displaystyle s_{n} = s_{k} \\cdot \\left[ \\frac{ 1 - V \\cdot \\frac{\\sqrt 6}{\\pi} \\cdot [\\ln(-\\ln(1-P_{n})) + 0.57722] } {(1 + 2.5923 \\cdot V)} \\right]", document.getElementById('sn'), {
            throwOnError: false
        });
    }

        // katex.render("\\displaystyle P_{n} = \\frac{1}{dwl}", document.getElementById('p'), {
        //     throwOnError: false
        // });

    if(document.getElementById('sk1M')){
        katex.render("\\displaystyle s_{k} = 1.35 \\cdot \\left[ 1 + \\left( \\frac{a_{s}}{602} \\right)^{2} \\right]", document.getElementById('sk1M'), {
            throwOnError: false
        });
    }

    if(document.getElementById('sk1A')){
        katex.render("\\displaystyle s_{k} = 1.39 \\cdot \\left[ 1 + \\left( \\frac{a_{s}}{728} \\right)^{2} \\right]", document.getElementById('sk1A'), {
            throwOnError: false
        });
    }

    if(document.getElementById('sk2')){
        katex.render("\\displaystyle s_{k} = 0.85 \\cdot \\left[ 1 + \\left( \\frac{a_{s}}{481} \\right)^{2} \\right]", document.getElementById('sk2'), {
            throwOnError: false
        });
    }

    if(document.getElementById('sk3')){
        katex.render("\\displaystyle s_{k} = 0.51 \\cdot \\left[ 1 + \\left( \\frac{a_{s}}{481} \\right)^{2} \\right]", document.getElementById('sk3'), {
            throwOnError: false
        });
    }

  });
