import React from 'react'
import { Link } from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'



const About = () => {
  return (
    <div>
   <section className='about' id="about">
    <div className='container'>
        <div className='banner'>
            <div className='top'>
                <h1 className='heading'>ABOUT US</h1>
                  <p>The only thing we are serious about is food!</p>
            </div>
            <p className='mid'>
            Life is full of surprises and opportunities. Each day brings new challenges and joys that shape our experiences. We often seek happiness in small moments, whether through a kind word, a delicious meal, or a beautiful sunset. Embracing these moments helps us appreciate the journey and find fulfillment in our everyday lives.
            </p>
            <Link to={"/"}>Explore Menu
            <span>
           < HiArrowNarrowRight/>
            </span>
            </Link>
        </div>
<div className="banner">
    <img src='/about.png' alt='about' />
</div>
    </div>

   </section>


    </div>
  )
}

export default About