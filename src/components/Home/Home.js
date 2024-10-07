import React, { Suspense } from 'react';
import './Home.css';
const Hero = React.lazy(() => import('../Main/Hero'));
const Highlights = React.lazy(() => import('../Main/Highlights'));
const Testimonials = React.lazy(() => import('../Main/Testimonials'));
const About = React.lazy(() => import('../About/About'));
function Home () {
  return (
    <main id="home">
      <Suspense>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </Suspense>
    </main>
  );
}

export default Home;