window.addEventListener("load", function() {

    const burgerButton = document.getElementById('burger-button');

    const burgerToggler = () => {
        document.body.classList.toggle("burger-menu-opened");

    }

    burgerButton.addEventListener('click', burgerToggler);


   






    
});