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
Flag: 🇹🇳    
Name:Kingdom of Spain    
Capitals:
 1 Madrid    
Flag: 🇪🇸    
Name:Kyrgyz Republic    
Capitals:
 1 Bishkek    
Flag: 🇰🇬    
Name:Republic of Yemen    
Capitals:
 1 Sana'a    
Flag: 🇾🇪    
Name:State of Israel    
Capitals:
 1 Jerusalem    
Flag: 🇮🇱    
Name:Falkland Islands    
Capitals:
 1 Stanley    
Flag: 🇫🇰    
Name:Virgin Islands    
Capitals:
 1 Road Town    
Flag: 🇻🇬    
Name:Montenegro    
Capitals:
 1 Podgorica    
Flag: 🇲🇪    
Name:Federal Democratic Republic of Nepal    
Capitals:
 1 Kathmandu    
Flag: 🇳🇵    
Name:Republic of Indonesia    
Capitals:
 1 Jakarta    
Flag: 🇮🇩    
Name:Republic of Rwanda    
Capitals:
 1 Kigali    
Flag: 🇷🇼    
Name:Bouvet Island    
Capitals:
 NA    
Flag: 🇧🇻    
Name:Kingdom of Denmark    
Capitals:
 1 Copenhagen    
Flag: 🇩🇰    
Name:Republic of Cameroon    
Capitals:
 1 Yaoundé    
Flag: 🇨🇲    
Name:Republic of Nicaragua    
Capitals:
 1 Managua    
Flag: 🇳🇮    
Name:Republic of El Salvador    
Capitals:
 1 San Salvador    
Flag: 🇸🇻    
Name:Independent and Sovereign Republic of Kiribati    
Capitals:
 1 South Tarawa    
Flag: 🇰🇮    
Name:Commonwealth of Australia    
Capitals:
 1 Canberra    
Flag: 🇦🇺    
Name:Réunion Island    
Capitals:
 1 Saint-Denis    
Flag: 🇷🇪    
Name:South Georgia and the South Sandwich Islands    
Capitals:
 1 King Edward Point    
Flag: 🇬🇸    
Name:Guam    
Capitals:
 1 Hagåtña    
Flag: 🇬🇺    
Name:Territory of the French Southern and Antarctic Lands    
Capitals:
 1 Port-aux-Français    
Flag: 🇹🇫    
Name:Macao Special Administrative Region of the People's Republic of China    
Capitals:
 NA    
Flag: 🇲🇴    
Name:Syrian Arab Republic    
Capitals:
 1 Damascus    
Flag: 🇸🇾    
Name:Republic of Iraq    
Capitals:
 1 Baghdad    
Flag: 🇮🇶    
Name:Republic of Albania    
Capitals:
 1 Tirana    
Flag: 🇦🇱    
Name:Republic of Uzbekistan    
Capitals:
 1 Tashkent    
Flag: 🇺🇿    
Name:State of Palestine    
Capitals:
 1 Ramallah    
Capitals:
 2 Jerusalem    
Flag: 🇵🇸    
Name:Commonwealth of the Northern Mariana Islands    
Capitals:
 1 Saipan    
Flag: 🇲🇵    
Name:Republic of Austria    
Capitals:
 1 Vienna    
Flag: 🇦🇹    
Name:Republic of Zimbabwe    
Capitals:
 1 Harare    
Flag: 🇿🇼    
Name:British Indian Ocean Territory    
Capitals:
 1 Diego Garcia    
Flag: 🇮🇴    
Name:Kingdom of Morocco    
Capitals:
 1 Rabat    
Flag: 🇲🇦    
Name:Republic of Guatemala    
Capitals:
 1 Guatemala City    
Flag: 🇬🇹    
Name:Republic of India    
Capitals:
 1 New Delhi    
Flag: 🇮🇳    
Name:Kingdom of Saudi Arabia    
Capitals:
 1 Riyadh    
