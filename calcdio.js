function calcArea(){
  l = roomLength.value  // read length from element with id="length"
  w = width.value  // read height from element with id="height"
  area = l*w  // calculate the area of the bedroom
  console.log(area)
  areaL.innerHTML =    // write into label element with id "Area"
      "Your Area is "
      +area.toFixed(1)  // round Area to 1 decimal place
}
