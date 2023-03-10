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
    const asiaCountries = data.filter( (country) =>{ return country.region === "Asia" });
    console.log(asiaCountries);
    for(let i=0; i<asiaCountries.length; i++)
    {
       console.log(asiaCountries[i].name.common)
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
Array(50) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

Kyrgyzstan 
Yemen 
Israel 
Nepal 
Indonesia 
Macau 
Syria 
Iraq 
Uzbekistan 
Palestine 
India 
Saudi Arabi6
China 
Bangladesh 
Oman 
Mongolia
Myanmar
United Arab Emirates
Brunei 
Singapore 
Pakistan 
Lebanon
Turkmenistan 
Tajikistan 
Philippines 
Afghanistan 
Vietnam 
Kazakhstan
Georgia 
Bhutan
Qatar
Malaysia 
South Korea 
Japan 
Bahrain 
Kuwait 
Maldives 
Cambodia 
Armenia 
Sri Lanka 
North Korea 
Thailand 
Laos
Hong Kong
Iran 
Azerbaijan 
Taiwan 
Jordan 
Turkey 
Timor-Leste 



​

*/