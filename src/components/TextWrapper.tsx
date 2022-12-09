import { Stack, StackProps, Text, useColorModeValue } from "@chakra-ui/react"
import { StarRating } from "./StarRating"

type TextWrapperProps={
    stars?: number
    emissions?: string
  }&StackProps

export const TextWrapper : React.FC<TextWrapperProps> = (props:TextWrapperProps) => {
const {stars,emissions} = props

return(
    <Stack 
        direction={'row'}  
        p={5} 
        w='100%'
        justifyContent='space-between'
        color={useColorModeValue('white', 'gray.800')}
        {...props}  
    >
        {emissions!==undefined ? <Text fontWeight='bold'> Emissions offset: </Text> : null}
        {stars!==undefined ? <Text fontWeight='bold'> Trip rating </Text> : null}

        {emissions!==undefined ? <Text>{emissions} CO<sub>2</sub></Text>: null}
        {stars!==undefined?  <StarRating star={stars}/> :null}
    </Stack>
)
}