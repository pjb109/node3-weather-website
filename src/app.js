const path =require('path')
const express = require('express')

const app = express()

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))  // will point to the publicdirectory

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath)) // specifying the path for the file usedby a browser


app.get('', (req, res) => {
        res.send('<h1><i>Hello Express </i></h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Pumkin',
        age: 54
    })
})

app.get('/about', (req, res) => {
    res.send('<head><title>About Page</title></head><h1>Welcome to the About Page </h1>')
})

app.get('/weather', (req, res) => {
    res.send({
    location: 'Sydney',
    latitude: 1117,
    longitude:1118,
    forecast:"Its hot"

})
})

// app.com
//app.com/help
//app.com/about

app.listen(3000,  () => {

    console.log('Server is up on port 3000')

})

