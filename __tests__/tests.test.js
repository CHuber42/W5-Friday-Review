import { Planet } from "./../src/planets-class"

describe ('Planet', () => {

  test('Test if Mercury is created correctly and that ratio-set switch in constructor fails correctly', () => {
    let mercury = new Planet("Mercury")
    expect(mercury.ratio).toEqual(1);
  })

  test('Test if Mercury is created correctly and that ratio-set switch in constructor succeeds', () => {
    let mercury = new Planet("Mercury")
    expect(mercury.ratio).toEqual(365/88);
  })

  test('Test if Venus is created correctly and that ratio-set switch in constructor succeeds', () => {
    let venus = new Planet("Venus")
    expect(venus.ratio).toEqual(365/224.7);
  })
  
  test('Test if Earth is created correctly and that ratio-set switch in constructor succeeds', () => {
    let earth = new Planet("Earth")
    expect(earth.ratio).toEqual(1);
  })

  test('Test if Mars is created correctly and that ratio-set switch in constructor succeeds', () => {
    let mars = new Planet("Mars")
    expect(mars.ratio).toEqual(365/687);
  })

  test('Test if Jupiter is created correctly and that ratio-set switch in constructor succeeds', () => {
    let jupiter = new Planet("Jupiter")
    expect(jupiter.ratio).toEqual(365/4333);
  })

  test('Test if Saturn is created correctly and that ratio-set switch in constructor succeeds', () => {
    let saturn = new Planet("Saturn")
    expect(saturn.ratio).toEqual(365/10755);
  })

  test('Test if Uranus is created correctly and that ratio-set switch in constructor succeeds', () => {
    let uranus = new Planet("Uranus")
    expect(uranus.ratio).toEqual(365/30687);
  })

  test('Test if Neptune is created correctly and that ratio-set switch in constructor succeeds', () => {
    let neptune = new Planet("Neptune")
    expect(neptune.ratio).toEqual(365/60190);
  })    

  test('Test if Mercury is created correctly and that LE fails correctly', () => {
    let mercury = new Planet("Mercury")
    mercury.thisPlanetLE(30)
    expect(mercury.lifeExpectancy).toEqual(50);
  })

  test("Test if Mercury's LE is set correctly", () => {
    let mercury = new Planet("Mercury")
    mercury.thisPlanetLE(40)
    expect(mercury.lifeExpectancy).toEqual(40 / (365/88));
  })

  test("Test if Venus' LE is set correctly", () => {
    let venus = new Planet("Venus")
    venus.thisPlanetLE(40)
    expect(venus.lifeExpectancy).toEqual(40/ (365/224.7));
  })
  
  test("Test if Earth's LE is set correctly", () => {
    let earth = new Planet("Earth")
    earth.thisPlanetLE(40)
    expect(earth.lifeExpectancy).toEqual(40 / 1);
  })

  test("Test if Mars' LE is set correctly", () => {
    let mars = new Planet("Mars")
    mars.thisPlanetLE(40)
    expect(mars.lifeExpectancy).toEqual(40 / (365/687));
  })

  test("Test if Jupiter's LE is set correctly", () => {
    let jupiter = new Planet("Jupiter")
    jupiter.thisPlanetLE(40)
    expect(jupiter.lifeExpectancy).toEqual(40 / (365/4333));
  })

  test("Test if Saturn's LE is set correctly", () => {
    let saturn = new Planet("Saturn")
    saturn.thisPlanetLE(50)
    expect(saturn.lifeExpectancy).toEqual(30 / (365/10755));
  })

  test("Test if Uranus' LE is set correctly", () => {
    let uranus = new Planet("Uranus")
    uranus.thisPlanetLE(30)
    expect(uranus.lifeExpectancy).toEqual(50 / (365/30687));
  })

  test("Test if Neptune's LE is set correctly", () => {
    let neptune = new Planet("Neptune")
    neptune.thisPlanetLE(40)
    expect(neptune.lifeExpectancy).toEqual(40 / (365/60190));
  })    
  
});