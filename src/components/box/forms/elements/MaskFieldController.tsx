import {PatternFormat} from "react-number-format";
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";

interface IMaskFieldController {
  name: string
  control: any
  format: string
  label: string
  placeholder: string
  error: boolean
}

const MaskFieldController = ({ name, control, format, label, placeholder, error }: IMaskFieldController) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <PatternFormat
          format={format}
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
          placeholder={placeholder}
          label={label}
          error={error}
          style={{ paddingLeft: '0 !important' }}
          InputProps={{
            label
          }}
        />
      )}
    />
  )
}

export default MaskFieldController