import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={styles.landingPage}>
            <div className={styles.container}>
                <h1 className={styles.title}>Countries</h1>
                <p className={styles.subtitle}>Explora los países del mundo</p>
                <p className={styles.author}>Autor: Ale Paucar</p>
                <Link to="/home">
                    <button className={styles.buttonH}>Home</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;