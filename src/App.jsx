
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector,useDispatch } from "react-redux";
import { homeActions,homeSelector } from "./redux/homeReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Details,Explore, Home, SearchResults } from "./pages/imports";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {


  const dispatch = useDispatch();
  useEffect(()=>{
    fetchApiConfig();
    genresCall();
  },[]);

  const {url} = useSelector(homeSelector);
  console.log(url);
  
  const fetchApiConfig =()=>{
    fetchDataFromApi('/configuration')
    .then((res)=>{
      console.log(res);

      const url ={
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(homeActions.getApiConfiguration(url));
    })
}

    const genresCall = async () =>{
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};
      
      endPoints.forEach((url)=>{
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
      })

      const data = await Promise.all(promises);
      console.log("app data gen",data)
      data.map(({genres})=>{
        return genres.map((item)=>(allGenres[item.id] = item))
      })

      dispatch(homeActions.getGenres(allGenres));
    };


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResults/>}/>
        <Route path="/explore/:mediaType" element={<Explore/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
