import colorConverter from 'color-convert'
import { RGB } from 'color-name';
import { TtfRgb ,TtfHex } from "../../../commons/src/model/Color";

export function convert(color: TtfRgb): TtfHex {
    const rgbColor:RGB = [color.red, color.green, color.blue]; 
    const converted = colorConverter.rgb.hex(rgbColor);
    return {hex:converted} as TtfHex;
}
