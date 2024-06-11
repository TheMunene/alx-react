import './Footer.css';
import { getFooterCopy } from '../utils';

const currentDate = new Date().getFullYear();
const getFooter = getFooterCopy(false);

export function Footer(){
    return(
       
        <div className='App-footer'>
         <hr className='hr'></hr>
         <footer>
             <p>Copyright {currentDate} - {getFooter} </p>
        </footer>
        </div>
    );
}