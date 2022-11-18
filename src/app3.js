//  Using handle bars to add dynamic content

const path =require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))  // will point to the publicdirectory

// define apps for express config
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

const viewsPath = path.join(__dirname,'../templates/views') // creating the path for the views folder
// set up for handlesbars and viess location


const partialsPath = path.join(__dirname, '../templates/partials')

//setup for handlebasr engine
app.set('view engine', 'hbs')
app.set('views',viewsPath)  // setting the path for the views folder
hbs.registerPartials(partialsPath)
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
       name:'Pumin makes me',
       message:'This is a message for the help page.'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({error: "You must provide an address"  // return stops the function execution
    })
    }
    res.send({
    location: 'Sydney',
    latitude: 1117,
    longitude:1118,
    forecast:"Its hot",
    address:req.query.address
})
})

app.get('/products', (req,res) => {
    if(!req.query.search){
      return  res.send({
           error:"You must provide a search term."
        })

    }
    console.log(req.query)
    console.log(req.query.search)  // getting the query string to the termina
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title:'Pumkins 404 page',
        pageName:'Pumin makes me',
        Message:'Help article not found.',
        name:'The Pumkin'
     })
})

app.get('*', (req, res) =>{

    res.render('404',{
        title:'Pumkins 404 page',
        pageName:'Pumin makes me',
        Message:'This page does not exist page.',
        name:'The Pumkin'
     })

})

// app.com
//app.com/help
//app.com/about

app.listen(3000,  () => {

    console.log('Server is up on port 3000')

})

