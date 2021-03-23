import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHsl, TtfCmyk } from "../../../commons/src/model/Color";

class HttpController {
    constructor(server: Express) {
        server.get('/CMYK_to_HSL', (req, res) => {
            if(req.query != undefined) {
                const color = JSON.parse(JSON.stringify(req.query)) as TtfCmyk;
                const convertedColor: TtfHsl = convert(color);
                res.send(convertedColor);
            } else {
                console.log("Req parameters are undefined");
            }
        });
    }
}

export default HttpController;
