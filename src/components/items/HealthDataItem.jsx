import addNewIcon from '../../assets/icons/addNew.svg'
import angleDown from '../../assets/icons/chevron-down.svg'
import angleUp from '../../assets/icons/chevron-up.svg'
import AppContext from '../../context/AppContext'
import propTypes from 'prop-types'
import { useState, useEffect, useContext } from 'react'
import MedicalNote from './MedicalNote'

function HealthDataItem({dataItem, healthDatum}) {
  const [shown, setShown] = useState(false)

  // converts date string to dd/mm/yy without the first two numbers in the year
  const convertDate = (dateString) => {
    const date = new Date(dateString)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(2)}`
  }

  const {blurBg} = useContext(AppContext)

  return (
    <div className='health-data-item'>
      <h3 style={{columnGap : '1rem'}} onClick={() => setShown((value) => !value)}>{dataItem}{shown ? <img src={angleUp} alt='angle up'/>: <img  src={angleDown} alt='angle down'/>}</h3>
      {shown && 
      <>
        <button onClick={blurBg}>Add New <img src={addNewIcon} alt={`add new ${dataItem}`}/></button>
        {
          dataItem === 'Diagnosis' && healthDatum.length > 0 &&
          <div className='diagnoses items'>
            {healthDatum.map((item) => 
              <div className="diagnosis">
                <p>{item.illness}</p>
                <p>By {item.doc}</p>
              </div>
            )}
          </div>
        }
        {
          dataItem === 'Medication history' && healthDatum.length > 0 &&
          <div className='medication-history items'>
            {healthDatum.map((item) => 
              <div className="medication">{item.med}</div>
            )}
          </div>
        }
        {
          dataItem === 'Allergies' && healthDatum.length > 0 &&
          <div className='allergies items'>
            {healthDatum.map((item) => 
              <div className="allergy">{item.allergy}</div>
            )}
          </div>
        }
        {
          dataItem === 'Family illness' && healthDatum.length > 0 &&
          <div className='family-illnesses items'>
            {healthDatum.map((item) => 
              <div className="family-illness">{item.illness}</div>
            )}
          </div>
        }
        {
          dataItem === 'Medical conditions' && healthDatum.length > 0 &&
          <div className='medical-conditions items'>
            {healthDatum.map((item) => 
              <div className="medical-condition">{item.condition}</div>
            )}
          </div>
        }
        {
          dataItem === 'Vitals' && healthDatum.length > 0 &&
          <div className='vitals items'>
            {healthDatum.map((item) => 
              <div className="vital">
                <p>{convertDate(item.date)}</p>
                <div>
                  <p>{item.bp}</p>
                  <p>BP</p>
                </div>
                <div>
                  <p>{item.pulse}</p>
                  <p>PULSE</p>
                </div>
                <div>
                  <p>{item.temp}</p>
                  <p>TEM</p>
                </div>
              </div>
            )}
          </div>
        }
        {
          dataItem === 'Referral notes' && healthDatum.length > 0 &&
          <div className='referrals items'>
            {healthDatum.map((item) => 
              <div className="referral">
                <p>From: {item.org}</p>
                <p>{item.date}</p>
              </div>
            )}
          </div>
        }
        {
          dataItem === 'Medical note' && healthDatum.length > 0 &&
          <div className='medical-notes items'>
            {healthDatum.map((item) => 
            <MedicalNote note={item}/>
            )}
          </div>
        }
      </>
      }
    </div>
  )
}

HealthDataItem.defaultProps = {
  healthDatum: []
}

HealthDataItem.propTypes = {
  dataItem: propTypes.string.isRequired,
  healthDatum: propTypes.array
}

export default HealthDataItem