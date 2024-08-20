import discordLink from '../images/svg/discord-svgrepo-com.svg';
import instagramLink from '../images/svg/instagram-svgrepo-com.svg'
import telegramLink from '../images/svg/telegram-svgrepo-com.svg'
function Footer() {

    return (
        <footer className="footer">
            
                <ul className="footer__list">
                    <li className="footer__list-item">@SwampCuberArena</li>
                    <li className='footer__list-item footer__list-links'>
                        <a className='footer__list-item-icon' ><img src={telegramLink} alt="Go to Telegram" /></a>
                        <a className='footer__list-item-icon' ><img src={instagramLink} alt="Go to Instagram" /></a>
                        <a className='footer__list-item-icon'    ><img src={discordLink} alt="Go to Discord" /></a>
                        </li>
                    <li className="footer__list-item"><a href="" className="">+79777777777</a></li>
                </ul>
          
        </footer>
        
    )
  }
  
  export default Footer;