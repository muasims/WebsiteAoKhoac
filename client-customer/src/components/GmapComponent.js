import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe
          title="gmap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.637172505469!2d106.65983037586919!3d10.835517358099317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529853f3867ad%3A0x9fffcee1d98735a2!2zU2hvcCBUaOG6vyBHaeG7m2kgw4FvIEdpw7Mgw4FvIEtob8OhYw!5e1!3m2!1svi!2s!4v1732684097284!5m2!1svi!2s" 
          width="800"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default Gmap;