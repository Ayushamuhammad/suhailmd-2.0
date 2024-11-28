const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2347044372309";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_03_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQVmx3VytSWGIxeitXVldhZ0RzZDdaSHoyaXVkODMwb3doVnVjN0JodlgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTaExhQ2o2ZVM1TzJrTjBzeGtoWHZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU4MjE3N2FiLWI0ZTAtNDIzZS04Y2YyLWNjNzAwZDBiYWI0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMTYxLFxuICAgICAgMTgyLFxuICAgICAgMTMyLFxuICAgICAgNjEsXG4gICAgICAxMzcsXG4gICAgICAyMjYsXG4gICAgICA0NyxcbiAgICAgIDIyMixcbiAgICAgIDI0NCxcbiAgICAgIDE0NCxcbiAgICAgIDIwMCxcbiAgICAgIDc4LFxuICAgICAgNDQsXG4gICAgICAxNDAsXG4gICAgICA0NyxcbiAgICAgIDEwNSxcbiAgICAgIDEsXG4gICAgICA3NCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTg1LFxuICAgICAgNzAsXG4gICAgICAyMTAsXG4gICAgICAxMixcbiAgICAgIDk3LFxuICAgICAgNDUsXG4gICAgICAxNDMsXG4gICAgICAxNTgsXG4gICAgICAyMTQsXG4gICAgICAxMjgsXG4gICAgICAxNjUsXG4gICAgICAyNDIsXG4gICAgICAwLFxuICAgICAgMTQ0LFxuICAgICAgMTExLFxuICAgICAgMjE5LFxuICAgICAgMzMsXG4gICAgICAzMixcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UDRDTTgxWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NDM3MjMwOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDY4NzEyNzIxMjA1NDc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPL1p2ZElIRUtqUm83b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjg4OE44blFZVWRpZEdINzRlQ3hoWVZBbkJIVFNoeWdTeEkxUG83QjBFalU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienlkdDVwemVaOEdUUmp5bFJkMVRrRHo4bXpRTkxmK0NiRlZPY3pYaW8zeEczbWVUZmdkSFpYYTYrcktqTEwrRmFaNVdNT2M4alhBTXp6b2J2S2t1QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK09vMXhnZGt5RUE4eGZVY0pUSmROanZSNXZTZFNEN1FybVFnVHdnYXl3NUwxNVYxMFZlYTVyR1czM1ZSQmhIOHhLNDBUQ0N5TjMvNHh0Lzlnc0RYREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NDM3MjMwOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4MzE0MDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
