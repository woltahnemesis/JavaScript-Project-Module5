// Fetches the resource located in the URL
fetch('https://woltahnemesis.github.io/Lab4JavaScript/onlineStore.json')
// Then returns the response type as a JSON file
.then(function(response){
    return response.json();
})
// Displays the object
.then(function(jsonObj){
    
    //Retrieves object's properties
    products = jsonObj.products;
    
    let container = document.getElementById('container');
    let main_area = document.getElementById('main-area');
    
    for(let i = 0; i < products.length; i++){
        
        let img = document.createElement('img');
        let div = document.createElement('div');
        
        div.setAttribute('id', 'box');
        
        img.setAttribute('src', 'https://woltahnemesis.github.io/Lab4JavaScript/Images/' + products[i].image);
        img.setAttribute('alt', products[i].image);
        img.setAttribute('width', 400);
        
        div.innerHTML = 
            '<p>Name: ' + products[i].name + '</p>' +
            '<p>Price: ' + products[i].price + '</p>' + 
            '<p>' + products[i].details + '</p>';
        
        div.appendChild(img);
        main_area.appendChild(div);
        
    }
    
// Fullscreen API - BROWSER API
}).then(function(){
    let img = document.querySelectorAll('img');
    
    for(let i = 0; i < img.length; i++){
        
        img[i].onclick = function(){
            document.documentElement.requestFullscreen();
        };
    }
// Google Maps API - THIRD PARTY API
}).then(function(){
    
    function initMap(){
    
    //Object's position
    let iloiloCity = {
        
        //Properties
        lat: 10.7299123,
        lng: 122.4783298
    };

    let map_div = document.getElementById('map');    
    
    //Zooms and centers to the specific location
    let map = new google.maps.Map(map_div, {
        //Zoom property
        zoom: 15,
        //Center property
        center: iloiloCity
    });
    
    //creates a marker   
    let marker = new google.maps.Marker({position:iloiloCity, map:map});
    
    }
})
// To catch the error and display the error message
.catch(function(err){
    console.log('Fetch problem: ' + err.message);
});

