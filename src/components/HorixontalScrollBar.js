import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
// import "src/App.css"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrow.png'
// import "/home/mkuru/projects/gym/src/App.css"

const LeftArrow = () => {
  const { scrollPrev } =useContext(VisibilityContext)
    
    return(
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt={"rigt arrow"} />
      </Typography>
    )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={LeftArrowIcon} alt="Right Arrow" />
    </Typography>
  )
}

const HorixontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} translate={false}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />

        
      </Box>
    ))}
  </ScrollMenu>
);;
export default HorixontalScrollBar
