import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfRgb ,TtfHex } from "../../../commons/src/model/Color";

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            if(req.query.color?.toString() != undefined) {
                const color = JSON.parse(req.query.color?.toString()) as TtfRgb;
                const convertedColor: TtfHex = convert(color);
                res.send(convertedColor);
            } else {
                console.log("Req parameters are undefined");
            }
        });
    }
}

export default HttpController;
