import chai from 'chai';
import { TtfRgb } from "../../../commons/src/model/Color";
import { convert } from './Service';


chai.config.includeStack = true;
// const should = chai.should();

describe('test suite description', () => {
        it(`test case description`, () => {
            const rgbColor: TtfRgb = {red:0,green:0,blue:255};
            const expectedResult = convert(rgbColor).hex;
            expectedResult.should.equal("0000FF");
        });
});
