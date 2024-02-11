export interface IMessage {
    id: string
    senderId: string
    body: string
    name?: string
    ownedByCurrentUser: boolean
}
