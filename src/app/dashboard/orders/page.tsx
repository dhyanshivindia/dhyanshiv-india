'use client'

export default function OrdersPage() {
  // Mock data - in production, fetch from database
  const orders = [
    {
      id: 'ORD-001',
      service: 'Compliance Automation',
      date: '2026-06-15',
      amount: '₹25,000',
      status: 'active',
      nextRenewal: '2027-06-15',
    },
    {
      id: 'ORD-002',
      service: 'Corporate Tech Delivery',
      date: '2026-05-20',
      amount: '₹15,000',
      status: 'active',
      nextRenewal: '2027-05-20',
    },
    {
      id: 'ORD-003',
      service: 'Security & Trust Ops',
      date: '2026-04-10',
      amount: '₹12,000',
      status: 'paused',
      nextRenewal: '2026-10-10',
    },
    {
      id: 'ORD-004',
      service: 'Workflow Automation',
      date: '2026-03-05',
      amount: '₹8,000',
      status: 'completed',
      nextRenewal: null,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400'
      case 'paused':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400'
      case 'completed':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
      default:
        return 'bg-zinc-100 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-400'
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          My Orders
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Manage your active services and subscriptions
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-800/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Service
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Next Renewal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-white/10">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white hover:bg-zinc-50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50"
              >
                <td className="px-6 py-4 text-sm font-mono text-zinc-900 dark:text-white">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-zinc-900 dark:text-white">
                  {order.service}
                </td>
                <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-white">
                  {order.amount}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {order.nextRenewal
                    ? new Date(order.nextRenewal).toLocaleDateString()
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-500/30 dark:bg-cyan-500/10">
        <h3 className="font-semibold text-cyan-900 dark:text-cyan-300">
          💡 Need to upgrade or modify your services?
        </h3>
        <p className="mt-2 text-sm text-cyan-800 dark:text-cyan-400">
          Contact our team for a personalized consultation.
        </p>
        <button className="mt-4 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700">
          Contact Support
        </button>
      </div>
    </div>
  )
}
