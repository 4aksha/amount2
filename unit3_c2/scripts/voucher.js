let valid = JSON.parse(localStorage.getItem("user"))

 
//  console.log(valid.amount)
  goAmount.append(valid.amount)
 


  const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"

  async function shyam() {



    try {
      let res = await fetch(url)
      let data = await res.json()
      console.log(data[0].vouchers)
      
      append(data[0].vouchers)

    } catch (err) {
      console.log(err)
    }
  }
  shyam()

  function append(data) {
    data.forEach(function (el) {
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
  }


 let use = []
  function buyfun(el){
 
  //   let valid = JSON.parse(localStorage.getItem("user"))
  //   use.push(el)
  // let total = Number(valid.amount)-Number(el.price)

  // goAmount.append(total)

  // localStorage.setItem("purchase",JSON.stringify(use))
  //  amount = total
  
  //  localStorage.setItem("user",JSON.stringify(valid))

  


  // valid = JSON.parse(localStorage.getItem("user"))

  if(valid.amount<=el.price){
    alert("Insufficient Balance")
    }
    else{
     
      valid.amount = Number(valid.amount)-Number(el.price)
  console.log(valid.amount)
  localStorage.setItem("user",JSON.stringify(valid))


 window.location.reload()
 alert("Hurray! purchase successful")
    }
 




  }

