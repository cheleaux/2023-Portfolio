const techStackMain = document.querySelector('.tech-stack')
const techStackMoblie = document.querySelector('.tech-stack-oncolapse')
const projectsSection = document.querySelector('.projects')
const stackList = [ techStackMoblie, techStackMain]
const screenQuery884 = window.matchMedia('(max-width: 884px)')


stackList.forEach( elem => { elem.addEventListener('click', revealTechList )})

// screenQuery884.addEventListener('change', () => { while ( screenQuery884.matches ) techStackMoblie.style.width = projectsSection.style.width })

function revealTechList( e ) {
    if ( !e.target ) return;
    const list = e.target.closest( 'article' ).querySelector( '.tech-list' )
    list.classList.toggle('retracted')
}
