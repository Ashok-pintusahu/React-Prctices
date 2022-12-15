import React from 'react';
import Toki from './assets/images/toki.jpg';

const UsingRequire = () => {
  return (
    <div>
      <img height={100} alt="madhia" src={require("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png")}/>
      {/* <img height={100} alt="madhia" src={require(Toki)}/> */}
    </div>
  );
}

export default UsingRequire;