import './App.css';
import React from 'react'
import Button from './Component/Buttons/Button';
import Navbar from './Component/Navbar/Navbar';
import ButtonAnt from './Component/Buttons/ButtonAnt';


function App() {

  return (
    <React.Fragment>
      <div
        style={
          {
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"10px",
            backgroundColor :'purple' ,color:'white'

          }}
      >
          <Button color={ButtonAnt}>as1</Button>
          <ButtonAnt>as2</ButtonAnt>

          {/* <button>as3</button> */}
      </div>

      <div>
    <Button 
      text="Click me"
      onClick={() => alert('Button was clicked!')}
      style={{ backgroundColor: 'red', color: 'white' , width: '150px',
      height: '50px' , }}
    />
  </div>
    </React.Fragment>
    
    

  );
}

// const App = ()=>{
//   return(
//     <React.Fragment>
//       <div
//         style={
//           {
//             display:"flex",
//             alignItems:"center",
//             justifyContent:"center",
//             gap:"10px",

//           }}
//       >
//           <Button butt>as1</Button>
//       </div>
//     </React.Fragment>
//   );
// }

export default App;



