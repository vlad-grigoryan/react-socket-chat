import {
    Container,
    ContainerImg,
    ContainerMain,
    Img,
    MainText,
} from './styles.ts'
import { useRoomInfo } from './userRoomInfo.ts'
import { useParams } from 'react-router-dom'

export default function RoomInfo() {
    const { roomId } = useParams()
    const { user } = useRoomInfo()
    return (
        <Container>
            <ContainerMain>
                <MainText>
                    <h1>Room: {roomId}</h1>
                </MainText>
            </ContainerMain>
            <ContainerImg>
                <Img src={user?.picture} />
                <MainText>
                    <small>{user?.name}</small>
                </MainText>
            </ContainerImg>

            {/*{user && <UserAvatar user={user}></UserAvatar>}*/}
        </Container>
    )
}
