import {Box, Typography} from "@mui/material";

interface ITitleInputs {
  title: string
}

const TitleInputs = ({ title }: ITitleInputs) => {
  return (
    <Box className={'titleInputs'}>
      <Typography component={'span'} variant={'h6'} className={'titleInputs__text'}>{title}</Typography>
    </Box>
  )
}

export default TitleInputs