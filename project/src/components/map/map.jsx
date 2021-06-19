import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/useMap';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const {activeCard, offers, city } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.city.location;
        const offerCords = [latitude, longitude];

        leaflet
          .marker(offerCords,
            {
              icon: (offer.id === activeCard)
                ? currentCustomIcon
                : defaultCustomIcon,
            })
          .addTo(map);
      });
    }
  }, [map, offers, activeCard]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}></div>
  );
}

Map.propTypes = {
  activeCard: PropTypes.number,
  offers: PropTypes.array,
  city: PropTypes.shape({
    name: PropTypes.string,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
};

export default Map;
