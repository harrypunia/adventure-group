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


const activities = {
    1: {
        topic: 'The old post office',
        des: 'lorem ipsum is cliche'
    },
    2: {
        topic: 'Lions Valley',
        des: 'lorem ipsum is cliche'
    },
    3: {
        topic: 'Memorial Park',
        des: 'lorem ipsum is cliche'
    }
}
const viewActivity = document.getElementsByClassName('main__activity')[0];
const expandActivity = which => {
    if (viewActivity.hasAttribute('open')) {
        viewActivity.getElementsByTagName('p')[0].innerHTML = '';
        viewActivity.getElementsByTagName('h1')[0].innerHTML = 'Activity';
        viewActivity.removeAttribute('open')
    } else {
        viewActivity.setAttribute('open', '');
        viewActivity.getElementsByTagName('p')[0].innerHTML = activities[which].des;
        viewActivity.getElementsByTagName('h1')[0].innerHTML = activities[which].topic;
    }
}

const memoryAdventure = document.getElementsByClassName('memories__content-2')[0];
const memoryList = document.getElementsByClassName('memories__content')[0];
const memoryBtns = document.getElementsByClassName('memories__button');
const toggleMemoriesTo = (which, to) => {
    for(let i = 0; i < memoryBtns.length; i++) {
        memoryBtns[i].removeAttribute('open');
    }
    which.setAttribute('open', '');
    to === 'adventures' ? (memoryAdventure.style.display = 'block', memoryList.style.display = 'none') : (memoryAdventure.style.display = 'none', memoryList.style.display = 'block'); 
}