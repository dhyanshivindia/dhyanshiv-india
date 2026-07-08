'use client'

import { useEffect, useState } from 'react'
import LoadingSpinner from '@/components/loading-spinner'

type Service = {
  id: string
  itemName: string
  description: string
  hsnSac: string
  rate: number
  gst: number
  status: string
}

type FormState = {
  itemName: string
  description: string
  hsnSac: string
  rate: string
  gst: string
  status: string
}

const emptyState: FormState = {
  itemName: '',
  description: '',
  hsnSac: '',
  rate: '0.00',
  gst: '18',
  status: 'Active',
}

export default function AdminServiceCrud() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('Loading services...')
  const [form, setForm] = useState<FormState>(emptyState)
  const [editingId, setEditingId] = useState<string | null>(null)

  const fetchServices = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      setServices(data.services || [])
      setMessage(data.services.length === 0 ? 'No services available yet.' : '')
    } catch (error) {
      setMessage('Unable to load services.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  const updateForm = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setForm(emptyState)
    setEditingId(null)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const payload = {
      itemName: form.itemName,
      description: form.description,
      hsnSac: form.hsnSac,
      rate: parseFloat(form.rate),
      gst: parseFloat(form.gst),
      status: form.status,
    }
    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `/api/admin/service?id=${encodeURIComponent(editingId)}` : '/api/admin/service'
    const response = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const result = await response.json()
    if (!response.ok) {
      setMessage(result.error || 'Unable to save service.')
      return
    }
    setMessage(editingId ? 'Service updated successfully.' : 'Service added successfully.')
    resetForm()
    fetchServices()
  }

  const editService = (service: Service) => {
    setEditingId(service.id)
    setForm({
      itemName: service.itemName,
      description: service.description,
      hsnSac: service.hsnSac,
      rate: service.rate.toFixed(2),
      gst: service.gst.toString(),
      status: service.status,
    })
    setMessage('Editing service. Save to update.')
  }

  const deleteService = async (id: string) => {
    if (!confirm('Delete this service permanently?')) return
    const response = await fetch(`/api/admin/service?id=${encodeURIComponent(id)}`, { method: 'DELETE' })
    const result = await response.json()
    if (!response.ok) {
      setMessage(result.error || 'Unable to delete service.')
      return
    }
    setMessage('Service deleted successfully.')
    fetchServices()
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-cyan/20 bg-black/60 p-6">
        <h2 className="text-xl font-semibold text-white">Add or update service</h2>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input value={form.itemName} onChange={(e) => updateForm('itemName', e.target.value)} placeholder="Item name" className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100" required />
            <input value={form.hsnSac} onChange={(e) => updateForm('hsnSac', e.target.value)} placeholder="HSN/SAC" className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100" required />
          </div>
          <textarea value={form.description} onChange={(e) => updateForm('description', e.target.value)} placeholder="Description" className="min-h-[120px] rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100" required />
          <div className="grid gap-4 md:grid-cols-3">
            <input value={form.rate} onChange={(e) => updateForm('rate', e.target.value)} type="number" step="0.01" placeholder="Rate" className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100" required />
            <input value={form.gst} onChange={(e) => updateForm('gst', e.target.value)} type="number" step="0.1" placeholder="GST" className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100" required />
            <select value={form.status} onChange={(e) => updateForm('status', e.target.value)} className="rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-slate-100">
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
              <option value="Retired">Retired</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              {editingId ? 'Update service' : 'Add service'}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan/40">
                Cancel edit
              </button>
            )}
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-cyan">{message}</p>}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Current catalog</h2>
            <p className="mt-2 text-slate-300">Edit or delete services instantly.</p>
          </div>
          <p className="text-sm text-slate-400">{services.length} services</p>
        </div>
        {loading ? (
          <div className="mt-6 rounded-3xl border border-white/10 bg-black/60 p-8 text-center text-slate-300">
            <LoadingSpinner label="Loading services..." />
          </div>
        ) : services.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-white/10 bg-black/60 p-8 text-center text-slate-300">No services found.</div>
        ) : (
          <div className="mt-6 space-y-4">
            {services.map((service) => (
              <div key={service.id} className="rounded-3xl border border-white/10 bg-black/60 p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan/80">{service.hsnSac}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{service.itemName}</h3>
                    <p className="mt-2 text-slate-300">{service.description}</p>
                  </div>
                  <div className="space-y-2 text-right text-sm text-slate-200">
                    <p>Rate ₹{service.rate.toFixed(2)}</p>
                    <p>GST {service.gst}%</p>
                    <p>Status {service.status}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button onClick={() => editService(service)} className="rounded-3xl bg-cyan px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Edit
                  </button>
                  <button onClick={() => deleteService(service.id)} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan/40">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
