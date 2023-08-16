import styles from './PeopleList.module.css';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}> 
            {people.map(({id, name, img , photo }) =>
                <li className={styles.list__item} key ={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.person__photo } src={img || photo} alt={name}/>
                        <p>{name}</p>
                    </Link>
                </li>
             )}
        </ul>
    )
} 

PeopleList.propTypes = {
    people : PropTypes.array
}

export default PeopleList;
