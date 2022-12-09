import { ChakraProvider,theme } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Card } from "./components/Card"
import { Layout } from "./layout/Layout"
import { getCardData } from './server/mockServer'

type PropsData = {
  title: string,
  country:number,
  days:number,
  emissions:string,
  stars:number,
  background:string
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

  return(
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <Layout>
      {data && data.map((item, i)=>(
        <Card 
          key={i} 
          title={item.title}
          country={item.country}
          days={item.days}
          emissions={item.emissions}
          stars={item.stars}
          background={item.background}
        />
      ))}
    </Layout>
    </ChakraProvider>
  )
}
