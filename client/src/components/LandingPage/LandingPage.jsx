import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <div>Esta es mi landing page</div>
            <Link to='/home'><button>Home</button></Link>

        </div>
    )
}

export default LandingPage;