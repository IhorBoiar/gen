import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkPhoneByOperator } from '../../../lib/common/functions'

export const YUP_SCHEMA_PHONE = yup
  .string()
  .required('Будь ласка введіть ваш телефон')
  .length(10, 'Будь ласка введіть правильний телефон')
  .test('phone-operator', 'Будь ласка введіть правильний телефон', (value) =>
    checkPhoneByOperator(value)
  )

export const schema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().email(),
    phone: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    card: yup.string().required(),
    code: yup.string().required(),
    agree: yup.boolean().required()
  })

export type FormSchema = yup.InferType<typeof schema>

export const formOptions = {
  resolver: yupResolver(schema)
}
