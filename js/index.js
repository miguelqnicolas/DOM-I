const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
    "addition": "I was added!"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// example: update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav bar

const navLink1 = document.querySelector("nav a:nth-child(1)");
navLink1.innerHTML = siteContent["nav"]["nav-item-1"];
navLink1.style.color = "green";

const navLink2 = document.querySelector("nav a:nth-child(2)");
navLink2.innerHTML = siteContent["nav"]["nav-item-2"];
navLink2.style.color = "green";

const navLink3 = document.querySelector("nav a:nth-child(3)");
navLink3.innerHTML = siteContent["nav"]["nav-item-3"];
navLink3.style.color = "green";

const navLink4 = document.querySelector("nav a:nth-child(4)");
navLink4.innerHTML = siteContent["nav"]["nav-item-4"];
navLink4.style.color = "green";

const navLink5 = document.querySelector("nav a:nth-child(5)");
navLink5.innerHTML = siteContent["nav"]["nav-item-5"];
navLink5.style.color = "green";

const navLink6 = document.querySelector("nav a:nth-child(6)");
navLink6.innerHTML = siteContent["nav"]["nav-item-6"];
navLink6.style.color = "green";

const appendChild = document.querySelector("nav a");
appendChild.appendChild(siteContent["nav"]["addition"]);

// first section

// difference between innerhtml and textcontent?

//centered cta

const cta = document.querySelector(".cta");
cta.display = 'flex';
cta.style.justifyContent = 'center';

// howcome first one works but other does not

const firstSectionText = document.querySelector(".cta-text h1");
firstSectionText.innerHTML = siteContent["cta"]["h1"];

const firstSectionButton = document.querySelector(".cta-text button");
firstSectionButton.innerHTML = siteContent["cta"]["button"];

const firstSectionImage = document.querySelector("#cta-img");
firstSectionImage.setAttribute("src", siteContent["cta"]["img-src"]);

// second section

const secondSectionImage = document.querySelector("#middle-img");
secondSectionImage.src = siteContent["main-content"]["middle-img-src"];

const secondSectionSubtitles = document.querySelectorAll(".text-content h4");
secondSectionSubtitles[0].textContent = siteContent["main-content"]["features-h4"];
secondSectionSubtitles[1].textContent = siteContent["main-content"]["about-h4"];
secondSectionSubtitles[2].textContent = siteContent["main-content"]["services-h4"];
secondSectionSubtitles[3].textContent = siteContent["main-content"]["product-h4"];
secondSectionSubtitles[4].textContent = siteContent["main-content"]["vision-h4"];

const secondSectionParagraphs = document.querySelectorAll(".text-content p");
secondSectionParagraphs[0].textContent = siteContent["main-content"]["features-content"];
secondSectionParagraphs[1].textContent = siteContent["main-content"]["about-content"];
secondSectionParagraphs[2].textContent = siteContent["main-content"]["services-content"];
secondSectionParagraphs[3].textContent = siteContent["main-content"]["product-content"];
secondSectionParagraphs[4].textContent = siteContent["main-content"]["vision-content"];

// footer

const footerSubtitle = document.querySelector(".contact h4");
footerSubtitle.textContent = siteContent["contact"]["contact-h4"];

const footerParagraphs = document.querySelectorAll(".contact p");
footerParagraphs[0].innerHTML = siteContent["contact"]["address"];
footerParagraphs[1].textContent = siteContent["contact"]["phone"];
footerParagraphs[2].textContent = siteContent["contact"]["email"];

const footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];