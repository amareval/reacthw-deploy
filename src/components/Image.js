import React from "react";

const Image = props => {

  return (
      //Style the div for the images
<div className = "">

<img height = "175"
width = "250"
id = "ballerimg"
    src = {props.src}
    onClick={()=>{props.imageClick(props.id)}}/>

</div>
  );
};

export default Image;
