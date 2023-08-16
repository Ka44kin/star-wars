import styles from './Favorite.module.css';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import favorites from './img/favorites.svg'


const Favorite = () => {
    const [count, setCount] = useState();
    
    const storeData = useSelector(state => state.favoriteReducer); 

    useEffect(() => {
        const length = Object.keys(storeData).length;
        setCount(length);
    })

    return (
        <div className={styles.container}>
            <Link to="/favorites">
                <span className={styles.counter}>{count}</span>
                <img className={styles.favorites} src={favorites} alt="Favorite" />
            </Link>
            
        </div>
    )
}


export default Favorite;
