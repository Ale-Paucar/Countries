import styles from './SearchBar.module.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCountryByName } from '../../redux/actions';

const SearchBar = () => {
    const [inputName,setInputName] = useState('');
    const [inputError, setInputError] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        if(e.target.value.length){
            setInputName(e.target.value);
        }
    }

    useEffect(() => {
        dispatch(getCountryByName(inputName));
    }, [inputName]);
    
    

    return(
        <div className={styles.inputContainer}>
            <input type="text" placeholder='Pais' onChange={handleInputChange}/>
        </div>
    )
}

export default SearchBar;