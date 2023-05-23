import styles from './CountryDetail.module.css';

import { useParams , Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getCountryDetail } from '../../redux/actions';

const CountryDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    
    const contryDetail = useSelector(state => state.countryDetail);

    const detailId = params.detailId;

    useEffect(()=>{
        dispatch(getCountryDetail(detailId))
        return () => {
            dispatch(getCountryDetail(null))
        }
    },[])

    
    

    return (
        <div className={styles.container}>
            {
                contryDetail.length
                ?
                <div>
                    <h2 className={styles.countryName}>Pais: {contryDetail[0].name}</h2>
                    <img src={contryDetail[0].flag.svg} alt={contryDetail[0].flag.alt} className={styles.flag}/>
                    <h3>Capital: {contryDetail[0].capital}</h3>
                    <p>Region: {contryDetail[0].continent}</p>
                    <p>Subregion: {contryDetail[0].subregion}</p>
                    <p>Area: {contryDetail[0].area} km2</p>
                    <p>Población: {contryDetail[0].population}</p>
                </div>
                :
                <h2>Loading ...</h2>
            }
            <Link to='../home' className={styles.backButton}><button>Back</button></Link>
        </div>
    )
}

export default CountryDetail;