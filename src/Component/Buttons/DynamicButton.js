import React from 'react';

const DynamicButton = ({ type,variant,className,id ,onClick ,children , style, text, fontColor, backgroundColor, fontSize,textAlign }) => {
  return (
    <button type={type? type:"button"} variant={variant} className ={className ? `btn-component ${className}`:"btn-component"} 
    id= {id} 
    onClick = {onClick}
     style = {{ ...style,padding: '10px' ,color:fontColor,backgroundColor: backgroundColor,text,  fontSize: fontSize ,textAlign:textAlign}}
     >
      {text}
    </button>
  );
};

export default DynamicButton;
