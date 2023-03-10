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
    const countries   = data.filter( (country) =>{ return country.population < 200000 });
    console.log(countries  );
    for(let i=0; i<countries  .length; i++)
    {
       console.log(`Name:${countries  [i].name.common}  \n  Population: ${countries  [i].population}`);
                  
    }
    }

    else{
        console.log("ERROR!!!!!!!!");
    }

}

//send the request
xhr.send();


/*OUTPUT


****Response received**** script-2.js:12:14
Name:Falkland Islands  
  Population: 2563  
Name:British Virgin Islands  
  Population: 30237  
Name:Bouvet Island  
  Population: 0  
Name:Kiribati  
  Population: 119446  
Name:South Georgia  
  Population: 30  
Name:Guam  
  Population: 168783  
Name:French Southern and Antarctic Lands  
  Population: 400  
Name:Northern Mariana Islands  
  Population: 57557  
Name:British Indian Ocean Territory  
  Population: 3000
Name:Andorra  
  Population: 77265  
Name:Marshall Islands  
  Population: 59194  
Name:Antarctica  
  Population: 1000  
Name:Wallis and Futuna  
  Population: 11750  
Name:Curaçao  
  Population: 155014  
Name:Gibraltar  
  Population: 33691  
Name:Greenland  
  Population: 56367  
Name:United States Minor Outlying Islands  
  Population: 300  
Name:Pitcairn Islands  
  Population: 56  
Name:Heard Island and McDonald Islands  
  Population: 0  
Name:Antigua and Barbuda  
  Population: 97928  
Name:Saint Kitts and Nevis  
  Population: 53192  
Name:American Samoa  
  Population: 55197  
Name:Åland Islands  
  Population: 29458  
Name:Saint Vincent and the Grenadines  
  Population: 110947  
Name:Aruba  
  Population: 106766  
Name:Isle of Man  
  Population: 85032  
Name:Anguilla  
  Population: 13452  
Name:Saint Martin  
  Population: 38659  
Name:Christmas Island  
  Population: 2072  
Name:Svalbard and Jan Mayen  
  Population: 2562  
Name:Monaco  
  Population: 39244  
Name:Liechtenstein  
  Population: 38137  
Name:Cook Islands  
  Population: 18100  
Name:Cocos (Keeling) Islands  
  Population: 544  
Name:Tonga  
  Population: 105697  
Name:Saint Pierre and Miquelon  
  Population: 6069  
Name:Saint Helena, Ascension and Tristan da Cunha  
  Population: 53192  
Name:Faroe Islands  
  Population: 48865  
Name:San Marino  
  Population: 33938  
Name:Tokelau  
  Population: 1411  
Name:Caribbean Netherlands  
  Population: 25987  
Name:Grenada  
  Population: 112519  
Name:Turks and Caicos Islands  
  Population: 38718  
Name:United States Virgin Islands  
  Population: 106290  
Name:Montserrat  
  Population: 4922  
Name:Micronesia  
  Population: 115021  
Name:Seychelles  
  Population: 98462  
Name:Sint Maarten  
  Population: 40812  
Name:Saint Lucia  
  Population: 183629  
Name:Bermuda  
  Population: 63903  
Name:Saint Barthélemy  
  Population: 4255  
Name:Dominica  
  Population: 71991  
Name:Nauru  
  Population: 10834  
Name:Palau  
  Population: 18092  
Name:Norfolk Island  
  Population: 2302  
Name:Jersey  
  Population: 100800  
Name:Tuvalu  
  Population: 11792  
Name:Guernsey  
  Population: 62999  
Name:Vatican City  
  Population: 451  
Name:Samoa  
  Population: 198410  
Name:Niue  
  Population: 1470  
Name:Cayman Islands  
  Population: 65720  





​

*/