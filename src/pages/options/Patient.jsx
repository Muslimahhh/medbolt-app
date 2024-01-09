import Header from "../../components/sectioning/Header"
import MenuBar from "../../components/sectioning/MenuBar"
import playIcon from '../../assets/icons/play.svg'
import PatientsNav from "../../components/sectioning/PatientsNav"
import AppContext from "../../context/AppContext"
import PatientContext from "../../context/PatientContext"
import HealthDataItem from "../../components/items/HealthDataItem"
import BasicInfo from "../../components/patient/BasicInfo"
import { useContext } from "react"
import { useParams } from "react-router-dom"

function Patient() {
  const { boltCode } = useParams()
  const { isBlurred } = useContext(AppContext)
  const { view, existingPatientInfo, existingPatientData, editExisting, setEditExisting, saveExistingPatientInfo } = useContext(PatientContext)

  const { exPatientName } = existingPatientInfo

  const {
    vitals,
    diagnoses,
    medicationHistory,
    medicalNotes,
    allergies,
    familyIllnesses,
    medicalConditions,
    referrals
  } = existingPatientData

  return (
    <div className={`page ${isBlurred ? 'blur' : '' }`}>
      <Header/>
      <MenuBar tools={['house', 'patients', 'staff', 'bill', 'roster', 'inventory', 'messages', 'trashcan']}/>
      <main id="patient">
        <div className="heading">
          <h1>{exPatientName}</h1>
          { editExisting ? <button className="blueBtn" onClick={saveExistingPatientInfo}>Save</button> : <button className="blueBtn" onClick={() => { setEditExisting(true) }}>Edit</button> }
        </div>
        <div className="options">
          <button className="grayBtn">Admitted<img src={playIcon}/></button>
          <button className="orangeBtn">Scan document</button>
        </div>
        <PatientsNav/>
        {view === 'history' &&
        <>
          <BasicInfo/>
          <div className="health-data">
            <HealthDataItem dataItem="Vitals" healthDatum={vitals}/>
            <HealthDataItem dataItem="Diagnosis" healthDatum={diagnoses}/>
            <HealthDataItem dataItem="Medication history" healthDatum={medicationHistory}/>
            <HealthDataItem dataItem="Medical note" healthDatum={medicalNotes}/>
            <HealthDataItem dataItem="Allergies" healthDatum={allergies}/>
            <HealthDataItem dataItem="Family illness" healthDatum={familyIllnesses}/>
            <HealthDataItem dataItem="Medical conditions" healthDatum={medicalConditions}/>
            <HealthDataItem dataItem="Referral notes" healthData ={[{org: "Health plus", date: 'Jun 20, 2023'}]} healthDatum={referrals}/>
          </div>
        </>}
        {view === 'appointments' &&
        <h1>Appointments</h1>}
        {view === 'procedure' && 
        <h1>Procedures</h1>}
        {view === 'documents' && 
        <h1>Documents</h1>}
      </main>
    </div>
  )

}

export default Patient