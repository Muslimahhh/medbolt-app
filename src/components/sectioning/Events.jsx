import { useState } from "react"
import ReminderItem from "../items/ReminderItem"
import Note from "../items/Note"

function Events({events}) {
    const [currentView, setCurrentView] = useState('reminders')
    const [noteText, setNoteText] = useState('') 

    const setEventsTo = (view) => {
        setCurrentView(view)
    }

    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(`Note: ${noteText} (added to Notes)`)
        setNoteText('')
        setEventsTo('notes')
    }

    return (
        <section id="events">
            <h4 className="name">Events</h4>
            <div id="eventsNav">
                <div>
                    <div onClick={() => setEventsTo("reminders")} className={currentView === 'reminders' ? 'active' : ''}>Reminders</div>
                    <div onClick={() => setEventsTo("notes")}
                    className={currentView === 'notes' ? 'active' : ''}>Notes</div>
                </div>
            </div>
            <div className="events">
                {
                    currentView === 'reminders' && 
                    <div className="reminders">
                        {
                            events?.reminders ? 
                            events?.reminders.map((reminder, index) => <ReminderItem key={index} reminder={reminder}/>)
                            :
                            <ReminderItem/>
                        }
                    </div>
                }
                {
                    currentView === 'notes' &&
                    <div className={`notes ${events?.notes.length === 0 ? 'center' : ''}`}>
                        <div>
                            <button className="blueBtn" onClick={() => setEventsTo("newEvent")}>Add +</button>
                        </div>
                        {
                            events?.notes.length > 1 ? 
                            events?.notes.map((note, index) => <Note key={index} note={note}/>)
                            :
                            <p>No note yet</p>
                        }
                    </div>
                }
                {
                    currentView === 'newEvent' &&
                    <form className="newEvent" onSubmit={onSubmit}>
                        <textarea name="newEvent" id="newEvent" cols="30" rows="10" value={noteText} onChange={handleChange}></textarea>
                        <div className="addNote" >
                            <button className="blueBtn" type="submit">Add</button>
                        </div>
                    </form>
                }
            </div>
        </section>
    )
}

export default Events