import PeopleBox from '../../components/items/PeopleBox'
import Header from '../../components/sectioning/Header'
import MenuBar from '../../components/sectioning/MenuBar'
import Roster from '../../components/sectioning/Roster'
import Events from '../../components/sectioning/Events'
import "../../css/Pages.css"
import { useState, useEffect } from 'react'

function Admin() {
  const todaysEvents = {
    reminders: [
      {
        pk: 1,
        reminder: "Get approval for list dropped by the Pharmacy General meeting by 3pm at room 010",
        date: '2023-11-18'
      },
      { 
        pk: 2, 
        reminder: "Get approval for list dropped by the Pharmacy",
        date: '2023-11-17'
      },
      { 
        pk: 3, 
        reminder: "Get approval for list dropped by the Pharmacy",
        date: '2023-10-20'
      },
      { 
        pk: 4, 
        reminder: "Get approval for list dropped by the Pharmacy",
        date: '2023-10-15'
      },
    ],
    notes: [
      {
        note: "Doctors are to always wear their scrub to the theatre room..."
      },
      {
        note: "Doctors are to always wear their scrub to the theatre room..."
      },
      {
        note: "Doctors are to always wear their scrub to the theatre room..."
      },
      {
        note: "Doctors are to always wear their scrub to the theatre room..."
      }
    ]
  }

  const [events, setEvents] = useState()

  useEffect(() => {
    setEvents(todaysEvents)
  }, [])

  return (
    <div className='page'>
      <Header/>
      <MenuBar tools={['house', 'patients', 'staff', 'bill', 'roster', 'inventory', 'messages', 'trashcan']}/>
      <main id='admin'>
        <h1>Home</h1>
        <div className="peopleStats">
          <PeopleBox people="TOTAL PATIENTS" number={100} color="#486FD8"/>
          <PeopleBox people="PATIENTS ADMITTED" number={20} color="#FF0000" />
          <PeopleBox people="TOTAL STAFF" number={30} color="#486FD8"/>
        </div>
        <div className="row">
          <Roster/>
          <Events events={events}/>
        </div>
      </main>
    </div>
  )
}

export default Admin