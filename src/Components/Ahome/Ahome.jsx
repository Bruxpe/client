
import { useSelector, useDispatch } from "react-redux"; 
import { useEffect, useState } from "react";
import { getAllPokemos, getAllTypes } from "../../Redux/actions";
import styles from "./Ahome.module.css";
import TitleBar from "../TitleBar/TitleBar";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import LoadingScreen from "../LoandingScreen/LoandingScreen";

//En esta pagina se encuetra todos los filtro, cuando se cambia un estado, los el array del estado local
//, se filtra, y obtiene solos los resultados obtenidos, dandonos asi, una mejor interaccion con el cliente.

const Ahome= ()=>{
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemones) // Se agrega el estado global de toda la info. de pokemnones
    const tipospokemones = useSelector(state => state.types) //Se agrega el estado global de tipos de pokemones
    const [selectedType, setSelectedType] = useState("All");// el primero es donde esta all, SET el segundo es donde se actualiza
    const [selectedFuente, setSelectedFuente] = useState("All");// Se inicializa en All
    const [selectedOrden, setSelectedOrden] = useState("Normal");//Se inicializa en Normal
    const [selectedPaginador, setSelectedPaginador] = useState(1);// ese es el estado de los botones
    const [selectedBuscador, setSelectedBuscador] = useState(""); // este es el search
 


    //-------Filtro de pokemones de BD con Types:-------
  
    const newPokemonArray = pokemons.map(p => {
        return {
            attack: p.attack,
            defense: p.defense,
            hp: p.hp,
            id: p.id,
            img: p.img,
            name: p.name,
            speed: p.speed,
            types: p.Types ? p.Types.map(a=>a.name): p.types
        };
    });

    
    
                                                    //Filtra la lista de pokemones                           
    //Filtra la lista de pokemones                           //?aca es donde filtra 
    const filteredPokemon = selectedType === "All" ? newPokemonArray: newPokemonArray.filter(p => p.types.includes(selectedType));
                                                                //?sino 


    const newFilteredPokemon = selectedFuente === "All"
        ? filteredPokemon
        : selectedFuente === "Bd"
            ? filteredPokemon.filter(p => typeof p.id === "string")
            : filteredPokemon.filter(p => typeof p.id === "number");

    const OrdenFilterPokemn = selectedOrden ==="Normal"
        ? newFilteredPokemon
        : selectedOrden ==="A-Z"
            ?   newFilteredPokemon.sort((a, b) => (a.name > b.name) ? 1 : -1)
        : selectedOrden ==="Z-A"
            ?   newFilteredPokemon.sort((a, b) => (a.name < b.name) ? 1 : -1)
        : selectedOrden ==="Por vida"
            ?   newFilteredPokemon.sort((a, b) => b.hp - a.hp)
            :   newFilteredPokemon.sort((a, b) => b.attack - a.attack)


    //Fin del Filtrado de pokemones
                                                         
                                                         
    // Filtro del buscador
     const BuscardorFilterPokemon = OrdenFilterPokemn ===""
         ? OrdenFilterPokemn
         : OrdenFilterPokemn.filter(pokemon => pokemon.name.startsWith(selectedBuscador))
                                                     

                                                        
                                            //   Paginador
    const PaginadorFilterPokemon = BuscardorFilterPokemon.slice( (8*(selectedPaginador-1)),((8*(selectedPaginador))) )
                                            
  
                                //?--------MANEJADORES DE ESTADOS------
    //Controlador de Enventos --> Tipos de pokemones
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setSelectedPaginador(1)
      };
    //Controla el evento de Fuente
      const handleFuenteChange = (e) => {
        setSelectedFuente(e.target.value);
        setSelectedPaginador(1)
      };
    //Controla el evento de Fuente
    const handleOrdenChange = (e) => {
        setSelectedOrden(e.target.value);
        setSelectedPaginador(1)
    };
    //Controla el evento del buscador
    const handleBuscadorChange = (e) => {
        setSelectedBuscador(e.target.value);
        setSelectedPaginador(1)
    };
    //Controla el evento de los botones
    const handlePaginadorChange = (e) =>{
        setSelectedPaginador(e.target.value)
    }

    const handleBotonBuscar = (e)=>{
        if(selectedBuscador === ""){
            alert("Nothing to search  ")
        }else{
            return
        }
    }
    //Controla el evento para el Siguiente
    const handlePaginadorChangeSiguiente = (e) =>{

        if(Math.ceil(BuscardorFilterPokemon.length/8) === selectedPaginador){
            return
        }else{
            setSelectedPaginador(selectedPaginador+1);
        }
       
    }
    //Controla el evento para el anterior
    const handlePaginadorChangeAnterior = (e) =>{
        if(1 === selectedPaginador){
            return
        }else{
            setSelectedPaginador(selectedPaginador-1);
        }
    }

    // cuando se carga la pagina, se llena el array vacio con pokemones
    useEffect(()=>{
        dispatch(getAllPokemos());
   
    },[]);
   
    

    // cuando se carga la pagina, se llena el array vacio con los tipos
    useEffect(()=>{
        dispatch(getAllTypes());
   
    },[]);
    
   if(pokemons.length === 0){
    return(
        <LoadingScreen/>
    )
   }else{
    return(
        <div className={styles.cont}>
            
        <TitleBar  type={"Principal"} text={"MANAGE POKEMONS¡¡"}> </TitleBar>
        {/* <a>{pokemones[0].name}</a> */}
      <br />
      //           

       <div style={{ display: "flex", flexDirection: "row" }}>
                        {/* ACA ESTA EL IMPUT */}
        <input placeholder="Name of the Pokemon to search" className={styles.searinput} type="search" onChange={handleBuscadorChange} />
       
        <button 
        className={styles.buttoninput} onClick={handleBotonBuscar} > Search
        </button>
        </div>  


        <div className={styles.searchbar}>
        

            
{/* //----------- Ordenamiento de Pokemones */}
        <div className={styles.filtra}>
            <div >Order by :</div>
            <select className={styles.opciones} onClick={handleOrdenChange}>

                <option value="Normal">Normal</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Por vida">Hit Points</option>
                <option value="Por ataque">Attack</option>
            </select>
            <div >Obtained from: </div>
            
{/* //----------- Seleccion fuente (BD, API) de Pokemones */}
            <select  value={selectedFuente} onChange={handleFuenteChange} className={styles.opciones}>
                <option value="All" >All</option>
                <option value="Bd" >Bd</option>
                <option value="Api" >Api</option>
             
            </select>
{/* //----------- Seleccion de tipos de Pokemones */}
            <div >Pokemon's types:</div>
            <select value={selectedType}  onChange={handleTypeChange} className={styles.opciones}>
               {tipospokemones.map(tipo =>(
                    <option value={tipo} >{tipo}</option>
                ))
               }
                
             
            </select>
        </div>
        </div>
        <div className={styles.pagina}>
        <div>Page : {selectedPaginador}</div>
        </div>


        <Cards pokemones={PaginadorFilterPokemon}></Cards>
               
        <div className={styles.pagina}>
        <div>Page: {selectedPaginador}</div>
        </div>
        <div className={styles.numeros}>
            <button className={styles.numero} onClick={handlePaginadorChangeAnterior}>Previous</button>
        {Array.from({ length: Math.ceil(BuscardorFilterPokemon.length/8) }, (_, i) => i + 1).map((page) => (
                                //Funcion anonima   se simula un evento
                        <button onClick={() => handlePaginadorChange({ target: { value: page } })} value={selectedPaginador} key={page}  className={styles.numero}  >
                            {page}
                        </button>
            ))}
            <button className={styles.numero} onClick={handlePaginadorChangeSiguiente}>Next</button>
        </div>
           

            <Footer/>
        </div>
    )
   }


   
}
export default Ahome