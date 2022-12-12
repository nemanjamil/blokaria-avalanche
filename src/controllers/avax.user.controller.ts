import { Avalanche } from "avalanche/dist"
import { KeystoreAPI } from "avalanche/dist/apis/keystore"
import axios from "axios";

export const avaxhealth = async (req, res) => {

    try {

        let data = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "health.health"
        }
        const response = await axios.post(`${process.env.AVALANCHE_IP}/ext/health`, data);
        res.status(200).send({
            message: response.data
        });

    } catch (error) {
        throw new Error(`processing error in request at ${req.url}`)
    }
};



export const createUser = async (req, res) => {

    const ip: string = "185.193.66.140"
    const port: number = 9650
    const protocol: string = "http"
    const networkID: number = 43114
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