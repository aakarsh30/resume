import React,{useState,useEffect} from 'react'
import styles from './Skills.module.css';
export default function Skills({score,name, ...props}) {
    // const [cont,setcont]=useState("0");
    

    // function runfnc(){
    //     let start=setInterval(()=>{
    //         let num=parseInt(cont);
    //         num++;
    //         let str=num.toString();
    //         setcont(str);
            
    //         if(cont==score) clearInterval(start);
    //     },1);
    // };

    return (
        <>
            <div className={styles.cont} {...props} >
                <text id='value' className={styles.score}  >{score}/10</text>
                <span className={styles.div}></span>
                <text className={styles.name}>{name}</text>
            </div>
        </>
    )
}
