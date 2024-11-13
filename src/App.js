import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import Front from '../src/components/Front';
import Middle from './components/Middle';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Front/>
      <Middle/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Footer/>
    </>
  )
}

export default App;
