import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkPhoneByOperator } from '../../../lib/common/functions'

export const YUP_SCHEMA_PHONE = yup
  .string()
  .length(9, 'Будь ласка введіть правильний телефон')
  .test('phone-operator', 'Будь ласка введіть правильний телефон', (value) =>
    checkPhoneByOperator(value)
  )

export const schema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().email(),
    phone1: YUP_SCHEMA_PHONE,
    phone2: yup.string(),
    phone3: yup.string(),
    country: yup.string().required(),
    address: yup.string().required(),
    card: yup.string().required().length(16),
    code: yup.string().required().length(3),
    agree: yup.boolean().required().oneOf([true], 'Field must be checked')
  })

export type FormSchema = yup.InferType<typeof schema>

export const formOptions = {
  resolver: yupResolver(schema)
}
