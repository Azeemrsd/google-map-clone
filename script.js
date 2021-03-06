mapboxgl.accessToken = "pk.eyJ1IjoiYXplZW1yc2QiLCJhIjoiY2tqZGRobGFrODcwNjMycWpkYTF2cGI5eiJ9.LRwpZguSJua4Wv7xH18r0A";

const successLocation = (position)=>{
console.log(position)
setupMap([position.coords.longitude, position.coords.latitude])
}
const errorLocation =()=>{
setupMap([-2.24,53.48])
}
const setupMap = (center)=>{
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:14
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
}
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})
