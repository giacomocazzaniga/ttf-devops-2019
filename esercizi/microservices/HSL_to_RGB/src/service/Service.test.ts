import chai from 'chai';
import { TtfHsl } from "../../../commons/src/model/Color";
import { convert } from './Service';


chai.config.includeStack = true;

describe('test suite description', () => {
        it(`test case description`, () => {
            const hslColor: TtfHsl = {hue:240,saturation:1,lightness:0.5};
            const expectedResult = convert(hslColor);
            console.log(expectedResult);
            expectedResult.should.deep.equal({ red:0, green:0, blue:255 });
        });
});
