import Message from '../../components/items/Message'
import Header from '../../components/sectioning/Header'
import MenuBar from '../../components/sectioning/MenuBar'
import defaultPfp from "../../assets/icons/default-pfp.svg"
import mic from "../../assets/icons/microphone.svg"
import micBlue from "../../assets/icons/microphone-blue.svg"
import micRed from "../../assets/icons/microphone-red.svg"
import sendBtn from "../../assets/icons/send-btn.svg"
import '../../css/Messages.css'
import { useState, useRef } from 'react'
import ChatItem from '../../components/items/ChatItem'

function Messages() {
    const placeholderMessages = [
        {
            pk: 1,
            name: 'Hauwa Abdullahi',
            content: 'Hello, how are you doing?',
            time: '12:00pm'
        },
        {   
            pk: 2,
            name: 'Lisa Benald',
            content: 'No problem',
            time: '4:00pm'
        },
        {
            pk: 3,
            name: 'Hauwa Abdullahi',
            content: 'Hello, how are you doing?',
            time: '12:00pm'
        },
        {
            pk: 4,
            name: 'Lisa Benald',
            content: 'No problem',
            time: '4:00pm'
        },
        {
            pk: 5,
            name: 'Hauwa Abdullahi',
            content: 'Hello, how are you doing?',
            time: '12:00pm'
        },
        {
            pk: 6,
            name: 'Lisa Benald',
            content: 'No problem',
            time: '4:00pm'
        },
        {
            pk: 7,
            name: 'Hauwa Abdullahi',
            content: 'Hello, how are you doing?',
            time: '12:00pm'
        },
        {
            pk: 8,
            name: 'Lisa Benald',
            content: 'No problem',
            time: '4:00pm'
        }
    ]
    const [messages, setMessages] = useState(placeholderMessages)
    const [message, setMessage] = useState('')
    const [recordMessage, setRecordMessage] = useState(false)
    const [activeMessage, setActiveMessage] = useState(5)
    const [chat, setChat] = useState([
        {
            name: 'Hauwa Abdullahi',
            content: 'Hello, how are you doing?',
            sender: 1,
            time: '11:00am'
        },
        {
            name: 'Lisa Benald',
            content: "I'm good, thanks for asking 😄",
            sender: 0,
            time: '11:05am'
        },
        {
            name: 'Hauwa Abdullahi',
            content: 'Please what is the dosage for my prescription?',
            sender: 1,
            time: '11:00am'
        },
        {
            name: 'Lisa Benald',
            content: '2 per day morning and night for 3 days',
            sender: 0,
            time: '11:05am'
        }
    ])

    const micRef = useRef()

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(`Message: ${message} (sent)`)
    }

    const micHover = () => {
        recordMessage ? micRef.current.children[0].src = micRed : micRef.current.children[0].src = micBlue
    }

    const micLeave = () => {
        recordMessage ? micRef.current.children[0].src = micRed : micRef.current.children[0].src = mic
    }

    const record = () => {
        setRecordMessage((value) => !value)
    }

  return (
    <div className='page'>
        <Header/>
        <MenuBar tools={['house', 'patients', 'staff', 'bill', 'roster', 'inventory', 'messages', 'trashcan']}/>
        <main id='messages'>
            <h1>Messsages</h1>
            <div className='messagesContainer'>
                <div className="recentMessages">
                    {messages.map((message, index) => {
                        return (
                            <Message message={message} isActive={activeMessage === message.pk} key={index}/>
                        )
                    })}
                </div>
                <div className="messageCenter">
                    <div className="person">
                        <img src={defaultPfp} alt="pfp"/>
                        <p>Lisa Benald</p>
                    </div>
                    <div className="date">
                        <p>Friday, 20 Dec 2023</p>
                    </div>
                    <div className='chat'>
                        {chat.map((message, index) => 
                                <ChatItem message={message} key={index}/>
                        )}
                    </div>
                    <div className="compose">
                        <form onSubmit={sendMessage}>
                            <input type="text" value={message || ''} onChange={handleChange}/>
                            <button ref={micRef} className='voice' onMouseOver={micHover} title={!recordMessage ? 'Record Message' : 'Stop Recording'} onMouseLeave={micLeave} onClick={record}><img src={recordMessage ? micRed : mic} alt="microphone"/></button>
                            <button className='send' type="submit"><img src={sendBtn} alt="send"/></button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Messages