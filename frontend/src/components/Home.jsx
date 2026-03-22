import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Home() {
  const [Employee, setemployee] = useState([]);

  const [form, setForm] = useState({
    id:"",
    name: "",
    phone:"",
    salary:""
  })


  const navigate = useNavigate();

  const API = "http://localhost:5000/api/employee";

  //all employee
  const readEmployee = async() => {
  const res = await axios.get(API)
  console.log(res.data.data) 

  const emp = res.data.data
  setemployee(Array.isArray(emp) ? emp: [])
}

  useEffect(()=> {
    readEmployee();
  }, [])
 
  //handle

  const handle = async (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })

  }

  //create

  const create = async ()=>{
    await axios.post(API, form)
    readEmployee();
    setForm({id:"", name:"", phone:"", salary:""})
  }


  // delete

  const deleteEmp = async (id) => {
    await axios.delete(`${API}/${id}`)
    readEmployee();

  }

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
            name='id'
            placeholder="Employee ID"
            value={form.id}
              onChange={handle}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Full Name"
            name='name'
            value={form.name}
              onChange={handle}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            placeholder="Phone Number"
            name='phone'
            value={form.phone}
              onChange={handle}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="number"
            name='salary'
            placeholder="Salary"
            value={form.salary}
            onChange={handle}
            className="border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button onClick={create} className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition">
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

             {Employee.map((emp, index) => (
               <tr key={index} className="hover:bg-gray-50 transition">
                <td className="p-4">{emp.id}</td>
                <td className="p-4 font-medium">{emp.name}</td>
                <td className="p-4">{emp.phone}</td>
                <td className="p-4 text-green-600 font-semibold">${emp.salary}</td>
                <td className="p-4 flex justify-center gap-2">
                  <button onClick={() => navigate(`/update/${emp.id}`)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm">
                    Edit
                  </button>
                  <button onClick={() => deleteEmp(emp.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm">
                    Delete
                  </button>
                </td>
              </tr>
             ))}

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}