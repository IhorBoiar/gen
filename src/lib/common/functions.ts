const ukOperators = [
  '039',
  '050',
  '063',
  '066',
  '067',
  '068',
  '073',
  '089',
  '091',
  '092',
  '093',
  '094',
  '095',
  '096',
  '097',
  '098',
  '099',
  '055',
]

export const checkPhoneByOperator = (phone: string | undefined) => {
  console.log(phone, '(phone)')
  const operatorNum = phone?.substring(0, 3)
  for (let i = 0; i < ukOperators.length; i++) {
    if (operatorNum === ukOperators[i]) return true
  }
  return false
}