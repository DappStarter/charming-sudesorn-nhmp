require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind huge good clog swift top'; 
let testAccounts = [
"0x100c622090c80a70985ee7d95c27e5be808fe1ae3f3603a47c49ffca290771eb",
"0xd634d3035765a95692a7fd14250e166bb2f770ed1618431eec4eab3420d42f97",
"0x6de1146e8a82d4f94a7a5f12186547f90508388c7313cd9b936bd1f4b0c62669",
"0x7dd750b704fd1c2f0821ddb95283ae5b22591ed5aba9e544ed16f9eb545ada23",
"0xa88829ef503d459ffc620c1d141ca3dddecddc2191b69bc673428d1080e0e927",
"0x08747c3b691cc99b53f5877e518973f88402ae2ee6b9cabd4c0cf43a09c67f6e",
"0xdeda821b0821ed33be4ca73831ea1c7c9cd92004cb41a6b9361e944cca10d68d",
"0x0c9c5996ee670fa162c0492ed3442efa794586360c46d455add67c729d682a78",
"0x4b73217fcf8a2eeeee5a964f99c6a72da30ce6f3b6616b3c0deafb5115ba63af",
"0xa4adad3e8d68402e55bc57561bc6dacdddda79f212c68d5e6bcbf8ab026a09bf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

