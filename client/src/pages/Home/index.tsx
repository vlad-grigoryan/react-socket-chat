import { Container, Form, Input, Button, ContentContainer } from './styles.ts'
import useHome from './useHome.ts'
import FormGroup from 'app/components/generics/FormGroup'

export default function Login() {
    const {
        room,
        handleRoomNameChange,
        handlerSubmit,
        getErrorByField,
        isFormValid,
    } = useHome()

    return (
        <Container>
            <ContentContainer>
                <Form onSubmit={handlerSubmit}>
                    <FormGroup name="room" error={getErrorByField('room')}>
                        <Input
                            value={room}
                            type="text"
                            error={getErrorByField('room')}
                            onChange={handleRoomNameChange}
                        />
                    </FormGroup>
                    <Button type="submit" disabled={!isFormValid}>
                        Login
                    </Button>
                </Form>
            </ContentContainer>
        </Container>
    )
}
