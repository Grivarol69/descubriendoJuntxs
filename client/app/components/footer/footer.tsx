'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import style from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={style.footer}>
                <p>© 2023 SoyHenry. All Rights Reserved.</p>
                <div className={style.socialMedia}>
                    <a href="https://www.instagram.com/descubriendojuntxs/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                    </a>
                    <a href="https://www.facebook.com/people/Descubriendo-Juntxs/100083237715538/?mibextid=LQQJ4d" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size='2x' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCryZ0iZXr3HSkKcJR14_LAg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} size='2x' />
                    </a>

                    <a href="https://www.linkedin.com/company/descubriendo-juntxs/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

