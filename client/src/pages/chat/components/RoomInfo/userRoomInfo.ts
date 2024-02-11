import { useEffect, useState } from 'react'
import { IUser } from 'app/shared/interfaces/generic/IUser.ts'
import myAxiosInstance from 'app/externalLibraries/axios.ts'
import { socket } from 'app/pages/chat/useChat.ts'
import { useParams } from 'react-router-dom'

const USER_JOIN_ROOM_EVENT = 'USER_JOIN_ROOM_EVENT'

export function useRoomInfo() {
    const [user, setUser] = useState<IUser>()
    const { roomId } = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await myAxiosInstance.get(
                'https://api.randomuser.me/'
            )
            const result = response.data.results[0]
            const user = {
                name: result.name.first,
                picture: result.picture.thumbnail,
            }
            setUser(user)
            socket.emit(USER_JOIN_ROOM_EVENT, { ...user, roomId })
        }

        fetchUser()
    }, [])

    return { user, roomId }
}
