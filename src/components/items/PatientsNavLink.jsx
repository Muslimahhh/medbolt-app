import { Link } from "react-router-dom"
import { useContext } from "react";
import PatientContext from "../../context/PatientContext";

function PatientsNavLink({view, link}) {

    const { updatePatientView } = useContext(PatientContext)

    const titleCase = (str) => {
        const words = str.split(' ');
      
        const titleCaseWords = words.map(word => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });

        const titleCaseStr = titleCaseWords.join(' ');
      
        return titleCaseStr;  
    }

    const pathMatch = (view, link) => {
        if(view === link){
            return true
        }

        return false
    }

  return (
    <Link className={`patientNavLink ${pathMatch(view, link) ? 'active': ''}`} onClick={() => {updatePatientView(link)}}>{titleCase(link)}</Link>
  )
}

export default PatientsNavLink