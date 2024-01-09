import Header from "../../components/sectioning/Header"
import MenuBar from "../../components/sectioning/MenuBar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Patients() {
  const navigator = useNavigate()
  const availPatients = [
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Tomisin Akinwande",
      boltCode: 'BD3879',
      gender: 'Male',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    },
    {
      name: "Hauwa Abdullahi",
      boltCode: 'DD5001',
      gender: 'Female',
      phoneNo: '08000900080',
      email: 'hauwaabdullahi@gmail.com'
    }
  ]
  const [patients, setPatients] = useState([])

  const goTo = (url) => {
    navigator(url)
  }

  useEffect(() => {
    setPatients(availPatients)
  }, [])

  return (
    <div className="page">
      <Header/>
      <MenuBar tools={['house', 'patients', 'staff', 'bill', 'roster', 'inventory', 'messages', 'trashcan']}/>
      <main id="patients">
        <h1>Patients</h1>
        <button className="blueBtn" onClick={() => {goTo("/patients/new")}}>+ Add Patient</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bolt code</th>
              <th>Phone no</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {patients ? 
            patients.map((patient) => 
            <tr>
              <td>{patient.name}</td>
              <td>{patient.boltCode}</td>
              <td>{patient.phoneNo}</td>
              <td>{patient.email}</td>
              <td>{patient.gender}</td>
            </tr>) :
            <p>No Patients yet</p>}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Patients