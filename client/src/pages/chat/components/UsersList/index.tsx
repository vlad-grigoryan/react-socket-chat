import { Container, ContainerImg, Img, MainText } from './styles.ts'
import { useUsersList } from './useUsersList.ts'
import { memo } from 'react'

const Users = () => {
    const { users } = useUsersList()
    return users.length > 0 ? (
        <Container>
            <MainText>
                <small>Also in this room:</small>
            </MainText>
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={index} className="user-box">
                        <ContainerImg>
                            <Img src={user?.picture} />
                            <MainText>
                                <small>{user?.name}</small>
                            </MainText>
                        </ContainerImg>
                    </li>
                ))}
            </ul>
        </Container>
    ) : (
        <div>There is no one else in this room</div>
    )
}

export default memo(Users)
