console.log('Client side javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) =>{

response.json().then((data) => {

    console.log(data)
})

})



const weatherForm = document.querySelector('form')

const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent='Talk to me'
messageTwo.textContent='This works Pumkin'

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault() // changes default behaviour

    const location = search.value

    messageOne.textContent="Loading Pumkin"

    fetch('http://localhost:3000/weather?address='+location).then ((response)=> {
response.json().then((data) => {


if(data.error){
    messageOne.textContent=data.error
} else {
    messageOne.textContent=data.location
    info=data.forecast
    console.log(data.forecast)
    console.log(info)
    info = JSON.stringify(info)
    messageTwo.textContent = info

        }
    })

 })
})