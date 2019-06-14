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

function scrollFunc() {
    let currScroll = document.documentElement.scrollTop + window.innerHeight

    if (currScroll >= about.clientHeight + portfolio.clientHeight + contact.clientHeight) {
        aboutNav.className = '';
        portfolioNav.className = '';
        contactNav.className = 'active';
    } else if (currScroll >= about.clientHeight + portfolio.clientHeight) {
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
email.addEventListener("mouseover", () => email.className = 'hovered');
email.addEventListener("mousedown", copyText);
document.addEventListener("scroll", scrollFunc);

scrollFunc();