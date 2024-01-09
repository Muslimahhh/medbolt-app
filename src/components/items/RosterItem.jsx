function RosterItem({department, doctors, time, color, secColor}) {
  return (
    <div className={`rosterItem ${color}`}>
        <div className="dept">{department}</div>
        <div className="specialists">{
            doctors.map((doctor) => <p>{doctor}</p>)
        }</div>
        <span>{time}</span>
    </div>
  )
}

RosterItem.defaultProps = {
    department: "General doctors",
    doctors: [
        "Lola Ganks",
        "Kikelomo Fadekemi"
    ]
}

export default RosterItem