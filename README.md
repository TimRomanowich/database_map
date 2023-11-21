# database_map

## Install instructions
Clone this repository and install the dependencies with 'npm install'.
You will need to obtain the config.env file from me and place it in the /config directory.  This file contains the API key to the geocoder and the MongoDB Atlas key.
Once all dependencies and the config.env file have been installed, 'npm start' will start the project on locahost:5000

## GET request to display library locations on the map.
On page load, all current libraries locations are displayed on the map.
![image](https://github.com/TimRomanowich/database_map/assets/59593091/b2aabc93-c42f-4280-812f-c64a1550f95f)
## POST request
To add a new library, click on "Add Library" or navigate to http://localhost:5000/add.html
![image](https://github.com/TimRomanowich/database_map/assets/59593091/1f4f844d-9dde-4b53-b4d9-b016401b799d)
#### Library ID
A unique library ID is currently required for each library.  
#### Providing a street address with city and state
The geocoder API will attempt to translate any street address into longitude and latitude coordinates, howevever it is recommended to include the street address, city and state. There are no formatting requirements for the street address, city or state as the API will parse and translate the requests to be geocoded.

If multiiple streets addresses are found by the geocoder, no locations will be added or displayed on the map.


Upon successful creation, the "Library Added!" message will appear.
![image](https://github.com/TimRomanowich/database_map/assets/59593091/8cdcd313-864d-4173-b71f-dcc9f3672562)


## Viewing the list of current libraries 
The URL http://localhost:5000/api/v1/libraries contains the JSON entries for all libraries currently added to the database.


UML:
![image](https://github.com/TimRomanowich/database_map/assets/59593091/bbddd00e-43dd-4eb7-ac6f-73c33de66274)
GET libraries to create the map container object



POST new library location.  Entered address is formated, geocoder and a location object is created to be mapped.



