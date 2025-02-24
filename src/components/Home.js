import React from 'react';
import Hero_section from './home/Hero_section';
import Highlights_section from './home/Highlight_section';
import Testimonial_section from './home/Testimonial_section';
import About_section from './home/About_section';
import Footer_section from './home/Footer_section';



const Home= () => {
    return (
<>
    <main>
    <Hero_section/>
    <Highlights_section/>
    <Testimonial_section/>
    <About_section/>
    </main>
    <footer>
    <Footer_section/>
    </footer>
</>
    );
};

export default Home;