// Baileys summoner (IDK whats is name, but i called summoner)
import { WAConnection } from '@adiwajshing/baileys'

async function connectToWhatsApp () {
    const conn = new WAConnection() 

    console.log("Hello there! You running code simplediple-wabot from ThisIsHai. Wait a few minutes for the bot its ready to launch...") 

    await conn.connect ()
    conn.on('chat-update', chatUpdate => {
        // `chatUpdate` is a partial object, containing the updated properties of the chat
        // received a new message
        if (chatUpdate.messages && chatUpdate.count) {
            const message = chatUpdate.messages.all()[0]
            console.log (message)
        } else console.log (chatUpdate) // see updates (can be archived, pinned etc.)
    })
}
// run in main file
connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) ) // catch any errors
