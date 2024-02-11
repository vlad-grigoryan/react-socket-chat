import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Form, IconContainer, Input } from './styles.ts'
import { faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import useBottomMsg from './useBottomMsg.tsx'

interface IBottomMsg {
    handlerMessages: (msg: string) => void
}

export default function BottomMsg({ handlerMessages }: IBottomMsg) {
    const { msg, handlerMsgChange, handlerSubmit } =
        useBottomMsg(handlerMessages)
    return (
        <Container>
            <IconContainer>
                <FontAwesomeIcon icon={faPaperclip} />
            </IconContainer>

            <Form>
                <Input
                    type="text"
                    value={msg}
                    onChange={handlerMsgChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            handlerSubmit()
                        }
                    }}
                />
            </Form>

            <IconContainer>
                <div onClick={() => handlerSubmit()}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </div>
            </IconContainer>
        </Container>
    )
}
