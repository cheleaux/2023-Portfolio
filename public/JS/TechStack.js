
export default function revealTechList( e ) {
    if ( !e.target ) return;
    if ( e.target.classList.contains( 'tooltip' ) || e.target.matches( '.tech-list-item h3' ) ) return;
    const list = e.target.closest( 'article' ).querySelector( '.tech-list' )
    list.classList.toggle('retracted')
}

