function vær(link, id){
    fetch(link).then(Response => Response.json())
    .then(json => {
        let info = document.getElementById(id);

        info.innerHTML = ` 
            ${json.current_weather.time}
            (${json.timezone})

            
            
        `

    })
    
}

function vær1(link, id){
    fetch(link).then(Response => Response.json())
    .then(json => {
        let info = document.getElementById(id);

        info.innerHTML = ` 
        ${json.current_weather.temperature}

        ${json.current_weather_units.temperature}   
        `
    })
}

function vær2(link, id){
    fetch(link).then(Response => Response.json())
    .then(json => {
        let info = document.getElementById(id);

        info.innerHTML = ` 
        ${json.current_weather.windspeed}
        ${json.current_weather_units.windspeed}  
        `
    })
}

function vær3(link, id){
    fetch(link).then(Response => Response.json())
    .then(json => {
        let info = document.getElementById(id);

        info.innerHTML = ` 
        ${json.current_weather.winddirection}
        ${json.current_weather_units.winddirection}  
        `
    })
}

function vær4(link, id){
    fetch(link).then(Response => Response.json())
    .then(json => {
        let info = document.getElementById(id);

        info.innerHTML = ` 
        ${json.current_weather.is_day ? 'dag' : 'natt'}
        `
    })

}



window.onload = function(){
    vær('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"Oslo");
    vær1('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS1");
    vær2('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS2");
    vær3('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS3");
    vær4('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS4");
    

    vær('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"tokyo");
    vær1('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to1");
    vær2('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to2");
    vær3('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to3");
    vær4('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to4");
    
    vær('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"buda");
    vær1('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu1");
    vær2('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu2");
    vær3('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu3");
    vær4('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu4");

    vær('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"rio");
    vær1('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri1");
    vær2('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri2");
    vær3('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri3");
    vær4('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri4");

    vær('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"moskva");
    vær1('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo1");
    vær2('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo2");
    vær3('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo3");
    vær4('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo4");


    setInterval(() =>{
        
        vær('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"Oslo");
        vær1('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS1");
        vær2('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS2");
        vær3('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS3");
        vær4('https://api.open-meteo.com/v1/forecast?latitude=59.917544738082796,&longitude=10.760370582624725&current_weather=true',"OS4");

        vær('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"tokyo");
        vær1('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to1");
        vær2('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to2");
        vær3('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to3");
        vær4('https://api.open-meteo.com/v1/forecast?latitude=35.6718149804091,&longitude=139.76906141154078&current_weather=true',"to4");
        
        vær('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"budapest");
        vær1('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu1");
        vær2('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu2");
        vær3('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu3");
        vær4('https://api.open-meteo.com/v1/forecast?latitude=47.50243771436548,&longitude=19.03141644091571&current_weather=true',"bu4");

        vær('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"rio");
        vær1('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri1");
        vær2('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri2");
        vær3('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri3");
        vær4('https://api.open-meteo.com/v1/forecast?latitude=-22.89407243464568,&longitude=-43.21951138885928&current_weather=true',"ri4");

        vær('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"moskva");
        vær1('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo1");
        vær2('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo2");
        vær3('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo3");
        vær4('https://api.open-meteo.com/v1/forecast?latitude=55.7583901134474,&longitude=37.62436079549819&current_weather=true',"mo4");


    }, 10000);
}






