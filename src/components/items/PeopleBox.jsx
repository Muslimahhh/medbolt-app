function PeopleBox({people, number, color}) {
  return (
    <div className="peopleBox">
        <p style={{color: color}}>{people}</p>
        <div>{number}</div>
    </div>
  )
}

export default PeopleBox