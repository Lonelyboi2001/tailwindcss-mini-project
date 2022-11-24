import { useEffect, useState } from 'react';
import './app.css'
import Card from './components/Email Subscribe/Card';
import ImageGallery from './components/Image Gallery/Gallery';
import Navbar from './components/NavBar/Navbar';
import Pricing from './components/Pricing Card/Pricing';
import Product from './components/Product Modal/Product';
import TestGrid from './components/Testimonial/Testimonial';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if(windowSize.width < 768){
      setMobile(true)
    }
    else {
      setMobile(false);
    }
  },[windowSize]);
  
  return (
    <div>
      <section className='px-4 py-8 font-sora text-13 bg-zinc-700'>
      <Navbar isMobile={isMobile} />
      <Card />
    </section>
    <section className='px-4 py-8 bg-slate-800'>
    <Pricing />
    </section>
    <section className="px-4 py-8 bg-white">
    <Product />
    </section>
    <section>
      <ImageGallery />
    </section>
    <section>
      <TestGrid />
    </section>
  </div>
  );
}

export default App;
