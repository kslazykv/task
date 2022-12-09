import { Center, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { TextWrapper } from "./TextWrapper"


type PropsData ={
    title: string,
    country:number,
    days:number,
    emissions:string,
    stars:number,
    background:string
  }

export const Card  : React.FC<PropsData> = (props:PropsData) => {

    const {title, country, days, emissions, stars,background} = props
  
    return(
      <Center
        rounded='xl'
        p={3}
        boxShadow='dark-lg'
      >
        <Stack
          px={{base:5,md:10}}
          align={'center'}
          rounded='xl'
          w='100%'
          height={'260px'}
          justifyContent='flex-end'
  
          backgroundImage={`url(${background})`}
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
          backgroundPosition='center'
          color='white'
        >
          <Heading 
            as='h2' 
            fontSize='xl' 
            textTransform='capitalize' 
            textAlign='center'
          > 
            {title} 
          </Heading>
          <Text fontSize='lg'>
            {country} country, {days} days
          </Text>
  
          <TextWrapper emissions={emissions}  bg={useColorModeValue('gray.800','white')}   borderRadius={'lg'} />
          <TextWrapper  stars={stars} bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('gray.800','white')}  borderTopRadius={'lg'} />
  
        </Stack>
      </Center>
    )
  }
  