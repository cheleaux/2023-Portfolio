const aboutMeText = document.querySelector('#abt-me-text')
const firstParaAbtMe = document.querySelector('.abt-me-para-1')
const wholeAbtMeText = document.querySelector('.abt-me-whole')

checkAbtMeHeight()

export default function resizeTextSection( e ) {
    const btn = e.target.closest('.abt-me-expand-btn')
    if( !btn ) return;
    aboutMeText.classList.toggle('abt-me-truncated')
    checkAbtMeHeight()
    setTimeout(changeBtnText(this), 0)
}

function checkAbtMeHeight(){
    if ( aboutMeText.classList.contains('abt-me-truncated') ) aboutMeText.style.height = `${firstParaAbtMe.offsetHeight}px`;
    else if ( !aboutMeText.classList.contains('abt-me-truncated') ) aboutMeText.style.height = `${wholeAbtMeText.offsetHeight}px`;    
}

function changeBtnText( btn ){
    aboutMeText.offsetHeight == firstParaAbtMe.offsetHeight ? btn.innerHTML = 'See Less' :
    btn.innerHTML = 'See More';
}
