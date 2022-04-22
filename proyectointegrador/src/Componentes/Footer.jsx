import logo from '../img/logo-verde.png';

const Footer = () => {

    return (
        <footer>
        <div class="container">
            <a id="link-logo-footer">
                <img src={logo} alt="Logo verde Senpai" class="logo"/>
                <span>Flex</span>
            </a>
            <ul>
                <li><a href="">Producto</a></li>
                <li><a href="">Funcionalidades</a></li>
                <li><a href="">Precios</a></li>
                <li><a href="">Recursos</a></li>
                <li><a href="">Carreras</a></li>
                <li> <a href="">Ayuda</a></li>
                <li><a href="">Privacidad</a></li>
            </ul>
            <p id="copy-rights">© 2022 Flex. Un producto ficticio de Senpai</p>
        </div>
    </footer>
    )

}

export default Footer;