Flag: 🇸🇦    
Name:Principality of Andorra    
Capitals:
 1 Andorra la Vella    
Flag: 🇦🇩    
Name:Commonwealth of the Bahamas    
Capitals:
 1 Nassau    
Flag: 🇧🇸    
Name:Guiana    
Capitals:
 1 Cayenne    
Flag: 🇬🇫    
Name:Republic of the Marshall Islands    
Capitals:
 1 Majuro    
Flag: 🇲🇭    
Name:Oriental Republic of Uruguay    
Capitals:
 1 Montevideo    
Flag: 🇺🇾    
Name:Republic of Moldova    
Capitals:
 1 Chișinău    
Flag: 🇲🇩    
Name:Republic of Chad    
Capitals:
 1 N'Djamena    
Flag: 🇹🇩    
Name:Republic of Guinea-Bissau    
Capitals:
 1 Bissau    
Flag: 🇬🇼    
Name:Arab Republic of Egypt    
Capitals:
 1 Cairo    
Flag: 🇪🇬    
Name:Antarctica    
Capitals:
 NA    
Flag: 🇦🇶    
Name:Republic of Malawi    
Capitals:
 1 Lilongwe    
Flag: 🇲🇼    
Name:Romania    
Capitals:
 1 Bucharest    
Flag: 🇷🇴    
Name:Territory of the Wallis and Futuna Islands    
Capitals:
 1 Mata-Utu    
Flag: 🇼🇫    
Name:Republic of Vanuatu    
Capitals:
 1 Port Vila    
Flag: 🇻🇺    
Name:Republic of Panama    
Capitals:
 1 Panama City    
Flag: 🇵🇦    
Name:State of Libya    
Capitals:
 1 Tripoli    
Flag: 🇱🇾    
Name:Republic of Peru    
Capitals:
 1 Lima    
Flag: 🇵🇪    
Name:Country of Curaçao    
Capitals:
 1 Willemstad    
Flag: 🇨🇼    
Name:Gibraltar    
Capitals:
 1 Gibraltar    
Flag: 🇬🇮    
Name:Greenland    
Capitals:
 1 Nuuk    
Flag: 🇬🇱    
Name:French Polynesia    
Capitals:
 1 Papeetē    
Flag: 🇵🇫    
Name:United States Minor Outlying Islands    
Capitals:
 1 Washington DC    
Flag: 🇺🇲    
Name:People's Republic of China    
Capitals:
 1 Beijing    
Flag: 🇨🇳    
Name:United Kingdom of Great Britain and Northern Ireland    
Capitals:
 1 London    
Flag: 🇬🇧    
Name:Republic of Niger    
Capitals:
 1 Niamey    
Flag: 🇳🇪    
Name:People's Republic of Bangladesh    
Capitals:
 1 Dhaka    
Flag: 🇧🇩    
Name:Sultanate of Oman    
Capitals:
 1 Muscat    
Flag: 🇴🇲    
Name:Republic of the Congo    
Capitals:
 1 Brazzaville    
Flag: 🇨🇬    
Name:Bolivarian Republic of Venezuela    
Capitals:
 1 Caracas    
Flag: 🇻🇪    
Name:Pitcairn Group of Islands    
Capitals:
 1 Adamstown    
Flag: 🇵🇳    
Name:Heard Island and McDonald Islands    
Capitals:
 NA    
Flag: 🇭🇲    
Name:Mongolia    
Capitals:
 1 Ulan Bator    
Flag: 🇲🇳    
Name:Republic of the Sudan    
Capitals:
 1 Khartoum    
Flag: 🇸🇩    
Name:New Caledonia    
Capitals:
 1 Nouméa    
Flag: 🇳🇨    
Name:Republic of North Macedonia    
Capitals:
 1 Skopje    
Flag: 🇲🇰    
Name:Union of the Comoros    
Capitals:
 1 Moroni    
