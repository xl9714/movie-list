import React from 'react';
import './Home.css'
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const searchbutton = (event) => {
        event.preventDefault();
        if (input.length !== 0) {
            navigate('/searched/'+input)
        }
    };

    return (
        <div className='home'>
            <h1 className='home-title'>Movies</h1>
            <form searchbutton onSubmit={searchbutton} className='searchBar'>
                <FontAwesomeIcon icon={faSearch} className='Icon'/>
                <input value={input} onChange={event=>setInput(event.target.value)} type="text" placeholder='Enter a movie'/>
                <button className='searchButton' onClick={searchbutton}><a href='#searchResult'>Search</a></button>
            </form>
            
        </div>
    );
};

export default Home;