declare global {
    namespace NodeJS {
        interface ProcessEnv {
            AVAX_IP: string;
            AVAX_PORT_NUMBER: number;
            AVAX_PROTOCOL: string;
            AVAX_NETWORK_ID: number;
            PORT: number;
            //ENV: 'test' | 'dev' | 'prod';
        }
    }
}

export { };
