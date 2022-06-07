import React, { useEffect, useState } from 'react';
import '../../../App'
import axios from 'axios'
import "./searchResult.css"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchResult = (input, setInput, props) => {
    const [searchedMovie, setSearchedMovie] = useState([]);
    const [data, setData] = useState({});
    let params = useParams();
    const navigate = useNavigate();

    const getResult = async (input) => {
        axios.get(`https://api.themoviedb.org/3/movie/${input}?api_key=41531a7abe30304f919a4843d4b37ee0`, {
            params: {
                _limit: 10,
                title: input
            }
        }).then((Response) => {
            setData(Response.data)
            console.log(Response.data)
            setSearchedMovie([Response.data])
        });
    }
    
    useEffect(() => {
        getResult(params.search);
    }, [params.search]);
    
    const back = () => {
        navigate('/')
    }

    return (
        <div className='search-result'>
            <button className='back' onClick={back}>Home</button>
            <div className='cards'>
                {searchedMovie.map(searchedMovie => {
                    return (
                        <div className='cards' key={searchedMovie.id}>
                            <h3 className='movie-title'>{searchedMovie.original_title}</h3>
                            <img src={searchedMovie.posters} alt={searchedMovie.id} className='img'></img>
                            <h5 className='overview'>{searchedMovie.overview}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchResult;