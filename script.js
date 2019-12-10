function onload() {

    console.log("calander is a go");

    const APIKey = "2c813a5ddb0333d82ae04e2aaab7621b";

    $('#searchBtn').on("click", function () {

        let city = document.getElementById("cityname").value;

        //let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + APIKey + "&cnt=6" +"&units=imperial";
        let queryURL = "http://api.openweathermap.org/data/2.5/forecast?appid="+APIKey+"&q="+city+"&count=6"+"&units=imperial";
        console.log(queryURL);

        axios.get(queryURL)
            .then(function (response) {

                console.log(response);

                document.getElementById("location").innerText = response.data.city.name +" ("+ response.data.list[0].dt_txt+")";
                document.getElementById("temp").innerText = "Temperature: " + response.data.list[0].main.temp +" °F";
                document.getElementById("humidity").innerText = "Humidity: " + response.data.list[0].main.humidity +"%";
                document.getElementById("wind").innerText = "Wind Speed: " + response.data.list[0].wind.speed+" MPH";


                    document.getElementById("date10").innerText = response.data.list[10].dt_txt;
                    console.log(response.data.list[10].weather[0].icon);
                    let icon10 = "http://openweathermap.org/img/w/" + response.data.list[10].weather[0].icon + ".png";
                    $('#icon10').attr('src', icon10);
                    document.getElementById("temp10").innerText = "Temperature: " + response.data.list[10].main.temp+" °F";
                    document.getElementById("humidity10").innerText = "Humidity: " + response.data.list[10].main.humidity+"%";

                    document.getElementById("date18").innerText = response.data.list[18].dt_txt;
                    let icon18 = "http://openweathermap.org/img/w/" + response.data.list[18].weather[0].icon + ".png";
                    $('#icon18').attr('src', icon18);                    
                    document.getElementById("temp18").innerText = "Temperature: " + response.data.list[18].main.temp+" °F";
                    document.getElementById("humidity18").innerText = "Humidity: " + response.data.list[18].main.humidity+"%";

                    document.getElementById("date26").innerText = response.data.list[26].dt_txt;
                    let icon26 = "http://openweathermap.org/img/w/" + response.data.list[26].weather[0].icon + ".png";
                    $('#icon26').attr('src', icon26);                    
                    document.getElementById("temp26").innerText = "Temperature: " + response.data.list[26].main.temp+" °F";
                    document.getElementById("humidity26").innerText = "Humidity: " + response.data.list[26].main.humidity+"%";

                    document.getElementById("date34").innerText = response.data.list[34].dt_txt;
                    let icon34 = "http://openweathermap.org/img/w/" + response.data.list[34].weather[0].icon + ".png";
                    $('#icon34').attr('src', icon34);                    
                    document.getElementById("temp34").innerText = "Temperature: " + response.data.list[34].main.temp+" °F";
                    document.getElementById("humidity34").innerText = "Humidity: " + response.data.list[34].main.humidity+"%";

                    document.getElementById("date39").innerText = response.data.list[39].dt_txt;
                    let icon39 = "http://openweathermap.org/img/w/" + response.data.list[39].weather[0].icon + ".png";
                    $('#icon39').attr('src', icon39);                    
                    document.getElementById("temp39").innerText = "Temperature: " + response.data.list[39].main.temp+" °F";
                    document.getElementById("humidity39").innerText = "Humidity: " + response.data.list[39].main.humidity+"%";


                /////////////////////////////////////////////////////////////////////////////////////////////////////

                let latitude = response.data.city.coord.lat;
                let longitude = response.data.city.coord.lon;

                console.log(latitude, longitude);

                let coordURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + APIKey + "&lat=" + latitude + "&lon=" + longitude + "&cnt=5"

                console.log(coordURL);
                axios.get(coordURL)
                    .then(function (coordResponse) {
                        console.log(coordResponse);
                        let UV = coordResponse.data[0].value;
                        document.getElementById("UV").innerText = "UV Index: " + UV;
                    });
            });
    })

} onload();