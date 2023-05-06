import facebook from "../../Assets/SocialMediaIcons/facebook.png"
import github from "../../Assets/SocialMediaIcons/github.png"
import instagram from "../../Assets/SocialMediaIcons/instagram.png"
import linkendin from "../../Assets/SocialMediaIcons/linkedin.png"
import styles from "./Footer.module.css"

const Footer = ()=>{  
    return(
        <footer>
        <div className={styles.footer}> 
         
            <div className={styles.developer}>
                <marquee className={styles.mar}>Este proyecto fue creado por Bruno Gonzales Lorena, utilizando React, Express y PostgreSQL. Soy un estudiante de diseño de software en Henry y en Tecsup Aqp, y anteriormente me gradué en ingeniería industrial. Tengo 24 años y me considero un desarrollador full-stack apasionado por el diseño y la creación de soluciones innovadoras.</marquee>
                <div className={styles.social}>
                    <a href="https://www.facebook.com/bruno.gonzales.58a/"><img src={facebook} alt="facebookLogo" className={styles.socialMediaIcon} /></a>
                    <a href="https://www.instagram.com/bruno_b.b/"><img src={instagram} alt="instagramLogo" className={styles.socialMediaIcon} /></a>
                    <a href="https://github.com/Bruxpe"><img src={github} alt="githubLogo" className={styles.socialMediaIcon} /></a>
                    <a href="https://www.linkedin.com/in/bruno-gonzales-lorena-1110131b8/"><img src={linkendin} alt="linkedin" className={styles.socialMediaIcon} /></a>
                </div>
            </div>

        </div>

        </footer>
    )
}

export default Footer;