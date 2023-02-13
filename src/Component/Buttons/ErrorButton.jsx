import React from 'react';
import styled from "styled-components";
import "@fontsource/poppins";


const ErrorButtonComponents =styled.button`
position :
`

const ErrorButton=({type,variant,className,id ,onClick ,children , style, text, fontColor, backgroundColor, fontSize,textAlign})=>{
   
    return(
    <button type={type? type:"button"} variant={variant} className ={className ? `btn-component ${className}`:"btn-component"} 
    id= {id} 
    onClick = {onClick}
    style={{ width: '150px',
    height: '40px' ,
    borderRadius: '20px',
    color:"#FFFFFF" ,
    backgroundColor: "#E23232",
    className:'DefaultFont',
    fontSize:18,
    textAlign:'center',
    borderColor:"Background",
    
    
 }}

    >
        {text}
        
        </button> 
    
    )
};
export default ErrorButton;