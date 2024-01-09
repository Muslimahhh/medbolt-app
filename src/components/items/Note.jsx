import options from "../../assets/icons/options.svg"

function Note({note}) {
  return (
    <div className="note">
        <p>{note.note}</p>
        <img src={options} alt="three dots options" />
    </div>
  )
}

export default Note