import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../components/hooks/useFetch';
import { useSelector } from 'react-redux';
import { homeSelector } from '../../../redux/homeReducer';
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "./heroBanner.scss";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {data,loading} = useFetch("/movie/upcoming");

    const {url} = useSelector(homeSelector);
    console.log(url);
    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        console.log(bg);
        setBackground(bg);
    },[data]);

    const searchQueryHandler =(event)=>{
       if(event.key === "Enter" && query.length>0){
           navigate(`/search/${query}`);
       }
    }
  return (
    <div className="heroBanner">
       {!loading && <div className="backdrop-img">
            <Img src={background}/>
        </div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
            <div className="heroBannerContent">
                <span className="title">Welcome</span>
                <span className="subTitle">
                    Your Gateway to Cinematic Wonders,Where Every Frame Tells a Story
                </span>
                <div className="searchInput">
                    <input 
                    type="text"
                    placeholder='Search for movie or show...' 
                    onKeyUp={searchQueryHandler}
                    onChange={(e)=>setQuery(e.target.value)}
                    />
                    <button>Search</button>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner