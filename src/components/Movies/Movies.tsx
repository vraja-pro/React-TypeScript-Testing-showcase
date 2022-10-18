import React,{useEffect, useState} from 'react'
import {MOVIES_API} from '../../constant'
//import axios from 'axios'
import {Grid,Card,Rating } from '@mui/material'

interface Movie {
 imdbRating:string,
 Poster?: string,
 Title:string,
}

const Movies = () => {
  
    const [movies,setMovies] = useState<Movie[]>([]);
  const getMovies = async () =>{
    try{
        const response = await fetch(MOVIES_API);
        const data = await response.json();
        setMovies(data)
  } catch (err){
    console.log(err)
  }
  }


    useEffect(() => {
        getMovies()
    }, []);


  return (
   
       
        <Grid container spacing={2}>

  {movies.length && movies.map((obj,i)=>
    <Grid item xs={12} lg={2} key={i} data-testid="movie" >
            <Card className="movie">
           {obj.Poster && <img src={obj.Poster} alt={obj.Title} className="movie_poster" />}
                <div><b>({parseFloat(obj.imdbRating)/2})</b></div>
                <Rating name="read-only" value={parseInt(obj.imdbRating)/2} readOnly />
            </Card>
          </Grid>
        )}
</Grid>
       
        )
  
}

export default Movies