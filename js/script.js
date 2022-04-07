window.addEventListener("load", function() {

    const burgerButton = document.getElementById('burger-button');

    const burgerToggler = () => {
        document.body.classList.toggle("burger-menu-opened");

    }

    burgerButton.addEventListener('click', burgerToggler);


   
    const ingresarModalBtn = document.getElementById('ingresar-modal-btn');

    const modalToggler = () => {

        document.body.classList.toggle("modal-button-opened");
    }

    ingresarModalBtn.addEventListener('click', modalToggler);

    



    
});