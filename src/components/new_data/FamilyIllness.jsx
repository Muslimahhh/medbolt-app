import xMark from "../../assets/icons/xmark.svg"
import xMarkBlue from "../../assets/icons/xmark-blue.svg"
import AppContext from "../../context/AppContext"
import { useRef, useContext, useState } from "react"

function FamilyIllness() {
    const {removeBlur} = useContext(AppContext)
    const [illnesses, setIllnesses] = useState([{ name: '' }]);
    const closeRef = useRef()

    const handleIllnessChange = (index, value) => {
        const newIllnesses = [...illnesses]
        newIllnesses[index]["name"] = value
        setIllnesses(newIllnesses)
    }

    const handleAddIllness = () => {
        setIllnesses([...illnesses, {name: ''}])
    }

    const submitIllnesses = (e) => {
        e.preventDefault()
        console.log(illnesses)
    }
    
    const hover = () => {
        closeRef.current.src = xMarkBlue
    }

    const unHover = () => {
        closeRef.current.src = xMark
    }

  return (
    <aside className="addData familyIllness">
      <form onSubmit={submitIllnesses} name="familyIllness">
        <div>
          <h3>Family illness</h3>
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
            {
                illnesses.map((illness, index) => 
                <div key={index}>
                    <label htmlFor={`ill${index}`}>Name of illness</label>
                    <input type="text" name={`ill${index}`}  id={`ill${index}`} value={illness.name || ''} onChange={(e) => {handleIllnessChange(index, e.target.value)}}/>
                </div>
                )
            }
          </div>
          <p onClick={handleAddIllness}>Add More</p>
          <div className="btnDiv">
            <button className="blueBtn" type="submit">Add</button>
          </div>
        </div>
      </form>
    </aside>
  )
}

export default FamilyIllness