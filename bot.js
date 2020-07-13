bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () =>{
  console.log(${bot.user.tag} has been successfully turned on!)
 bot.user.setActivity(status ,{type:"WATCHING"})
});
