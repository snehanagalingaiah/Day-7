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
     
    data.forEach((country) =>{
        console.log(`Name:${country.name.official}`)
        if(country.hasOwnProperty('capital'))country.capital.forEach((capital,index) =>{console.log(`Capitals:\n ${index+1} ${capital}`)})
        else console.log(`Capitals:\n NA`)
        console.log(`Flag: ${country.flag}`)
    } )
    }

    else{
        console.log("ERROR!!!!!!!!");
    }

}

//send the request
xhr.send();


/*OUTPUT

GEThttp://127.0.0.1:5500/favicon.ico
[HTTP/1.1 404 Not Found 0ms]

****Response received****    
Name:Tunisian Republic    
Capitals:
 1 Tunis    
Flag: ๐น๐ณ    
Name:Kingdom of Spain    
Capitals:
 1 Madrid    
Flag: ๐ช๐ธ    
Name:Kyrgyz Republic    
Capitals:
 1 Bishkek    
Flag: ๐ฐ๐ฌ    
Name:Republic of Yemen    
Capitals:
 1 Sana'a    
Flag: ๐พ๐ช    
Name:State of Israel    
Capitals:
 1 Jerusalem    
Flag: ๐ฎ๐ฑ    
Name:Falkland Islands    
Capitals:
 1 Stanley    
Flag: ๐ซ๐ฐ    
Name:Virgin Islands    
Capitals:
 1 Road Town    
Flag: ๐ป๐ฌ    
Name:Montenegro    
Capitals:
 1 Podgorica    
Flag: ๐ฒ๐ช    
Name:Federal Democratic Republic of Nepal    
Capitals:
 1 Kathmandu    
Flag: ๐ณ๐ต    
Name:Republic of Indonesia    
Capitals:
 1 Jakarta    
Flag: ๐ฎ๐ฉ    
Name:Republic of Rwanda    
Capitals:
 1 Kigali    
Flag: ๐ท๐ผ    
Name:Bouvet Island    
Capitals:
 NA    
Flag: ๐ง๐ป    
Name:Kingdom of Denmark    
Capitals:
 1 Copenhagen    
Flag: ๐ฉ๐ฐ    
Name:Republic of Cameroon    
Capitals:
 1 Yaoundรฉ    
Flag: ๐จ๐ฒ    
Name:Republic of Nicaragua    
Capitals:
 1 Managua    
Flag: ๐ณ๐ฎ    
Name:Republic of El Salvador    
Capitals:
 1 San Salvador    
Flag: ๐ธ๐ป    
Name:Independent and Sovereign Republic of Kiribati    
Capitals:
 1 South Tarawa    
Flag: ๐ฐ๐ฎ    
Name:Commonwealth of Australia    
Capitals:
 1 Canberra    
Flag: ๐ฆ๐บ    
Name:Rรฉunion Island    
Capitals:
 1 Saint-Denis    
Flag: ๐ท๐ช    
Name:South Georgia and the South Sandwich Islands    
Capitals:
 1 King Edward Point    
Flag: ๐ฌ๐ธ    
Name:Guam    
Capitals:
 1 Hagรฅtรฑa    
Flag: ๐ฌ๐บ    
Name:Territory of the French Southern and Antarctic Lands    
Capitals:
 1 Port-aux-Franรงais    
Flag: ๐น๐ซ    
Name:Macao Special Administrative Region of the People's Republic of China    
Capitals:
 NA    
Flag: ๐ฒ๐ด    
Name:Syrian Arab Republic    
Capitals:
 1 Damascus    
Flag: ๐ธ๐พ    
Name:Republic of Iraq    
Capitals:
 1 Baghdad    
Flag: ๐ฎ๐ถ    
Name:Republic of Albania    
Capitals:
 1 Tirana    
Flag: ๐ฆ๐ฑ    
Name:Republic of Uzbekistan    
Capitals:
 1 Tashkent    
Flag: ๐บ๐ฟ    
Name:State of Palestine    
Capitals:
 1 Ramallah    
Capitals:
 2 Jerusalem    
Flag: ๐ต๐ธ    
Name:Commonwealth of the Northern Mariana Islands    
Capitals:
 1 Saipan    
Flag: ๐ฒ๐ต    
Name:Republic of Austria    
Capitals:
 1 Vienna    
Flag: ๐ฆ๐น    
Name:Republic of Zimbabwe    
Capitals:
 1 Harare    
Flag: ๐ฟ๐ผ    
Name:British Indian Ocean Territory    
Capitals:
 1 Diego Garcia    
Flag: ๐ฎ๐ด    
Name:Kingdom of Morocco    
Capitals:
 1 Rabat    
Flag: ๐ฒ๐ฆ    
Name:Republic of Guatemala    
Capitals:
 1 Guatemala City    
Flag: ๐ฌ๐น    
Name:Republic of India    
Capitals:
 1 New Delhi    
Flag: ๐ฎ๐ณ    
Name:Kingdom of Saudi Arabia    
Capitals:
 1 Riyadh    
Flag: ๐ธ๐ฆ    
Name:Principality of Andorra    
Capitals:
 1 Andorra la Vella    
Flag: ๐ฆ๐ฉ    
Name:Commonwealth of the Bahamas    
Capitals:
 1 Nassau    
Flag: ๐ง๐ธ    
Name:Guiana    
Capitals:
 1 Cayenne    
Flag: ๐ฌ๐ซ    
Name:Republic of the Marshall Islands    
Capitals:
 1 Majuro    
Flag: ๐ฒ๐ญ    
Name:Oriental Republic of Uruguay    
Capitals:
 1 Montevideo    
Flag: ๐บ๐พ    
Name:Republic of Moldova    
Capitals:
 1 Chiศinฤu    
Flag: ๐ฒ๐ฉ    
Name:Republic of Chad    
Capitals:
 1 N'Djamena    
Flag: ๐น๐ฉ    
Name:Republic of Guinea-Bissau    
Capitals:
 1 Bissau    
Flag: ๐ฌ๐ผ    
Name:Arab Republic of Egypt    
Capitals:
 1 Cairo    
Flag: ๐ช๐ฌ    
Name:Antarctica    
Capitals:
 NA    
Flag: ๐ฆ๐ถ    
Name:Republic of Malawi    
Capitals:
 1 Lilongwe    
Flag: ๐ฒ๐ผ    
Name:Romania    
Capitals:
 1 Bucharest    
Flag: ๐ท๐ด    
Name:Territory of the Wallis and Futuna Islands    
Capitals:
 1 Mata-Utu    
Flag: ๐ผ๐ซ    
Name:Republic of Vanuatu    
Capitals:
 1 Port Vila    
Flag: ๐ป๐บ    
Name:Republic of Panama    
Capitals:
 1 Panama City    
Flag: ๐ต๐ฆ    
Name:State of Libya    
Capitals:
 1 Tripoli    
Flag: ๐ฑ๐พ    
Name:Republic of Peru    
Capitals:
 1 Lima    
Flag: ๐ต๐ช    
Name:Country of Curaรงao    
Capitals:
 1 Willemstad    
Flag: ๐จ๐ผ    
Name:Gibraltar    
Capitals:
 1 Gibraltar    
Flag: ๐ฌ๐ฎ    
Name:Greenland    
Capitals:
 1 Nuuk    
Flag: ๐ฌ๐ฑ    
Name:French Polynesia    
Capitals:
 1 Papeetฤ    
Flag: ๐ต๐ซ    
Name:United States Minor Outlying Islands    
Capitals:
 1 Washington DC    
Flag: ๐บ๐ฒ    
Name:People's Republic of China    
Capitals:
 1 Beijing    
Flag: ๐จ๐ณ    
Name:United Kingdom of Great Britain and Northern Ireland    
Capitals:
 1 London    
Flag: ๐ฌ๐ง    
Name:Republic of Niger    
Capitals:
 1 Niamey    
Flag: ๐ณ๐ช    
Name:People's Republic of Bangladesh    
Capitals:
 1 Dhaka    
Flag: ๐ง๐ฉ    
Name:Sultanate of Oman    
Capitals:
 1 Muscat    
Flag: ๐ด๐ฒ    
Name:Republic of the Congo    
Capitals:
 1 Brazzaville    
Flag: ๐จ๐ฌ    
Name:Bolivarian Republic of Venezuela    
Capitals:
 1 Caracas    
Flag: ๐ป๐ช    
Name:Pitcairn Group of Islands    
Capitals:
 1 Adamstown    
Flag: ๐ต๐ณ    
Name:Heard Island and McDonald Islands    
Capitals:
 NA    
Flag: ๐ญ๐ฒ    
Name:Mongolia    
Capitals:
 1 Ulan Bator    
Flag: ๐ฒ๐ณ    
Name:Republic of the Sudan    
Capitals:
 1 Khartoum    
Flag: ๐ธ๐ฉ    
Name:New Caledonia    
Capitals:
 1 Noumรฉa    
Flag: ๐ณ๐จ    
Name:Republic of North Macedonia    
Capitals:
 1 Skopje    
Flag: ๐ฒ๐ฐ    
Name:Union of the Comoros    
Capitals:
 1 Moroni    
Flag: ๐ฐ๐ฒ    
Name:Republic of the Union of Myanmar    
Capitals:
 1 Naypyidaw    
Flag: ๐ฒ๐ฒ    
Name:People's Democratic Republic of Algeria    
Capitals:
 1 Algiers    
Flag: ๐ฉ๐ฟ    
Name:Co-operative Republic of Guyana    
Capitals:
 1 Georgetown    
Flag: ๐ฌ๐พ    
Name:Antigua and Barbuda    
Capitals:
 1 Saint John's    
Flag: ๐ฆ๐ฌ    
Name:United Arab Emirates    
Capitals:
 1 Abu Dhabi    
Flag: ๐ฆ๐ช    
Name:Nation of Brunei, Abode of Peace    
Capitals:
 1 Bandar Seri Begawan    
Flag: ๐ง๐ณ    
Name:Federation of Saint Christopher and Nevis    
Capitals:
 1 Basseterre    
Flag: ๐ฐ๐ณ    
Name:Martinique    
Capitals:
 1 Fort-de-France    
Flag: ๐ฒ๐ถ    
Name:Republic of Singapore    
Capitals:
 1 Singapore    
Flag: ๐ธ๐ฌ    
Name:American Samoa    
Capitals:
 1 Pago Pago    
Flag: ๐ฆ๐ธ    
Name:รland Islands    
Capitals:
 1 Mariehamn    
Flag: ๐ฆ๐ฝ    
Name:Islamic Republic of Pakistan    
Capitals:
 1 Islamabad    
Flag: ๐ต๐ฐ    
Name:Federal Democratic Republic of Ethiopia    
Capitals:
 1 Addis Ababa    
Flag: ๐ช๐น    
Name:Saint Vincent and the Grenadines    
Capitals:
 1 Kingstown    
Flag: ๐ป๐จ    
Name:Lebanese Republic    
Capitals:
 1 Beirut    
Flag: ๐ฑ๐ง    
Name:Republic of Equatorial Guinea    
Capitals:
 1 Malabo    
Flag: ๐ฌ๐ถ    
Name:Dominican Republic    
Capitals:
 1 Santo Domingo    
Flag: ๐ฉ๐ด    
Name:Aruba    
Capitals:
 1 Oranjestad    
Flag: ๐ฆ๐ผ    
Name:Isle of Man    
Capitals:
 1 Douglas    
Flag: ๐ฎ๐ฒ    
Name:Anguilla    
Capitals:
 1 The Valley    
Flag: ๐ฆ๐ฎ    
Name:Saint Martin    
Capitals:
 1 Marigot    
Flag: ๐ฒ๐ซ    
Name:Turkmenistan    
Capitals:
 1 Ashgabat    
Flag: ๐น๐ฒ    
Name:United Republic of Tanzania    
Capitals:
 1 Dodoma    
Flag: ๐น๐ฟ    
Name:Federal Republic of Germany    
Capitals:
 1 Berlin    
Flag: ๐ฉ๐ช    
Name:Ukraine    
Capitals:
 1 Kyiv    
Flag: ๐บ๐ฆ    
Name:Slovak Republic    
Capitals:
 1 Bratislava    
Flag: ๐ธ๐ฐ    
Name:Republic of Suriname    
Capitals:
 1 Paramaribo    
Flag: ๐ธ๐ท    
Name:Republic of Tajikistan    
Capitals:
 1 Dushanbe    
Flag: ๐น๐ฏ    
Name:United Mexican States    
Capitals:
 1 Mexico City    
Flag: ๐ฒ๐ฝ    
Name:Republic of the Philippines    
Capitals:
 1 Manila    
Flag: ๐ต๐ญ    
Name:Territory of Christmas Island    
Capitals:
 1 Flying Fish Cove    
Flag: ๐จ๐ฝ    
Name:Republic of South Africa    
Capitals:
 1 Pretoria    
Capitals:
 2 Bloemfontein    
Capitals:
 3 Cape Town    
Flag: ๐ฟ๐ฆ    
Name:Canada    
Capitals:
 1 Ottawa    
Flag: ๐จ๐ฆ    
Name:Republic of Ghana    
Capitals:
 1 Accra    
Flag: ๐ฌ๐ญ    
Name:Svalbard og Jan Mayen    
Capitals:
 1 Longyearbyen    
Flag: ๐ธ๐ฏ    
Name:Islamic Republic of Afghanistan    
Capitals:
 1 Kabul    
Flag: ๐ฆ๐ซ    
Name:Republic of Belarus    
Capitals:
 1 Minsk    
Flag: ๐ง๐พ    
Name:Democratic Republic of the Congo    
Capitals:
 1 Kinshasa    
Flag: ๐จ๐ฉ    
Name:Grand Duchy of Luxembourg    
Capitals:
 1 Luxembourg    
Flag: ๐ฑ๐บ    
Name:Socialist Republic of Vietnam    
Capitals:
 1 Hanoi    
Flag: ๐ป๐ณ    
Name:Federal Republic of Nigeria    
Capitals:
 1 Abuja    
Flag: ๐ณ๐ฌ    
Name:Republic of Colombia    
Capitals:
 1 Bogotรก    
Flag: ๐จ๐ด    
Name:Republic of Liberia    
Capitals:
 1 Monrovia    
Flag: ๐ฑ๐ท    
Name:Republic of Kazakhstan    
Capitals:
 1 Nur-Sultan    
Flag: ๐ฐ๐ฟ    
Name:Republic of the Gambia    
Capitals:
 1 Banjul    
Flag: ๐ฌ๐ฒ    
Name:Hungary    
Capitals:
 1 Budapest    
Flag: ๐ญ๐บ    
Name:Georgia    
Capitals:
 1 Tbilisi    
Flag: ๐ฌ๐ช    
Name:Republic of Bulgaria    
Capitals:
 1 Sofia    
Flag: ๐ง๐ฌ    
Name:Solomon Islands    
Capitals:
 1 Honiara    
Flag: ๐ธ๐ง    
Name:Kingdom of Belgium    
Capitals:
 1 Brussels    
Flag: ๐ง๐ช    
Name:Principality of Monaco    
Capitals:
 1 Monaco    
Flag: ๐ฒ๐จ    
Name:Principality of Liechtenstein    
Capitals:
 1 Vaduz    
Flag: ๐ฑ๐ฎ    
Name:Kingdom of Bhutan    
Capitals:
 1 Thimphu    
Flag: ๐ง๐น    
Name:State of Qatar    
Capitals:
 1 Doha    
Flag: ๐ถ๐ฆ    
Name:Argentine Republic    
Capitals:
 1 Buenos Aires    
Flag: ๐ฆ๐ท    
Name:Czech Republic    
Capitals:
 1 Prague    
Flag: ๐จ๐ฟ    
Name:Malaysia    
Capitals:
 1 Kuala Lumpur    
Flag: ๐ฒ๐พ    
Name:State of Eritrea    
Capitals:
 1 Asmara    
Flag: ๐ช๐ท    
Name:Italian Republic    
Capitals:
 1 Rome    
Flag: ๐ฎ๐น    
Name:Republic of Korea    
Capitals:
 1 Seoul    
Flag: ๐ฐ๐ท    
Name:Japan    
Capitals:
 1 Tokyo    
Flag: ๐ฏ๐ต    
Name:Kingdom of Bahrain    
Capitals:
 1 Manama    
Flag: ๐ง๐ญ    
Name:Central African Republic    
Capitals:
 1 Bangui    
Flag: ๐จ๐ซ    
Name:Republic of Cuba    
Capitals:
 1 Havana    
Flag: ๐จ๐บ    
Name:State of Kuwait    
Capitals:
 1 Kuwait City    
Flag: ๐ฐ๐ผ    
Name:Republic of Mauritius    
Capitals:
 1 Port Louis    
Flag: ๐ฒ๐บ    
Name:Cook Islands    
Capitals:
 1 Avarua    
Flag: ๐จ๐ฐ    
Name:Republic of Ireland    
Capitals:
 1 Dublin    
Flag: ๐ฎ๐ช    
Name:Republic of the Maldives    
Capitals:
 1 Malรฉ    
Flag: ๐ฒ๐ป    
Name:Republic of Cyprus    
Capitals:
 1 Nicosia    
Flag: ๐จ๐พ    
Name:Kingdom of Cambodia    
Capitals:
 1 Phnom Penh    
Flag: ๐ฐ๐ญ    
Name:Republic of Mozambique    
Capitals:
 1 Maputo    
Flag: ๐ฒ๐ฟ    
Name:Kingdom of Sweden    
Capitals:
 1 Stockholm    
Flag: ๐ธ๐ช    
Name:Republic of Chile    
Capitals:
 1 Santiago    
Flag: ๐จ๐ฑ    
Name:Swiss Confederation    
Capitals:
 1 Bern    
Flag: ๐จ๐ญ    
Name:Republic of Cabo Verde    
Capitals:
 1 Praia    
Flag: ๐จ๐ป    
Name:Hellenic Republic    
Capitals:
 1 Athens    
Flag: ๐ฌ๐ท    
Name:Kingdom of the Netherlands    
Capitals:
 1 Amsterdam    
Flag: ๐ณ๐ฑ    
Name:Republic of South Sudan    
Capitals:
 1 Juba    
Flag: ๐ธ๐ธ    
Name:Republic of Armenia    
Capitals:
 1 Yerevan    
Flag: ๐ฆ๐ฒ    
Name:Territory of the Cocos (Keeling) Islands    
Capitals:
 1 West Island    
Flag: ๐จ๐จ    
Name:Portuguese Republic    
Capitals:
 1 Lisbon    
Flag: ๐ต๐น    
Name:Kingdom of Tonga    
Capitals:
 1 Nuku'alofa    
Flag: ๐น๐ด    
Name:Republic of Djibouti    
Capitals:
 1 Djibouti    
Flag: ๐ฉ๐ฏ    
Name:Saint Pierre and Miquelon    
Capitals:
 1 Saint-Pierre    
Flag: ๐ต๐ฒ    
Name:Iceland    
Capitals:
 1 Reykjavik    
Flag: ๐ฎ๐ธ    
Name:Republic of Guinea    
Capitals:
 1 Conakry    
Flag: ๐ฌ๐ณ    
Name:Republic of Uganda    
Capitals:
 1 Kampala    
Flag: ๐บ๐ฌ    
Name:Saint Helena, Ascension and Tristan da Cunha    
Capitals:
 1 Jamestown    
Flag: ๐ธ๐ญ    
Name:Faroe Islands    
Capitals:
 1 Tรณrshavn    
Flag: ๐ซ๐ด    
Name:Republic of San Marino    
Capitals:
 1 City of San Marino    
Flag: ๐ธ๐ฒ    
Name:Tokelau    
Capitals:
 1 Fakaofo    
Flag: ๐น๐ฐ    
Name:Bonaire, Sint Eustatius and Saba    
Capitals:
 1 Kralendijk    
Flag: ๐ง๐ถ    
Name:Grenada    
Capitals:
 1 St. George's    
Flag: ๐ฌ๐ฉ    
Name:Republic of Kenya    
Capitals:
 1 Nairobi    
Flag: ๐ฐ๐ช    
Name:Democratic Socialist Republic of Sri Lanka    
Capitals:
 1 Sri Jayawardenepura Kotte    
Flag: ๐ฑ๐ฐ    
Name:Turks and Caicos Islands    
Capitals:
 1 Cockburn Town    
Flag: ๐น๐จ    
Name:Virgin Islands of the United States    
Capitals:
 1 Charlotte Amalie    
Flag: ๐ป๐ฎ    
Name:Republic of Ecuador    
Capitals:
 1 Quito    
Flag: ๐ช๐จ    
Name:Federal Republic of Somalia    
Capitals:
 1 Mogadishu    
Flag: ๐ธ๐ด    
Name:Montserrat    
Capitals:
 1 Plymouth    
Flag: ๐ฒ๐ธ    
Name:Republic of Honduras    
Capitals:
 1 Tegucigalpa    
Flag: ๐ญ๐ณ    
Name:Democratic People's Republic of Korea    
Capitals:
 1 Pyongyang    
Flag: ๐ฐ๐ต    
Name:Republic of Trinidad and Tobago    
Capitals:
 1 Port of Spain    
Flag: ๐น๐น    
Name:Republic of Slovenia    
Capitals:
 1 Ljubljana    
Flag: ๐ธ๐ฎ    
Name:Kingdom of Thailand    
Capitals:
 1 Bangkok    
Flag: ๐น๐ญ    
Name:Federated States of Micronesia    
Capitals:
 1 Palikir    
Flag: ๐ซ๐ฒ    
Name:Republic of Malta    
Capitals:
 1 Valletta    
Flag: ๐ฒ๐น    
Name:Republic of Haiti    
Capitals:
 1 Port-au-Prince    
Flag: ๐ญ๐น    
Name:Republic of Latvia    
Capitals:
 1 Riga    
Flag: ๐ฑ๐ป    
Name:Guadeloupe    
Capitals:
 1 Basse-Terre    
Flag: ๐ฌ๐ต    
Name:Department of Mayotte    
Capitals:
 1 Mamoudzou    
Flag: ๐พ๐น    
Name:Belize    
Capitals:
 1 Belmopan    
Flag: ๐ง๐ฟ    
Name:Republic of Cรดte d'Ivoire    
Capitals:
 1 Yamoussoukro    
Flag: ๐จ๐ฎ    
Name:Republic of Zambia    
Capitals:
 1 Lusaka    
Flag: ๐ฟ๐ฒ    
Name:Democratic Republic of Sรฃo Tomรฉ and Prรญncipe    
Capitals:
 1 Sรฃo Tomรฉ    
Flag: ๐ธ๐น    
Name:Federative Republic of Brazil    
Capitals:
 1 Brasรญlia    
Flag: ๐ง๐ท    
Name:Republic of Namibia    
Capitals:
 1 Windhoek    
Flag: ๐ณ๐ฆ    
Name:Republic of Senegal    
Capitals:
 1 Dakar    
Flag: ๐ธ๐ณ    
Name:Independent State of Papua New Guinea    
Capitals:
 1 Port Moresby    
Flag: ๐ต๐ฌ    
Name:Republic of Seychelles    
Capitals:
 1 Victoria    
Flag: ๐ธ๐จ    
Name:Kingdom of Lesotho    
Capitals:
 1 Maseru    
Flag: ๐ฑ๐ธ    
Name:Sint Maarten    
Capitals:
 1 Philipsburg    
Flag: ๐ธ๐ฝ    
Name:Gabonese Republic    
Capitals:
 1 Libreville    
Flag: ๐ฌ๐ฆ    
Name:Saint Lucia    
Capitals:
 1 Castries    
Flag: ๐ฑ๐จ    
Name:Republic of Madagascar    
Capitals:
 1 Antananarivo    
Flag: ๐ฒ๐ฌ    
Name:Republic of Sierra Leone    
Capitals:
 1 Freetown    
Flag: ๐ธ๐ฑ    
Name:Republic of Benin    
Capitals:
 1 Porto-Novo    
Flag: ๐ง๐ฏ    
Name:Commonwealth of Puerto Rico    
Capitals:
 1 San Juan    
Flag: ๐ต๐ท    
Name:Bermuda    
Capitals:
 1 Hamilton    
Flag: ๐ง๐ฒ    
Name:Republic of Croatia    
Capitals:
 1 Zagreb    
Flag: ๐ญ๐ท    
Name:Lao People's Democratic Republic    
Capitals:
 1 Vientiane    
Flag: ๐ฑ๐ฆ    
Name:Russian Federation    
Capitals:
 1 Moscow    
Flag: ๐ท๐บ    
Name:French Republic    
Capitals:
 1 Paris    
Flag: ๐ซ๐ท    
Name:United States of America    
Capitals:
 1 Washington, D.C.    
Flag: ๐บ๐ธ    
Name:Republic of Burundi    
Capitals:
 1 Gitega    
Flag: ๐ง๐ฎ    
Name:Republic of Fiji    
Capitals:
 1 Suva    
Flag: ๐ซ๐ฏ    
Name:Hong Kong Special Administrative Region of the People's Republic of China    
Capitals:
 1 City of Victoria    
Flag: ๐ญ๐ฐ    
Name:Islamic Republic of Iran    
Capitals:
 1 Tehran    
Flag: ๐ฎ๐ท    
Name:Sahrawi Arab Democratic Republic    
Capitals:
 1 El Aaiรบn    
Flag: ๐ช๐ญ    
Name:Collectivity of Saint Barthรฉlemy    
Capitals:
 1 Gustavia    
Flag: ๐ง๐ฑ    
Name:Republic of Mali    
Capitals:
 1 Bamako    
Flag: ๐ฒ๐ฑ    
Name:Republic of Poland    
Capitals:
 1 Warsaw    
Flag: ๐ต๐ฑ    
Name:Commonwealth of Dominica    
Capitals:
 1 Roseau    
Flag: ๐ฉ๐ฒ    
Name:Republic of Lithuania    
Capitals:
 1 Vilnius    
Flag: ๐ฑ๐น    
Name:Republic of Azerbaijan    
Capitals:
 1 Baku    
Flag: ๐ฆ๐ฟ    
Name:Burkina Faso    
Capitals:
 1 Ouagadougou    
Flag: ๐ง๐ซ    
Name:Republic of Kosovo    
Capitals:
 1 Pristina    
Flag: ๐ฝ๐ฐ    
Name:Kingdom of Norway    
Capitals:
 1 Oslo    
Flag: ๐ณ๐ด    
Name:Republic of China (Taiwan)    
Capitals:
 1 Taipei    
Flag: ๐น๐ผ    
Name:Republic of Finland    
Capitals:
 1 Helsinki    
Flag: ๐ซ๐ฎ    
Name:Republic of Angola    
Capitals:
 1 Luanda    
Flag: ๐ฆ๐ด    
Name:Republic of Nauru    
Capitals:
 1 Yaren    
Flag: ๐ณ๐ท    
Name:Republic of Palau    
Capitals:
 1 Ngerulmud    
Flag: ๐ต๐ผ    
Name:Territory of Norfolk Island    
Capitals:
 1 Kingston    
Flag: ๐ณ๐ซ    
Name:Bailiwick of Jersey    
Capitals:
 1 Saint Helier    
Flag: ๐ฏ๐ช    
Name:Kingdom of Eswatini    
Capitals:
 1 Mbabane    
Flag: ๐ธ๐ฟ    
Name:Republic of Serbia    
Capitals:
 1 Belgrade    
Flag: ๐ท๐ธ    
Name:Tuvalu    
Capitals:
 1 Funafuti    
Flag: ๐น๐ป    
Name:Republic of Botswana    
Capitals:
 1 Gaborone    
Flag: ๐ง๐ผ    
Name:Bailiwick of Guernsey    
Capitals:
 1 St. Peter Port    
Flag: ๐ฌ๐ฌ    
Name:Republic of Costa Rica    
Capitals:
 1 San Josรฉ    
Flag: ๐จ๐ท    
Name:Vatican City State    
Capitals:
 1 Vatican City    
Flag: ๐ป๐ฆ    
Name:Hashemite Kingdom of Jordan    
Capitals:
 1 Amman    
Flag: ๐ฏ๐ด    
Name:Republic of Estonia    
Capitals:
 1 Tallinn    
Flag: ๐ช๐ช    
Name:Barbados    
Capitals:
 1 Bridgetown    
Flag: ๐ง๐ง    
Name:Plurinational State of Bolivia    
Capitals:
 1 Sucre    
Flag: ๐ง๐ด    
Name:Togolese Republic    
Capitals:
 1 Lomรฉ    
Flag: ๐น๐ฌ    
Name:Independent State of Samoa    
Capitals:
 1 Apia    
Flag: ๐ผ๐ธ    
Name:Islamic Republic of Mauritania    
Capitals:
 1 Nouakchott    
Flag: ๐ฒ๐ท    
Name:New Zealand    
Capitals:
 1 Wellington    
Flag: ๐ณ๐ฟ    
Name:Niue    
Capitals:
 1 Alofi    
Flag: ๐ณ๐บ    
Name:Republic of Turkey    
Capitals:
 1 Ankara    
Flag: ๐น๐ท    
Name:Democratic Republic of Timor-Leste    
Capitals:
 1 Dili    
Flag: ๐น๐ฑ    
Name:Republic of Paraguay    
Capitals:
 1 Asunciรณn    
Flag: ๐ต๐พ    
Name:Bosnia and Herzegovina    
Capitals:
 1 Sarajevo    
Flag: ๐ง๐ฆ    
Name:Cayman Islands    
Capitals:
 1 George Town    
Flag: ๐ฐ๐พ    
Name:Jamaica    
Capitals:
 1 Kingston    
Flag: ๐ฏ๐ฒ    



*/