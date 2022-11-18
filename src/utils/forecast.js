const request= require('request')

const forecast = (lon, lat, callback) => {

     const URL = 'http://api.weatherstack.com/current?access_key=e29a08bca303eb247069c8fd3f2434c7&query='+lon+','+lat+'&units=m'

     //console.log(lon +' '+lat)
//  destructuring code to  -  stating body property of object
// adding parameter json:true to use the JSON object
request({url:URL,json:true}, (error, {body}) => {
    if(error){
            callback('Unable to connect ')
    }
    else if(body.error){
       callback('Error in the data provided - invalid input')
    }
    else{
    //   const data = JSON.parse(response.body)
    //   console.log(data.current)  
    //console.log(response.body.current)
    // const t=(response.body.current.temperature) 
    // const t2=(response.body.current.feelslike)
    // const p=(response.body.current.precip)
    // const d=(response.body.current.weather_descriptions)
    // const l=(response.body.location.name)
    // const c=(response.body.location.region)

    // const data =(l +' '+c+' '+t+' Feels like '+t2+ ' '+d)

    // callback(undefined, data)
    callback(undefined, {
        region: body.location.region,
        location: body.location.name,
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        descriptions: body.current.weather_descriptions   
    })

    }
})

}
module.exports = forecast