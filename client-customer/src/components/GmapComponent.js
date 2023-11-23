import React, { Component } from 'react';

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h2 className="text-center">MY LOCATION</h2>
        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7637874656384!2d106.8539674615397!3d10.981193889135113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dc4926980729%3A0x59706330a0c7bd1f!2zWFZKNCtIUFIgVHLGsOG7nW5nIFRIQ1MgVHLhuqNuZyBEw6BpLCDEkC4gQsO5aSBUcuG7jW5nIE5naMSpYSwgVHLhuqNuZyBEw6BpLCBUaMOgbmggcGjhu5EgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700130471208!5m2!1svi!2s" width="800" height="600" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;