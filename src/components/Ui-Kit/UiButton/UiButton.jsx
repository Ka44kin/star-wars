import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import '../index.css';
import cn from 'classnames';

const UiButton = ({ 
    text,
    onClick,
    disabled,
    theme='dark',
    classes
 }) => {
    return (
        <button 
            className={cn(styles.button, styles[theme], classes)}
            onClick={onClick}
            disabled={disabled}
            >
                {text}
        </button>
    )
}

UiButton.propTypes = {
    test : PropTypes.string,
    onClick : PropTypes.func,
    disabled : PropTypes.bool,
    theme : PropTypes.string,
    classes : PropTypes.string

}


export default UiButton;
