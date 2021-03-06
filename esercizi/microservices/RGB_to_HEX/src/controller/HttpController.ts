import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfRgb ,TtfHex } from "../../../commons/src/model/Color";

class HttpController {
    constructor(server: Express) {
        server.get('/RGB_to_HEX', (req, res) => {
            if(req.query != undefined) {
                const color = JSON.parse(JSON.stringify(req.query)) as TtfRgb;
                const convertedColor: TtfHex = convert(color);
                res.send(convertedColor);
            } else {
                console.log("Req parameters are undefined");
            }
        });
    }
}

export default HttpController;
