import {Box, Checkbox, Typography} from "@mui/material";
import {Controller} from "react-hook-form";

interface ICheckboxFieldController {
  label: string
  control: any
  name: string
}

const CheckboxFieldController = ({ label, control, name }: ICheckboxFieldController) => {
  return (
    <Box className='flexJustifyBetween'>
      <Typography variant={'body2'} component='span'>{label}</Typography>
      <Controller
        control={control}
        name={name}
        render={({field}) => {
          return (
            <Checkbox {...field} />
          )
        }}/>
    </Box>
  )
}

export default CheckboxFieldController