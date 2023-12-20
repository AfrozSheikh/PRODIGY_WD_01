const userTab = document.querySelector("[data-userWeather]") ; 
const searchTab = document.querySelector("[data-searchedWeather]") ; 
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-grantAccess]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// Initailly needed variable 


let currentTab = userTab ; 
const API_KEY = "9a1cddcf06f72d6c661d08d618e32176" ; 
currentTab.classList.add("current-tab") ; 


function switchTab(clickedTab){
   if(clickedTab != currentTab){
      currentTab.classList.remove("current-tab") ; 
       currentTab = clickedTab ;
       currentTab.classList.add("current-tab") ; 
 
       if(!searchForm.classList.contains)
   }
}



userTab.addEventListener('click' , ()=> 
{
   // pass clicked tab as input parameter 
   switchTab(userTab) ; 
})

 searchTab.addEventListener('click',()=>{
   switchTab(searchTab);
 })



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //API CALL
   
// async function t () { 
//     let  city = "delhi" ; 
//     let key = "9a1cddcf06f72d6c661d08d618e32176"

//     let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
//  let data = await result.json() ; 
//  console.log(data);


// }



// TO PRINT LATTITUDE AND LONGITUDE

// function getLoc() {
//     if(navigator.geolocation) { 
//         navigator.geolocation.getCurrentPosition(show) 

//     }
//     function show(position) {
//         let lat = position.coords.latitude ; 
//         let lon = position.coords.longitude ; 
//         console.log(lat);
//         console.log(lon);
//     }
// }