// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWorkshop } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test ('workshop render', (expect) => {
    const expected = '<div class="workshop"><img src="../assets/cry.jpg"><h2>Tearbending</h2><p>Like waterbending, but saltier!</p><ul><li>Bufo <br>Contact Info: Wiggle your fingers while thinking of toads.</li></ul></div>'


    const actual = renderWorkshop();

    expect.equal(actual, expected);
});