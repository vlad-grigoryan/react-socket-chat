import { IUser } from 'app/shared/interfaces/generic/IUser'
import {
    IUserIndex,
    IUserIndexResponse,
} from 'app/shared/interfaces/user/IUserInterfaces'

class UserMapper {
    toDomainIndex(persistent: IUserIndexResponse): IUserIndex {
        return {
            users: persistent.users.map((user): IUser => {
                return {
                    id: user.id,
                    name: user.name,
                    picture: user.picture,
                    room: user.room,
                }
            }),
        }
    }
}

export default new UserMapper()
