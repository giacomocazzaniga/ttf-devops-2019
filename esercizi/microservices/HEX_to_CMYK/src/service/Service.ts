import colorConverter from 'color-convert'
import { HEX } from 'color-convert/conversions';
import { TtfCmyk ,TtfHex } from "../../../commons/src/model/Color";

export function convert(color: TtfHex): TtfCmyk {
    const hexColor:HEX = color.toString(); 
    const converted = colorConverter.hex.cmyk(hexColor);
    return {cyan:converted[0],magenta:converted[1],yellow:converted[2],black:converted[3]} as TtfCmyk;
}
