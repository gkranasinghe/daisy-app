import logo from './logo.svg';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Photo from './components/Photo/Photo';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>

    <Intro />
    <Photo/>
    </>
  );
}

export default App;
