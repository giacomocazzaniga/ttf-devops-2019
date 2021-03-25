import { convert } from '../service/Service';
import { Express } from 'express';
import { TtfHex, TtfCmyk } from "../../../commons/src/model/Color";

class HttpController {
    constructor(server: Express) {
        server.get('/HEX_to_CMYK', (req, res) => {
            if(req.query.color?.toString() != undefined) {
                const color = JSON.parse(req.query.color?.toString()) as TtfHex;
                const convertedColor: TtfCmyk = convert(color);
                res.send(convertedColor);
            } else {
                console.log("Req parameters are undefined");
            }
        });
    }
}

export default HttpController;