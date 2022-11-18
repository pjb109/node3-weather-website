const request= require('request')



const geocode = (address,callback) =>{

    const GOE= '  https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicGpiMTA5IiwiYSI6ImNsOXg3ZG92ZjA3ZmEzeG05bnc5dnoxcHYifQ.1GoCXNVUb8dldCjNtOZZJw&limit=1'
                                    // destructuring body property
   request({url:GOE, json:true}, (error, {body}) => {
       if(error){
           callback('Unable to connect ',undefined)
       }
       else if(body.features.length ===0){
           callback('Unable to find location.  Try another search. ',undefined)
       }
       else{
        //    const lon=(response.body.features[0].center[0])
        //    const lat =(response.body.features[0].center[1])
        //    const dat = lat+ ' '+lon

        //    callback(undefined,dat )

        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })

       }

   })
}

module.exports = geocode