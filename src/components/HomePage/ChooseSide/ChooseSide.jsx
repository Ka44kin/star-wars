import PropTypes from 'prop-types';
import { useTheme } from '@context/ThemeProvider';
import styles from './ChooseSide.module.css';
import cn from 'classnames';
import { SITH_THEME, STANDART_THEME, JEDY_THEME } from '@constants/theme';
import jedy from './img/jedy.jpeg';
import sith from './img/sith.jpeg'
import neutral from './img/neutral.jpeg'

const ChooseSideImg = ({theme, img, text, classes}) => {
    const isTheme = useTheme();
    return (
        <div 
            className={cn(styles.item, classes)} 
            onClick= {() => isTheme.change(theme)}
        >
            <span className={styles.item__header}>{text}</span>
            <img className={styles.item__img}src={img} alt={text} />
        </div>
    )
}

ChooseSideImg.propTypes = {
    text : PropTypes.string,
    img : PropTypes.string,
    theme : PropTypes.string
}

const ChooseSide = () => {
    const elements = [
        {
            theme: SITH_THEME,
            text: "SITH",
            img: sith,
            classes: styles.item__sith,
        },
        {
            theme: STANDART_THEME,
            text: "NEUTRAL",
            img: neutral,
            classes: styles.item__neutral,
        },
        {
            theme: JEDY_THEME,
            text: "JEDY",
            img: jedy,
            classes: styles.item__jedy,
        },
    ];
    return (
        <div className={styles.container}>
            {elements.map((el, index) => (
                <ChooseSideImg
                    key={el.index}
                    theme={el.theme}
                    text={el.text}
                    img={el.img}
                    classes={el.classes}
                />
            ))}
        </div>
    )
}

export default ChooseSide;
