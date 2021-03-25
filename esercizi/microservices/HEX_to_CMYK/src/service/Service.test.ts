import chai from 'chai';
import { TtfHex } from "../../../commons/src/model/Color";
import { convert } from './Service';


chai.config.includeStack = true;
// const should = chai.should();

describe('test suite description', () => {
        it(`test case description`, () => {
            const hexColor: TtfHex = {hex:"0000FF"};
            const expectedResult = convert(hexColor);
            expectedResult.should.equal({cyan:100,magenta:100,yellow:0,black:0});
        });
});
