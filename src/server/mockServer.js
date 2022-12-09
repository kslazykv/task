import data from './../data/data.json'

  export function getCardData()  {
    return new Promise((resolve) => resolve(data))    
   }