import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollbar = ({ data }) => (
  // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
  <div>
  
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {/* {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> } */}
      </Box>
    ))}
      
  </div>
  // </ScrollMenu>
);
export default HorizontalScrollbar