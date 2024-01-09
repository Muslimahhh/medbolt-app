import defaultPfp from "../../assets/icons/default-pfp.svg"
import defaultPfpWhite from "../../assets/icons/default-pfp-white.svg"
import { useState } from "react"

function Message({message, isActive}) {
  const { 
    name, 
    content,
    time
  } = message

  const shortenMessage = (text) => {
    if (text.length > 16) {
      return `${text.substring(0, 16)}...`
    } else {
      return text
    }
  }

  return (
    <div className={`message ${isActive ? 'active' : ''}`}>
      <div>
        <img src={isActive ? defaultPfpWhite : defaultPfp} alt="pfp default"/>
      </div>
      <div className="content">
        <p>{name}</p>
        <div>
          <p>{shortenMessage(content)}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Message