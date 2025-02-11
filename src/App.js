import { useState, useEffect } from 'react'
import './style/App.css';
import './style/bootstrap.min.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Routes from './Routes'
import './style/components.css'
import Preloader from './component/Preloader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const spin = setTimeout(()=>{
      setIsLoading(false);
    },1000);

    return () => clearTimeout(spin);

    // const handleLoad = () => { setIsLoading(false); }

    // window.addEventListener('load', handleLoad);

    // return () => {
    //   window.removeEventListener('load', handleLoad);
    // }

  }, [])

  return (
    <>
    {isLoading ? <Preloader /> : (
        <div className="content">
          <Header />
      <Routes />
      <Footer />
        </div>
      )}
    </>
  );
}

export default App;
