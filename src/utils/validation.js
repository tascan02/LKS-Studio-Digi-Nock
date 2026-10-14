export function validateEnquiry(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  const digits = values.phone.replace(/\D/g, '')
  if (
    !/^[+()\d\s.-]+$/.test(values.phone) ||
    digits.length < 7 ||
    digits.length > 15
  )
    errors.phone = 'Please enter a valid phone number with 7–15 digits.'
  if (
    values.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  )
    errors.email = 'Please enter a valid email address.'
  if (!values.message.trim())
    errors.message = 'Please tell us about your requirement.'
  return errors
}
