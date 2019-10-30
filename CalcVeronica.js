function calcVol(){
  r = radius.value  // read radius from element with id="radius"
  h = height.value  // read height from element with id="height"
  volume = 1/3.0*(r*r)*h*Math.PI  // calculate the Volume of a Cone
  Volume.innerHTML =    // write into label element with id "Volume of a Cone"
      "Your Volume is "
      +volume.toFixed(1)  // round Volume to 1 decimal place
}
