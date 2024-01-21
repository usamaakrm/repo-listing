let display = document.getElementById("main")
let searchVal = document.getElementById("values")
let btn = document.getElementById("btn")
//  fetching API
fetch('https://api.github.com/user/repos', {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': 'Bearer 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'
    },
    // body: JSON.stringify({
    //   title: 'Created with the REST API',
    //   body: 'This is created by the REST API'
    // })
  })
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {

        const disuser = async () => {
          let input = searchVal.value
          //  searching value are assign in query variable
          let query = input
          // console.log("query", input);
          let elm = data
           
          let displaydata = await elm.filter((eveny) => {
            if (query == " ") {
              // console.log("All Repo", eveny);
              return eveny

            } else if (eveny.name.toLowerCase().includes(query.toLowerCase())) {
              // console.log("Filter Value:", eveny.name);
              return eveny
            }
          }).map((object) => {
            const {
              name,
              visibility,
              description,
              topics,
              pushed_at
            
            } = object;
                
            return `<div>
              <h3 class="demo"> ${name} </h3>
              <h5 class="public"> ${visibility} </h5>
              <p class="desc">${description}</p>
              <p class="time"><img src="assets/dot-svgrepo-com.svg" alt="" width="10px">  Updated on ${pushed_at}</p>
              <p class="tech"><span>Tech stack: </span> ${topics}</p>  
             </div>`

          }).join("")
          display.innerHTML = displaydata
          // console.log(displaydata);
        }
        disuser()

     
        btn.addEventListener("click", disuser)
      })
    }
    // API Token : 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
    // console.log(data),"succes"
  )
  .catch(error => console.error(error, "failed to load"));

  // dark mode function
  function fun(){
     let elm = document.body
     elm.classList.toggle("dark")
  }