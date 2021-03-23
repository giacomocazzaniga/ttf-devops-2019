import colorConverter from 'color-convert'
import { CMYK } from 'color-convert/conversions';
import { TtfCmyk , TtfHsl } from "../../../commons/src/model/Color";

export function convert(color: TtfCmyk): TtfHsl {
    const cmykColor:CMYK = [color.cyan, color.magenta, color.yellow, color.black]; 
    const converted = colorConverter.cmyk.hsl(cmykColor);
    return {hue: converted[0] , saturation: converted[1], lightness: converted[2]} as TtfHsl;
}
