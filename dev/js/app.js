const openPage = what => {
    const wrapper = document.getElementsByTagName('wrapper')[0];
    what == 'memories' ? wrapper.style.transform = 'translateX(0)': what == 'main' ? wrapper.style.transform = 'translateX(-25%)': what == 'activity' ? wrapper.style.transform = 'translateX(-50%)' : wrapper.style.transform = 'translateX(-75%)';
}

const scroll = (to) => {
    const activityContent = document.getElementsByClassName('activity__content')[0];
    if(to == 'up') {
            
    }
}