import SearchWindow from './SearchWindow.js';
import '../../assets/scss/main.scss'

window.customElements.define( 'search-window', SearchWindow );


browser.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if ( request.query != "" ) {
            let e = document.createElement('search-window');

            e.setAttribute( 'query', request.query );
            e.setAttribute( 'status', 'open' );

            document.body.appendChild( e );
        }
    }
);