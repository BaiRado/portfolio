const mainNav = document.querySelector(".main-navigation");
const navMenuBtn = document.getElementById("nav-menu-button");
const olderProjectsBtn = document.getElementById("olderProjectsBtn");

function copyText(e) {
    //if not left click return
    if (e.which != 1) return;

    const areaEl = document.createElement('textarea');

    // create textarea
    document.body.appendChild(areaEl);
    // put current element text inside textarea
    areaEl.value = this.textContent;
    // select text 
    areaEl.select();
    // copy text
    document.execCommand('copy');
    // remove textarea
    document.body.removeChild(areaEl);
    // create tooltip class to display text
    this.className = 'copied';
}

function toggleOlderProjects() {
    portfolioContentOld.classList.toggle("hidden");
    if (portfolioContentOld.classList.contains("hidden")) {
        olderProjectsBtn.innerHTML = 'Show older projects<i class="arrow down"></i>'
    } else {
        olderProjectsBtn.innerHTML = 'Hide older projects<i class="arrow up"></i>'
    }
}

function scrollFunc() {
    let scrollPos = document.documentElement.scrollTop

    if (scrollPos + window.innerHeight >= about.clientHeight + portfolio.clientHeight + contact.clientHeight) {
        aboutNav.className = '';
        portfolioNav.className = '';
        contactNav.className = 'active';
    } else if (scrollPos + 100 >= about.clientHeight) {
        aboutNav.className = '';
        portfolioNav.className = 'active';
        contactNav.className = '';
    } else {
        aboutNav.className = 'active';
        portfolioNav.className = '';
        contactNav.className = '';
    }
}

email.addEventListener("mouseleave", () => email.className = '');
email.addEventListener("mousedown", copyText);
olderProjectsBtn.addEventListener("click", toggleOlderProjects);
document.addEventListener("scroll", scrollFunc);
navMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mainNav.classList.toggle("extended")
});

scrollFunc();