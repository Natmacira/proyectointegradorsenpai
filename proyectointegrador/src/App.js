
import './style.min.css';
import Header from './Componentes/Header';
import Main from './Componentes/Main';
import Footer from './Componentes/Footer';
import API from './Componentes/API';
import './index';
import Modal from './Componentes/Modal';
import TotalCounter from './Componentes/TotalCounter';

function App() {
  return (
    <>
   
    <Header />
    <Main />
    <div className="total-counter">
    <TotalCounter />
    <API />
    </div>
    <Footer />
    <Modal /> 
    </>
  );
}

export default App;
