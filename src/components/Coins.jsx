import React, { useEffect, useState } from 'react'
import axios from "axios"
import CoinCard from './CoinCard'
import { server } from '../index'
import Header from './Header'
import ExchangeCard from './ExchangeCard'
import Errorcomponent from './Errorcomponent'
import { Container, HStack ,Button, RadioGroup,Radio} from '@chakra-ui/react'
import Loader from './Loader'
const Coins = () => {
  const [coins ,setcoins]=useState([]);
  const [loading , setLoading]=useState(true);
  const [error,seterror]=useState(false);
  const [page , setPage]=useState(1);
  const [currency , setcurrency]=useState("inr")
    const btns=new Array(132).fill(1)

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }
  useEffect(()=>{
    
    const fetchcoins=async()=>{
      try{
        const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setcoins(data)
        console.log(data)
        setLoading(false);
      }
    catch(error)
    {
      seterror(true);
       setLoading(false);
    }

    };
  fetchcoins();
  },[currency,page])

   const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$"

  if(error)return<Errorcomponent message={"error while fetching the coins"}/>
  

  return (
    <>
    <Header/>
    <div style={{marginBottom:'2rem'}}></div>
     <Container maxW={"container.xl"}>
     
     
     {loading ? <Loader/> : <>
      
     <RadioGroup value={currency} onChange={setcurrency} P={"4"}>
       <HStack m={'auto'} textAlign={'center'} alignItems={'center'} spacing={"4"}>
        <Radio value={"inr"} >INR</Radio>
        <Radio value={"usd"} >USD</Radio>
        <Radio value={"eur"} >EUR</Radio>
       </HStack>
     </RadioGroup>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
      {
        coins.map((i)=>(
         <CoinCard 
         id={i.id}
          key={i.id}
         name={i.name}
         price={i.current_price}
                       img={i.image}
                    symbol={i.symbol}
                      url={i.url}
                      currencySymbol={currencySymbol}/>
        ))
      }
      </HStack>
      <HStack w={"full"} overflowX={"auto"} p={"8"}>
         {
          btns.map((item,index)=>(
            <Button 
             KEY={index}
            background={"blackAlpha.900"}  color={"white"} onClick={()=>changePage(index+1)}>
            {index+1}
         </Button>
          ))
         }
      </HStack>
     
     </>}
     
     </Container>
     
       
   
    
     </> )
}

export default Coins