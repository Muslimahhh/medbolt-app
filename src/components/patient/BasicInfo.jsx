import defaultPfp from "../../assets/icons/set_pfp.svg"
import add from "../../assets/icons/add-white.svg"
import PatientContext from "../../context/PatientContext"
import { useLocation } from "react-router-dom"
import { useState, useContext } from "react"

function BasicInfo({patientInfo}) {
    // add condition if info is provided for exixting patient
    const { pathname } = useLocation()
    const { newPatientInfo, addNewPatientInfo, existingPatientInfo, editExisting, updateExistingPatientInfo } = useContext(PatientContext)
    const [ pfp, setPfp ] = useState(defaultPfp)
    // add button to change pfp

    const {
        email,
        patientName,
        emPhone,
        bldGrp,
        bldTyp,
        address,
        phoneNo,
        dOB,
        age,
        patientId,
        gender
    } = newPatientInfo

    const {
        exEmail,
        exPatientName,
        exEmPhone,
        exBldGrp,
        exBldTyp,
        exAddress,
        exPhoneNo,
        exDOB,
        exAge,
        exPatientId,
        exGender
    } = existingPatientInfo

  return (
    <div className="basic">
        {pathname === '/patients/new' ? 
        <form name="new-patient">
            <div>
                <h2>Basic Information</h2>
                <img src={pfp} alt="default user" />
                <div className="patientInput">
                    <label htmlFor="patientName">Name</label>
                    <input type="text" id="patientName" autoComplete="false" value={patientName || ''} onChange={addNewPatientInfo} />
                </div>
            </div>
            <div>
                <div className="patientInput">
                    <label htmlFor="patientId">Patient ID</label>
                    <input type="text" id="patientId" value={patientId || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="gender">Gender</label>
                    <input type="text" id="gender" value={gender || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="dOB">Date of birth</label>
                    <input type="text" id="dOB" value={dOB || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" value={age || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="phoneNo">Phone no</label>
                    <input type="text" id="phoneNo" value={phoneNo || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" autoComplete="false" value={address || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" autoComplete="false" value={email || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="emPhone">Emergency contact</label>
                    <input maxLength={20} type="text" id="emPhone" value={emPhone || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="bldGrp">Blood group</label>
                    <input type="text" id="bldGrp" value={bldGrp || ''} onChange={addNewPatientInfo}/>
                </div>
                <div className="patientInput">
                    <label htmlFor="bldTyp">Blood type</label>
                    <input type="text" id="bldTyp" value={bldTyp || ''} onChange={addNewPatientInfo}/>
                </div>
            </div>
        </form> :
        <form name="existing-patient" className={editExisting ? 'edit' : 'noEdits'}>
            <div>
                <h2>Basic Information</h2>
                <img src={pfp} alt="default user" />
                <div className="patientInput">
                    <label htmlFor="exPatientName">Name</label>
                    {editExisting || (exPatientName === '') ? <input type="text" id="exPatientName" autoComplete="false" value={exPatientName || ''} onChange={updateExistingPatientInfo} /> : <p>{exPatientName}</p>}
                </div>
            </div>
            <div>
                <div className="patientInput">
                    <label htmlFor="exPatientId">Patient ID</label>
                    {editExisting || (exPatientId === '') ? <input type="text" id="exPatientId" value={exPatientId || ''} onChange={updateExistingPatientInfo}/> : <p>{exPatientId}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exGender">Gender</label>
                    {editExisting || (exGender === '') ? <input type="text" id="exGender" value={exGender || ''} onChange={updateExistingPatientInfo}/> : <p>{exGender}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exDOB">Date of birth</label>
                    {editExisting || (exDOB === '') ? <input type="text" id="exDOB" value={exDOB || ''} onChange={updateExistingPatientInfo}/> : <p>{exDOB}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exAge">Age</label>
                    {editExisting || (exAge === '') ? <input type="text" id="exAge" value={exAge || ''} onChange={updateExistingPatientInfo}/> : <p>{exAge}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exPhoneNo">Phone no</label>
                    {editExisting || (exPhoneNo === '') ? <input type="text" id="exPhoneNo" value={exPhoneNo || ''} onChange={updateExistingPatientInfo}/> : <p>{exPhoneNo}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exAddress">Address</label>
                    {editExisting || (exAddress === '') ? <input type="text" id="exAddress" autoComplete="false" value={exAddress || ''} onChange={updateExistingPatientInfo}/> : <p>{exAddress}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exEmail">Email</label>
                    {editExisting || (exEmail === '') ? <input type="text" id="exEmail" autoComplete="false" value={exEmail || ''} onChange={updateExistingPatientInfo}/> : <p>{exEmail}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exEmPhone">Emergency contact</label>
                    {editExisting || (exEmPhone === '') ? <input maxLength={20} type="text" id="exEmPhone" value={exEmPhone || ''} onChange={updateExistingPatientInfo}/> : <p>{exEmPhone}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exBldGrp">Blood group</label>
                    {editExisting || (exBldGrp === '') ? <input type="text" id="exBldGrp" value={exBldGrp || ''} onChange={updateExistingPatientInfo}/> : <p>{exBldGrp}</p>}
                </div>
                <div className="patientInput">
                    <label htmlFor="exBldTyp">Blood type</label>
                    {editExisting || (exBldTyp === '') ? <input type="text" id="exBldTyp" value={exBldTyp || ''} onChange={updateExistingPatientInfo}/> : <p>{exBldTyp}</p>}
                </div>
            </div>
        </form>} 
        <button className="blueBtn">Schedule Appointment <img src={add} alt="add"/></button>
    </div>
  )
}

export default BasicInfo