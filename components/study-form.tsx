'use client'
import { Button } from '@/components/ui/button'
import { useState, FormEvent } from 'react'
import { usePathname } from 'next/navigation'

export default function StudyForm({ destination }: { destination: string }) {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const pathname = usePathname()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const form = e.currentTarget
        const formData = new FormData(form)
        const data = {
            formType: `Study Abroad - ${pathname}`,
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            age: formData.get('age'),
            destination: formData.get('destination'),
            educationLevel: formData.get('educationLevel'),
            areaOfStudy: formData.get('areaOfStudy'),
            englishTest: formData.get('englishTest'),
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
                setMessage('Application submitted successfully!')
                form.reset()
            } else {
                setMessage('Failed to submit. Please try again.')
            }
        } catch {
            setMessage('Failed to submit. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-gradient-to-t relative rounded-2xl from-blue-100 to-transparent p-6 dark:from-blue-900/40">
                <h3 className="text-2xl font-bold mb-6">Apply Here</h3>
                {message && <p className={`text-sm mb-4 ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm mb-1">First Name *</label><input name="firstName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                        <div><label className="block text-sm mb-1">Last Name *</label><input name="lastName" type="text" required className="w-full px-3 py-2 border rounded-md" /></div>
                    </div>
                    <div><label className="block text-sm mb-1">Email *</label><input name="email" type="email" required className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Phone</label><input name="phone" type="tel" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Age</label><input name="age" type="number" className="w-full px-3 py-2 border rounded-md" /></div>
                    <div><label className="block text-sm mb-1">Destination</label><select name="destination" className="w-full px-3 py-2 border rounded-md" defaultValue={destination}><option>Canada</option><option>USA</option><option>UK</option><option>Australia</option><option>Europe</option><option>Asia</option></select></div>
                    <div><label className="block text-sm mb-1">Education Level</label><select name="educationLevel" className="w-full px-3 py-2 border rounded-md"><option>Bachelor&apos;s degree Level</option><option>Master&apos;s degree Level</option><option>Diploma</option></select></div>
                    <div><label className="block text-sm mb-1">Area Of Study</label><select name="areaOfStudy" className="w-full px-3 py-2 border rounded-md"><option>Business Administration</option><option>Engineering</option><option>Computer Science</option><option>Medicine</option></select></div>
                    <div><label className="block text-sm mb-1">English Test</label><select name="englishTest" className="w-full px-3 py-2 border rounded-md"><option>IELTS</option><option>TOEFL</option><option>PTE</option></select></div>
                    <div><label className="block text-sm mb-1">Comment or Message</label><textarea name="message" rows={3} className="w-full px-3 py-2 border rounded-md"></textarea></div>
                    <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</Button>
                </form>
            </div>
        </div>
    )
}
