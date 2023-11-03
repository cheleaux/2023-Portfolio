const aboutMeText = document.querySelector('#abt-me-text')

export default function resizeTextSection( e ) {
    const btn = e.target.closest('.abt-me-expand-btn')
    if( !btn ) return;
    aboutMeText.classList.toggle('abt-me-truncated')
    changeBtnText(this)
}

function changeBtnText( btn ){
    aboutMeText.style.height == '110px' ? btn.innerHTML = 'See more' :
    btn.innerHTML = 'See Less';
}



