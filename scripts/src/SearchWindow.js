export default class SearchWindow extends HTMLElement {
    constructor() {
        super();

        // var shadowRoot = this.attachShadow({mode: 'open'});
        // shadowRoot.innerHTML = `<strong>Shadow dom super powers for the win!</strong>`;
        let counter = 0;
    }

    connectedCallback() {
        let query = this.getAttribute( 'query' );
        let icon = chrome.runtime.getURL( 'assets/icons/logo.png' )

        this.className = "";
        this.innerHTML = `
            <div class="wrapper">
                <div class="header">
                    <img class="logo" src='${ icon }'>
                    <h1 class="title"> You are searching for: ${ query } </h1>
                    <div class="buttons-container">
                        <a class="minimize"></a>
                        <a class="close"></a>
                    </div>
                </div>
                <div class="content">
                </div>
            </div>
        `;

        this.addEventListener( 'click', (e) => {
            let targetElementClass = e.target.className;


            if( targetElementClass = 'close' ) {
                e.target.closest("search-window").remove();
            }
        } );



        let shadowRoot = this.querySelector( '.content' ).attachShadow( {mode: 'open'} );
        let searchIframe = document.createElement( 'iframe' );
        shadowRoot.appendChild( searchIframe );
        searchIframe.setAttribute( 'src', `https://www.skroutz.gr/search?keyphrase=${ query.replace( /\s/g, '' ) }` );

    }


}

