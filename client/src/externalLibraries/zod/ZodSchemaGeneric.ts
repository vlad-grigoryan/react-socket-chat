import { z as zod } from 'zod'
import { maxMsg, minMsg, stringMsg } from './zodMessages'

class ZodGenericValidation {
    static string(field: string, min = 1, max = 255) {
        return zod
            .string(stringMsg(field))
            .trim()
            .min(min, minMsg(field, min))
            .max(max, maxMsg(field, max))
    }
}

export default ZodGenericValidation
