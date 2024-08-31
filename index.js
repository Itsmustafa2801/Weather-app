function getweather() {
    //    get variable value input  box
        let checkCityName =   document.getElementById("temp1").value ; 
        
        axios.get(`http://api.weatherapi.com/v1/current.json?key=58fe42d55dbd4309808100429241807&q=${checkCityName}&aqi=no`)
      .then(function (response) {
        // handle success
        console.log(response);
      let weather1 = response.data.current.
      temp_c ;
      console.log(weather1)
      document.getElementById("change").innerHTML = (`Today Temp of ${checkCityName} is    ${weather1} °C`)
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
    
    
    
    
    }