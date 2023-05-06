import { useLocation, useParams } from 'react-router-dom';
import TitleBar from '../TitleBar/TitleBar';
import Footer from '../Footer/Footer';
import styles from './CardDetail.module.css'
import { useSelector } from "react-redux"; 

const CardDetail = ()=>{

    const name = useParams();
    const location = useLocation();
    const pokemones = useSelector(state => state.pokemones);
    const pokemon = pokemones.find(pokemon => pokemon.name === name.id);

    if (typeof pokemon.id === 'string') {
        // convertir la propiedad 'types' a un arreglo de strings
        // pokemon.types = [];
        pokemon.types = pokemon.Types.map(type => type.name);
    }
    console.log("pokemon.types");
    console.log(pokemon.types);

    // {if(name !== Number){
    //     pokemon.types = 
    // } ;}
    return(
        <div className={styles.cont}>
            <TitleBar type={"/pokedetail"} text={`Pokenon--> ${pokemon.name}`} />
            <div className={styles.card}>
                <div className={styles.image}>
                    <img className={styles.impoke} src={pokemon.img} alt="" />
                </div>
                <div className={styles.text}>
                    {/* <div>Name: {pokemon.name}</div> */}
                    <div className={styles.tex}>HP: {pokemon.hp}❤</div>
                    <div className={styles.tex}>Attack: {pokemon.attack}🔪</div>
                    <div className={styles.tex}>Defense: {pokemon.defense}🛡</div>
                    <div className={styles.tex}>Speed: {pokemon.speed}🏃‍♂️</div>
                    <div className={styles.tex}>Types: {pokemon.types.join("---")}</div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CardDetail;