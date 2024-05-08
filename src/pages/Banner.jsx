import React,{useState,useEffect}from 'react';
import './banner.css';
import bgImg from '../images/transformer.jpg';
function Banner() {
    const {movies,setMovies}=useState([]);
    const fetchData=()=>{
      fetch('https://localhost:3000/data/movieData.json')
      .then(res=>res.json())
      .then(data=>setMovies(data))
      .catch(e=>console.log(e.message));
    };
  return (
 <div className="banner">
 <div className="movie"></div> 
 <img src={bgImg} alt="Background Image" className="bgImg active"/>   
 <div className="container-fluid">
  <div className="row">
    <div className="col-lg-6 col-md-12">
      
       </div>
       <div className="col-lg-6 col-md-12">
      <div className="content">
        <img src="" alt="Movie Title" className="movie-title"/>
          <h4>
            <span>Year</span>
            <span>
              <i>Age</i>
            </span>
            <span>Length</span>
            <span>Categroy</span>
          </h4>
          <p>
            Category Movie this are is dedicated for movie category.
            so this text should be modified accordingly to the movie.
          </p>
          <div className="button">Button</div>
      </div>
       </div>
       <div className="Cal-lg-6 col-md-12"></div>
  </div>
 </div>
 </div>);
}


export default Banner
