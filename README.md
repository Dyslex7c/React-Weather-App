# React-Weather-App
<a><img align = "center" src = "https://i.imgur.com/VLo6GiH.png" width = "50px"></a> 
<a><img align = "center" src = "https://i.imgur.com/NP2hRFA.png" width = "50px"></a> 
<a><img align = "center" src = "https://i.imgur.com/dq2JVwT.png" width = "50px"></a>
<a><img align = "center" src = "https://i.imgur.com/eYtLGWn.png" width = "50px"></a>

A weather app made using React JS which shows real-time weather forecast for user's current location as well as any worldwide location looked up by the user. It uses Rapid API and OpenWeatherMap API. It also consists of a toggle button to enable the user to switch between light and dark mode. 

Upon viewing this react-app, the app prompts the user requesting for their general location. If access is granted, the app shows weather forecast based on the user's current location. If, however, access is denied, the app sits idle until the user starts interacting.

![screenshot1](https://github.com/Dyslex7c/React-Weather-App/assets/98543992/3508f736-2731-4a93-b6ec-ac7e8bac5c8b)

![screenshot2](https://github.com/Dyslex7c/React-Weather-App/assets/98543992/b1460a15-2603-4315-8f3e-540ec6dec9ed)

The present-day weather is displayed in a box which shows temperature, description of the weather along with other components of weather like humidity, wind speed, pressure, etc. The weather forecast of the preceding 7 days is also displayed in rectangular divs, containing the minimum and maximum temperature of that day along with description (such as broken clouds, overcast clouds). Relevant weather icons has also been displayed wherever applicable.

Apart from the user's current location, the app can also display weather forecast of a city the user has searched for. A component called `AsyncPaginate` imported from `react-select-async-paginate` library has been used for creating this search bar. The user can search for cities all around the globe having a minimum population of 1000 and infer its climate.

![screenshot3](https://github.com/Dyslex7c/React-Weather-App/assets/98543992/9753c0d2-7d1d-4fd9-b760-3f70d92e6225)

## Credits
<a href="https://youtu.be/Reny0cTTv24?si=7nP-Ls7GiSMuBUGy">Slobodan Gajic - Weather App</a>

<a href="https://youtu.be/bMknfKXIFA8?si=EgoLCwQB0jSA2jYh">React course by Bob Ziroll</a>

<a href="https://www.flaticon.com/free-icons/app" title="app icons">Document icon created by Freepik - Flaticon</a>
