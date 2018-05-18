# Group Project1-WanderList

Welcome to exciting world of travel! You can search the places you would love to travel based on cities or zip code. When the user inputs city/zip code or both, we store the inputs in local storage. We use google autocomplete api to assist user with city names. Once user have entered the city or zip code, we make a call to Google Geolocations API and get the latitude and longitude for that place. Once we get the coordinates for the city, we call Google Places API search �nearby� function to get the details about that place searched. We have based our search on types like park and museums. The user can get local attractions of the places and get an idea what he would like to do when he visits the city. Once we get list of attractions, we go to Google Places Details API and get detailed description of each attractions, get the rating and reviews that other people have left on Google. We get photos from Google Photos for each attraction to give a visual representation to the user and user can click through a carousel of pictures to get an idea of the attraction. We have used Open Weather api to get the weather information based on the user selected city. User can chat with other fellow travelers using our Chat Functionality. We are using Firebase Database to store all the user messages on chat. When the user is on the attractions page, s/he also has a choice of searching another destination by clicking the icon on the right bottom of the page. 

API
1. Google Autocomplete
2. Google Geolocations 
3. Google Places � Nearby
4. Google Place � Detail
5. Google Photos
6. Weather API (Open Weather)

Database
1. Firebase Database


Link to Site:
https://zankokou.github.io/GroupProject1/