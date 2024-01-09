import xMark from "../../assets/icons/xmark.svg"
import xMarkBlue from "../../assets/icons/xmark-blue.svg"
import AppContext from "../../context/AppContext"
import { useRef, useContext, useState } from "react"

function Allergy() {
    const {removeBlur} = useContext(AppContext)
    const [allergies, setAllergies] = useState([{ name: '' }]);
    const closeRef = useRef()

    const handleAllergyChange = (index, value) => {
        const newAllergies = [...allergies]
        newAllergies[index]["name"] = value
        setAllergies(newAllergies)
    }

    const handleAddAllergy = () => {
        setAllergies([...allergies, {name: ''}])
    }

    const submitAllergies = (e) => {
        e.preventDefault()
        console.log(allergies)
    }

    const hover = () => {
        closeRef.current.src = xMarkBlue
    }

    const unHover = () => {
        closeRef.current.src = xMark
    }

  return (
    <aside className="addData allergy">
        <form onSubmit={submitAllergies} name="allergy">
            <div>
            <h3>Allergies</h3>
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
                    allergies.map((allergy, index) => 
                    <div key={index}>
                        <label htmlFor={`alrgy${index}`}>Name of allergy</label>
                        <input type="text" name={`alrgy${index}`} id={`alrgy${index}`} value={allergy.name || ''} onChange={(e) => {handleAllergyChange(index, e.target.value)}}/>
                    </div>
                    )
                }
            </div>
            <p onClick={handleAddAllergy}>Add More</p>
            <div className="btnDiv">
                <button className="blueBtn" type="submit">Add</button>
            </div>
            </div>
        </form>
    </aside>
  )
}

export default Allergy