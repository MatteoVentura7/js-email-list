const generate = document.getElementById('newEmail')

//FUNCTIONS
function printList(list) {
    document.querySelector('ul').innerHTML += list
}

for(let i = 0; i < 10; i++){
  axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
      if(response.data.success){
        email = `<li>${response.data.response}</li>`
        printList(email)
      }
    })
}

//EVENTS
generate.addEventListener('click', () => {
  document.querySelector('ul').innerHTML = ''
  for(let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => {
        if(response.data.success){
          email = `<li>${response.data.response}</li>`
          printList(email)
        }
      })
  }
})



