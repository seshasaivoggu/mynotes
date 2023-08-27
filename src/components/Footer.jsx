import React from 'react';
let thisYear=new Date().getFullYear();
function Footer() {
  return (
    <footer><p>Copyright ⓒ {thisYear}</p></footer>
  );
}

export default Footer;