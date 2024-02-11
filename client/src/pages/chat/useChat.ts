import { useEffect, useRef, useState } from 'react'
import socketIOClient, { Socket } from 'socket.io-client'

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'
const SOCKET_SERVER_URL = 'http://localhost:4000'

export const socket: Socket = socketIOClient(SOCKET_SERVER_URL)
const useChat = (roomId: string) => {
    const [messages, setMessages] = useState<
        {
            body: string
            ownedByCurrentUser: boolean
        }[]
    >([])
    const socketRef = useRef<Socket>()

    useEffect(() => {
        socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socketRef.current?.id,
            }
            setMessages((messages) => [...messages, incomingMessage])
        })

        return () => {
            socketRef.current?.disconnect()
        }
        return () => {
            socket.disconnect()
        }
    }, [roomId])

    const sendMessage = (messageBody: string) => {
        socket?.emit(NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socket.id,
        })
    }

    return { messages, sendMessage }
}

export default useChat
