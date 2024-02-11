import { IMessage } from 'app/shared/interfaces/generic/IMessage.ts'
import { BallonContainer, Container, ContainerMsg, Ballon } from './styles.ts'

interface IBodyMsg {
    messages: IMessage[]
}

export default function BodyMsg({ messages }: IBodyMsg) {
    console.log(messages, 'messages')
    return (
        <Container>
            <ContainerMsg>
                {messages.map((msg: IMessage) => (
                    <BallonContainer key={msg.id} my={msg.ownedByCurrentUser}>
                        <small>{msg.name}</small>
                        <Ballon my={msg.ownedByCurrentUser}>
                            {msg.body && <p>{msg.body}</p>}
                        </Ballon>
                    </BallonContainer>
                ))}
            </ContainerMsg>
        </Container>
    )
}
