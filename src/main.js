import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Planet} from './planets-class.js'

const planets = [new Planet("Mercury"), new Planet("Venus"), new Planet("Earth"),
                 new Planet("Mars"), new Planet("Jupiter"), new Planet("Saturn"),
                 new Planet("Uranus"), new Planet("Neptune")];

$(document).ready(function() {
  $(".clickable").click(function() {
    let userAge = parseInt($("#inputAge").val());
    let planet = planets.find(planet => planet.name == this.id)
    planet.thisPlanetLE(userAge);
    $("#outputAge").text(`Your age in ${planet.name} years is: ${planet.planetAge.toFixed(2)}`);
    $("#outputLE").text(`Your life expectancy in ${planet.name} years is: ${planet.lifeExpectancy.toFixed(2)}`);
    $("#outputAge").show();
    $("#outputLE").show();
    $("#instructions").hide();
    $("#label").hide();
  });
});