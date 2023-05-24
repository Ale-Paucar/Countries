import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <div className={styles.errorContainer}>
            <h4 className={styles.errorText}>404 - No se encuentra esta página.</h4>
        </div>
    );
}

export default ErrorPage;
