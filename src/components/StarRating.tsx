import { Box, Text } from "@chakra-ui/react"
import { AiFillStar ,AiOutlineStar } from 'react-icons/ai'

const TOTALSTARS = 5

export const StarRating = ({ star }: { star: number }) => {
    
    const activeStars: number = star
  
    return(
      <Box
        display= "inline-flex"
        position= "relative"
        textAlign= "left"
        alignItems='center'
      >
        {[...new Array(TOTALSTARS)].map((arr, index) => {
            const isActiveRating = activeStars !== 1
            const isRatingWithPrecision = activeStars % 1 !== 0
            const isRatingEqualToIndex = Math.ceil(activeStars) === index + 1
            const showRatingWithPrecision = isActiveRating && isRatingWithPrecision && isRatingEqualToIndex
            const showEmptyIcon = activeStars === -1 || activeStars < index + 1
          
            return (
                <Box position="relative" key={index}>
                    <Box
                        width={showRatingWithPrecision
                            ? `${(activeStars % 1) * 100}%`
                            : "0%"}
                        overflow= "hidden"
                        position= "absolute"
                    >
                        <AiFillStar color='gold'/> 
                    </Box>
                    <Box>
                        {showEmptyIcon ?  <AiOutlineStar />: <AiFillStar    color='gold'/>}
                    </Box>
                </Box>
            )
        })}
       
        <Text fontWeight='bold'>{star}</Text>
      </Box> 
    )
  }