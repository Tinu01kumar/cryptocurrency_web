import { Container ,Stat,StatLabel,Box ,Radio ,Text,RadioGroup,HStack, VStack ,Img, StatNumber ,    StatArrow , StatHelpText,Badge , Progress } from '@chakra-ui/react'
import React ,{useState ,useEffect} from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {server} from "../index"
import Errorcomponent from './Errorcomponent';
import Header from './Header';
const CoinDetails = () => {

  
  const [coin,setCoin]=useState({});
  const[loading ,setLoading]=useState(true);
  const[error,seterror]=useState(false);
  const[currency,setcurrency]=useState("inr")


const params=useParams();
console.log("dfgsadf"+ params.id)
useEffect(()=>{
  const fetchcoin=async()=>{
    try{

      const {data}=await axios.get(`${server}/coins/${params.id}`);
  
      console.log(data);
      setCoin(data);
      setLoading(false);
    } catch(error){
      setLoading(false)
      seterror(true);
    }

  };
  fetchcoin();
} ,[params.id])


const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$"

if(error)return<Errorcomponent message={"error while fetching the coins"}/>
  




  return ( 
    <>
    <Header/>

    <Container maxW={"container.xl"}>
   {
    loading ? ( <Loader/> ):  (
      <>
        <Box boderWidth={1} width={"full"}>
          {}
          </Box>
          <RadioGroup value={currency} onChange={setcurrency} P={"4"}>
          <HStack spacing={"4"}>
           <Radio value={"inr"} >INR</Radio>
           <Radio value={"usd"} >USD</Radio>
           <Radio value={"eur"} >EUR</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
           <Text fontsize={"small"} alignSelf="center" opacity={0.6}>
           Last Updated on  {Date(coin.market_data.last_updated).split("G")[0]}
           
           </Text>
           <Img src={coin.image.large} w={"16"}
            h={"16"}
            objectFit={"contain"}
           />


           <Stat>
             <StatLabel>{coin.name}</StatLabel>
             <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
             <StatHelpText>
              <StatArrow
              type={
                coin.market_data.price_change_percentage_24th > 0 ? "increase" : "decrease"
              }/>
              {coin.market_data.price_change_percentage_24th}%
             </StatHelpText>
           </Stat>
              
           <Badge fontsize={"2X1"} bgColor={"blackAlpha.800"} color={"white"}>
            {`#${coin.market_cap_rank}`}
           
           </Badge>


           <CustomBar
           high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
           low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
         />

         <Box w={"full"} p="4">
         <Item title={"Max Supply"} value={coin.market_data.max_supply} />
         <Item
           title={"Circulating Supply"}
           value={coin.market_data.circulating_supply}
         />
         <Item
           title={"Market Cap"}
           value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
         />
         <Item
           title={"All Time Low"}
           value={`${currencySymbol}${coin.market_data.atl[currency]}`}
         />
         <Item
           title={"All Time High"}
           value={`${currencySymbol}${coin.market_data.ath[currency]}`}
         />
       </Box>
             



        </VStack>
    
      </>
    )
   }
  </Container>
  </> );
};


const CustomBar=({high,low})=>(
  <VStack w={"full"}>
  
   <Progress value={50} colorScheme={"teal"} w={"full"}/>
   <HStack justifyContent={"space-between"} w={"full"}>
   
   <Badge children={low} colorScheme={"red"} />
   <Text fontSize={"sm"}>24H Range</Text>
   <Badge children={high} colorScheme={"green"} />
   
   
   </HStack>
  </VStack>
)

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);










export default CoinDetails