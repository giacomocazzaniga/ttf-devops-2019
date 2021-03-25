import chai from 'chai';
import { TtfCmyk } from "../../../commons/src/model/Color";
import { convert } from './Service';


chai.config.includeStack = true;
const should = chai.should();

describe('test suite description', () => {
        it(`test case description`, () => {
            const cmykColor: TtfCmyk = {cyan:17,magenta:17,yellow:0,black:7};
            const expectedResult = convert(cmykColor);
            console.log(expectedResult);
            expectedResult.should.deep.equal({ hue:240, saturation:53, lightness:85 });
        });
});
