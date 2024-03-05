import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../../assets/img/BannerImages.jpg';
import '../../assets/styles/home.css'


const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>All Pubcakes..</h1>
        <p>They Are The Sweetest Cakes</p>
        <Link to="/menu" ><button>Order Now !</button></Link>
      </div>
    </div>
  )
}

export default Home