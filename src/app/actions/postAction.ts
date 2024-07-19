'use server'

export const postAction = async (formData: FormData) => {
  console.log(formData.get('name'))
  // return {key: 'reset'}
}
