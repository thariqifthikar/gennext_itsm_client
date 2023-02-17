import React from 'react';
import '../../../src/App.css'

const DynamicButton = ({ type,variant,className,id ,onClick ,children , style, text, fontColor, backgroundColor,marginLeft, fontSize,textAlign,display, icon ,borderStyle,hoverStyle}) => {
  return (
    <button type={type? type:"button"} variant={variant} className ={className ? `btn-component ${className}`:"btn-component" } 
    id= {id} 
    onClick = {onClick}
    style={{
      ...style,
      padding: '10px',
      color: fontColor,
      backgroundColor: backgroundColor,
      borderStyle: borderStyle,
      text,
      marginLeft,
      fontSize: fontSize,
      display,
      textAlign: textAlign,
      "&:hover": hoverStyle // add this line to handle hover style
    }}
     >
      {icon}
      {" "} 
      {text}
    </button>
  );
};

export default DynamicButton;