Flag: 🇰🇲    
Name:Republic of the Union of Myanmar    
Capitals:
 1 Naypyidaw    
Flag: 🇲🇲    
Name:People's Democratic Republic of Algeria    
Capitals:
 1 Algiers    
Flag: 🇩🇿    
Name:Co-operative Republic of Guyana    
Capitals:
 1 Georgetown    
Flag: 🇬🇾    
Name:Antigua and Barbuda    
Capitals:
 1 Saint John's    
Flag: 🇦🇬    
Name:United Arab Emirates    
Capitals:
 1 Abu Dhabi    
Flag: 🇦🇪    
Name:Nation of Brunei, Abode of Peace    
Capitals:
 1 Bandar Seri Begawan    
Flag: 🇧🇳    
Name:Federation of Saint Christopher and Nevis    
Capitals:
 1 Basseterre    
Flag: 🇰🇳    
Name:Martinique    
Capitals:
 1 Fort-de-France    
Flag: 🇲🇶    
Name:Republic of Singapore    
Capitals:
 1 Singapore    
Flag: 🇸🇬    
Name:American Samoa    
Capitals:
 1 Pago Pago    
Flag: 🇦🇸    
Name:Åland Islands    
Capitals:
 1 Mariehamn    
Flag: 🇦🇽    
Name:Islamic Republic of Pakistan    
Capitals:
 1 Islamabad    
Flag: 🇵🇰    
Name:Federal Democratic Republic of Ethiopia    
Capitals:
 1 Addis Ababa    
Flag: 🇪🇹    
Name:Saint Vincent and the Grenadines    
Capitals:
 1 Kingstown    
Flag: 🇻🇨    
Name:Lebanese Republic    
Capitals:
 1 Beirut    
Flag: 🇱🇧    
Name:Republic of Equatorial Guinea    
Capitals:
 1 Malabo    
Flag: 🇬🇶    
Name:Dominican Republic    
Capitals:
 1 Santo Domingo    
Flag: 🇩🇴    
Name:Aruba    
Capitals:
 1 Oranjestad    
Flag: 🇦🇼    
Name:Isle of Man    
Capitals:
 1 Douglas    
Flag: 🇮🇲    
Name:Anguilla    
Capitals:
 1 The Valley    
Flag: 🇦🇮    
Name:Saint Martin    
Capitals:
 1 Marigot    
Flag: 🇲🇫    
Name:Turkmenistan    
Capitals:
 1 Ashgabat    
Flag: 🇹🇲    
Name:United Republic of Tanzania    
Capitals:
 1 Dodoma    
Flag: 🇹🇿    
Name:Federal Republic of Germany    
Capitals:
 1 Berlin    
Flag: 🇩🇪    
Name:Ukraine    
Capitals:
 1 Kyiv    
Flag: 🇺🇦    
Name:Slovak Republic    
Capitals:
 1 Bratislava    
Flag: 🇸🇰    
Name:Republic of Suriname    
Capitals:
 1 Paramaribo    
Flag: 🇸🇷    
Name:Republic of Tajikistan    
Capitals:
 1 Dushanbe    
Flag: 🇹🇯    
Name:United Mexican States    
Capitals:
 1 Mexico City    
Flag: 🇲🇽    
Name:Republic of the Philippines    
Capitals:
 1 Manila    
Flag: 🇵🇭    
Name:Territory of Christmas Island    
Capitals:
 1 Flying Fish Cove    
Flag: 🇨🇽    
Name:Republic of South Africa    
Capitals:
 1 Pretoria    
Capitals:
 2 Bloemfontein    
Capitals:
 3 Cape Town    
Flag: 🇿🇦    
Name:Canada    
Capitals:
 1 Ottawa    
Flag: 🇨🇦    
Name:Republic of Ghana    
Capitals:
 1 Accra    
Flag: 🇬🇭    
Name:Svalbard og Jan Mayen    
Capitals:
 1 Longyearbyen    
