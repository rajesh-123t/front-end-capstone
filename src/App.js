import './App.css';
import Nav_section from './components/Nav_section';
import Footer_section from './components/Footer_section';
import Main from './components/Main';
function App() {
  return (
    <>
    <header>
    <Nav_section/>
    </header>
    <main>
    <Main/>
    </main>
    <footer>
    <Footer_section/>
    </footer>
    </>
  );
}

export default App;
