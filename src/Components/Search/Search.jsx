import styles from "./Search.module.css"

const Search =()=>{
    return(
        <div style={{ display: "flex", flexDirection: "row" }}>
        <input className={styles.searinput} type="search" />

        <button
        className={styles.buttoninput}> Buscar
        </button>
        </div>  
    )
}
export default Search