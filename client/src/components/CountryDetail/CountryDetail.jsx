import styles from './CountryDetail.module.css';

import { useParams , Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getCountryDetail , getActivities} from '../../redux/actions';
import loading from '../images/loading.gif'

const CountryDetail = () => {
    const params = useParams();
    const dispatch = useDispatch();
    
    const contryDetail = useSelector(state => state.countryDetail);
    const allActivities = useSelector(state => state.activities);

    const detailId = params.detailId;

    useEffect(()=>{
        dispatch(getCountryDetail(detailId))
        dispatch(getActivities())
        return () => {
            dispatch(getCountryDetail(null))
            dispatch(getActivities())
        }
    },[])

    
    
    const activities = allActivities.length 
    ? allActivities.filter(activity => activity.countries.some(country=> country.id === detailId))
    : []
    
    
    return (
        <div className={styles.container}>
            {
                contryDetail.length
                ?
                <div className={styles.mainContainer}>
                    <div className={styles.detailsContainer}>
                        <h3 className={styles.countryName}>Pais: {contryDetail[0]?.name}</h3>
                        <img src={contryDetail[0].flag.svg} alt={contryDetail[0]?.flag.alt} className={styles.flag}/>
                    </div>
                    <div className={styles.infoContainer}>
                        <div  className={styles.countryContainer}>
                            <h2>Capital: {contryDetail[0]?.capital}</h2>
                            <p>Region: {contryDetail[0]?.continent}</p>
                            <p>Subregion: {contryDetail[0]?.subregion}</p>
                            <p>Area: {contryDetail[0]?.area} km2</p>
                            <p>Población: {contryDetail[0]?.population}</p>
                            {
                                Array.isArray(contryDetail[0]?.activities)
                                ?
                                contryDetail[0]?.activities.map((value,id) => {
                                    return (
                                        <p key={id}>Actividad: {value.name}</p>
                                    )
                                })
                                :
                                <p>{contryDetail[0]?.activities}</p>
                            }
                        </div>
                        <div className={styles.activitiesContainer}>
                            {
                                activities.length
                                ?
                                activities.map(act=>{
                                    return (
                                        <div key={act.id}>
                                            <h4>Actvidad turística: {act.name}</h4>
                                            <p>Dificultad: {act.dificulty} / 5</p>
                                            <p>Duración: {act.duration} horas</p>
                                            <p>Temporada: {act.season}</p>
                                        </div>
                                    )
                                })
                                :
                                <p>No hay actvidad</p>
                            }
                        </div>
                    </div>
                </div>
                :
                <img src={loading} alt="a"  />
            }
            <Link to='../home' className={styles.backButton}><button>Back</button></Link>
        </div>
    )
}

export default CountryDetail;