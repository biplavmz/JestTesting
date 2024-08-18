import sum from "./sum";


// here we are going to write the test case for sum function we know the expected result with toBe

// to check the functionality test we are using expect and toBe
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);   
  });

// basically this test case cpntain 3 parameters 1 is comment than expect and toBe then  a setTimeout function


// check the functionality 


test("here we are checking the sum function as it is working fine  or not ",()=>{
  expect(sum(1,2)).toBe(3);
});