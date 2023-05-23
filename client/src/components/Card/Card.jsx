import styles from './Card.module.css';


const Card = ({name,flag,continent,subregion,population,area,origin,capital}) => {
    return(
        <div className={styles.card}>
            <img src={flag.svg} alt={flag.alt} />
            <h3>{`Nombre: ${name}`}</h3>
            {/* <p>{`Capital: ${capital}`}</p> */}
            <p>{`Continente: ${continent}`}</p>
            {/* <p>{`Subregión: ${subregion}`}</p>
            <p>{`Área: ${area} km2`}</p> */}
            <p>{`Población: ${population} habitantes`}</p>
        </div>
    )
}

export default Card;