
function calcVol(){
  r = radius.value  // read radius from element with id="radius"
  volume = 4/3.0*(r*r*r)*Math.PI // calculate the Volume of a Sphere
  Volume.innerHTML =    // write into label element with id "Volume"
      "Your Volume is "
      +volume.toFixed(1)  // round Volume to 1 decimal place
}
