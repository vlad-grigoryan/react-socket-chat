import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IUser } from 'app/shared/interfaces/generic/IUser.ts'
import myAxiosInstance from 'app/externalLibraries/axios.ts'
import SocketEventType from 'app/shared/interfaces/enum/TypeRoom.ts'
import { socket } from 'app/pages/chat/useChat.ts'

export type IUseChat = {
    users: IUser[]
    setUsers: (user: any[]) => void
}
export function useUsersList(): IUseChat {
    const [users, setUsers] = useState<IUser[]>([])
    let { roomId } = useParams()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await myAxiosInstance.get(`rooms/${roomId}/users`)
            const result = response.data.users
            setUsers(result)
        }

        fetchUsers()
    }, [roomId])
    const leaveListener = useCallback((user: IUser) => {
        setUsers((users) => users.filter((u) => u.id !== user.id))
    }, [])
    const joinListener = useCallback((user: IUser) => {
        if (user.id === socket.id) return
        setUsers((users) => [...users, user])
    }, [])
    useEffect(() => {
        socket.on(SocketEventType.USER_JOIN_CHAT_EVENT, joinListener)
        socket.on(SocketEventType.USER_LEAVE_CHAT_EVENT, leaveListener)
        return () => {
            socket.off(SocketEventType.USER_LEAVE_CHAT_EVENT, joinListener)
            socket.off(SocketEventType.USER_JOIN_CHAT_EVENT, leaveListener)
        }
    }, [])

    return { users, setUsers }
}
