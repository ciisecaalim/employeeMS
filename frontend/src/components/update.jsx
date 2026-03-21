import React from 'react'

export default function UpdateEmployee() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Employee
        </h1>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="number"
            placeholder="Employee ID"
            value="1"
            readOnly
            className="w-full border p-3 rounded-xl bg-gray-100 cursor-not-allowed"
          />

          <input
            type="text"
            placeholder="Full Name"
            defaultValue="Ali Hassan"
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="number"
            placeholder="Phone Number"
            defaultValue="0612345678"
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="number"
            placeholder="Salary"
            defaultValue="500"
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl">
            Back
          </button>

          <button className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Update Employee
          </button>
        </div>

      </div>
    </div>
  )
}