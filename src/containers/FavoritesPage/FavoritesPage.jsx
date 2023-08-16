import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './FavoritesPage.module.css';

import PeopleList from '@components/PeoplePage/PeopleList';
import { useEffect } from 'react';

const FavoritesPage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);
    
    useEffect(() => {
        const arr = Object.entries(storeData);

        if(arr.length){
            const res = arr.map (item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res);
        }
    }, []);

    return (
        <>
            <h1 className='header__text'>FavoritesPage</h1>
            { people.length
                ? <PeopleList people = {people} />
                : <h2 className={styles.data}>No favorites</h2>
            }
            
        </>
    )
}


export default FavoritesPage;
