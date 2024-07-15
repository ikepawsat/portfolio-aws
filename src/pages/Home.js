import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import HomeIcon from '@mui/icons-material/Person';
import pfp from '../assets/bc-logo.png'; // Ensure this path is correct
import '../styles/Home.css';

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const quoteElement = quoteRef.current;
    if (!quoteElement) return;

    const handleScroll = () => {
      const top = quoteElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.75) {
        setFadeIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/x-icon" href={pfp} /> 
        <title>Ike Pawsat</title>
      </Helmet>

      <div className="parallax1"></div> {/* First Parallax Section */}

      <div className="content-wrapper">
        <div className="content font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
          <p className="mb-6 text-xl md:text-2xl uppercase">This is a simple parallax effect created by setting the background attachment property to a fixed position. This technique is not meant for non-decorative images, videos, etc. as those require additional HTML and CSS to work properly.</p>
          <p className="mb-4 text-lg">Quae commodi reiciendis dignissimos. Rerum molestiae hic dolores assumenda dolor! Corrupti reiciendis maxime fuga, recusandae obcaecati officia cum temporibus dicta quibusdam praesentium, magni, cumque aperiam iusto sequi illum molestiae non.</p>
          <p className="mb-4 text-lg">In excepturi repellendus eum, qui corrupti rerum perferendis harum adipisci voluptate? Nihil, quidem deleniti libero officia dicta vel asperiores velit molestiae blanditiis, dolore voluptatibus excepturi laudantium at veniam illo. Dolor!</p>
        </div>
      </div>

      <div className="parallax2"></div> {/* Second Parallax Section */}

      <div className="content-wrapper">
        <div className={`bg-quote container flex flex-col items-center justify-center h-screen mx-auto ${fadeIn ? 'fade-in' : ''}`} ref={quoteRef}>
          <blockquote className="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
            <p className="font-bold italic">
              &ldquo;Ike is motivated and resourceful, and his work in my class was excellent. Our course was an upper level mathematics foundations 
              class meant for junior and senior math majors, and already as a sophomore he was one of my strongest students, both in skill and in character.&rdquo;
            </p>
          </blockquote>
          <div className="font-serif mx-4 p-4 text-center text-white md:p-8">
            <p className="font-bold italic">
              Professor Claire Frechette
            </p>
            <p className="font-bold italic">
              Boston College Math Department - frechecl@bc.edu
            </p>
          </div>
        </div>
      </div>


      <div className="content-wrapper">
        <div className="content font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
          <p className="mb-4 text-lg">Quae commodi reiciendis dignissimos. Rerum molestiae hic dolores assumenda dolor! Corrupti reiciendis maxime fuga, recusandae obcaecati officia cum temporibus dicta quibusdam praesentium, magni, cumque aperiam iusto sequi illum molestiae non.</p>
          <p className="mb-4 text-lg">In excepturi repellendus eum, qui corrupti rerum perferendis harum adipisci voluptate? Nihil, quidem deleniti libero officia dicta vel asperiores velit molestiae blanditiis, dolore voluptatibus excepturi laudantium at veniam illo. Dolor!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
