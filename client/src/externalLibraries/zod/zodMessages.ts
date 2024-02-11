export function stringMsg(field: string) {
    return {
        required_error: `The ${field} is required`,
        invalid_type_error: `The ${field} has the wrong format, the correct format is text (string)`,
    }
}

export function maxMsg(field: string, number: number) {
    return `Maximum number of  ${field} should be ${number} characters`
}

export function minMsg(field: string, number: number) {
    return `The ${field} should have at least ${number} character`
}
