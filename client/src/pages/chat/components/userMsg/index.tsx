import BodyMsg from './components/bodyMsg'
import BottomMsg from './components/bottomMsg'
import { Container } from './styles.ts'
import useUserMsg from './useUserMsg.tsx'

export default function UserMsg() {
    const { messages, handlerMessages } = useUserMsg()

    return (
        <Container>
            <BodyMsg messages={messages} />
            <BottomMsg handlerMessages={handlerMessages} />
        </Container>
    )
}
