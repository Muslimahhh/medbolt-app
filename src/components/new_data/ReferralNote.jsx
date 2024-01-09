import xMark from "../../assets/icons/xmark.svg"
import xMarkBlue from "../../assets/icons/xmark-blue.svg"
import AppContext from "../../context/AppContext"
import { useRef, useContext, useState } from "react"

function ReferralNote() {
    const {removeBlur} = useContext(AppContext)
    const [referralNote, setReferralNote] = useState({});
    const closeRef = useRef()

    const scanNote = () => {
        console.log('Scanning...')
    }

    const updateReferralNote = (e) => {
        setReferralNote((values) => ({...values, [e.target.name]: e.target.value}))
    }
    
    const submitReferralNote = (e) => {
        e.preventDefault()
        console.log(referralNote)
    }
    
    const hover = () => {
        closeRef.current.src = xMarkBlue
    }
    
    const unHover = () => {
        closeRef.current.src = xMark
    }

  return (
    <aside className="addData referralNote">
        <form onSubmit={submitReferralNote} name="referralNote">
            <div>
                <h3>Referral note</h3>
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
                        <label htmlFor="hmo">HMO/Retainer Name</label>
                        <input type="text" name="hmo" id="hmo" value={referralNote.hmo || ''} onChange={updateReferralNote}/>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" id="date" value={referralNote.date || ''} onChange={updateReferralNote}/>
                    </div>
                </div>
                <p onClick={scanNote}>Scan referral note</p>
                <div className="btnDiv">
                    <button className="blueBtn" type="submit">Add</button>
                </div>
            </div>
        </form>
    </aside>
  )
}

export default ReferralNote