import React from "react";

const Widgets = () => {
  return (
    <div style={{marginTop:50}}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={{border: 'none', overflow: 'hidden', height:'100%', marginRight: '2rem'}}
      />
    </div>
  );
};
export default  Widgets