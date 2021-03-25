import colorConverter from 'color-convert'
import { HSL } from 'color-convert/conversions';
import { TtfHsl, TtfRgb } from "../../../commons/src/model/Color";

export function convert(color: TtfHsl): TtfRgb {
    const hslColor:HSL = [color.hue,color.saturation,color.lightness]; 
    const converted = colorConverter.hsl.rgb(hslColor);
    return {red: converted[0] , green: converted[1], blue: converted[2]} as TtfRgb;
}
