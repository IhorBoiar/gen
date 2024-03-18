import {Alert, Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import {Controller, useForm} from "react-hook-form";
import TextFieldController from "../../box/forms/elements/TextFieldController.tsx";
import {FormSchema, formOptions } from '../../box/forms/schemas.ts';
import SelectController from "../../box/forms/elements/SelectController.tsx";

function App() {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FormSchema>(formOptions)

  const onSubmit = (data: FormSchema) => {
    console.log(data, '(data)')
  }

  console.log(errors, '(errors)')

  return (
    <Box
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {Object.keys(errors).length > 0 ? (
        <Alert severity={'error'}>
          {Object.entries(errors).map(e => (
            <div>{e[1].message}</div>
          ))}
        </Alert>
      ) : null}
      <Box>Personal Info</Box>
      <Box>
        <TextFieldController
          control={control}
          name={'firstName'}
          label={'First name'}
          error={!!errors.firstName}
        />
      </Box>
      <Box>
        <TextFieldController
          control={control}
          name={'lastName'}
          label={'Last name'}
          error={!!errors.lastName}
        />
      </Box>
      <Box>Contact information</Box>
      <Box>
        <TextFieldController
          control={control}
          name={'email'}
          label={'Email'}
          error={!!errors.email}
        />
      </Box>
      <Box>
        <TextFieldController
          control={control}
          name={'phone'}
          label={'Phone'}
          error={!!errors.phone}
        />
      </Box>
      <Box>
        <FormControl>
          <InputLabel htmlFor="trinity-select">
            Choose one Person of trinity
          </InputLabel>
          <Controller
            control={control}
            name="country"
            render={() => {
              return (
                <Select error={!!errors.country} id="trinity-select">
                  <MenuItem value={'1'}>
                    1
                  </MenuItem>
                </Select>
              )
            }}/>
        </FormControl>
      </Box>
      <Box>
        <TextFieldController
          control={control}
          name={'address'}
          label={'Address'}
          error={!!errors.address}
        />
      </Box>
      <Box>Payment details</Box>
      <Box>
        <TextFieldController
          control={control}
          name={'card'}
          label={'Credit card'}
          error={!!errors.card}
        />
      </Box>
      <Box>
        <TextFieldController
          control={control}
          name={'code'}
          label={'Code'}
          error={!!errors.code}
        />
      </Box>
      <Box>
        <Controller
          control={control}
          name="agree"
          render={() => {
            return (
              <Checkbox />
            )
          }}/>
      </Box>
      <Button type={'submit'}>Send</Button>
    </Box>
  )
}

export default App
