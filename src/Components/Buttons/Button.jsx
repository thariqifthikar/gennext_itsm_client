import React from 'react';
import styled from "styled-components";
import "@fontsource/poppins";

const ButtonComponents =styled.button`
position :
`

const Button=({type,variant,className,id ,onClick ,children , style, text, fontColor, backgroundColor, fontSize,textAlign})=>{
   
    return(
    <button type={type? type:"button"} variant={variant} className ={className ? `btn-component ${className}`:"btn-component"} 
    id= {id} 
    onClick = {onClick}
    style={{ width: '150px',
    height: '49px' ,
    borderRadius: '20px',
    color:"#FFFFFF" ,
    backgroundColor: "#8133BE",
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
export default Button;