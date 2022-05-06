import React from 'react'
import { Link } from 'react-router-dom'

const About = ({title}) => {
  return (
    <div className='content about'>
      <h1>{title}</h1>
      <p>This is a Movie Database  that displays the top 20 popular movies in the world. Every piece of data is being generated from the TMDB API that is added by their amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something they are incredibly proud of. Put simply, they live and breathe community and that's precisely what makes them different.</p>

      <h2>The TMDB Advantage</h2>
      <ul>
        <li>Every year since 2008, the number of contributions to our database has increased. With over 400,000 developers and companies using our platform, TMDB has become a premiere source for metadata.</li>
        <li>Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resuution posters and fanart. On average, over 1,000 images are added every single day.</li>
        <li>We're international. While we officially support 39 languages we also have extensive regional data. Every single day TMDB is used in over 180 countries.</li>
        <li>Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on TMDB is nothing short of amazing.</li>
        <li>Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</li>
      </ul>

      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </div>
  )
}

export default About