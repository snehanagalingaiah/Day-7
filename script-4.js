//create an instance of the request
let xhr = new XMLHttpRequest();

//open your request
xhr.open("GET", "https://restcountries.com/v3.1/all");

//setting up a listener to process the rquest
xhr.onload = function(){
   
    if(xhr.status>=200 && xhr.status<300){
       //executed only if the data is recieved properly
     console.log("****Response received****");
     let data= JSON.parse(this.responseText) //converted data into object format
     const initialValue = 0;

      const populationTotal = data.reduce((total, country)=>
      {
        return total + country.population;},initialValue);

    
     console.log(`Total Population: ${populationTotal}`);
    }

    else{
        console.log("ERROR!!!!!!!!");
    }

}

//send the request
xhr.send();


/*OUTPUT

****Response received**** 

Total Population: 7777721563 

*/

