mapboxgl.accessToken =
  'pk.eyJ1Ijoicm9tYW5vd3QiLCJhIjoiY2xwNmd5eTkxMDlzeTJpb3FqYzd4bGZ3ZiJ9.XtSZmv6rSAJXQNlHUl12rw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [-120.5542, 43.8041]
});

// Fetch libraries from API
async function getLibraries() {
  const res = await fetch('/api/v1/libraries');
  const data = await res.json();

  const libraries = data.data.map(library => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          library.location.coordinates[0],
          library.location.coordinates[1]
        ]
      },
      properties: {
        libraryId: library.libraryId,
        icon: 'library'
      }
    };
  });

  loadMap(libraries);
}

// Load map with libraries
function loadMap(libraries) {
  map.on('load', function() {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: libraries
        }
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{libraryId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top'
      }
    });
  });
}

getLibraries();
