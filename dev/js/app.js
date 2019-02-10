const allLinks = document.getElementsByClassName('nav-buttons');
const openPage = (which, what) => {
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove('active');
    }
    which.classList.add('active');
    const wrapper = document.getElementsByTagName('wrapper')[0];
    what == 'memories' ? wrapper.style.transform = 'translateX(0)' : what == 'main' ? wrapper.style.transform = 'translateX(-25%)' : what == 'activity' ? wrapper.style.transform = 'translateX(-50%)' : wrapper.style.transform = 'translateX(-75%)';
}

const scrollContent = (parent, scroll, to) => {
    const inc = 150;
    const content = document.getElementsByClassName(parent)[0];
    const activity = document.getElementsByClassName(scroll)[0];
    const margin = parseInt(content.style.marginTop);
    if (to == 'up') {
        if (margin > -inc) {
            content.style.marginTop = '0px';
        } else {
            const val = JSON.stringify(margin + inc);
            content.style.marginTop = val + 'px';
        }
    } else {
        if (margin <= activity.offsetHeight - content.offsetHeight + inc) {
            content.style.marginTop = activity.offsetHeight - content.offsetHeight + 'px';
        } else {
            const val = JSON.stringify(margin - inc);
            content.style.marginTop = val + 'px';
        }
    }
}
