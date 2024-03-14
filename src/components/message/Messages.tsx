import { useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"
import { SOCKET_CONSTANTS, SOCKET_URL } from "../../lib/constants.js"
import ChatInput from "../chat/ChatInput.js"
import Message from "./Message.jsx"

const Messages = () => {
  const [socket, setSocket] = useState<Socket>()
  const [messages, setMessages] = useState<string[]>([])

  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message name="Quang Thảo" time={"12:45"} message="Hi" isMe />
      <Message name="Quang Thảo" time={"12:45"} message="Hi" />
      <Message name="Quang Thảo" time={"12:45"} message="Hi" isMe />
    </div>
  )
}

export default Messages
