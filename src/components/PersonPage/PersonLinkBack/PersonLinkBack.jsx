import PropTypes from 'prop-types';
import styles from './PersonLinkBack.module.css';

import iconBack from './img/back.png'

import { useNavigate } from 'react-router';

const PersonLinkBack = () => {
    const navigate = useNavigate();
    const handleGoback = e => {
        e.preventDefault();
        navigate(-1);
        
    }
    return (
        <a
            href='#'
            onClick={handleGoback}
            className = {styles.link}
        >
            <img className={styles.link__img} src={iconBack} alt="go back" />
            <span>Go back</span>
        </a>
    )
}


export default PersonLinkBack;
