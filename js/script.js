window.addEventListener("load", function() {

    const burgerButton = document.getElementById('burger-button');

    const burgerToggler = () => {
        document.body.classList.toggle("burger-menu-opened");

    }

    burgerButton.addEventListener('click', burgerToggler);


   
    const enterModalBtn = document.getElementById('ingresar-modal-btn');
    const closedModalBtn = document.getElementById('close-modal');

    const modalToggler = () => {

        document.body.classList.toggle("modal-button-opened");
    }

    enterModalBtn.addEventListener('click', modalToggler);
    closedModalBtn.addEventListener('click', modalToggler);
    



    
});