Flag: 🇸🇯    
Name:Islamic Republic of Afghanistan    
Capitals:
 1 Kabul    
Flag: 🇦🇫    
Name:Republic of Belarus    
Capitals:
 1 Minsk    
Flag: 🇧🇾    
Name:Democratic Republic of the Congo    
Capitals:
 1 Kinshasa    
Flag: 🇨🇩    
Name:Grand Duchy of Luxembourg    
Capitals:
 1 Luxembourg    
Flag: 🇱🇺    
Name:Socialist Republic of Vietnam    
Capitals:
 1 Hanoi    
Flag: 🇻🇳    
Name:Federal Republic of Nigeria    
Capitals:
 1 Abuja    
Flag: 🇳🇬    
Name:Republic of Colombia    
Capitals:
 1 Bogotá    
Flag: 🇨🇴    
Name:Republic of Liberia    
Capitals:
 1 Monrovia    
Flag: 🇱🇷    
Name:Republic of Kazakhstan    
Capitals:
 1 Nur-Sultan    
Flag: 🇰🇿    
Name:Republic of the Gambia    
Capitals:
 1 Banjul    
Flag: 🇬🇲    
Name:Hungary    
Capitals:
 1 Budapest    
Flag: 🇭🇺    
Name:Georgia    
Capitals:
 1 Tbilisi    
Flag: 🇬🇪    
Name:Republic of Bulgaria    
Capitals:
 1 Sofia    
Flag: 🇧🇬    
Name:Solomon Islands    
Capitals:
 1 Honiara    
Flag: 🇸🇧    
Name:Kingdom of Belgium    
Capitals:
 1 Brussels    
Flag: 🇧🇪    
Name:Principality of Monaco    
Capitals:
 1 Monaco    
Flag: 🇲🇨    
Name:Principality of Liechtenstein    
Capitals:
 1 Vaduz    
Flag: 🇱🇮    
Name:Kingdom of Bhutan    
Capitals:
 1 Thimphu    
Flag: 🇧🇹    
Name:State of Qatar    
Capitals:
 1 Doha    
Flag: 🇶🇦    
Name:Argentine Republic    
Capitals:
 1 Buenos Aires    
Flag: 🇦🇷    
Name:Czech Republic    
Capitals:
 1 Prague    
Flag: 🇨🇿    
Name:Malaysia    
Capitals:
 1 Kuala Lumpur    
Flag: 🇲🇾    
Name:State of Eritrea    
Capitals:
 1 Asmara    
Flag: 🇪🇷    
Name:Italian Republic    
Capitals:
 1 Rome    
Flag: 🇮🇹    
Name:Republic of Korea    
Capitals:
 1 Seoul    
Flag: 🇰🇷    
Name:Japan    
Capitals:
 1 Tokyo    
Flag: 🇯🇵    
Name:Kingdom of Bahrain    
Capitals:
 1 Manama    
Flag: 🇧🇭    
Name:Central African Republic    
Capitals:
 1 Bangui    
Flag: 🇨🇫    
Name:Republic of Cuba    
Capitals:
 1 Havana    
Flag: 🇨🇺    
Name:State of Kuwait    
Capitals:
 1 Kuwait City    
Flag: 🇰🇼    
Name:Republic of Mauritius    
Capitals:
 1 Port Louis    
Flag: 🇲🇺    
Name:Cook Islands    
Capitals:
 1 Avarua    
Flag: 🇨🇰    
Name:Republic of Ireland    
Capitals:
 1 Dublin    
Flag: 🇮🇪    
Name:Republic of the Maldives    
Capitals:
 1 Malé    
Flag: 🇲🇻    
Name:Republic of Cyprus    
Capitals:
 1 Nicosia    
Flag: 🇨🇾    
Name:Kingdom of Cambodia    
Capitals:
 1 Phnom Penh    
Flag: 🇰🇭    
Name:Republic of Mozambique    
Capitals:
 1 Maputo    
