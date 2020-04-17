export class Planet {
  constructor (name) {
    this.name = name;
    
    switch (name) {
      case "mercury":
        this.ratio = (365/88);
        break;
      case "venus":
        this.ratio = (365/224.7);
        break; 
      case "earth":
        this.ratio = 1;
        break;
      case "mars":
        this.ratio = (365/687);
        break;
      case "jupiter":
        this.ratio = (365/4333);
        break;
      case "saturn":
        this.ratio = (365/10755);
        break;  
      case "uranus":
        this.ratio = (365/30687);
        break;
      case "neptune":
        this.ratio = (365/60190);
        break;
    }
  }

  thisPlanetLE(userAge) {
    this.planetAge = (userAge * this.ratio)
    this.lifeExpectancy = (80 - userAge) / this.ratio;
  }
  
}