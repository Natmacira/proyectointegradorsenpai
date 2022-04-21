const Header = () => {


    return(
        <header>
        <div class="container">
            <button id="burger-button">
                <div class="burger-div-button"></div>
                <div class="burger-div-button"></div>
                <div class="burger-div-button"></div>
            </button>
            <nav id="nav-home">
                <a id="link-logo-header">
                    <img src={'img/logo-verde.png'} alt="Logo verde Senpai" class="logo"/>
                    <span>Flex</span>
                </a>
                <ul id="list-itmes-nav-header">
                    <li class="items-list-nav"><a href="#section-header" class="nav-item">Producto</a></li>
                    <li class="items-list-nav"><a href="#section-caracteristicas" class="nav-item">Características</a>
                    </li>
                    <li class="items-list-nav"><a href="#section-precios" class="nav-item">Precios</a></li>
                </ul>
                <ul id="list-btns-nav-header">
                    <li class="btns-list-nav one"><button id="ingresar-modal-btn">Ingresar</button></li>
                    <li class="btns-list-nav two"><button id="boton-registrarse-nav">Registrarse</button></li>
                </ul>
            </nav>
            <section id="section-header">
                <article>
                    <h5 id="nuevo-title">Nuevo</h5>
                    <h1 class="general-titles-and-text">La plataforma para las empresas del futuro</h1>
                    <p class="general-titles-and-text">Productos pensados para los negocios del próximo siglo</p>
                    <ul id="list-btns-section-header">
                        <li><button class="btn-demo">Solicitar demo</button></li>
                        <li><button class="btn-registrarse">Registrarse</button></li>
                    </ul>
                </article>
                <figure id="image-header">
                    <img src="img/header.jpg"
                        alt="foto de las oficinas, mesas grandes con ordenadores y gente trabajando."/>
                </figure>
            </section>
        </div>
    </header>
    )
}

export default Header;