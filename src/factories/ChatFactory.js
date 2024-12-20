'use strict';

const PrivateChat = require('../structures/PrivateChat');
const GroupChat = require('../structures/GroupChat');

class ChatFactory {
    static create(client, data) {
       data.isGroup = data.id && data.id.server == "g.us";
        if(data.isGroup) {
            return new GroupChat(client, data);
        }
        return new PrivateChat(client, data);
    }
}

module.exports = ChatFactory;