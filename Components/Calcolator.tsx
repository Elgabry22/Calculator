import { useEffect, useRef, useState } from "react"
import Calcstyle from '../styles/Calcolator.module.css'



export default function Calcolator(){

    let [numberss,setnumberss] = useState<number[]>([1,2,3,4,5,6,7,8,9]);
    let [operationns,setoperationns] = useState<number|null>()
    let [screen,setscreen] = useState<number>();
    let screenref =useRef<HTMLDivElement>(null!)   
  
    
    
    //Get numbers 
   
    

    let colonum:string ;
    let selectednums:any;

    //zero btn 
    let zerobtn = () => {
       colonum = screenref.current.innerHTML += '0';
        console.log(colonum)
   }
 

    let clicked = (i:number) => {
        selectednums = i;
        colonum = screenref.current.innerHTML += numberss[i];
        console.log(colonum)
    }

    //Delete btn (AC)
    let Acbtn = () => {
      setoperationns(null);
      colonum = '';
      num2 = '';
    }

  
    //oporations
    let sign:string;


    let num2:any;
    let plus = () => {
        sign = 'plus';
        num2 = colonum;
        screenref.current.innerHTML = '';
    }

    
    let minues = () => {
        screenref.current.innerHTML = '';
        num2 = colonum;
        sign = 'minues';
    }

    let items = () => {
        screenref.current.innerHTML = '';
        num2 = colonum;
        sign = 'items' 
    }

    let devied = () => {
        screenref.current.innerHTML = '';
        num2 = colonum;
        sign = 'devied' 
    } 
    
    let modules = () => {
        screenref.current.innerHTML = '';
        num2 = colonum;
        sign = 'modules' 
    } 


     //Calculate values
    let equal = () => {
       if(sign == 'plus'){
        setoperationns(+num2 + +colonum);
       }else if(sign == 'minues'){
        setoperationns(+num2 - +colonum); 
    }else if(sign == 'items'){
        setoperationns(+num2 * +colonum); 
      }else if(sign == 'devied'){
        setoperationns(+num2 / +colonum); 
      }else if(sign == 'modules'){
        setoperationns(+num2 % +colonum); 
      }

    }
    
    

    let datashow = numberss.map((items,i) => {
        return(
            
            <div key={Math.random()}  className={Calcstyle.test}>
            <button onClick={() => clicked(i)}  className={Calcstyle.numbers} >{items} </button> 
              </div>
              
        )
    })
    
 //console.log(numberss[x])
    return(
        <>
        <div className={Calcstyle.words}>
        <p>SPEED CODING</p>
        <span>Next Js,HTML,CSS,TYPESCRIPT</span>

        </div>

    <div className="maincalc">

       <div className={Calcstyle.borderdiv}>
       <div className={Calcstyle.screen} ref={screenref}>{operationns}</div> 
        <div className={Calcstyle.topsigns}> <button onClick={Acbtn} >AC</button> <button onClick={modules}  > % </button> <button onClick={devied} >/</button> <button onClick={items}>X</button> </div>  <br></br>
        <div className={Calcstyle.rightsigns}> <button onClick={minues}  className={Calcstyle.minues}>-</button> <button onClick={plus} className={Calcstyle.plus}>+</button> <button  onClick={equal}   className={Calcstyle.equal}>=</button> </div>
         {datashow}  
         
           <div className={Calcstyle.zeroandquma}>
             <button className={Calcstyle.zero} onClick={zerobtn} >0</button>
             <button className={Calcstyle.quma}>,</button>
             
            
             
           </div>
           
         </div>  

       
       
       
    </div>
    
        </>
    )
}