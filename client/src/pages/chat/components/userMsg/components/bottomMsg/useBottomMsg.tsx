import { useState } from 'react'

export default function useBottomMsg(handlerMessages: (value: string) => void) {
    const [msg, setMsg] = useState<string>('')

    function handlerMsgChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMsg(event.target.value)
    }

    function handlerSubmit() {
        setMsg('')
        handlerMessages(msg)
    }

    return {
        msg,
        handlerMsgChange,
        handlerSubmit,
    }
}
