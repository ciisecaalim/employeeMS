import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateEmployee() {
  const {id} = useParams();
  const navigate = useNavigate();

  const API = "http://localhost:5000/api/employee";

  const [form, setForm] = useState({
    id:"",
    name:"",
    phone:"",
    salary:""
  })


  //singleEmpl
  const single = async () => {
    try {
      const res = await axios.get(`${API}/${id}`)
      const Emp = res.data.data

      if (Emp) {
        setForm({
          id: Emp.id,
          name: Emp.name,
          phone: Emp.phone,
          salary: Emp.salary
        })
      }
    } catch (error) {
      console.error("Failed to load employee", error)
    }
  }


  useEffect(() => {
    if (id) {
      single()
    }
  }, [id])


  //handling
  const handle = (e) => {
   setForm({
    ...form, [e.target.name]: e.target.value
   })
  }


  //update

  const updateEmp = async () => {
    await axios.put(`${API}/${id}`, form)
    navigate("/")
  }


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
            name='id'
            value={form.id}
           readOnly

            className="w-full border p-3 rounded-xl bg-gray-100"
          />

          <input
            type="text"
            placeholder="Full Name"
            name='name'
            onChange={handle}
            value={form.name}
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="number"
            placeholder="Phone Number"
            name='phone'
            onChange={handle}
            value={form.phone}
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="number"
            placeholder="Salary"
           name='salary'
           onChange={handle}
           value={form.salary}
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button onClick={() => navigate(`/`)} className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-xl">
            Back
          </button>

          <button onClick={updateEmp} className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Update Employee
          </button>
        </div>

      </div>
    </div>
  )
}
