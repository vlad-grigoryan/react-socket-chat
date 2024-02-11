import {Container, UserContainer} from './styles.ts'
import RoomInfo from './components/RoomInfo'
import UserMsg from './components/userMsg'
import UsersList from './components/UsersList'

const ChatRoom = () => {
    return (
        <Container>
            <UserContainer>
                <RoomInfo />
                <UsersList />
            </UserContainer>
            <UserMsg />


        </Container>
    )
}

export default ChatRoom
