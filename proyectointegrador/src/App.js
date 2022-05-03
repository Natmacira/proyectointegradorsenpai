
import './style.min.css';
import Header from './Componentes/Header';
import Main from './Componentes/Main';
import Counter from './Componentes/Counter';
import Footer from './Componentes/Footer';

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
    </div>
    <Footer />
    <Modal /> 
    </>
  );
}

export default App;
