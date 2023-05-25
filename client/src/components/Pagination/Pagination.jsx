import styles from './Pagination.module.css';

import { useSelector } from 'react-redux';

import { useState, useEffect } from 'react';

import Cards from '../Cards/Cards';
import loading from '../images/loading.gif'

const Pagination = () =>{
    const countries = useSelector(state => state.countries);

    // * estado de paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfCountriesPP = 10;
    const pagesNumber = Math.ceil(countries.length/numberOfCountriesPP)
    // * indices de paginación
    const startIndex = (currentPage-1)*numberOfCountriesPP; 
    const finishIndex = startIndex+numberOfCountriesPP;   
    // * countries recortadas
    const countriesPerPage = countries.slice(startIndex,finishIndex);    
    // * funciones que modificará los indices de paginación:
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handlePreviousPageChange = () => {
        if(currentPage>1) setCurrentPage(currentPage-1);
    }

    const handleNextPageChange = () => {
        if(currentPage<pagesNumber) setCurrentPage(currentPage+1);
    }

    const buttons = [];
    for (let i = 0; i < pagesNumber; i++) {
        buttons.push(
            <button
                key={i}
                onClick={()=>handlePageChange(i+1)}
                className={currentPage === i + 1 ? styles.activeButton : styles.button}
            >{i+1}</button>
        )
    }

    useEffect(()=>{
        setCurrentPage(1)
    },[countries])

    return(
        <div className={styles.container}>
            {
                countries.length
                ?
                    countries[0].hasOwnProperty('err')
                    ?
                    <h2>{countries[0].err}</h2>
                    :
                    
                    <div className={styles.paginationContainer}>
                        <Cards countries={countriesPerPage}/>
                        <div className={styles.buttonsContainer}>
                            <button onClick={handlePreviousPageChange}>&#9664;</button>
                            {buttons}
                            <button onClick={handleNextPageChange}>&#9654;</button>
                        </div>
                    </div>
                :
                <div>
                    <img src={loading} alt="loading"  />
                </div>   
            }
        </div>
    )
}

export default Pagination;