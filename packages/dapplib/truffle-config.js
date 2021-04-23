require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth mushroom equip kidney arm bridge tone'; 
let testAccounts = [
"0x16de90d5ae240d53f3eed3a1f4410f4742e9038e9bedda7bf079b7980f874414",
"0x8343c07fc9f1fc8ac9fcea3b20d1eff21907967943f0cced6b729d9b61ffc4b9",
"0x97b5ecf438637cfa6619bd1933592473b98140c92c0c89801a3e095303176e1a",
"0x1e25f8776d4c521f0697380d53eb698ec9a952838f24e4ae41f31d71c05415a9",
"0x13a6b30359117e0a4d198787f2922684bd67af20e7a6b48ab5b3d1093cf6ea2a",
"0x281aa61b3e4b1ffd7f46f80f7dbbae2a9281a88cbd4c1bcf4bd0ba5e76f300f1",
"0xd5102e75e2551c951b4416bb99b73c9dd777a1fbf15073c51212bf8a4b08fcc8",
"0x3c4e476daf5a612458858f9c170d028ae84c2b07c8f1171673ba9efc325b719a",
"0x731e89f3d544e83958caf0845ad0543fee2df7ba619064390e1bcc5646eab07e",
"0x213ebaeaa1eb953886e31ffba222e78f66c64f63bd4b9179f6a9a518a8621c89"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
