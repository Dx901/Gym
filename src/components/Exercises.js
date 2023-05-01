import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from "@mui/material"

import { exerciseOptions, fetchData } from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerpage = 9

  const indeOfLastExercise = currentPage * exercisesPerpage
  const indeOfFirstExercise = indeOfLastExercise - exercisesPerpage
  const currentExercises = exercises.slice(indeOfFirstExercise, indeOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo( {top: 1800, behaviour: "smooth"})

  }
  // console.log(exercises)
  return (
    <Box id="exercises"
      sx={{mt: { lg: "110px" }}}
      mt="50px"
      p="20px" >
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack direction="row" sx={{ gap: { lg: "110px", xs: "50px"}}}
          flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, index) =>(
              <ExerciseCard key={index} exercise={exercise}/>
            ))}
          </Stack>

          <Stack mt="100px" alignItems="center">
            {exercises.length> 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerpage)}
                page={currentPage}
                onChange={paginate}
                // onChange={(e) => paginate(e, value)}
                size="large"
              />)}
          </Stack>
      </Box>
  )
}

export default Exercises