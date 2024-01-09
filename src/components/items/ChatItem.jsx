function ChatItem({ message }) {
  return (
    <div className={`chatItem ${message.sender !== 0 ? 'received' : ''}`}>
        <div>{message.content}</div>
        <div>{message.time}</div>
    </div>
  )
}

export default ChatItem