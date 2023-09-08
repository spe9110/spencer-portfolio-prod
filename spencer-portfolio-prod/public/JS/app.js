function navFunc() {
    document.querySelector("html").classList.toggle("open");
}
const darkModeBtn = document.querySelector("#theme-toggle"),
    iconEl = document.querySelector(".icon");
let isDark = !0;
const currentTheme = localStorage.getItem("theme"),
    pageTheme = document.querySelector("body");
function themeMode() {
    (isDark = !isDark), pageTheme.classList.toggle("dark-theme");
    let e = "light";
    pageTheme.classList.contains("dark-theme")
        ? ((e = "dark"), (iconEl.innerHTML = '<ion-icon name="sunny"></ion-icon>'), (iconEl.style.color = "#fbbf24"))
        : ((iconEl.innerHTML = '<ion-icon name="moon"></ion-icon>'), (iconEl.style.color = "white")),
        localStorage.setItem("theme", e);
}
darkModeBtn.addEventListener("click", themeMode);
let typeAnimation = new Typed(".multitext", { strings: ["I'm a Front-End Developer", "I'm a Jurist", "I'm a Youtuber", "subscribe to my channel"], loop: !0, typeSpeed: 200, backSpeed: 80, backDelay: 1500 }),
    copy = document.querySelector(".text-scroll").cloneNode(!0);
document.querySelector(".scroll").appendChild(copy);
let counter = 1;
setInterval(function () {
    (document.getElementById("radio" + counter).checked = !0), ++counter > 3 && (counter = 1);
}, 5e3);
let circlePgress = document.querySelector(".circle-progress"),
    excelSkill = document.querySelector(".excel"),
    wordPress = document.querySelector(".wordpress"),
    valueProgress = document.querySelector(".progressValue"),
    valueMsExcel = document.querySelector(".excelValue"),
    valueWordPress = document.querySelector(".wordpressValue"),
    progressValue = 0,
    progressExcel = 0,
    progressWordpress = 0,
    speed = 50,
    stopProgress = setInterval(() => {
        progressValue++,
            (valueProgress.textContent = `${progressValue}%`),
            (circlePgress.style.background = `conic-gradient(
    #0ea5e9 ${3.6 * progressValue}deg,
    #cadcff ${3.6 * progressValue}deg
)`),
            93 == progressValue && clearInterval(stopProgress);
    }, speed),
    stopExcel = setInterval(() => {
        progressExcel++,
            (valueMsExcel.textContent = `${progressExcel}%`),
            (excelSkill.style.background = `conic-gradient(
    #0ea5e9 ${3.6 * progressValue}deg,
    #cadcff ${3.6 * progressValue}deg
)`),
            55 == progressExcel && clearInterval(stopExcel);
    }, speed),
    stopWordPress = setInterval(() => {
        progressWordpress++,
            (valueWordPress.textContent = `${progressWordpress}%`),
            (wordPress.style.background = `conic-gradient(
    #0ea5e9 ${3.6 * progressValue}deg,
    #cadcff ${3.6 * progressValue}deg
)`),
            75 === progressWordpress && clearInterval(stopWordPress);
    }, speed);
const aboutInfo = document.querySelector(".about-info"),
    aboutSkill = document.querySelector("#your-skill"),
    toggleBtn = document.querySelector("#btn");
function switchRight() {
    (toggleBtn.style.left = "105px"), aboutInfo.classList.add("hide"), aboutSkill.classList.remove("hide");
}
function switchLeft() {
    (toggleBtn.style.left = "5px"), aboutInfo.classList.remove("hide"), aboutSkill.classList.add("hide");
}
const twelve = document.getElementById("twelve"),
    subscriber = document.getElementById("subscriber");
let countProject = 0,
    countSubscriber = 0,
    stopcountProjet = setInterval(() => {
        countProject++, (twelve.textContent = `${countProject}+`), 12 == countProject && clearInterval(stopcountProjet);
    }, 100),
    stopCountSubscribers = setInterval(() => {
        countSubscriber++, (subscriber.textContent = `${countSubscriber}+`), 50 == countSubscriber && clearInterval(stopCountSubscribers);
    }, 100);

// back to top
const backTop = document.querySelector(".back-top"),
    socialMediaElement = document.querySelector(".social-media");
function scrolltotop() {
    document.documentElement.scrollTop > 150 ? (backTop.style.display = "flex") : (backTop.style.display = "none");
}
function socialMedia() {
    document.documentElement.scrollTop > 150 ? (socialMediaElement.style.opacity = "0") : (socialMediaElement.style.opacity = "1");
}
window.onscroll = function () {
    scrolltotop(), socialMedia();
};


const errorFirstName = document.getElementById("firstname-error"),
    errorLastName = document.getElementById("lastname-error"),
    errorSubject = document.getElementById("subjet-error"),
    errorEmail = document.getElementById("email-error"),
    errorMsg = document.getElementById("message-error"),
    errorSubmit = document.querySelector(".fail-msg"),
    successMsg = document.querySelector(".success-msg"),
    successh3 = document.querySelector(".success-msg h3"),
    successp = document.querySelector(".success-msg p"),
    sendBtn = document.getElementById("submit-btn");
