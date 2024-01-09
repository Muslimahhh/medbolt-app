import PatientsNavLink from "../items/PatientsNavLink"
import PatientContext from "../../context/PatientContext"
import { useContext } from "react"

function PatientsNav() {

    const { view } = useContext(PatientContext)
    
  return (
    <div className="patientNav">
        <PatientsNavLink view={view} link={'history'}/>
        <PatientsNavLink view={view} link={'appointments'}/>
        <PatientsNavLink view={view} link={'procedure'}/>
        <PatientsNavLink view={view} link={'documents'}/>
    </div>
  )
}

export default PatientsNav