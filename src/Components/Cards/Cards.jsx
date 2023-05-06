import styles from "./Cards.module.css"
import Card from "../Card/Card"

const Cards =({pokemones}) =>{
    
    
    // const filteredPokemones = pokemones.map((pokemon) => {
    //     if (pokemon.Types) {
    //         pokemon.types = pokemon.Types.map((type) => type.name.toLowerCase());
    //         delete pokemon.Types;
    //     }
    //     console.log("abajto");
    //     console.log(pokemon);
    //     return pokemon;
    // });
    // const otro =()=>{
    //     let nuevo = [];
    //     nuevo = [...nuevo,filteredPokemones()]
    //     return nuevo;
    // }

    

    return(
        <div className={styles.card}>
            {/* {console.log("golas")}
            {console.log(otro())}
             */}
            
            
            {
                
                pokemones.map(({attack, defense, hp, id,img,name, speed,types}) => {
                    return < Card 
                       id={id}
                       name={name}
                       attack={attack}
                       defense={defense}
                       img={img}
                       hp={hp}
                       speed={speed}
                       types = {types}
                       
                    //    onClose={onClose}asdsa
                    />
                 } )
            }

        </div>
    )
}

export default Cards;