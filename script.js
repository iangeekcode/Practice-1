var Maincharacter = {
  chSpeed: 1,
  chHealth: 100,
  chName: "Gurdian 1",
}
var Secondcharacter = {
  chSpeed: 1,
  chHealth: 100,
  chName: "Gurdian 2",
}
var Thirdcharacter = {
  chSpeed: 1,
  chHealth: 100,
  chName: "Gurdian 3",
}

var chArray = [
  Maincharacter, Secondcharacter, Thirdcharacter
]
var i 
for (i = 0; i < chArray.length; i++) {
  console.log(chArray[i])
}