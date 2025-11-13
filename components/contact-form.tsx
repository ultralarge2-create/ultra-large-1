'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

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
            subject: formData.get('subject'),
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
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm mb-1">Name *</label><input name="name" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Phone</label><input name="phone" type="tel" className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Subject *</label><input name="subject" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                <div><label className="block text-sm mb-1">Message *</label><textarea name="message" rows={5} required className="w-full px-3 py-2 border rounded-md"></textarea></div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
            </form>
        </>
    )
}
