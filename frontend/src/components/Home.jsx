import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 p-6 flex items-center justify-center">
      
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Employee Manager
        </h1>

        {/* Form */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <input
            type="number"
            placeholder="Employee ID"
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="Salary"
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition">
            Add Employee
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-left">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Salary</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              <tr className="hover:bg-gray-50 transition">
                <td className="p-4">1</td>
                <td className="p-4 font-medium">Ali Hassan</td>
                <td className="p-4">0612345678</td>
                <td className="p-4 text-green-600 font-semibold">$500</td>
                <td className="p-4 flex justify-center gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm">
                    Delete
                  </button>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 transition">
                <td className="p-4">2</td>
                <td className="p-4 font-medium">Amina Yusuf</td>
                <td className="p-4">0619876543</td>
                <td className="p-4 text-green-600 font-semibold">$700</td>
                <td className="p-4 flex justify-center gap-2">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm">
                    Delete
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}