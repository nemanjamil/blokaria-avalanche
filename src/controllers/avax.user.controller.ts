import { Avalanche } from "avalanche/dist"
import { KeystoreAPI } from "avalanche/dist/apis/keystore"
import axios from "axios";
import { vars } from "../utils/variables"

export const avaxhealth = async (req, res) => {

    try {

        let data = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "health.health"
        }

        const response = await axios.post(`${vars.AVAX_DNS}/ext/health`, data);
        res.status(200).send({
            message: response.data
        });

    } catch (error) {
        throw new Error(`processing error in request at ${req.url}`)
    }
};


declare var process: {
    env: {
        AVAX_IP: string
        AVAX_PORT_NUMBER: number
        AVAX_PROTOCOL: string
        AVAX_NETWORK_ID: number
    }
}
export const createUser = async (req, res) => {


    const ip: string = process.env.AVAX_IP;
    const port: number = process.env.AVAX_PORT_NUMBER;
    const protocol: string = process.env.AVAX_PROTOCOL;
    const networkID: number = process.env.AVAX_NETWORK_ID;

    const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
    const keystore: KeystoreAPI = avalanche.NodeKeys()

    const username = "test_av_blokaria"
    const password = "Vz48jjHLTCcAepH95nT4B"

    try {
        const successful = await keystore.createUser(username, password)
        res.status(200).send({
            message: successful
        });
    } catch (error) {
        return res.status(400).json({ error: (error as Error).message.toString() });
    }
};