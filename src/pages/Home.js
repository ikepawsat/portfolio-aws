import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
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
        <div className="content font-serif leading-normal mx-auto py-12 px-4 max-w-lg text-center">
          <p className="mb-6 text-2xl md:text-2xl uppercase text-white">Ike Pawsat</p>
          <h5 className="mb-4 text-xl">Pursuing a B.S. in Computer Science with a Minor in Data Science at Boston College.</h5>
          <p className="mb-4 text-lg">Looking for an internship for Summer 2025</p>
        </div>
      </div>

      <div className="parallax2"></div> {/* Second Parallax Section */}

      <div className = "content-wrapper py-8"></div>

      <div className="content-wrapper">
        <div className={`bg-quote lg:container lg:max-w-lg py-8 lg:py-12 flex flex-col items-center justify-center h-auto mx-auto ${fadeIn ? 'fade-in' : ''}`} ref={quoteRef}>
          <blockquote className="bg-inherit font-serif mx-4 p-4 text-center text-white md:p-8">
            <p className="font-bold italic text-wrap max-w-4xl mx-auto flex">
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
      <div className = "content-wrapper py-8"></div>
    </div>
  );
}

export default Home;
