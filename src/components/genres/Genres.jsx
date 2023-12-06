import React from 'react';
import { useSelector } from 'react-redux';
import { homeSelector } from '../../redux/homeReducer';
import "./genres.scss";

const Genres = ({data}) => {
    const  {genres} = useSelector(homeSelector);
    console.log(data);
    console.log(genres)
  return <div className="genres">
        {data?.map((g)=>{
            if(!genres[g]?.name) return;
            return(
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
     </div>
    
}

export default Genres;