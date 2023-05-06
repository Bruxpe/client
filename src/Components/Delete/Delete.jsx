import TitleBar from "../TitleBar/TitleBar";
import { useSelector, useDispatch } from "react-redux"; 
import { useEffect, useState } from "react";
import styles from "./Delete.module.css"
import Footer from "../Footer/Footer"
import { getAllPokemos } from "../../Redux/actions";
import { deletePokeBd } from "../../Redux/actions";

const Delete =()=>{
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemones) // Se agrega el estado global de toda la info. de pokemnones
    const [selectedPokeBd, setSelectedPokeBd] = useState("no one");
    // solamente queremos los pokemones de la BD
    const bdpoke = pokemons.filter(a => typeof a.id !== 'number')
    //agregamos no one, como una opcion extra, despues se aplicara filtros para no romper la pagina
    bdpoke.unshift({id:"", name:"", attack:"", hp: "", img:""})

    //cargamos todos lo pokemons cuando se entre a la pagina
    useEffect(()=>{
        dispatch(getAllPokemos());
    },[]);

    const handleDelete = (e)=>{
        if(e.target.value !== "no one"){
            const selectedId = e.target.value;
            setSelectedPokeBd(bdpoke.find(a => a.id === selectedId))
        }else{
            return
        }
    }

    const handleDeltebutton = (e)=>{
     if(selectedPokeBd.id !== "" && selectedPokeBd !== "no one"){
        deletePokeBd(selectedPokeBd.id)
        alert("Pokemon Delete from DB")
        window.location.reload();
     }else{
        alert("No one Pokemon selected")
     }
    }
    return(
        <div className={styles.cont}>
        <TitleBar type={"/delete"} text={"Vamos a eleminar un Pokemon"}></TitleBar>
            <div className={styles.card}>
                <div className={styles.cabe}>
                    <div><b>Now, You can select a Pokemon to delete💥:</b> </div>
                    <select onChange={handleDelete} className={styles.cuadro}>
                        
                        {bdpoke.map(a=> 
                         <option value={a.id}>{a.name}</option>
                        )

                        }
                        
                    </select>
                </div>
                   <div className={styles.letras}>
                        <div>Name: {selectedPokeBd.name} </div>
                        <div>Attack 🤺⚔: {selectedPokeBd.attack} </div>
                        <div>Hp ❤: {selectedPokeBd.hp}</div>
                        <div>Image:</div>
                        <img src={selectedPokeBd.img} alt="" />
                        
                   </div>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <button className={styles.dele} onClick={handleDeltebutton} >Eliminar</button>
            </div>
        
        <Footer/>
        </div>
    )
}

export default Delete;