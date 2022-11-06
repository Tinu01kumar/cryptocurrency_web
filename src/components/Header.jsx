// import { Button , HStack } from '@chakra-ui/react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth0, User } from "@auth0/auth0-react";
// const Header = () => {
   
//      const {loginWithRedirect, isAuthenticated ,logout , user } = useAuth0();
//   return (
//    <>
//     <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
//      <Button variant={"unstyled"} color={"white"}>
//           <Link to="/">Home</Link>
//      </Button>
    
//      <Button variant={"unstyled"} color={"white"}>
//           <Link to="/exchanges">Exchanges</Link>
//      </Button>
    
//      <Button variant={"unstyled"} color={"white"}>
//           <Link to="/coins">Coins</Link>
//      </Button>
//      <Button variant={"unstyled"} color={"white"}>
//           <Link to="/coins"></Link>
//      </Button>


//      <div style={{display:"flex" , justifyContent:"right" , textAlign:'right' , alignItems:'right'}}>
     
    
//      {isAuthenticated && <p style={{color:'white', textAlign:'center' , justifyContent:'right'}}>{User.name}</p>}
     
//      {
//           isAuthenticated ? (
//                <button style={{color:'white' , alignItems:"right", justifyContent:'right'}} onClick={() => logout({ returnTo: window.location.origin })}>
//                Log Out
//              </button>
//           ):(
//                <button style={{color:'white' , alignItems:"right" ,justifyContent:"right"}} onClick={() => loginWithRedirect()}>Log In</button>

//           )
//      }
 

//      </div>
    
//     </HStack>
//    </>
//   )
// }

// export default Header







import { Button , HStack } from '@chakra-ui/react'
import React from 'react'
import { Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useAuth0, User } from "@auth0/auth0-react";
import '../css/first.css';
const Header = () => {
   
     const {loginWithRedirect, isAuthenticated ,logout , user } = useAuth0();
  return (
   <>
   <div className='main' style={{display:"flex" ,textAlign:'center',justifyContent:"space-between" ,padding:'17px', paddingRight:"2rem", fontSize:'17px',
   fontWeight:'500',  
   alignContent:'center', alignItems:'center', boxShadow:' 0 3px 2px -2px rgba(0,0,0,.2)'  }}>






      <div className='firstdiv' style={{display:'flex',justifyContent:'space-between',textAlign:'center',alignContent:'center',alignItems:'center'}}>


      

      <ul className='firstdiv_ul' style={{display:"flex" , justifyContent:"space-between" , textDecoration:"none" ,       listStyle:"none" , textAlign:'center',alignContent:'center',alignItems:'center' }}>
      

        <li className='linothover' style={{ marginRight:'2px' , padding:'8px 1rem 8px 1rem'}}>  <Link to="/"><img style={{height:"42px", }} src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/32903/bitcoin-clipart-md.png" ></img></Link></li>
        <li className='allowhover' style={{padding:'8px 1rem 8px 1rem'}}> <Link to="/exchanges">Exchanges</Link></li>
        <li className='allowhover' style={{padding:'8px 1rem 8px 1rem'}}>  <Link to="/coins">coins</Link>
          </li>
        </ul>
      </div>


      <div  className='btndiv' style={{display:'flex',textAlign:'center' ,alignContent:'center', alignItems:'center' , }}>
      {isAuthenticated && <p style={{color:'black',  
      display:"inline-block",
     fontSize:"1rem",
     
       width:"3rem",
       height:"3rem",
       lineHeight:"3rem",
       textAlign:"center",
       borderRadius:"50%",
       background:"#FFFF00",
       verticalAlign:'middle',
       fontSize:"25px",
       marginRight:'1rem',
       color:"rgb(39, 147, 255)",
      
 }}>{User.name.charAt(0)}</p>}
     
            {
               isAuthenticated ? (
                    <button className='btn' style={{color:'white' , 
                    fontSize:'17px',
   fontWeight:'400',  alignItems:"right", justifyContent:'right',
   marginLeft:"2rem",
   backgroundColor:"rgb(39, 147, 255)" ,
   borderRadius:'5px',padding:'10px 14px 10px 14px',}} onClick={() => logout({ returnTo: window.location.origin })}>
                    signout
                   </button>
                 ):(
                      <button style={{color:'white' , 
                      fontSize:'17px',
     fontWeight:'400',  alignItems:"right", justifyContent:'right',
     marginLeft:"2rem",
     backgroundColor:"rgb(39, 147, 255)" ,
     borderRadius:'5px',padding:'10px 14px 10px 14px',}} onClick={() => loginWithRedirect()}>signin</button>)
                 }
      </div>
   </div>
   </>
  )
}

export default Header




