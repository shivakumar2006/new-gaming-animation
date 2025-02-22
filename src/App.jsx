import React, { Suspense } from 'react';

const About = React.lazy(() => import("./components/About"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Features = React.lazy(() => import("./components/Features"));
const Story = React.lazy(() => import("./components/Story"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => { //// bg-zinc-600
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <main className='relative min-h-screen w-screen overflow-x-hidden'> 
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
    </Suspense>
  )
}

export default App;