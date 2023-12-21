
type UserId = string

export interface Chat {
    userId: UserId; 
    name: string;
    message: string;
    upvotes: UserId[]
}

export abstract class Store {
    constructor() {

    }
    initRoom(roomId: string){

    }

    getChats(room: string, limit: number, offset: number){

    }

    addChat(room: string, limit: number, offset: number){

    }
}