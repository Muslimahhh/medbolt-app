import xMark from "../../assets/icons/xmark.svg"
import xMarkBlue from "../../assets/icons/xmark-blue.svg"
import AppContext from "../../context/AppContext"
import { useRef, useContext, useState } from "react"

function Vitals() {
  const {removeBlur} = useContext(AppContext)
  const [vitals, setVitals] = useState({});
  const closeRef = useRef()

  const updateVitals = (e) => {
    setVitals((values) => ({...values, [e.target.name]: e.target.value}))
  }

  const submitVitals = (e) => {
    e.preventDefault()
    console.log(vitals)
  }

  const hover = () => {
    closeRef.current.src = xMarkBlue
  }

  const unHover = () => {
    closeRef.current.src = xMark
  }

  return (
    <aside className="addData vitals">
      <form onSubmit={submitVitals} name="vitals">
        <div>
          <h3>Vitals</h3>
          <img
           ref={closeRef} 
           src={xMark} 
           alt="close"
           onMouseOver={hover}
           onMouseOut={unHover}
           onClick={removeBlur}
          />
        </div>
        <div className="inputs">
          <div className="inputCon">
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" value={vitals.date || ''} onChange={updateVitals}/>
            </div>
          </div>
          <div className="inputCon">
            <div>
              <label htmlFor="temp">Temperature (TEM)</label>
              <input type="text" name="temp" id="temp" placeholder="deg(&deg;)" value={vitals.temp || ''} onChange={updateVitals} />
            </div>
          </div>
          <div className="inputCon">
            <h2>BLOOD PRESSURE (BP)</h2>
            <div>
              <label htmlFor="pulse">Pulse (P)</label>
              <input type="text" name="pulse" id="pulse" placeholder="bpm" value={vitals.pulse || ''} onChange={updateVitals}/>
            </div>
            <div>
              <label htmlFor="sbp">Systolic blood pressure (SBP)</label>
              <input type="text" name="sbp" id="sbp" placeholder="mmHg" value={vitals.sbp || ''} onChange={updateVitals}/>
            </div>
            <div>
              <label htmlFor="dbp">Diastolic pressure (DBP)</label>
              <input type="text" name="dbp" id="dbp" placeholder="mmHg" value={vitals.dbp || ''} onChange={updateVitals}/>
            </div>
          </div>
          <div className="inputCon">
            <div>
              <label htmlFor="rr">Respiration (R)</label>
              <input type="text" name="rr" id="rr" placeholder="bpm" value={vitals.rr || ''} onChange={updateVitals}/>
            </div>
          </div>
          <div className="btnDiv">
            <button className="blueBtn" type="submit">Add</button>
          </div>
        </div>
      </form>
    </aside>
  )
}

export default Vitals