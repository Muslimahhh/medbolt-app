import RosterItem from "../items/RosterItem"
import { useRef, useState } from "react"

function Roster() {

    const [date, setDate] = useState(new Date());
    const dateRef = useRef()

    const handleChange = (e) => {
        setDate(e.target.value)
        let current_date = new Date(date)
        dateRef.current.valueAsDate = current_date.toLocaleString()
    }

  return (
    <div id="roster">
        <table>
            <thead className="title">
                <tr>
                    <th className="name" colSpan="2">
                        Roster Today   
                    </th>
                    <th>
                        <div>
                            <label htmlFor="data">Date</label>
                            <input ref={dateRef} type="date" name="date" id="date" value={date.toISOString().split('T')[0]} onChange={handleChange}/>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className="shift">Morning Shift</div>
                        <div className="time">(12am-11:59am)</div>
                    </td>
                    <td>
                        <div className="shift">Afternoon Shift</div>
                        <div className="time">(12pm-06:59am)</div>
                    </td>
                    <td>
                        <div className="shift">Night Shift</div>
                        <div className="time">(07pm-11:59pm)</div>
                    </td>
                </tr>
                <tr valign="top">
                    <td>
                        <RosterItem department="Front desk" time="8AM" color="blue"/>
                        <RosterItem time="9AM" color="purple"/>
                        <RosterItem department="Ophthalmologist" time="11AM" color="green"/>
                    </td>
                    <td>
                        <RosterItem time="2PM" color="purple"/>
                    </td>
                    <td>
                        <RosterItem time="7PM" color="blue"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Roster