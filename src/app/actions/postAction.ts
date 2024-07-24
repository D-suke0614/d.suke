'use server'

export const postAction = async (formData: FormData) => {
  console.log(formData.get('name'))
  console.log(formData.get('email'))
  console.log(formData.get('message'))
  return {key: 'reset'}
}
