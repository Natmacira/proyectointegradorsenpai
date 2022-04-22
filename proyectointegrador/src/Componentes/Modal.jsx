const Modal = () => {
    return (
    
            <article class="modal" >
            <button id="close-modal">X</button>
            <img src="img/logo-blanco.png" alt="Logo blanco Senpai" class="logo" />
            <h3>Ingresa a tu cuenta</h3>
            <p class="p-conseguir-resultados">y empieza a conseguir resultados</p>
            <form action="" id="form-log-in">
                <label for="">Correo</label>
                <input type="email" />
                    <label for="">Contraseña</label>
                    <input type="password" />
                        <div id="div-modal-options-password">
                            <input type="checkbox" />
                            <label for="">Recordarme</label>
                            <span><a href="">Olvidé mi contraseña</a></span>
                        </div>
                        <button><a href="">Ingresar</a></button>
                        <p>Aún no tienes cuenta? <a href="">Registrarse</a></p>
                    </form>
            </article>
   
    
            )

}

            export default Modal;