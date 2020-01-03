import React, { useState } from "react";

const MovieList = () =>{
    const [movies, setMovies] =([
        {
            name:"Harry Potter",
            price:"$10",
            id:232356
        },
        {
            name:"Spirit",
            price:"$12",
            id:232357
        },
        {
            name:"GOT",
            price:"$12",
            id:232358
        }
    ]);
    return(
        <div>
            {            
                movies.map(movie =>(
                <li>{ movie.name }</li>
                ))
            }
        </div>
    );
};

export default MovieList;