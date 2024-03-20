import {PatternFormat} from "react-number-format";
import {Box, TextField} from "@mui/material";
import {Controller} from "react-hook-form";

interface IPhoneFieldController {
  name: string
  control: any
  error: boolean
  label: string
}

const PhoneFieldController = ({ name, control, error, label }: IPhoneFieldController) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <PatternFormat
          format="## ## ## ###"
          customInput={TextField}
          onValueChange={(values) => {
            field.onChange({
              target: {
                name,
                value: values.value,
              },
            })
          }}
          size={'small'}
          valueIsNumericString
          allowEmptyFormatting={false}
          placeholder="00 00 00 000"
          label={label}
          error={error}
          style={{ paddingLeft: '0 !important' }}
          InputProps={{
            label,
            startAdornment: (
              <Box sx={{ marginRight: '8px' }}>+38</Box>
              // <InputAdornment
              //   position="start"
              //   style={{
              //     marginRight: '-8px',
              //   }}
              // >
              //   <Typography
              //     style={{
              //       fontSize: '14px',
              //       lineHeight: 'initial',
              //     }}
              //   >
              //     +38
              //   </Typography>
              // </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

export default PhoneFieldController