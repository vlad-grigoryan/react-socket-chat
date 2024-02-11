import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ZodGenericValidation from 'app/externalLibraries/zod/ZodSchemaGeneric.ts'
import useErrors from 'app/hook/useErrors.ts'

export default function useHome() {
    const [room, setRoom] = useState('')
    const { getMessageZodErro, getErrorByField, errors } = useErrors()

    const isFormValid = room && errors.length === 0
    const navigate = useNavigate()

    function handleRoomNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRoom(event.target.value)
        const validation = ZodGenericValidation.string('room')
        getMessageZodErro({
            field: 'room',
            validation,
            value: event.target.value,
        })
    }

    function handlerSubmit() {
        navigate(`/${room}`)
    }

    return {
        room,
        isFormValid,
        handleRoomNameChange,
        getErrorByField,
        handlerSubmit,
    }
}
