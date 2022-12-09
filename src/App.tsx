import {ChakraProvider,theme } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {getCardData} from './server/mockServer'

type PropsData = {
  title?: string,
  country?:number,
  days?:number,
  emissions?:string,
  stars:number,
  background?:string
}

export const App = () => {
  
  const [data, setData] = useState<PropsData[]>([])

  const getData = async () => {
    const dataFromServer = await getCardData()
    setData(dataFromServer.elements)
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(data)

  return(
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher/>
  </ChakraProvider>
)}
