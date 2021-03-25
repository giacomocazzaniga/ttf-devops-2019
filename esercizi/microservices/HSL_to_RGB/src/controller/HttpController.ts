import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHsl, TtfRgb } from "../../../commons/src/model/Color";

class HttpController {
    constructor(server: Express) {
        server.get('/HSL_to_RGB', (req, res) => {
            if(req.query != undefined) {
                const color = JSON.parse(JSON.stringify(req.query)) as TtfHsl;
                const convertedColor: TtfRgb = convert(color);
                res.send(convertedColor);
            } else {
                console.log("Req parameters are undefined");
            }
        });
    }
}

export default HttpController;
