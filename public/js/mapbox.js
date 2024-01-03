// Get the map element
const mapElement = document.getElementById('map');

// Get the locations data from the data-locations attribute
const locationsData = JSON.parse(mapElement.dataset.locations);

let map;

const defaultCenter = {
  lat: locationsData[0].coordinates[1],
  lng: locationsData[0].coordinates[0],
};

async function initMap() {
  // Create a map centered at a default location
  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultCenter,
    zoom: 6,
  });

  // Create markers for each location
  locationsData.forEach((location) => {
    const marker = new google.maps.Marker({
      position: { lat: location.coordinates[1], lng: location.coordinates[0] },
      map: map,
      title: location.description,
    });

    // You can customize the marker by adding additional properties or info windows
    // For example:
    /*
  const infowindow = new google.maps.InfoWindow({
    content: `<h3>${location.description}</h3>`,
  });

  marker.addListener('click', () => {
    infowindow.open(map, marker);
  });
  */
  });
}

initMap();
