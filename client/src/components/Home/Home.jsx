import styles from './Home.module.css';

import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
//
import { getAllCountries } from '../../redux/actions';
//
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//
import { filterCountriesByContinent, orderByNameOrPopulation } from '../../redux/actions';

const Home = () => {
    const countries = useSelector(state => state.countries);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries())
    },[])

    
    // obteniendo continentes, solo me sirve una vez
    
    // let miset = new Set();
    // if(countries.length){
    //     countries.map(value=>{
    //         miset.add(value.continent)
    //     })

    // }
    // console.log(miset);
    //"Asia" "Europe" "Africa" "Oceania"  "Americas" "Polar" "Antarctic Ocean" "Antarctic"

    const handleContinentsSelect = (e) => {
        dispatch(filterCountriesByContinent(e.target.value));
    }

    const handleActivitiesSelect = (e) => {
        console.log(e.target.value);
    }

    const handleOrderSelect = (e) => {
        dispatch(orderByNameOrPopulation(e.target.value));
    }

    console.log(countries);

    return (
        <div className={styles.homeContainer}>
            <div className={styles.header}>
                {/* // * este div contiene la cabecera */}
                <h2 className={styles.logo}>Aquí va un logo</h2>
                <div className={styles.searchBarContainer}>
                    <SearchBar/>
                    <Link to='../newActivity'>
                        <button className={styles.createActivityButton}>Crea una actividad</button>
                    </Link>
                </div>

                <div>
                    <div className={styles.filterContainer}>
                        <label htmlFor="continentSelect" className={styles.filterLabel}>Flitrar por Continente:</label>
                        <select id="continentSelect" onChange={handleContinentsSelect} className={styles.filterSelect}>
                            <option disabled value='continent'>Región</option>
                            <option value="All">Todos</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europa</option>
                            <option value="Africa">África</option>
                            <option value="Oceania">Ocenía</option>
                            <option value="Americas">América</option>
                            <option value="Polar">Polar</option>
                            <option value="Antarctic Ocean">Océano antártico</option>
                            <option value="Antarctic">Antártida</option>
                        </select>
                    </div>

                    <div className={styles.filterContainer}>
                        <label htmlFor="continentSelect" className={styles.filterLabel}>Flitrar por Actividad:</label>
                        <select id="continentSelect" onChange={handleActivitiesSelect} className={styles.filterSelect}>
                            <option disabled value='activity'>Actividad</option>
                            <option value="nadar">Nadar</option>
                            <option value="playa">Playa</option>
                            <option value="montain">Montañismo</option>
                        </select>
                    </div>

                    <div className={styles.filterContainer}>
                        <label htmlFor="orderSelect" className={styles.filterLabel}>Ordenar por:</label>
                        <select id="orderSelect"  onChange={handleOrderSelect} className={styles.filterSelect}>
                            <option disabled value='orden'>Tipo de orden</option>
                            <option value="A_Z">A-Z</option>
                            <option value="Z_A">Z-A</option>
                            <option value="creciente">Población creciente</option>
                            <option value="decreciente">Población decreciente</option>
                        </select>
                    </div>
                </div>

            </div>

            <Pagination countries={countries} className={styles.paginationContainer}/>

        </div>
    )
}

export default Home;