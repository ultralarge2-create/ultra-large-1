'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'

const countryVisaOptions: Record<string, string[]> = {
    'Canada': ['Express Entry (PR)', 'Provincial Nominee Program (PNP)', 'Work Permit', 'Study Visa', 'Visitor Visa', 'Super Visa'],
    'USA': ['DV Lottery', 'K1 Fiancé Visa', 'Student Visa (F1/M1)', 'B1/B2 Tourist/Business', 'Family-Based Visa'],
    'Germany': ['Family Sponsor Visa', 'Study Visa', 'Work Visa', 'Job Seeker Visa', 'Schengen Tourist Visa'],
    'France': ['Family Reunification', 'Study Visa', 'Work Visa', 'Schengen Tourist Visa'],
    'UK': ['Family Visa', 'Student Visa', 'Skilled Worker Visa', 'Visitor Visa'],
    'Poland': ['Work Visa', 'Study Visa', 'Schengen Tourist Visa'],
    'Other Europe': ['Schengen Visa', 'Work Visa', 'Study Visa', 'Family Visa']
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [visaOptions, setVisaOptions] = useState<string[]>([])

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country)
        setVisaOptions(countryVisaOptions[country] || [])
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: 'Contact Form',
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            country: formData.get('country'),
            visaType: formData.get('visaType'),
            message: formData.get('message'),
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (res.ok && result.success) {
                setMessage('Message sent successfully!')
                form.reset()
            } else {
                setMessage('Failed to send. Please try again.')
            }
        } catch {
            setMessage('Failed to send. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h3 className="text-2xl font-semibold mb-6">Client Inquiry Form</h3>
            {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Country *</label>
                    <select 
                        name="country" 
                        required 
                        className="w-full px-3 py-2 border rounded-md"
                        value={selectedCountry}
                        onChange={(e) => handleCountryChange(e.target.value)}
                    >
                        <option value="">Select country</option>
                        <option value="Canada">Canada</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="UK">UK</option>
                        <option value="Poland">Poland</option>
                        <option value="Other Europe">Other Europe</option>
                    </select>
                </div>
                
                {selectedCountry && (
                    <div>
                        <label className="block text-sm mb-1">Type of Visa *</label>
                        <select name="visaType" required className="w-full px-3 py-2 border rounded-md">
                            <option value="">Select visa type</option>
                            {visaOptions.map((visa) => (
                                <option key={visa} value={visa}>{visa}</option>
                            ))}
                        </select>
                    </div>
                )}
                
                <div><label className="block text-sm mb-1">Name *</label><input name="name" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Phone *</label><input name="phone" type="tel" required className="w-full px-3 py-2 border rounded-md" placeholder="+250 788 918 653" /></div>
                <div><label className="block text-sm mb-1">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Message</label><textarea name="message" rows={4} className="w-full px-3 py-2 border rounded-md" placeholder="Tell us about your immigration goals..."></textarea></div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>{loading ? 'Sending...' : 'Submit Inquiry'}</Button>
            </form>
        </>
    )
}
