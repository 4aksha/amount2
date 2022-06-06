  // let res = JSON.parse(localStorage.getItem("user")) ||[];
  document.getElementById("dSubmit").addEventListener("click",godis)

  function setf(n,e,ad,am) {
    this.name = n
    this.email = e
    this.address = ad
    this.amount = am

  }


    function godis(){
      event.preventDefault()
      let name  = document.getElementById("dName").value 
      name.innerHTML = null
      let email  = document.getElementById("dEmail").value 
      let adress  = document.getElementById("dAdress").value 
      let amount  = document.getElementById("dAmount").value 
    
      let p = new setf(name,email,adress,amount)
      // res.push(p)
      localStorage.setItem("user",JSON.stringify(p))

        window.location.reload()
    }