Flag: 🇲🇿    
Name:Kingdom of Sweden    
Capitals:
 1 Stockholm    
Flag: 🇸🇪    
Name:Republic of Chile    
Capitals:
 1 Santiago    
Flag: 🇨🇱    
Name:Swiss Confederation    
Capitals:
 1 Bern    
Flag: 🇨🇭    
Name:Republic of Cabo Verde    
Capitals:
 1 Praia    
Flag: 🇨🇻    
Name:Hellenic Republic    
Capitals:
 1 Athens    
Flag: 🇬🇷    
Name:Kingdom of the Netherlands    
Capitals:
 1 Amsterdam    
Flag: 🇳🇱    
Name:Republic of South Sudan    
Capitals:
 1 Juba    
Flag: 🇸🇸    
Name:Republic of Armenia    
Capitals:
 1 Yerevan    
Flag: 🇦🇲    
Name:Territory of the Cocos (Keeling) Islands    
Capitals:
 1 West Island    
Flag: 🇨🇨    
Name:Portuguese Republic    
Capitals:
 1 Lisbon    
Flag: 🇵🇹    
Name:Kingdom of Tonga    
Capitals:
 1 Nuku'alofa    
Flag: 🇹🇴    
Name:Republic of Djibouti    
Capitals:
 1 Djibouti    
Flag: 🇩🇯    
Name:Saint Pierre and Miquelon    
Capitals:
 1 Saint-Pierre    
Flag: 🇵🇲    
Name:Iceland    
Capitals:
 1 Reykjavik    
Flag: 🇮🇸    
Name:Republic of Guinea    
Capitals:
 1 Conakry    
Flag: 🇬🇳    
Name:Republic of Uganda    
Capitals:
 1 Kampala    
Flag: 🇺🇬    
Name:Saint Helena, Ascension and Tristan da Cunha    
Capitals:
 1 Jamestown    
Flag: 🇸🇭    
Name:Faroe Islands    
Capitals:
 1 Tórshavn    
Flag: 🇫🇴    
Name:Republic of San Marino    
Capitals:
 1 City of San Marino    
Flag: 🇸🇲    
Name:Tokelau    
Capitals:
 1 Fakaofo    
Flag: 🇹🇰    
Name:Bonaire, Sint Eustatius and Saba    
Capitals:
 1 Kralendijk    
Flag: 🇧🇶    
Name:Grenada    
Capitals:
 1 St. George's    
Flag: 🇬🇩    
Name:Republic of Kenya    
Capitals:
 1 Nairobi    
Flag: 🇰🇪    
Name:Democratic Socialist Republic of Sri Lanka    
Capitals:
 1 Sri Jayawardenepura Kotte    
Flag: 🇱🇰    
Name:Turks and Caicos Islands    
Capitals:
 1 Cockburn Town    
Flag: 🇹🇨    
Name:Virgin Islands of the United States    
Capitals:
 1 Charlotte Amalie    
Flag: 🇻🇮    
Name:Republic of Ecuador    
Capitals:
 1 Quito    
Flag: 🇪🇨    
Name:Federal Republic of Somalia    
Capitals:
 1 Mogadishu    
Flag: 🇸🇴    
Name:Montserrat    
Capitals:
 1 Plymouth    
Flag: 🇲🇸    
Name:Republic of Honduras    
Capitals:
 1 Tegucigalpa    
Flag: 🇭🇳    
Name:Democratic People's Republic of Korea    
Capitals:
 1 Pyongyang    
Flag: 🇰🇵    
Name:Republic of Trinidad and Tobago    
Capitals:
 1 Port of Spain    
Flag: 🇹🇹    
Name:Republic of Slovenia    
Capitals:
 1 Ljubljana    
Flag: 🇸🇮    
Name:Kingdom of Thailand    
Capitals:
 1 Bangkok    
