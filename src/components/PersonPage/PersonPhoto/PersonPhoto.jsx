import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PersonPhoto.module.css';
import { addPersonToFavorite, removePersonFromFavorite } from '@store/actions';

import favIcon from './img/favorite.svg';
import favIconFill from './img/favorite-fill.svg';

const PersonPhoto = ({
    personPhoto, 
    personName,
    personId,
    setPersonFavorite,
    personFavorite
}) => {
    const dispatch = useDispatch()

    const dispatchFavorite = () => {
        if (personFavorite){
            dispatch(removePersonFromFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(addPersonToFavorite({
                [personId] : {
                    name: personName,
                    photo: personPhoto
                },
            }));
            setPersonFavorite(true);
        }
    }
        return (
            <>
                <div className={styles.container}>
                    <img className={styles.photo} src={personPhoto} alt={personName} />
                    <button className={styles.button}>
                        <img 
                            className={styles.favorite}
                            src={personFavorite ? favIconFill : favIcon} 
                            onClick={dispatchFavorite} 
                            alt="" />
                    </button>
                </div>
            </>
        )
    }

PersonPhoto.propTypes = {
    personPhoto : PropTypes.string,
    personName : PropTypes.string,
    PersonId : PropTypes.string,
    personFavorite : PropTypes.bool,
    setPersonFavorite : PropTypes.func


}


export default PersonPhoto;
