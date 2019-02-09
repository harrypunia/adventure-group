const openPage = what => {
    const wrapper = document.getElementsByTagName('wrapper')[0];
    what == 'main' ? wrapper.style.transform = 'translateX(0)': what == 'adventure' ? wrapper.style.transform = 'translateX(-25%)': what == 'activity' ? wrapper.style.transform = 'translateX(-50%)' : wrapper.style.transform = 'translateX(-75%)';
}