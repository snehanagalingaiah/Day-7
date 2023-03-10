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

    const countries  = data.filter( (country) =>{ 
        if(country.hasOwnProperty('currencies')){
        countryCurrencies= Object.keys(country.currencies)


}
    if(countryCurrencies.includes("USD"))
    return true;
    else return false
});


    console.log(countries );
    for(let i=0; i<countries.length; i++)
    {
       console.log(`Name:${countries[i].name.common}`);
       country_currencies = Object.keys(countries[i].currencies);
       console.log(`Currencies:`)
       for(var j=0; j<country_currencies.length ; j++){
        console.log(`${j+1}. ${country_currencies[j]}`)
       }
    
    }
    }

    else{
        console.log("ERROR!!!!!!!!");
    }

}

//send the request
xhr.send();


/*OUTPUT


****Response received**** 
Array(20) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]


Name:British Virgin Islands  
Currencies:  
1. USD  
Name:El Salvador  
Currencies:  
1. USD  
Name:Guam  
Currencies:  
1. USD  
Name:Northern Mariana Islands  
Currencies:  
1. USD  
Name:British Indian Ocean Territory  
Currencies:  
1. USD  
Name:Bahamas  
Currencies:  
1. BSD  
2. USD  
Name:Marshall Islands  
Currencies:  
1. USD  
Name:Panama  
Currencies:  
1. PAB  
2. USD  
Name:United States Minor Outlying Islands  
Currencies:  
1. USD  
Name:American Samoa  
Currencies:  
1. USD  
Name:Cambodia  
Currencies:  
1. KHR  
2. USD  
Name:Caribbean Netherlands  
Currencies:  
1. USD  
Name:Turks and Caicos Islands  
Currencies:  
1. USD  
Name:United States Virgin Islands  
Currencies:  
1. USD  
Name:Ecuador  
Currencies:  
1. USD  
Name:Micronesia  
Currencies:  
1. USD  



​



​

*/