import React from 'react'
import Header from './Header'
import {Link} from "react-router-dom"
import '../css/first.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Home = () => {
  return (
   <>
   
   
   <Header/>
   <div className='homealldiv' style={{margin :"0px 12px 0px 12px" }}><hr style={{fontWeight:"33px"}}></hr> </div>


   <div className='flexstart' >
      <div className='content' >
      <p style={{fontSize:'2rem'}}>Blockchain solution </p>
           
            <p style={{fontSize:'2rem'}}>and cryptocurrency</p>
            <p>The tools and information you need to buy </p>
            <p> sell trade invest and spend cryptocurrencies</p>
            <a target="_blank" href="https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency">
            
            <button className='btnhomepage' >Get Started</button>
            </a>
      </div>
      <div className='imghome'> 
          <img    src="https://www.bitcoin.com/images/uploads/homepage-hero-lg@2x.png">
             
          </img> 
      </div>
   </div>

    <div style={{padding:"2rem"}}>
        
    </div>

    <div classname="aftermainpage" style={{textAlign:'center'}}>
    <p style={{fontSize:"2rem" , textAlign:'center'} } > What is cryptocurrency? </p>
    <p>A cryptocurrency is a digital currency, </p>
    <p>which is an alternative form of payment created using encryption algorithms.</p>
     
    </div>

    <div style={{ display:"flex", justifyContent:"center", margin:"auto", marginTop:"3rem" , textAlign:"center" ,alignItems:"center" , margin:'10px' , }}>
    <iframe width="900" height="506" src="https://www.youtube.com/embed/1YyAzVmP9xQ" title="Cryptocurrency In 5 Minutes | Cryptocurrency Explained | What Is Cryptocurrency? | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
 
    <div style={{ textAlign:"center",   justifyContent:'center' , padding:"2rem"}}>
          <p style={{fontSize:"2rem"}}>Why is cryptocurrency the future of finance?</p>
          <p>Cryptocurrencies are the first alternative to the traditional banking system, and have powerful advantages over previous payment methods and traditional classes of assets. Think of them as Money 2.0. -- a new kind of cash that is native to the internet, which gives it the potential to be the fastest, easiest, cheapest, safest, and most universal way to exchange value that the world has ever seen.</p>
    </div>
   

    <div>
    
    </div>
     <div>
     <p style={{fontSize:"2rem" ,textAlign:"center" , padding:"2rem"}}>
     How blockchain works
     </p >
     <img style={{height:"20rem" , margin:"auto" , }} src="https://www.pwc.com/us/en/industries/financial-services/images/2022-blockchain-graphic-update-how-blockchain%20works.png"></img>
     </div>
     
     <div>
     <p style={{fontSize:"2rem" ,textAlign:"center" , padding:"2rem"}}>
     Blockchain's potential applications
     </p>
     <img  style={{height:"20rem" , margin:"auto" , }}src="https://www.pwc.com/us/en/industries/financial-services/images/2022-blockchain-graphic-update-blockchains-potential-applications.png"></img>
     </div>
   
      <div style={{textAlign:"center",padding:"2rem"}}>
        <p style={{fontSize:"2rem"}}>Contact me </p>

             
      </div>

      <div  className='contactme'>
           <div  className='contactlink'>
           <a target="_blank" href="https://www.linkedin.com/in/tinu--kumar941/" > <LinkedInIcon style={{fontSize:"4rem" , color:"blue"}}/> </a>
           </div>
           <div className='contactlink' style={{fontSize:"2rem" , color:"red"}}><Link to="/about">About me</Link></div>
           <div  className='contactlink'>
           <a target="_blank" href="https://github.com/Tinu01kumar"> <GitHubIcon style={{fontSize:"4rem" , color:"black"}}/> </a>
           </div>
         
      </div>
    




   </>
  )
}

export default Home