Flag: 🇹🇭    
Name:Federated States of Micronesia    
Capitals:
 1 Palikir    
Flag: 🇫🇲    
Name:Republic of Malta    
Capitals:
 1 Valletta    
Flag: 🇲🇹    
Name:Republic of Haiti    
Capitals:
 1 Port-au-Prince    
Flag: 🇭🇹    
Name:Republic of Latvia    
Capitals:
 1 Riga    
Flag: 🇱🇻    
Name:Guadeloupe    
Capitals:
 1 Basse-Terre    
Flag: 🇬🇵    
Name:Department of Mayotte    
Capitals:
 1 Mamoudzou    
Flag: 🇾🇹    
Name:Belize    
Capitals:
 1 Belmopan    
Flag: 🇧🇿    
Name:Republic of Côte d'Ivoire    
Capitals:
 1 Yamoussoukro    
Flag: 🇨🇮    
Name:Republic of Zambia    
Capitals:
 1 Lusaka    
Flag: 🇿🇲    
Name:Democratic Republic of São Tomé and Príncipe    
Capitals:
 1 São Tomé    
Flag: 🇸🇹    
Name:Federative Republic of Brazil    
Capitals:
 1 Brasília    
Flag: 🇧🇷    
Name:Republic of Namibia    
Capitals:
 1 Windhoek    
Flag: 🇳🇦    
Name:Republic of Senegal    
Capitals:
 1 Dakar    
Flag: 🇸🇳    
Name:Independent State of Papua New Guinea    
Capitals:
 1 Port Moresby    
Flag: 🇵🇬    
Name:Republic of Seychelles    
Capitals:
 1 Victoria    
Flag: 🇸🇨    
Name:Kingdom of Lesotho    
Capitals:
 1 Maseru    
Flag: 🇱🇸    
Name:Sint Maarten    
Capitals:
 1 Philipsburg    
Flag: 🇸🇽    
Name:Gabonese Republic    
Capitals:
 1 Libreville    
Flag: 🇬🇦    
Name:Saint Lucia    
Capitals:
 1 Castries    
Flag: 🇱🇨    
Name:Republic of Madagascar    
Capitals:
 1 Antananarivo    
Flag: 🇲🇬    
Name:Republic of Sierra Leone    
Capitals:
 1 Freetown    
Flag: 🇸🇱    
Name:Republic of Benin    
Capitals:
 1 Porto-Novo    
Flag: 🇧🇯    
Name:Commonwealth of Puerto Rico    
Capitals:
 1 San Juan    
Flag: 🇵🇷    
Name:Bermuda    
Capitals:
 1 Hamilton    
Flag: 🇧🇲    
Name:Republic of Croatia    
Capitals:
 1 Zagreb    
Flag: 🇭🇷    
Name:Lao People's Democratic Republic    
Capitals:
 1 Vientiane    
Flag: 🇱🇦    
Name:Russian Federation    
Capitals:
 1 Moscow    
Flag: 🇷🇺    
Name:French Republic    
Capitals:
 1 Paris    
Flag: 🇫🇷    
Name:United States of America    
Capitals:
 1 Washington, D.C.    
Flag: 🇺🇸    
Name:Republic of Burundi    
Capitals:
 1 Gitega    
Flag: 🇧🇮    
Name:Republic of Fiji    
Capitals:
 1 Suva    
Flag: 🇫🇯    
Name:Hong Kong Special Administrative Region of the People's Republic of China    
Capitals:
 1 City of Victoria    
Flag: 🇭🇰    
Name:Islamic Republic of Iran    
Capitals:
 1 Tehran    
Flag: 🇮🇷    
Name:Sahrawi Arab Democratic Republic    
Capitals:
 1 El Aaiún    
Flag: 🇪🇭    
Name:Collectivity of Saint Barthélemy    
Capitals:
 1 Gustavia    
Flag: 🇧🇱    
Name:Republic of Mali    
Capitals:
 1 Bamako    
