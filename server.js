// const, if you change this maybe code get error
const {
	WAbot,
    WAConnect,
    WAReconnect,
	} = require("@adiwajshing/baileys")
	
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
const isCmd = body.startsWith(prefix)
const axios = require("axios")