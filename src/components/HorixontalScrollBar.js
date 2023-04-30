import React from 'react'
import { Box } from '@mui/material'

import BodyPart from './BodyPart';

const HorixontalScrollBar = ({ data }) =>{ 
  return(
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {/* {item} */}
          <BodyPart item={item} 
            bodyPart={bodyPart}
            setBodyPart={setBodyParts}/>

        </Box>
      ))}
      </div>

    )};
export default HorixontalScrollBar












// import React from 'react'
// import { Box } from '@mui/material'

// const HorixontalScrollBar = ({ data }) => (
//   return(
  
// ));