import { siteConfig } from '../config/siteConfig.js'
export function whatsappUrl(message = siteConfig.defaultEnquiry) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}
export function collectionEnquiry(name) {
  return `Hello LKS Studio, I am interested in your ${name} collection. Please share the product details and wholesale information.`
}
export function formatEnquiry(values) {
  return [
    'Hello LKS Studio, I would like to discuss a business enquiry.',
    '',
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    ...(values.email.trim() ? [`Email: ${values.email.trim()}`] : []),
    `Interested collection: ${values.collection}`,
    ...(values.quantity.trim()
      ? [`Order quantity: ${values.quantity.trim()}`]
      : []),
    '',
    `Message: ${values.message.trim()}`,
  ].join('\n')
}

export function shippingEnquiry(country) {
  return `Hello LKS Studio, I am interested in ordering apparel for delivery to ${country}. Please share your wholesale details and help me confirm shipping availability, charges, and estimated delivery timelines. My destination city and order requirements are:`
}
