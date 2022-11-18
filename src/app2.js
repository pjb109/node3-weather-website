//  Using handle bars to add dynamic content

const path =require('path')
const express = require('express')

const app = express()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))  // will point to the publicdirectory

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath)) // specifying the path for the file usedby a browser

app.get('',(req, res) =>{
    res.render('index', {
        title:'Pumkins Weather App',
        name:'The Pumkin'
    })
})

app.get('/about', (req, res) =>{
     res.render('about',{
        title:'Pumkins about',
        name:'The very good Pumkin'
     })
})

app.get('/help', (req, res) =>{
    res.render('help',{
       title:'Pumkins help page',
       message:'This is a message for the help page.'
    })
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

