import { AxiosResponse } from 'axios'
import myAxiosInstance from 'app/externalLibraries/axios.ts'

class UserService {
    public index(): Promise<AxiosResponse> {
        return myAxiosInstance.get('/rooms/${roomId}/users')
    }
}

export default new UserService()
