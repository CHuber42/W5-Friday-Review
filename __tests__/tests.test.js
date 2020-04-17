import { Planet } from "./../src/planets-class"

describe ('Planet', () => {

  test('Test if Mercury is created correctly and that ratio-set switch in constructor fails correctly', () => {
  let mercury = new Planet("Mercury")
  expect(mercury.ratio).toEqual(1);
  })
  
});