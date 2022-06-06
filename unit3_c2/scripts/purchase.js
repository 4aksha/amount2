let ser = JSON.parse(localStorage.getItem("purchase"))
   
ser.forEach(function (el) {
  let div = document.createElement("div")
  let img = document.createElement("img")
  img.src = el.image
  let p = document.createElement("p")
  p.innerText = el.name
  let p2 = document.createElement("p")
  p2.innerText = el.price
 let bt =  document.createElement("button")
 bt.innerText = "Buy"

 bt.addEventListener("click",function(){
   buyfun(el)
 })


  div.append(img, p, p2,bt)
  document.getElementById("container").append(div)
})


let valid = JSON.parse(localStorage.getItem("user"))
goAmount.append(valid.amount)
