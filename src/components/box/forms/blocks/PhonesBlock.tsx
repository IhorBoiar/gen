import {Box, Button, IconButton} from "@mui/material";
import PhoneFieldController from "../elements/PhoneFieldController.tsx";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import {Control, FieldErrors} from "react-hook-form";
import {FormSchema} from "../schemas.ts";

interface IPhonesBlock<TFieldValues extends FormSchema = FormSchema> {
  control: Control<FormSchema>
  errors: FieldErrors<TFieldValues>
}

const PhonesBlock = ({ control, errors }: IPhonesBlock) => {
  const [phones, setPhones] = useState<number>(1)

  const addPhone = () => {
    if (phones < 3)
      setPhones(phones + 1)
  }
  const deletePhone = () => {
    setPhones(phones - 1)
  }

  return (
    <>
      {Array.from({ length: phones }, (_, i) => (
        <Box className={'flexJustifyBetween gap5'}>
          <PhoneFieldController
            name={`phone${i + 1}`}
            control={control}
            error={!!errors[`phone${i+1}`]}
            label={'Phone'}
          />
          {phones === i + 1 && phones !== 1 && (
            <IconButton
              onClick={() => deletePhone()}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      ))}
      {phones < 3 && (
        <Button
          variant={'contained'}
          onClick={addPhone}
        >Add phone (Max 3)</Button>
      )}
    </>
  )
}

export default PhonesBlock