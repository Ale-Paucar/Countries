import styles from './NewActivity.module.css';

import validation from './validation';
import { Link , useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllCountries, getActivities } from '../../redux/actions';
import SearchBar from '../SearchBar/SearchBar';
import loadingImage from '../images/loading.gif';
import { postActivities } from '../../redux/actions';

const NewActivity = () => {
    const allcountries = useSelector(state => state.countries)
    const activities = useSelector(state => state.activities)
    
    const dispatch = useDispatch();
    const navigate = useNavigate ();
    
    useEffect(()=>{
        dispatch(getAllCountries());
        dispatch(getActivities())
        return () => {
            dispatch(getAllCountries());
            setInput({
                name: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                weight: '',
                height: '',
                types: [],
            });
            
        }
    },[])
    

    const [input, setInput] = useState({
        name: '',
        dificulty: 0,
        duration: 0,
        season: '',
        selectedCountries: [],
    })

    const [errors, setErrors] = useState({
        name: '',
        dificulty: 0,
        duration: 0,
        season: '',
        selectedCountries: [],
    })

    
    
    const handleInputChange = (event) => {
        if(event.target.name==='dificulty' || event.target.name==='duration'){
            setInput({
                ...input,
                [event.target.name]: parseFloat(event.target.value) 
            });

            setErrors(validation({
                ...input,
                [event.target.name]: parseFloat(event.target.value) 
            },activities));
        }else{
            setInput({
                ...input,
                [event.target.name]: event.target.value
            });

            setErrors(validation({
                ...input,
                [event.target.name]: event.target.value
            },activities));
        }
    }

    const countryInputChange = (event) => {
        
        if(event.target.checked){
            const selectedCountry = allcountries.find(value=> value.id === event.target.value)
            setInput({
                ...input,
                selectedCountries: [...input.selectedCountries, selectedCountry]
            })

            setErrors(validation({
                ...input,
                selectedCountries: [...input.selectedCountries, selectedCountry]
            },activities))
        }

        if(!event.target.checked){
            setInput({
                ...input,
                selectedCountries: [...input.selectedCountries].filter(value=> value.id !== event.target.value)
            })

            setErrors(validation({
                ...input,
                selectedCountries: [...input.selectedCountries].filter(value=> value.id !== event.target.value)
            },activities))
        }

    }


    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0) {
            dispatch(postActivities(input));
            
            alert('se subio correctamente');

            navigate("/home")
        } else {
            
            alert('ups, hubo un error');
        }
    }


    console.log(input);
    console.log(errors);
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
            <h2>Crea una actividad</h2>
            <form onSubmit={e=>handleSubmit(e)} className={styles.form}>
                <div className={styles.formText}>

                    <div className={styles.formControl}>
                        <label htmlFor="name">Nombre de la actividad:</label>
                        <input  autocomplete="off" type="text" name='name' value={input.name} onChange={handleInputChange}/>
                        <br />
                        {errors.name?
                        <span className={styles.error}>{errors.name}</span>
                        :
                        input.name.length ?
                        <span className={`${styles.checkmark} ${styles.success}`}>&#10004;</span>:
                        ''
                        }
                    </div>
                    
                    <div className={styles.formControl}>
                        <label htmlFor="dificulty">Dificultad</label>
                        <input type="range" min="0" max="5" step="1" name='dificulty' value={input.dificulty} onChange={handleInputChange}></input>
                        <span>{input.dificulty} / 5</span>
                        <br />
                        {errors.dificulty?
                        <span className={styles.error}>{errors.dificulty}</span>
                        :
                        input.dificulty > 0 ?
                        <span className={`${styles.checkmark} ${styles.success}`}>&#10004;</span>:
                        ''
                        }
                    </div>

                    <div className={styles.formControl}>
                        <label htmlFor="duration">Duración</label>
                        <input type="range" min="0" max="10" step="1" name='duration' value={input.duration} onChange={handleInputChange}></input>
                        <span>{input.duration} horas</span>
                        <br />
                        {errors.duration?
                        <span className={styles.error}>{errors.duration}</span>
                        :
                        input.duration > 0 ?
                        <span className={`${styles.checkmark} ${styles.success}`}>&#10004;</span>:
                        ''
                        }
                    </div>
                    
                    <div className={styles.formControl}>
                        <label htmlFor="season">Estación: </label>
                        <select name="season" id="season" value={input.season} onChange={handleInputChange}>
                            <option value="" disabled>Temporada</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                        <br />
                        {errors.season?
                        <span className={styles.error}>{errors.season}</span>
                        :
                        input.season.length?
                        <span className={`${styles.checkmark} ${styles.success}`}>&#10004;</span>:
                        ''
                        }
                    </div>
                    
                </div>
                
                <div className={styles.searchContainer}>
                    <p>Buscar pais</p>
                    <SearchBar></SearchBar>
                    <div className={styles.subSearchC}>
                        {
                            allcountries.length
                            ?
                            allcountries[0].hasOwnProperty('err')?
                            <h2>{allcountries[0].err}</h2>
                            :
                            allcountries.map(country=>{
                                return(
                                    <div key={country.id} className={styles.countryItem}>
                                        <input type="checkbox" id={country.name} value={country.id} onChange={countryInputChange}></input>
                                        <img src={country.flag.svg} alt={country.flag.alt} className={styles.countryFlag}/>
                                        <label htmlFor={country.name}>{country.name}</label>
                                    </div>
                                )
                            })
                            :
                            <div className={styles.loadingContainer}>
                                <img src={loadingImage} alt='Cargando' className={styles.loadingImage}/>
                            </div>
                        }
                    </div>
                </div>

                <div className={styles.selectCountriesC}>
                    {   
                        errors.selectedCountries?
                        <p className={styles.error}>{errors.selectedCountries}</p>
                        :
                        input.selectedCountries.length
                        ?
                        input.selectedCountries.map(country=>{
                            return(
                                <div key={country.id} className={styles.selectedCountry}>
                                    <img src={country.flag.svg} alt={country.flag.alt} className={styles.countryFlag}/>
                                    <label htmlFor={country.name}>{country.name}</label>
                                </div>
                            )
                        })
                        :
                        <></>
                    }
                </div>

                
                <button type='submit'>Crear</button>
            </form>
            
            <Link to='../home'><button >Atrás</button></Link>
            </div>
        </div>
    )
}

export default NewActivity
