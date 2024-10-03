import './Home.css';
import Hero from '../Main/Hero';
import Highlights from '../Main/Highlights';
import Testimonials from '../Main/Testimonials';
import About from '../About/About';
function Home () {
  return (
    <main id="home">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}

export default Home;