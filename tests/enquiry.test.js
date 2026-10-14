import test from 'node:test'
import assert from 'node:assert/strict'
import { validateEnquiry } from '../src/utils/validation.js'
import {
  collectionEnquiry,
  formatEnquiry,
  whatsappUrl,
} from '../src/utils/whatsapp.js'

const valid = {
  name: '  Maya Sharma  ',
  phone: '+91 89205 47605',
  email: 'maya@example.com',
  collection: "Women's Tops",
  quantity: '500 pieces',
  message: 'Please share fabric & fit options.\nThank you!',
}

test('required fields reject blank or whitespace-only values', () => {
  assert.deepEqual(
    Object.keys(
      validateEnquiry({ ...valid, name: '  ', phone: '', message: '\n ' }),
    ),
    ['name', 'phone', 'message'],
  )
})
test('accepts international formatting and optional email and quantity', () => {
  for (const phone of [
    '+91 89205 47605',
    '(212) 555-1234',
    '+44 20 7946 0958',
  ]) {
    assert.deepEqual(
      validateEnquiry({ ...valid, phone, email: '', quantity: '' }),
      {},
    )
  }
})
test('rejects invalid phone lengths, text, and malformed optional email', () => {
  for (const phone of ['1234', '1234567890123456', 'abcdefghij', '12345abc890'])
    assert.ok(validateEnquiry({ ...valid, phone }).phone)
  for (const email of ['name@', 'name@example', 'name @example.com'])
    assert.ok(validateEnquiry({ ...valid, email }).email)
})
test('WhatsApp URL encodes all enquiry fields and preserves special characters', () => {
  const message = formatEnquiry(valid)
  const url = new URL(whatsappUrl(message))
  assert.equal(url.origin, 'https://wa.me')
  assert.equal(url.pathname, '/918920547605')
  assert.equal(url.searchParams.get('text'), message)
  assert.ok(message.includes('Name: Maya Sharma\n'))
  for (const text of [
    valid.phone,
    valid.email,
    valid.collection,
    valid.quantity,
    valid.message,
  ])
    assert.ok(message.includes(text))
  assert.ok(
    !formatEnquiry({ ...valid, email: '', quantity: '' }).includes('Email:'),
  )
})
test('category enquiries identify the selected collection', () => {
  for (const name of ["Women's Tops", "Women's T-Shirts", 'Plazo Collection'])
    assert.ok(collectionEnquiry(name).includes(name))
})
