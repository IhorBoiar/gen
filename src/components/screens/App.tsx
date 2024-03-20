import {Box, Button, Grid, MenuItem, Typography} from '@mui/material'
import {useForm} from "react-hook-form";
import TextFieldController from "../box/forms/elements/TextFieldController.tsx";
import {formOptions, FormSchema} from '../box/forms/schemas.ts';
import {useEffect, useState} from "react";
import SelectController from "../box/forms/elements/SelectController.tsx";
import MaskFieldController from "../box/forms/elements/MaskFieldController.tsx";
import CheckboxFieldController from "../box/forms/elements/CkeckboxFieldController.tsx";
import {useLayoutStore} from "../../store/store.ts";
import {SNACK_TYPE} from "../../store/slices/snackSlice.ts";
import BoxInputs from "../box/forms/blocks/BoxInputs.tsx";
import PhonesBlock from "../box/forms/blocks/PhonesBlock.tsx";
import {LoadingButton} from "@mui/lab";

function simulateRequest(): Promise<string> {
  return new Promise((resolve: (value: string) => void) => {
    setTimeout(() => {
      resolve('Запит успішно виконано');
    }, 1000);
  });
}

function App() {
  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FormSchema>(formOptions)
  const { showSnack } = useLayoutStore()

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (data: FormSchema) => {
    setLoading(true)
    simulateRequest().then((res) => {
      console.log(data, '(data)')
      console.log(res, '(res)')
      showSnack(SNACK_TYPE.SUCCESS, (
        <Box>
          {res}
        </Box>
      ))
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      showSnack(SNACK_TYPE.ERROR, (
        <Box>
          {Object.entries(errors).map(e => (
            <Box>- {e[1].message}</Box>
          ))}
        </Box>
      ))
    }
  }, [errors]);
  console.log(errors, '(errors)')

  return (
    <Box className={'appPage'}>
      <Box
        className={'appPage__form form'}
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box className={'form__title'}>
          <Typography variant={'h1'} component={'span'}>Gen App</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Personal Info'}>
              <TextFieldController
                control={control}
                name={'firstName'}
                label={'First name'}
                error={!!errors.firstName}
              />
              <TextFieldController
                control={control}
                name={'lastName'}
                label={'Last name'}
                error={!!errors.lastName}
              />
            </BoxInputs>
          </Grid>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Contact information'}>
              <TextFieldController
                control={control}
                name={'email'}
                label={'Email'}
                error={!!errors.email}
              />
              <PhonesBlock control={control} errors={errors} />
              <SelectController
                name={'country'}
                control={control}
                label={'Country'}
                error={!!errors.country}
              >
                {['Ukraine', 'Spain', 'Italy'].map(u => (
                  <MenuItem value={u}>
                    {u}
                  </MenuItem>
                ))}
              </SelectController>
              <TextFieldController
                control={control}
                name={'address'}
                label={'Address'}
                error={!!errors.address}
              />
            </BoxInputs>
          </Grid>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Payment details'}>
              <MaskFieldController
                name={'card'}
                control={control}
                format={'#### #### #### ####'}
                label={'Credit'}
                placeholder={'Enter card'}
                error={!!errors.card}
              />
              <MaskFieldController
                name={'code'}
                control={control}
                format={'###'}
                label={'CVV2'}
                placeholder={'CVV2'}
                error={!!errors.code}
              />
              <CheckboxFieldController
                label={'Agreement with terms of use'}
                control={control}
                name={'agree'}
              />
            </BoxInputs>
          </Grid>
        </Grid>
        <LoadingButton loading={loading} variant={'contained'} type={'submit'}>Send1</LoadingButton>
        <Button variant={'contained'} type={'submit'}>Send</Button>
      </Box>
    </Box>
  )
}

export default App
