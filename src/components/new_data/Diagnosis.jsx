import xMark from "../../assets/icons/xmark.svg"
import xMarkBlue from "../../assets/icons/xmark-blue.svg"
import AppContext from "../../context/AppContext"
import { useRef, useContext, useState } from "react"

function Diagnosis() {
    const {removeBlur} = useContext(AppContext)
    const [diagnosis, setDiagnosis] = useState({});
    const closeRef = useRef()

    const updateDiagnosis = (e) => {
        setDiagnosis((values) => ({...values, [e.target.name]: e.target.value}))
    }

    const submitDiagnosis = (e) => {
        e.preventDefault()
        console.log(diagnosis)
    }

    const hover = () => {
        closeRef.current.src = xMarkBlue
      }
    
    const unHover = () => {
        closeRef.current.src = xMark
    }

  return (
    <aside className="addData diagnosis">
      <form onSubmit={submitDiagnosis} name="diagnosis">
        <div>
          <h3>Diagnosis</h3>
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
              <label htmlFor="diagName">Diagnosis name</label>
              <input type="text" name="diagName" id="diagName" value={diagnosis.diagName || ''} onChange={updateDiagnosis}/>
            </div>
            <div>
              <label htmlFor="physName">Name of physician inputting diagnosis</label>
              <input type="text" name="physName" id="physName" value={diagnosis.physName || ''} onChange={updateDiagnosis}/>
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" value={diagnosis.date || ''} onChange={updateDiagnosis}/>
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

export default Diagnosis