function toggLeMode() {
 const inst = document.documentElement
  inst.classList.toggle("light")
  //if(inst.classList.contains('light')) {
  // inst.classList.remove("light")
 // }
//else {
 //  inst.classList.add('light')
  //}
  const img = document.querySelector("#profile img")
 if(inst.classList.contains('light')){
  img.setAttribute("src", "./assets/avatar-light.png")
  img.setAttribute("alt", "foto, mayk brito de oculos, sorrindo de jaqueta preta e fundo roxo")
 }
 else{
  img.setAttribute("src", "./assets/avatar.png")
  img.setAttribute(
    "alt",
    "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
  )
 }
  
}
