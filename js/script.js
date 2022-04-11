window.addEventListener("load", function() {
    //Burger Menu
    const burgerButton = document.getElementById('burger-button');
    const itemsNav     = document.getElementsByClassName('items-list-nav');
    const burgerToggler = () =>  document.body.classList.toggle("burger-menu-opened");
    const closedBurger = () => document.body.classList.remove("burger-menu-opened");
    burgerButton.addEventListener('click', burgerToggler);
    for (let i = 0; i < itemsNav.length; i++) {
        itemsNav[i].addEventListener('click', closedBurger);       
    }      
    //Modal 
    const enterModalBtn = document.getElementById('ingresar-modal-btn');
    const closedModalBtn = document.getElementById('close-modal');
    const modalToggler = () =>  document.body.classList.toggle("modal-button-opened");
        enterModalBtn.addEventListener('click', modalToggler);
    closedModalBtn.addEventListener('click', modalToggler);
    



    
});