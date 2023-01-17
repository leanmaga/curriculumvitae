const btnSwitch = document.querySelector('#switch');
const imgActive = document.querySelector('#imgAct');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    imgActive.classList.toggle('active'); 
});



    