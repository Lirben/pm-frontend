<script>
    import { onMount } from 'svelte';
    import mapStyles from './map-styles';
    import LocationInfoWindow from './LocationInfoWindow.svelte';

    export let locations;
    export let topLevel = true;
    export let editable = false;
    export let updateRegion;
    export let regionBorder = true;

    let dataLayers = new Array();
    let mapDiv;
    let map;
    let src;
    let infowindow;

    $: {
        if(map && locations)
        {
            clearMap();
            loadLocations();
        }
    }

    onMount(async () => {
        mapDiv = document.getElementById("googleMap");

        var observer = new IntersectionObserver(
            function(entries, self) {
                var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
       
                if(isIntersecting) {
                    if (typeof src !== 'undefined')
                    {
                        initialise();
                        return;
                    }

                    src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBDuhvl_8CYNyKZj-S78Du2mfiqEs4-_Fg&libraries=common,geometry,map,onion,poly,util';
                }
            }
        );

        observer.observe(mapDiv);
    });

    function initialise()
    {
        if(locations)
            initMap(locations[0].lat, locations[0].lng, locations[0].zoom);

        if(topLevel || !locations)        
            initMap(51.025, 3.65, 10);

        loadLocations();
    }

    function clearMap() {
        dataLayers.forEach(layer => layer.setStyle({visible:false}));
    }

    function loadLocations() {
        if(locations)
            locations.forEach(location => createNewDataLayer(location));
    }

    function initMap(lat, lng, zoom) {
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: zoom,
            disableDefaultUI: true,
            scrollwheel: false,
            styles: mapStyles
            };
    
        map = new google.maps.Map(mapDiv, mapOptions);
    }

    function toggleLocation (region) {
        if(editable)
            updateRegion(region);
    }


    function createNewDataLayer (region) {
        dataLayers.push(new google.maps.Data({map: map}));

        let geoJSON = region.topGeoJSON;

        if(!topLevel)
            geoJSON = region.geoJSON;

        dataLayers[dataLayers.length-1].addGeoJson( JSON.parse(geoJSON) );

        dataLayers[dataLayers.length-1].setStyle(function(feature)
        {           
            feature.setProperty('name', region.name);

            if(region.paramedicActive)
                return {
                    strokeColor: '#ffc000',
                    strokeOpacity: 0.9,
                    fillOpacity: 0.1,
                    strokeWeight: 3
                };
            else{

                if(regionBorder)
                {
                    return {
                        strokeColor: '#ffc000',
                        strokeOpacity: 0.9,
                        fillOpacity: 0.1,
                        strokeWeight: 2
                    };
                } else {
                    return {
                        strokeColor: '#c0c0c0',
                        strokeOpacity: 0.1,
                        fillOpacity: 0.1,
                        strokeWeight: 2
                    };
                }

            }

        });
        
        dataLayers[dataLayers.length-1].addListener('mouseover', function(event) {

            //if(!practiceHover){
                infowindow = 'Wij komen aan huis in ' + region.name;

                this.overrideStyle(event.feature, {
                    strokeColor: '#ffc000',
                    strokeOpacity: 0.9,
                    fillOpacity: 0.8,
                    fillColor: '#ffc000',
                    strokeWeight: 5
                });
            //}
        });

        dataLayers[dataLayers.length-1].addListener('mouseout', function(event) {
            this.revertStyle();
            infowindow = '';
        });

        dataLayers[dataLayers.length-1].addListener('click', function(event) {
            //appendix = region.name.replace(/\s/g, '-');
            //window.location.href = '../' + appendix;
 
            if(editable)
                toggleLocation(region);                
        });
    };
</script>

<svelte:head>
    <script {src} on:load={initialise}></script>
</svelte:head>

<div class="mx-0 p-25 overflow-auto overflow-y-hidden w-full h-full">
    <div id="googleMap" class="w-full h-full z-0"></div>
</div>

<LocationInfoWindow text={infowindow} />