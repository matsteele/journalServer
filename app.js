const feathers = require('@feathersjs/feathers')

const app = feathers()

class MessageService (){

    constructor (){
        this.message = [];
    }

    async find () {
        return this.messages;
    }

    async create (data) {
        const message = {
            id: this.messages.length,
            message: data.text
        }

        this.messages.push(message)
        return message
    }
}

app.use('messages', new MessageService)