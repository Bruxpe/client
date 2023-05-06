import styles from "./Inicio.module.css"
import pikachu from "../../Assets/pikachu.png"
import pika1 from "../../Assets/pika1.png"
import pika2 from "../../Assets/pika2.png"
import pika3 from "../../Assets/pika3.png"
import pika4 from "../../Assets/pika4.png"
import pika5 from "../../Assets/pika5.png"
import pika6 from "../../Assets/pika6.png"
import pika from "../../Assets/fondos pokemon/pikachu-cute.gif"
import charmander from "../../Assets/fondos pokemon/charmander-gif-pokemon.gif"
import eve2 from "../../Assets/fondos pokemon/eevee-pokemon.gif"
import fla from "../../Assets/fondos pokemon/flareon-eevee.gif"
import vulpix from "../../Assets/fondos pokemon/pokemon-vulpix.gif"
const  Inicio = ()=>{
    return(
        <>
       <a className={styles.pulsar}> by: Bruno G.</a>
        <div className={styles.contenedor}>
        <img className={styles.pika} src={pikachu} alt="Imagen de Pikachu" />
       <a className={styles.pulsar}>welcome to pokemon's Api 🌊.</a>
        <br />
        <br />
       <a href="/pokemons" className={styles.pulsar}> ➡➡ Click here, to go Home page.</a>
       
       <a className={styles.pulsar}> Gracias por su visita</a>
       <a className={styles.pulsar}> vuelva pronto¡¡ </a>
        </div>
        
        <div className={styles.fondo}>
        {/* <img src={pika1}/> */}
        <img src={pika2}/>
        <img src={pika3}/>
        <img src={pika4}/>
        <img src={pika5}/>
        <img src={pika6}/>
        
        </div>
        <div className={styles.container}>
        <img className={styles.imgx} src={eve2} alt="" />
        {/* <img src={eve1} alt="" /> */}
        <img className={styles.imgx} src={pika} alt="" />
        <img className={styles.imgx} src={fla} alt="" />
        <img className={styles.imgx} src={vulpix} alt="" />
        <img className={styles.imgx} src={charmander} alt="" />
        </div>
       

        </>
    )
}

export default Inicio