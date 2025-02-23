import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
function App() {
  return (
    <>
    <div className='nav'>
    <Header/>
    <Nav/>
    </div>
    <main>
    <Main/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
