import { createContext, useState } from "react";

const PatientContext = createContext()

export default PatientContext

export const PatientProvider = ({children}) => {
    const [ view, setView ]= useState('history');
    const [ editExisting, setEditExisting ] = useState(false);
    const placeHolderHealthData = {
        diagnoses: [
          {illness: 'Hypertension', doc: 'Dr Ifeanyi Uba'},
          {illness: 'Diabetes', doc: 'Dr. John Doe'},
        ],
        vitals: [
          {date: 'Oct 6, 2023', bp: '120-80', pulse: '80', temp: '36.5'},
          {date: 'Jun 21, 2023', bp: '120-80', pulse: '80', temp: '36.5'},
          {date: 'Jun 22, 2023', bp: '120-80', pulse: '80', temp: '36.5'},
        ],
        medicationHistory: [
          {med: 'Exforge 10/160mg'},
          {med: 'Paracetamol 10/160mg'},
          {med: 'Accutane 2/50mg'},
        ],
        allergies: [
          {allergy: 'Peanuts'},
          {allergy: 'Dust'},
          {allergy: 'Penicillin'},
        ],
        familyIllnesses: [
          {illness: 'Hypertension'},
          {illness: 'Diabetes'},
          {illness: 'Cancer'},
          {illness: 'Acne'},
        ],
        medicalConditions: [
          {condition: 'Hypertension'},
          {condition: 'Diabetes'},
          {condition: 'Cancer'},
          {condition: 'Acne'},
        ],
        referrals: [
          {org: 'Health plus', date: 'Jun 20, 2023'},
          {org: 'Med Plus', date: 'Jun 21, 2023'},
        ],
        medicalNotes: [
          {
            date: '10/10/2023',
            doc: 'By Dr Ifeanyi Uba',
            summary: 'She has been diagonised with hypertension and placed on Exforge 10/160mg',
            note: 'She gets weak easily, presented with elevated blood pressure readings consistently exceeding 140/90 mm Hg during multiple clinic visits. After a thorough assessment, she has been diagnosed with hypertension. Her medical history includes a family history of hypertension and he has a sedentary lifestyle. We have initiated lifestyle modifications, including dietary changes and regular exercise, and prescribed antihypertensive medication to control his blood pressure. Follow-up appointments have been scheduled to monitor her progress and adjust treatment as needed to reduce the risk of cardiovascular complications associated with hypertension'
          },
          {
            date: '20/06/2023',
            doc: 'Dr. John Doe',
            summary: 'Patient has a history of heart disease',
            note: 'Patient has a history of heart disease and has been on medication for 5 years'
          },
        ]
    }
    const emptyExPatientInfo = {
      exPatientName: '',
      exEmail: '',
      exEmPhone: '',
      exBldGrp: '',
      exBldTyp: '',
      exAddress: '',
      exPhoneNo: '',
      exDOB: '',
      exAge: '',
      exGender: '',
      exPatientId: '',
      exPfp: ''
    }
    const placeHolderPatientInfo = {
      exPatientName: 'Jane Doe',
      exEmail: 'janedoe@examplemail.com',
      exEmPhone: '08012345678',
      exBldGrp: 'O+',
      exBldTyp: 'AB',
      exAddress: 'No 1, Example street, Example city, Example state',
      exPhoneNo: '08012356678',
      exDOB: '01/01/2000',
      exAge: '20',
      exGender: 'Female',
      exPatientId: '1234567890',
      exPfp: 'defaultPfp'
    }  
    const [newPatientInfo, setNewPatient] = useState({
      patientName: '',
      email: '',
      emPhone: '',
      bldGrp: '',
      bldTyp: '',
      address: '',
      phoneNo: '',
      dOB: '',
      age: '',
      gender: '',
      patientId: '',
      pfp: ''
    })

    const [newPatientData, setNewPatientData] = useState({
      diagnoses: [],
      vitals: [],
      medicationHistory: [],
      allergies: [],
      familyIllnesses: [],
      medicalConditions: [],
      referrals: [],
      medicalNotes: []
    })
    
    const [existingPatientInfo, setExistingPatientInfo] = useState(placeHolderPatientInfo)
    
    const [existingPatientData, setExistingPatientData] = useState(placeHolderHealthData)

    const updatePatientView = (link) => {
      setView(link)
    }

    const addNewPatientInfo = (e) => {
      const {id, value} = e.target
      setNewPatient({...newPatientInfo, [id]: value})
    }

    const updateExistingPatientInfo = (e) => {
      const {id, value} = e.target
      editExisting && setExistingPatientInfo((values) => ({...values, [id]: value})); console.log(existingPatientInfo)
    }

    const saveNewPatient = () => {
      console.log(newPatientInfo)
    }

    const saveExistingPatientInfo = () => {
      setEditExisting(false)
      console.log(existingPatientInfo)
    }

    const contextData = {
        view,
        newPatientInfo,
        existingPatientData,
        existingPatientInfo,
        editExisting,
        setEditExisting,
        addNewPatientInfo,
        updateExistingPatientInfo,
        updatePatientView,
        saveExistingPatientInfo,
        saveNewPatient
    }

    return (
        <PatientContext.Provider value={contextData}>
            {children}
        </PatientContext.Provider>
    )
}