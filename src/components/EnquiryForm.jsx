import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { formatEnquiry, whatsappUrl } from '../utils/whatsapp'
import { validateEnquiry } from '../utils/validation'
const initialValues = {
  name: '',
  phone: '',
  email: '',
  collection: 'General Enquiry',
  quantity: '',
  message: '',
}
export default function EnquiryForm() {
  const [values, setValues] = useState(initialValues),
    [errors, setErrors] = useState({}),
    [prepared, setPrepared] = useState(false)
  const form = useRef(null)
  const change = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
    setPrepared(false)
    if (errors[event.target.name])
      setErrors({ ...errors, [event.target.name]: undefined })
  }
  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validateEnquiry(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      form.current.elements[Object.keys(nextErrors)[0]].focus()
      return
    }
    window.open(
      whatsappUrl(formatEnquiry(values)),
      '_blank',
      'noopener,noreferrer',
    )
    setPrepared(true)
  }
  const input = (name, label, type = 'text', required = false, extra = {}) => (
    <div className="form-field">
      <label htmlFor={`enquiry-${name}`}>
        {label}
        {required ? (
          <span aria-hidden="true"> *</span>
        ) : (
          <span className="optional"> (optional)</span>
        )}
      </label>
      <input
        id={`enquiry-${name}`}
        name={name}
        type={type}
        value={values[name]}
        onChange={change}
        required={required}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...extra}
      />
      {errors[name] && (
        <p className="field-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  )
  return (
    <form ref={form} onSubmit={submit} noValidate className="enquiry-form">
      <div className="form-title">
        <h3>Tell us what you have in mind.</h3>
        <p>Fields marked * are required.</p>
      </div>
      <div className="form-grid">
        {input('name', 'Full Name', 'text', true, {
          autoComplete: 'name',
          maxLength: 100,
          placeholder: 'Your full name',
        })}
        {input('phone', 'Phone Number', 'tel', true, {
          autoComplete: 'tel',
          maxLength: 30,
          placeholder: '+91',
          inputMode: 'tel',
        })}
        {input('email', 'Email Address', 'email', false, {
          autoComplete: 'email',
          maxLength: 254,
          placeholder: 'you@company.com',
        })}
        <div className="form-field">
          <label htmlFor="enquiry-collection">Interested Collection</label>
          <select
            id="enquiry-collection"
            name="collection"
            value={values.collection}
            onChange={change}
          >
            {[
              "Women's Tops",
              "Women's T-Shirts",
              'Plazo Collection',
              'Other Bulk / Corporate Apparel',
              'General Enquiry',
            ].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="full-width">
          {input('quantity', 'Order Quantity', 'text', false, {
            maxLength: 100,
            placeholder: 'e.g. 500 pieces',
            inputMode: 'numeric',
          })}
        </div>
        <div className="form-field full-width">
          <label htmlFor="enquiry-message">
            Your Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            value={values.message}
            onChange={change}
            required
            rows={4}
            maxLength={3000}
            placeholder="Tell us about the styles, quantities, or manufacturing support you’re looking for…"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p className="field-error" id="message-error">
              {errors.message}
            </p>
          )}
        </div>
      </div>
      <button className="button button-primary form-submit" type="submit">
        Continue to WhatsApp
        <ArrowUpRight size={18} aria-hidden="true" />
      </button>
      <p className="form-note">
        This opens WhatsApp with your enquiry. Review and send it there. Your
        details aren’t saved on this website.
      </p>
      {prepared && (
        <p className="form-status" role="status">
          Your WhatsApp draft is prepared. If a new tab didn’t open,{' '}
          <a
            href={whatsappUrl(formatEnquiry(values))}
            target="_blank"
            rel="noopener noreferrer"
          >
            open your prepared enquiry here
          </a>
          .
        </p>
      )}
      <p className="email-alternative">
        Prefer email?{' '}
        <a href={`mailto:${siteConfig.email}`}>
          Write to our team
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </p>
    </form>
  )
}
