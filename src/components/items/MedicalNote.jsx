import chevDown from '../../assets/icons/chevron-down.svg'
import chevUp from '../../assets/icons/chevron-up.svg'
import { useState } from "react"

function MedicalNote({note}) {
    const [show, setShow] = useState(false)

  return (
    <div className={`medicalNote ${show ? 'show' : ''}`}>
      <div className="top" onClick={() => {setShow(!show)}}>
        <div>Visitation on {note.date}</div>
        <img src={show ? chevUp : chevDown} alt="chevron" onClick={() => setShow(!show)}/>
      </div>
      <div className={`content ${show ? 'show' : ''}`}>
        <div>
          <div className="short">
            <p className='doc'>{note.doc}</p>
            <p className="summary">{note.summary}</p>
          </div>
          <p style={{cursor: 'default'}}>Summary</p>
        </div>
        <div>
          <p className="summary">{note.note}</p>
          <p style={{cursor: 'default'}}>Note</p>
        </div>
      </div>
    </div>
  )
}

export default MedicalNote