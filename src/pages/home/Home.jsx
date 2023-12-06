import React from 'react'
import "./home.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

const Home = () => {
  return (
    <div>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    </div>
  )
}

export default Home;