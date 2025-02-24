import React from 'react';
import Hero_section from './Hero_section';
import Highlights_section from './Highlight_section';
import Testimonial_section from './Testimonial_section';
import About_section from './About_section';
import Footer_section from './Footer_section';



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