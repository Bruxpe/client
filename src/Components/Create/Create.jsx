import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllTypes, postPokeArray,getAllPokemos } from "../../Redux/actions";
import TitleBar from "../TitleBar/TitleBar";
import Footer from "../Footer/Footer";
import styles from "./Create.module.css";
import ash from "../../Assets/ash.gif"

const Create =()=>{
    //traemos el dispacth para usarlo
    const dispatch = useDispatch();
    //se me traigo a todos los tipos de pokemones
    const tipospokemones = useSelector(state => state.types)// Aca esta incluido el "All",para los filtros
    const pokemons = useSelector(state => state.pokemones)
    
  
    // const [imageSrc, setImageSrc] = useState(""); // estado loval Img
    const [selectedName, setSelectedName] = useState(""); // estado loval Img
    const [selectedHp, setSelectedHp] = useState(""); // estado local de Vida
    const [selectedAttack, setSelectedAttack] = useState(""); // estado local de Ataque
    const [selectedDefense, setSelectedDefense] = useState("");// estado local de Defense
    const [selectedImg, setSelectedImg] = useState("");// estado local de Defense
    const [selectedSpeed, setSelectedSpeed] = useState(""); // estado local de Speed
    const [selectedTypesArray ,setSelectedTypesArray ] = useState([]);//Estado local Array types
    const [selectedErros, setSelectedErros] = useState([]);



    const arrayTpokemonesunique = Array.from(new Set(selectedTypesArray))
    
    const arrayPost = {
        "name": selectedName,
        "img": selectedImg,
        "hp": selectedHp,
        "attack": selectedAttack,
        "defense": selectedDefense,
        "speed": selectedSpeed,
        "types": arrayTpokemonesunique.map(a=>tipospokemones.indexOf(a))
    }
    

    //Ahora modificaremos el estado local de Types
    // const arrayTypesFinal = selectedTypesArray =""? [] : [...selectedTypesArray,selectedTypesArray];


    //Hacemos un manejador
    //Manejador de Selecionar Nombre
    const handleNameChange = (e)=>{
        setSelectedName(e.target.value)
    }
    const handleHpChange =(e)=>{
        setSelectedHp(e.target.value)
    }
    const handleAttackChange =(e)=>{
        setSelectedAttack(e.target.value)
    }
    const handleDefenseChange =(e)=>{
        setSelectedDefense(e.target.value)
    }
    const handleSpeedChange =(e)=>{
        setSelectedSpeed(e.target.value)
    }
    //Manejador de tipos agregados 
    const handleArrayTypesChange = (e)=>{
        setSelectedTypesArray([...selectedTypesArray,e.target.value])
    }
    //Manejador de imagen 
    const handleLinkImgChange = (e)=>{
        setSelectedImg(e.target.value)
    }

    //manejador de limpiar array
    const handleArrayLimpiar = (e)=>{
        setSelectedTypesArray([])
    }

    //? ------------------------- enviar al servidor
    
    const handleInputPostSumit = (event)=>{
        event.preventDefault();
     
        let newArrayErros = erroname.concat(errorHp,errorAttack,errorDefense,errorSpeed,errorimag)
        console.log("newArrayErros");
        console.log(newArrayErros);

      
        


        if(selectedName === "" || selectedHp === "" || selectedAttack === "" || selectedDefense === "" || selectedSpeed === "" || selectedImg === "") return alert("Parece que existe un dato vacío, verificar por favor");
        console.log(newArrayErros);
        if(newArrayErros.length !== 0) return alert("Parece que existe un dato incorrecto, verificar por favor");
       
        
           postPokeArray(arrayPost)
            console.log(arrayPost);
           document.getElementById("Name").value = "";
           document.getElementById("Hp").value = "";
           document.getElementById("Attack").value = "";
           document.getElementById("Defense").value = "";
           document.getElementById("Speed").value = "";
           document.getElementById("Link").value = "";
           handleArrayLimpiar();
           alert("Se creo correctamente el pokemon :v");
      
    }
    
    

    //controlador del Name
    var erroname = []
    if(selectedName.length>15 )  erroname = [...erroname,"Max. 15 caracteres"];
    if(pokemons.find(a=> a.name.toLowerCase() === selectedName.toLowerCase())) erroname=[...erroname,"El nombre ya existe¡¡"]

    //controlador del Hp
    let errorHp=[]
    if(/[a-zA-Z]/.test(selectedHp)) errorHp = [...errorHp,"Solo numeros"]
    if(selectedHp >150 || selectedHp<10 && selectedHp !== "")errorHp=[...errorHp,"Vida entre 10 y 150"]; 
    console.log(errorHp)
    //controlar del Attack
    let errorAttack = []
    if(/[a-zA-Z]/.test(selectedAttack)) errorAttack =  [...errorAttack,"Solo numeros"]
    if(selectedAttack >150 || selectedAttack<10 && selectedAttack !== "")errorAttack=[...errorAttack,"Vida entre 10 y 150"]; 
    //controlar del Defense
    let errorDefense = []
    if(/[a-zA-Z]/.test(selectedDefense)) errorDefense =  [...errorDefense,"Solo numeros"]
    if(selectedDefense >150 || selectedDefense<10 && selectedDefense !== "")errorDefense=[...errorDefense,"Vida entre 10 y 150"]; 
    //controlar del Speed
    let errorSpeed = []
    if(/[a-zA-Z]/.test(selectedSpeed)) errorSpeed =  [...errorSpeed,"Solo numeros"]
    if(selectedSpeed >150 || selectedSpeed<10 && selectedSpeed !== "")errorSpeed=[...errorSpeed,"Vida entre 10 y 150"]; 
    //Controlador de la Imagen
    let errorimag =[]
    if(!/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i.test(selectedImg) && selectedImg !=="" ) errorimag = [...errorimag,"Formato no valido"]

    


    // Cuando se comienze la pagina, se trae todos los tipos de pokemones

    useEffect(()=>{
        dispatch(getAllTypes());
        
    },[]);
    
    useEffect(()=>{
        dispatch(getAllPokemos());
   
    },[]);


    return(
        <div className={styles.cont}>
            <TitleBar type={"/create"} text={"Welcome 🌍, You can create your Pokemon"}></TitleBar>
            {/* aca el segundo */}
            <div className={styles.card}>
           <div >
           {/* aca el primer */}
                <img className={styles.imgx} src={ash} alt="Loading..." />
            
                </div>
                    <form className={styles.form} >

                        <label className={styles.labe} htmlFor="">Name:<input className={styles.inputs} id="Name" onChange={handleNameChange } placeholder="Name" type="text" /></label>
                        
                        <a className={styles.messageerror}>{ erroname} </a>
                        {console.log("holas")}
                        <label className={styles.labe} htmlFor="">Hp: <input className={styles.inputs} id="Hp" onChange={handleHpChange} placeholder="Pokemon life" type="text" /></label>
                        <a className={styles.messageerror}>{errorHp.map(a=><a>{a}</a>)}</a>
                        <label className={styles.labe} htmlFor="">Attack:<input className={styles.inputs} id="Attack" onChange={handleAttackChange} placeholder="Pokemon Attack" type="text"  /></label>
                        <a className={styles.messageerror}> {errorAttack.map(a=><a>{a}</a>)}</a>    
                        <label className={styles.labe} htmlFor="">Defense:<input className={styles.inputs} id="Defense" onChange={handleDefenseChange} placeholder="Pokemon Defense" type="text" /></label>
                        <a className={styles.messageerror}>{errorDefense.map(a=><a>{a}</a>)}</a>
                        <label className={styles.labe} htmlFor="">Speed:<input className={styles.inputs} id="Speed" onChange={handleSpeedChange} placeholder="Pokemon Speed" type="text" /></label>
                        <a className={styles.messageerror}>{errorSpeed.map(a=><a>{a}</a>)}</a>
                        <label className={styles.labe} htmlFor="">Typos de pokemon: 
                        
                        <select className={styles.selec} value='' onChange={handleArrayTypesChange}>
                                {tipospokemones.map(tipo =>(
                            <option value={tipo} >{tipo}</option>))
                                }
                        </select>
                        <br />
                        <label htmlFor="">Types selecteds:  {arrayTpokemonesunique.join(" -")}</label>
                        <br />
                        <button className={styles.butt} type="button" onClick={handleArrayLimpiar}>Clear selection</button>
                        </label>
                        
                        <label className={styles.labe} htmlFor="">Image Link:<input className={styles.inputs} id="Link" onChange={handleLinkImgChange} placeholder="Pokemon Speed" type="text" /></label>
                        <img className={styles.im} src={ selectedImg} alt="" />
                        <a className={styles.messageerror}>{errorimag}</a>
                        <br />
                        <button className={styles.butt} id="enviar" type="submit" onClick={handleInputPostSumit} >Submit</button>
                        
                    </form>    
                </div>

                              
            <Footer></Footer>
        </div>
    )

}

export default Create;
