import styles from './NewActivity.module.css';

import validation from './validation';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllCountries } from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';

const NewActivity = () => {
    const allcountries = useSelector(state => state.countries)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllCountries());
        return () => {
            dispatch(getAllCountries());
        }
    },[])
    

    const [input, setInput] = useState({
        name: '',
        dificulty: 0,
        duration: 0,
        season: '',
        selectedCountries: [],
    })

    const [error, setError] = useState({
        name: '',
        dificulty: 0,
        duration: 0,
        season: '',
        selectedCountries: [],
    })

    
    
    const handleNameDurationSeasonInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const handleDificultyInput = (event) => {
        setInput({
            ...input,
            dificulty: parseFloat(event.target.value) 
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }


        console.log(input);
    return (
        <div>
            <h3>Crea una actividad</h3>
            <form onSubmit={e=>handleSubmit(e)}>
                
                <div>
                    <label htmlFor="name">Nombre de la actividad:</label>
                    <input type="text" name='name' value={input.name} onChange={handleNameDurationSeasonInput}/>
                </div>
                
                <div>
                    <label htmlFor="dificulty">Dificultad</label>
                    <input type="range" min="0" max="5" step="1" name='dificulty' value={input.dificulty} onChange={handleDificultyInput}></input>
                    <span>{input.dificulty}</span>
                </div>

                <div>
                    <label htmlFor="duration">Duración</label>
                    <input type="number" name='duration' value={input.duration} onChange={handleNameDurationSeasonInput}/>
                </div>
                
                <div>
                    <label htmlFor="season"></label>
                    <select name="season" id="season" value={input.season} onChange={handleNameDurationSeasonInput}>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </div>

                <div>
                    <SearchBar></SearchBar>
                    {
                        allcountries.length
                        ?
                        allcountries.map(country=>{
                            return(
                                <div key={country.id}>
                                    <input type="checkbox" id={country.name} value={country} onChange={()=>{}}></input>
                                    <img src={country.flag.svg} alt={country.flag.alt} width='60px'/>
                                    <label htmlFor={country.name}>{country.name}</label>
                                </div>
                            )
                        })
                        :
                        <h3>Loading....</h3>
                    }

                </div>

                
                <button type='submit'>Crear</button>
            </form>
            <Link to='../home'>Atrás</Link>
        </div>
    )
}

export default NewActivity
