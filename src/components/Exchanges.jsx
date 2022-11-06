import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from './Header'
import { server } from '../index'
import ExchangeCard from './ExchangeCard'
import Errorcomponent from './Errorcomponent'
import { Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
const Exchanges = () => {
  const [exchanges ,setexchanges]=useState([])
  const [loading , setLoading]=useState(true);
  const [error,seterror]=useState(false)
  useEffect(()=>{
    
    const fetchexchange=async()=>{
      try{
        const {data}=await axios.get(`${server}/exchanges`);
        setexchanges(data)
        setLoading(false);
      }
    catch(error)
    {
      seterror(true);
       setLoading(false);
    }

    };
  fetchexchange();
  },[])

  if(error)return<Errorcomponent message={"error while fetching the url"}/>
  

  return (

    <>
    <Header/>
    <div style={{marginBottom:'2rem'}}></div>
   <div padding="2rem">
   </div>
     <Container maxW={"container.xl"}>
   
     
     {loading ? <Loader/> : <>
     
      <HStack wrap={"wrap"} justifyContent="space-evenly">
      {
        exchanges.map((i)=>(
         <ExchangeCard 
          key={i.id}
         name={i.name}
                       img={i.image}
                      rank={i.trust_score_rank}
                      url={i.url}/>
        ))
      }
      </HStack>
     
     </>}
     
     </Container>
     
       
   
    
     </>)
}

export default Exchanges