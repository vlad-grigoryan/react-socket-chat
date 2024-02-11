import { IMessage } from 'app/shared/interfaces/generic/IMessage.ts'
import { useEffect, useState } from 'react'
import myAxiosInstance from 'app/externalLibraries/axios.ts'
import { useParams } from 'react-router-dom'
import { socket } from 'app/pages/chat/useChat.ts'
import SocketEventType from 'app/shared/interfaces/enum/TypeRoom.ts'

export type IUseUserMsg = {
    messages: IMessage[]
    handlerMessages: (msg: string) => void
}

export default function useUserMsg(): IUseUserMsg {
    const [messages, setMessages] = useState<IMessage[]>([])
    let { roomId } = useParams()

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await myAxiosInstance.get(
                `rooms/${roomId}/messages`
            )
            const result = response.data.messages
            setMessages(result)
        }

        fetchMessages()
    }, [roomId])

    useEffect(() => {
        function onMsgReceived(message: IMessage) {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socket?.id,
            }
            setMessages((messages) => [...messages, incomingMessage])
        }

        socket.on('NEW_CHAT_MESSAGE_EVENT', onMsgReceived)
    }, [])

    const handlerMessages = (messageBody: string) => {
        socket?.emit(SocketEventType.NEW_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socket.id,
        })
    }

    return { messages, handlerMessages }
}
