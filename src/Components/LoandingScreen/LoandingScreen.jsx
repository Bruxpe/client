
import gengar from "../../Assets/fondos pokemon/gengar-pokemon.gif"
import styles from "./LoandingScreen.module.css";

const LoadingScreen = () => {
    return (
        <>
            <div className={styles.LoadingScreen} >
                <img  src={gengar} alt="Loading..." />
                <h1  className={styles.titulo}>Loading....</h1>
            </div>
        </>
    )
}

export default LoadingScreen;   