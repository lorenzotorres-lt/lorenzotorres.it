//Hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links"); // Seleziona l'elemento del menu con la classe .menu-links
  const icon = document.querySelector(".hamburger-icon"); // Seleziona l'icona hamburger
  menu.classList.toggle("open"); // Aggiunge o rimuove la classe 'open' per mostrare/nascondere il menu
  icon.classList.toggle("open"); // Aggiunge o rimuove la classe 'open' sull'icona per modificarne l'aspetto
}

//Light / Dark mode
function toggleTheme() {
  //Recupero variabili da HTML
  const themeLink = document.getElementById('theme-style');
  const themeIcon = document.getElementById('theme-icon');
  const arrowIcon = document.getElementById('arrow-icon');
  const arrowIcon2 = document.getElementById('arrow-icon2');
  const arrowIcon3 = document.getElementById('arrow-icon3');
  const linkedinIcon = document.getElementById('linkedin-icon');
  const linkedinIcon1 = document.getElementById('linkedin-icon1');
  const mailIcon = document.getElementById('mail-icon');
  const gitIcon = document.getElementById('git-icon');
  const currentTheme = themeLink.getAttribute('href');

  //Switch fra stili in base alla modalità chiamata
  if (currentTheme === './assets/style/style.css') {
    themeLink.setAttribute('href', './assets/style/style-dark.css');
    themeIcon.setAttribute('src', './assets/img/light-mode.png'); 
    arrowIcon.setAttribute('src', './assets/img/arrow_light.png'); 
    arrowIcon2.setAttribute('src', './assets/img/arrow_light.png'); 
    arrowIcon3.setAttribute('src', './assets/img/arrow_light.png'); 
    linkedinIcon.setAttribute('src', './assets/img/linkedin.png'); 
    linkedinIcon1.setAttribute('src', './assets/img/linkedin.png'); 
    mailIcon.setAttribute('src', './assets/img/mail_w.png'); 
    gitIcon.setAttribute('src', './assets/img/github_w.png'); 
    themeIcon.setAttribute('alt', 'Passa al tema chiaro');
  } else {
    themeLink.setAttribute('href', './assets/style/style.css');
    themeIcon.setAttribute('src', './assets/img/darkmode.png');
    arrowIcon.setAttribute('src', './assets/img/arrow.png');
    arrowIcon2.setAttribute('src', './assets/img/arrow.png');
    arrowIcon3.setAttribute('src', './assets/img/arrow.png');
    linkedinIcon.setAttribute('src', './assets/img/linkedin_bw.png'); 
    linkedinIcon1.setAttribute('src', './assets/img/linkedin_bw.png'); 
    mailIcon.setAttribute('src', './assets/img/mail.png'); 
    gitIcon.setAttribute('src', './assets/img/github.png'); 
    themeIcon.setAttribute('alt', 'Passa al tema scuro');
  }
}