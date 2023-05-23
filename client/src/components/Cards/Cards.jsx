import styles from './Cards.module.css';

import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Cards = ({countries})=>{
    
    return(
        <div className={styles.cardsContainer}>
            {
                countries.map( country => {
                    return (
                        <Link  key={country.id} to={`../detail/${country.id}`} className={styles.link}>
                            <Card
                                
                                name={country.name}
                                flag={country.flag}
                                capital={country.capital}
                                continent={country.continent}
                                subregion={country.subregion}
                                population={country.population}
                                area={country.area}
                                origin={country.origin}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Cards;