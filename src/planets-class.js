export class Planet {
  constructor (name) {
    this.name = name;
    
    switch (name) {
      case "Mercury":
        this.ratio = (365/88);
        break;
      case "Venus":
        this.ratio = (365/224.7);
        break; 
      case "Earth":
        this.ratio = 1;
        break;
      case "Mars":
        this.ratio = (365/687);
        break;
      case "Jupiter":
        this.ratio = (365/4333);
        break;
      case "Saturn":
        this.ratio = (365/10755);
        break;  
      case "Uranus":
        this.ratio = (365/30687);
        break;
      case "Neptune":
        this.ratio = (365/60190);
        break;
    }
  }

  thisPlanetLE(userAge) {
    this.lifeExpectancy = (80 - userAge) / this.ratio;
  }
}