Flag: 🇲🇱    
Name:Republic of Poland    
Capitals:
 1 Warsaw    
Flag: 🇵🇱    
Name:Commonwealth of Dominica    
Capitals:
 1 Roseau    
Flag: 🇩🇲    
Name:Republic of Lithuania    
Capitals:
 1 Vilnius    
Flag: 🇱🇹    
Name:Republic of Azerbaijan    
Capitals:
 1 Baku    
Flag: 🇦🇿    
Name:Burkina Faso    
Capitals:
 1 Ouagadougou    
Flag: 🇧🇫    
Name:Republic of Kosovo    
Capitals:
 1 Pristina    
Flag: 🇽🇰    
Name:Kingdom of Norway    
Capitals:
 1 Oslo    
Flag: 🇳🇴    
Name:Republic of China (Taiwan)    
Capitals:
 1 Taipei    
Flag: 🇹🇼    
Name:Republic of Finland    
Capitals:
 1 Helsinki    
Flag: 🇫🇮    
Name:Republic of Angola    
Capitals:
 1 Luanda    
Flag: 🇦🇴    
Name:Republic of Nauru    
Capitals:
 1 Yaren    
Flag: 🇳🇷    
Name:Republic of Palau    
Capitals:
 1 Ngerulmud    
Flag: 🇵🇼    
Name:Territory of Norfolk Island    
Capitals:
 1 Kingston    
Flag: 🇳🇫    
Name:Bailiwick of Jersey    
Capitals:
 1 Saint Helier    
Flag: 🇯🇪    
Name:Kingdom of Eswatini    
Capitals:
 1 Mbabane    
Flag: 🇸🇿    
Name:Republic of Serbia    
Capitals:
 1 Belgrade    
Flag: 🇷🇸    
Name:Tuvalu    
Capitals:
 1 Funafuti    
Flag: 🇹🇻    
Name:Republic of Botswana    
Capitals:
 1 Gaborone    
Flag: 🇧🇼    
Name:Bailiwick of Guernsey    
Capitals:
 1 St. Peter Port    
Flag: 🇬🇬    
Name:Republic of Costa Rica    
Capitals:
 1 San José    
Flag: 🇨🇷    
Name:Vatican City State    
Capitals:
 1 Vatican City    
Flag: 🇻🇦    
Name:Hashemite Kingdom of Jordan    
Capitals:
 1 Amman    
Flag: 🇯🇴    
Name:Republic of Estonia    
Capitals:
 1 Tallinn    
Flag: 🇪🇪    
Name:Barbados    
Capitals:
 1 Bridgetown    
Flag: 🇧🇧    
Name:Plurinational State of Bolivia    
Capitals:
 1 Sucre    
Flag: 🇧🇴    
Name:Togolese Republic    
Capitals:
 1 Lomé    
Flag: 🇹🇬    
Name:Independent State of Samoa    
Capitals:
 1 Apia    
Flag: 🇼🇸    
Name:Islamic Republic of Mauritania    
Capitals:
 1 Nouakchott    
Flag: 🇲🇷    
Name:New Zealand    
Capitals:
 1 Wellington    
Flag: 🇳🇿    
Name:Niue    
Capitals:
 1 Alofi    
Flag: 🇳🇺    
Name:Republic of Turkey    
Capitals:
 1 Ankara    
Flag: 🇹🇷    
Name:Democratic Republic of Timor-Leste    
Capitals:
 1 Dili    
Flag: 🇹🇱    
Name:Republic of Paraguay    
Capitals:
 1 Asunción    
Flag: 🇵🇾    
Name:Bosnia and Herzegovina    
Capitals:
 1 Sarajevo    
Flag: 🇧🇦    
Name:Cayman Islands    
Capitals:
 1 George Town    
Flag: 🇰🇾    
Name:Jamaica    
Capitals:
 1 Kingston    
Flag: 🇯🇲    



*/