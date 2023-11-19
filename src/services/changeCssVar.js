export const changeCssVar = theme => {
    const root = document.querySelector(':root');

    const vars = ['header', 'bgimage'];

    vars.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`,`var(--theme-${theme}-${el})`)
    })
}