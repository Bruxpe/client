import styles from "./TitleBar.module.css"
import logo  from "../../Assets/gengarlogo.png"


const TitleBar = ({type,text}) =>{
    const tipo = type ==="/delete" || type ==="/create"|| type ==="/pokedetail" ? "/pokemons" : "/";
 
    return(
        <>
        <div className={styles.bar}>
        <a href="/">
            <img src={logo} alt="" className={styles.logox} />
        </a>
        
        <div className={styles.letras}>{text}</div>
        <a href="/deletepoke">
            <button className={styles.backbutton1}>Delete</button>    
        </a>
        <a href="/createpoke">
            <button className={styles.backbutton2} >Create</button>
        </a>
        <a href={tipo}>
            <button className={styles.backbutton}>BACK</button>
        </a>
        <br />
        {/* <div className={styles.pokelo}><img  src={pokemon} alt="" /></div> */}
        </div>

        </>
    )
}

export default TitleBar;
