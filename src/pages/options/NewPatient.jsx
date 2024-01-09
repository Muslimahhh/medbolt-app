import Header from "../../components/sectioning/Header"
import MenuBar from "../../components/sectioning/MenuBar"
import playIcon from '../../assets/icons/play.svg'
import PatientsNav from "../../components/sectioning/PatientsNav"
import HealthDataItem from "../../components/items/HealthDataItem"
import BasicInfo from "../../components/patient/BasicInfo"
import AppContext from "../../context/AppContext"
import PatientContext from "../../context/PatientContext"
// import Vitals from "../../components/new_data/Vitals"
// import FamilyIllness from "../../components/new_data/FamilyIllness"
// import Diagnosis from "../../components/new_data/Diagnosis"
// import Allergy from "../../components/new_data/Allergy"
// import ReferralNote from "../../components/new_data/ReferralNote"
import '../../../src/css/Forms.css'
import { useContext } from "react"

function NewPatient() {
  const { isBlurred } = useContext(AppContext)
  const { saveNewPatient } = useContext(PatientContext)

  return (
    <div className={`page ${isBlurred ? 'blur' : '' }`}>
      <Header/>
      <MenuBar tools={['house', 'patients', 'staff', 'bill', 'roster', 'inventory', 'messages', 'trashcan']}/>
      <main id="patient">
        <div className="heading">
            <h1>New Patient</h1>
            <button className="blueBtn" onClick={() => {saveNewPatient()}}>Save</button>
        </div>
        <div className="options">
            <button className="grayBtn">Admitted<img src={playIcon} alt="play"/></button>
            <button className="orangeBtn">Scan document</button>
        </div>
        <PatientsNav/>
        <BasicInfo/>
        <div className="health-data">
          <HealthDataItem dataItem="Vitals"/>
          <HealthDataItem dataItem="Diagnosis"/>
          <HealthDataItem dataItem="Medication history"/>
          <HealthDataItem dataItem="Medical note"/>
          <HealthDataItem dataItem="Allergies"/>
          <HealthDataItem dataItem="Family illness"/>
          <HealthDataItem dataItem="Medical conditions"/>
          <HealthDataItem dataItem="Referral notes"/>
        </div>
      </main>
      {/* <Vitals/> */}
      {/* <FamilyIllness/> */}
      {/* <Diagnosis/> */}
      {/* <Allergy/> */}
      {/* <ReferralNote/> */}
    </div>
  )
}

export default NewPatient