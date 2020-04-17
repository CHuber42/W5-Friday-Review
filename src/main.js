import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Planet} from './planets-class.js'

const planets = [new Planet("mercury"), new Planet("venus"), new Planet("earth"),
                 new Planet("mars"), new Planet("jupiter"), new Planet("saturn"),
                 new Planet("uranus"), new Planet("neptune")];

$(document).ready(function() {
  $(".clickable").click(function() {
    let userAge = 30; //parseInt($("#inputAge").val());
    let planet = planets.find(planet => planet.name == this.id)
    planet.thisPlanetLE(userAge);
    console.log(planet.planetAge, planet.lifeExpectancy)
  });
});