function validateFirstName() {
    return 0 === document.getElementById("firstname").value.trim().length
        ? ((errorFirstName.innerHTML = "Please, complete your firstname"), (document.getElementById("firstname").style.border = "2px solid red"), (document.getElementById("firstname").style.backgroundColor = "#fef2f2"), !1)
        : ((errorFirstName.innerHTML = ""),
          (document.getElementById("firstname").style.border = "2px solid green"),
          (errorFirstName.innerHTML = '<i class="fa-solid fa-circle-check"></i>'),
          (document.getElementById("firstname").style.backgroundColor = "#f0f9ff"),
          !0);
}
function validateLastName() {
    return 0 === document.getElementById("lastname").value.trim().length
        ? ((errorLastName.innerHTML = "Please, complete your lastname"), (document.getElementById("lastname").style.border = "2px solid red"), (document.getElementById("lastname").style.backgroundColor = "#fef2f2"), !1)
        : ((errorLastName.innerHTML = ""),
          (document.getElementById("lastname").style.border = "2px solid green"),
          (errorLastName.innerHTML = '<i class="fa-solid fa-circle-check"></i>'),
          (document.getElementById("lastname").style.backgroundColor = "#f0f9ff"),
          !0);
}
function validateSubjet() {
    return 0 === document.getElementById("subject").value.trim().length
        ? ((errorSubject.innerHTML = "Please, complete the subject"), (document.getElementById("subject").style.border = "2px solid red"), (document.getElementById("subject").style.backgroundColor = "#fef2f2"), !1)
        : ((errorSubject.innerHTML = ""),
          (document.getElementById("subject").style.border = "2px solid green"),
          (errorSubject.innerHTML = '<i class="fa-solid fa-circle-check"></i>'),
          (document.getElementById("subject").style.backgroundColor = "#f0f9ff"),
          !0);
}
const isEmail = (e) => {
    var t = e.indexOf("@");
    if (t < 1) return !1;
    var r = e.lastIndexOf(".");
    return !(r <= t + 2) && r !== e.length - 1;
};
function validateEmail() {
    let e = document.getElementById("email").value.trim();
    return 0 === e.length
        ? ((errorEmail.innerHTML = "Please, enter the valid email adress"), (document.getElementById("email").style.border = "2px solid red"), (document.getElementById("email").style.backgroundColor = "#fef2f2"), !1)
        : isEmail(e)
        ? ((errorEmail.innerHTML = ""),
          (document.getElementById("email").style.border = "2px solid green"),
          (errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>'),
          (document.getElementById("email").style.backgroundColor = "#f0f9ff"),
          !0)
        : ((errorEmail.textContent = "your email adress is not valid"), (document.getElementById("email").style.border = "2px solid red"), (document.getElementById("email").style.backgroundColor = "#fef2f2"), !1);
}
function validateMessage() {
    let e = document.getElementById("message").value.trim(),
        t = e.length <= 140;
    return 0 === e.length
        ? ((errorMsg.textContent = "The message can not be empty"), (document.getElementById("message").style.border = "2px solid red"), (document.getElementById("message").style.backgroundColor = "#fef2f2"), !1)
        : t
        ? ((errorMsg.textContent = "Your message must not exceed 140 characters."), (document.getElementById("message").style.border = "2px solid red"), (document.getElementById("message").style.backgroundColor = "#fef2f2"), !1)
        : ((errorMsg.innerHTML = ""),
          (document.getElementById("message").style.border = "2px solid green"),
          (errorMsg.innerHTML = '<i class="fa-solid fa-circle-check"></i>'),
          (document.getElementById("message").style.backgroundColor = "#f0f9ff"),
          !0);
}
function validateForm() {
    let e = document.querySelector(".fail-msg");
    if (!validateFirstName() || !validateLastName() || !validateSubjet() || !validateEmail() || !validateMessage())
        return (
            (e.style.display = "block"),
            setTimeout(function () {
                e.style.display = "none";
            }, 3e3),
            !1
        );
    {
        let t = document.getElementById("firstname").value.trim();
        return (successh3.textContent = `Thank you ${t}!`), (successp.textContent = "Your message has been successfully sent!"), successMsg.classList.add("active"), !0;
    }
}
function resetForm() {
    (document.getElementById("firstname").value = ""),
        (document.getElementById("firstname").style.border = ""),
        (document.getElementById("firstname").style.backgroundColor = "#f0f9ff"),
        (document.getElementById("lastname").value = ""),
        (document.getElementById("lastname").style.border = ""),
        (document.getElementById("lastname").style.backgroundColor = "#f0f9ff"),
        (document.getElementById("subject").value = ""),
        (document.getElementById("subject").style.border = ""),
        (document.getElementById("subject").style.backgroundColor = "#f0f9ff"),
        (document.getElementById("email").value = ""),
        (document.getElementById("email").style.border = ""),
        (document.getElementById("email").style.backgroundColor = "#f0f9ff"),
        (document.getElementById("message").value = ""),
        (document.getElementById("message").style.border = ""),
        (document.getElementById("message").style.backgroundColor = "#f0f9ff"),
        (errorFirstName.innerHTML = ""),
        (errorLastName.innerHTML = ""),
        (errorSubject.innerHTML = ""),
        (errorEmail.innerHTML = ""),
        (errorMsg.innerHTML = "");
}
const exitBtn = document.getElementById("exit-btn");
exitBtn.addEventListener("click", (e) => {
    e.preventDefault(), (successMsg.style.display = "none"), resetForm();
}),
    sendBtn.addEventListener("click", (e) => {
        e.preventDefault(), validateForm();
        var t = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            subject: document.getElementById("subject").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };
        emailjs
            .send("service_oabfyca", "template_l3dhnim", t)
            .then((e) => {
                console.log(e);
            })
            .catch((e) => console.log(e));
    });

// ROUTER
const anchorLinks = document.querySelectorAll('.navbar a[href^="#"]');
const menuToggle = document.querySelector('.navbar');
anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 768) {
                document.querySelector("html").classList.remove("open");
            }
        }
    });
});