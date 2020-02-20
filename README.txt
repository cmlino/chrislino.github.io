The first thing I did was create the html layout for the page, my idea was to have a bunch of ID's and populate 
them with data from api calls to create the page.
I decided to have the current weather show in the center with a detailed information, and have the 5-day forecast
below with simpler information. I orgininally wanted each 5day to be a clickable element that would make it enlarged
in the middle with more information but i ran out of time.
there is also a search bar where you can search by city or zip code to get the same info for those. I used get request
and jquery to get the information sent through that get to avoid using php or similar backend for the search feature.
The largest time sink was reading the documentation for openweather api and figuring out how to actually use the call
with javascript. 