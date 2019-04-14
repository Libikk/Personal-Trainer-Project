import React from 'react';
import '../styles/contact.scss';
import Banner from '../containers/Banner';


let map;

class Contact extends React.Component {
  componentDidMount() {
    const longitude = -0.2798;
    const latitude = 51.5853;
    const kingsburyPosition = [longitude, latitude];

    const mapboxgl = require('mapbox-gl'); /* eslint-disable-line */
    mapboxgl.accessToken = 'pk.eyJ1IjoibGliaWsiLCJhIjoiY2pybnJ2b3ZpMDdlYTQ0cnE1ejQ0cTJvNSJ9.QHb1hw8gKHkxiJnqOt6VJQ';
    map = new mapboxgl.Map({
      container: 'entry-map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 14.5,
      center: kingsburyPosition,
      scrollZoom: {
        ctrl: true,
      },
    });
    map.scrollZoom.disable();
    map.on('load', () => {
      /* Image: An image is loaded and added to the map. */
      map.loadImage('https://i.imgur.com/MK4NUzI.png', (error, image) => {
        image.classList.add('mystyle');
        if (error) throw error;
        map.addImage('custom-marker', image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: 'markers',
          type: 'symbol',
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: kingsburyPosition,
                  },
                },
              ],
            },
          },
          layout: {
            'icon-image': 'custom-marker',
          },
        });
      });
    });
  }

  render() {
    const style = {
      position: 'relative',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '350px',
      display: 'block',
    };
    return (
      <div className="contact-container">
        <map style={style} id="entry-map" />
        <div className="container__contact-form">
          <form action="#" className="contact-form__wrapper">
            <h1>Contact us</h1>
            <div className="thin-line" />
            <input type="text" name="fullname" placeholder="FULL NAME" />
            <input type="email" name="emailaddress" placeholder="E-MAIL" />
            <textarea placeholder="YOUR MESSAGE" />
            <div className="button-container">
              <span className="primary-button">SEND MESSAGE</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
