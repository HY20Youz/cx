const mongoose = require('mongoose');
const Wallet = require('./models/wallets'); // Import the Wallet model

mongoose.connect('mongodb+srv://hass:Youzghadli%40123@cluster0.fhefpqk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const wallets = [
    {
        name: 'boyka',
        coins: [
            {
                name: 'USDT',
                networks: [
                    { name: 'Tron TRC-20', address: 'TJxZSiQDpF98Ao7KnhxRBYZUv9NpUwJmAy' },
                    { name: 'Ethereum ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' },
                    { name: 'BEB-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'Bitcoin',
                networks: [
                    { name: 'Bitcoin', address: 'bc1q2u2dfscan0j4a0k3cnc29j3z8ww78a09lzqnt9' }
                ]
            },
            {
                name: 'Ethereum',
                networks: [
                    { name: 'ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' },
                    { name: 'BEP-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'LiteCoin',
                networks: [
                    { name: 'Litcoin', address: 'ltc1qafhwtd4zhlspzntfkkzr8ad7l7fxfwuvvqtfxz' }
                ]
            },
            {
                name: 'BnB',
                networks: [
                    { name: 'ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' },
                    { name: 'BEP-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'Tron',
                networks: [
                    { name: 'Tron TRC-20', address: 'TJxZSiQDpF98Ao7KnhxRBYZUv9NpUwJmAy' },
                    { name: 'BEP-20', address: 'TJxZSiQDpF98Ao7KnhxRBYZUv9NpUwJmAy' }
                ]
            },
            {
                name: 'Xrp',
                networks: [
                    { name: 'Ripple', address: 'r38RupyzYXtEzsuTcibDstQdyZVZSunvBn' }
                ]
            },
            {
                name: 'Bitcoin Cash',
                networks: [
                    { name: 'Ethereum ERC-20', address: 'qrf7ajf67k6aslwzf87mdvrhk96tmce7kqlyw6256t' },
                    { name: 'BEP-20', address: 'qrf7ajf67k6aslwzf87mdvrhk96tmce7kqlyw6256t' }
                ]
            },
            {
                name: 'Dash',
                networks: [
                    { name: 'Dash', address: 'XpAvPj8k1413kfygi4UoEPzB3v1bAp8mZR' }
                ]
            },
            {
                name: 'Gala',
                networks: [
                    { name: 'Ethereum ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'DogeCoin',
                networks: [
                    { name: 'DogeCoin', address: 'DGQjTZpygzJcj6VsikJSY8Zef1PtcbDTrK' }
                ]
            },
            {
                name: 'Matic',
                networks: [
                    { name: 'Ethereum ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' },
                    { name: 'BEP-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'USDC',
                networks: [
                    { name: 'Ethereum ERC-20', address: 'TJxZSiQDpF98Ao7KnhxRBYZUv9NpUwJmAy' },
                    { name: 'BEP-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'Mana',
                networks: [
                    { name: 'Ethereum ERC-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' },
                    { name: 'BEP-20', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            },
            {
                name: 'SUSHI',
                networks: [
                    { name: 'Fantom', address: '0x3dE99b6B234829D3B4290fffc025C4425e2200C0' }
                ]
            }
        ]
    }, 
    {
        name:'P1094031052',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TLN5AQLzJ3BHQ5xe5vAdKWxtULuDRDsZb5"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                },
                {
                name:'BEB-20',
                address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'3Jq8x89zHcz2oSBLGJ3i3eUATUG4nTzbK6'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qznyd6jysusz8kws0xv8kw5h8yr9wjsepswkw6v'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TLN5AQLzJ3BHQ5xe5vAdKWxtULuDRDsZb5"
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qpm2l6jhlsa5kqh7d6h3n3jqa7ck9k0hxgsxqfx0tz'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XvxtSJNH5ruNSL4mtqGNEuZ7HvmCn7Pk45'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x32e437dF489be01CcdDd96649eB7E45921Aef447"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DRgN5kP6dybZRyidHyw3UDAQX6PD1RztfJ'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                },
                {
                    name:'BEP-20',
                    address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            }
        ]
    },
    {
        name:'p1091352271',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TVXvWiY6uZtAs3e5qgTVuEGrXfUP6NNwyL"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                },
                {
                name:'BEB-20',
                address:'0x6e22072be78771E73e56777451eB6426824dA08B',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'33GrEQLnbHVVvWZvDEkGe737c8kVzNYivS'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    },
                    {
                        name:'BEP-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1q4lmp78wtwxc6a24upt0f9d2jq34hgcpe0ceu95'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    },
                    {
                        name:'BEP-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TVXvWiY6uZtAs3e5qgTVuEGrXfUP6NNwyL"
                    },
                    {
                        name:'BEP-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qz504hee7cws9nkt68x5munjr3jsufzqaug8nypl7f'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'Xds3tU7UqM7Tnk1uVdtEiMyd9fA8N5AQSF'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x6e22072be78771E73e56777451eB6426824dA08B"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DEpE8ZdDUG7ZfdUMp6ZpDoWc913C2jEaep'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                },
                {
                    name:'BEP-20',
                    address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    },
                    {
                        name:'BEP-20',
                        address:'0x32e437dF489be01CcdDd96649eB7E45921Aef447'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    },
                    {
                        name:'BEP-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    },
                    {
                        name:'BEP-20',
                        address:'0x6e22072be78771E73e56777451eB6426824dA08B'
                    }
                ]
            }
        ]
    },
    {
        name:'P1091164695',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TSu4wFfrJLM8YmTznvSYxecb6fo6mfMaHT"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                },
                {
                name:'BEB-20',
                address:'0x9C6126f9eeF00743531ddD05A17587928a279A49',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'398oFvnTUeKDGtKvpAANtbiWGizM7y15g5'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qdqpzjfnj4w3wffqve4x07r4v8235thguyg9k25'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TSu4wFfrJLM8YmTznvSYxecb6fo6mfMaHT"
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qqf6ypckdksz9dn230jgccs9auzkyu8xlswzxqunfv'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XxfhK4utkq89ed13oEwteyFFrerVdm46o4'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x9C6126f9eeF00743531ddD05A17587928a279A49"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DRAwNUfkBBXibrRwMYTbVVaXoVzLGbDBqT'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                },
                {
                    name:'BEP-20',
                    address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    },
                    {
                        name:'BEP-20',
                        address:'0x9C6126f9eeF00743531ddD05A17587928a279A49'
                    }
                ]
            }
        ]
    },
    {
        name:'P1091056950',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TUFcs5BtE93gHPJ6S3TvVFjBLZs1e4z7K4"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                },
                {
                name:'BEB-20',
                address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'384QR2K2ceWjAxbKPDwYqsexZqRepmb8MA'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qkfntwm55fwj9dk4wmrdny6mh2xul4cn2m6xa4m'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TUFcs5BtE93gHPJ6S3TvVFjBLZs1e4z7K4"
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qq2wwpt79vca9e40nnawh4t2szqfguwtuq2mpwjcw6'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XhUAp3RfRKdqQCN9enKdsn8wYchNJxCjPC'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DMPk5TvFhRFjBmnhNpMKbStGetsgHo5yMF'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                },
                {
                    name:'BEP-20',
                    address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    },
                    {
                        name:'BEP-20',
                        address:'0x1001026c67b5046b2d5ecCA240b4A9d8C66dB423'
                    }
                ]
            }
        ]
    },
    {
        name:'P1090816263',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TDAbGUyBn47DTbCKH7bXTNPEt2qD6yjRx2"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                },
                {
                name:'BEB-20',
                address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'3BeSS9iTFAvXakfKDHuom5L5eQAYuEqUp4'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1q8z7a5s6qhpcja799qkrhr6ae2za6v4ww79su9q'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TDAbGUyBn47DTbCKH7bXTNPEt2qD6yjRx2"
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qr7c56c7hfe3ulqx52uhn4xx483275zlmvqg57s64z'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XkMdwoaHhLo6PQxCoCtnzFghqy8k8inwoi'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x4f463b206b59e5549eb931C1193dD58f5C82131E"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DMkjzYR72pRMgvF2rWtfBganbxHhxfP1R8'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                },
                {
                    name:'BEP-20',
                    address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x4f463b206b59e5549eb931C1193dD58f5C82131E'
                    }
                ]
            }
        ]
    },
    {
        name:'P1090816351',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TKmXTGQ89KGS71SZe44YBuGwxS4c6TQY6L"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                },
                {
                name:'BEB-20',
                address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'3GhduhmyCfxiGcHBX5RKebVGg3HJqrCDhg'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qc7ja80hd5lshgjs5yaelkkvj4vmplg2sf6u9uw'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TKmXTGQ89KGS71SZe44YBuGwxS4c6TQY6L"
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qqcxqxrvh8g648m0wmza4fr2k5l3vwy3rcph75hh56'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XdojzEsEAwRyygpybewUKsFQvBDeMWDPvS'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x237228eC92CBfB8B5B4810473D3A334D99A73aF4"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DS2CQFhwbfMJTgtt1hsmxjJnoigyvxhYtj'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                },
                {
                    name:'BEP-20',
                    address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    },
                    {
                        name:'BEP-20',
                        address:'0x237228eC92CBfB8B5B4810473D3A334D99A73aF4'
                    }
                ]
            }
        ]
    },
    {
        name:'P1090816351',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TAMS59BGbpLG6gsTrzgxjjrQid1VPP473S"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                },
                {
                name:'BEB-20',
                address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'34abFTKqPNY4MpLDUdUeiHP9ppNXWh95BB'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qrv8yknvh6cmalaj2sm6drrq89dy5r7qt9llwkw'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TAMS59BGbpLG6gsTrzgxjjrQid1VPP473S"
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qrf9e273g5uy2s2ylkzxlypl64gstnx5kcfkvmpcye'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XcDcrnnURCTbg54pd5QTX1ZyHHydmTdhWr'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x01268bDba048AAe4AAf56a947F524059854a7E1E"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DEaV9pfTKZFYLbE4rtTjjCBxYJZtVktVK4'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                },
                {
                    name:'BEP-20',
                    address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    },
                    {
                        name:'BEP-20',
                        address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                    }
                ]
            }
        ]
    },
    {
        name:'P1091276601',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TEjnBr3DAvWdjTwtjNwuJQnp1s3FHh6qEn"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                },
                {
                name:'BEB-20',
                address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'34Sd6cDVRv2yNZ1GjvxEb3qUomtdLWp1Xs'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qwxkn60g2kvusllxpf28v24eurdwm5aysgnmg3l'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TEjnBr3DAvWdjTwtjNwuJQnp1s3FHh6qEn"
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qppdvklmfrn4hnhuhscqv0qty9wmzsgvn5t2deanh2'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XrxyL7eXLbhASH8Vsza2bFr48efga7L39v'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x46bDBA6e1281272bFA29FBa3314E21a2d3932885"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DD2REJCCWzY7PjS8fWVsotdQj9rSCGLwk1'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                },
                {
                    name:'BEP-20',
                    address:'0x01268bDba048AAe4AAf56a947F524059854a7E1E'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    },
                    {
                        name:'BEP-20',
                        address:'0x46bDBA6e1281272bFA29FBa3314E21a2d3932885'
                    }
                ]
            }
        ]
    },
    {
        name:'P1091409624',
        Coins: [{
            name:'USDT',
            networks:[
                {
                name:'Tron TRC-20',
                address:"TS7tpKBZpXGzZPqwkaa4CtgWgzKcga1g5y"
                },
                {
                name:'Ethereum ERC-20',
                address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                },
                {
                name:'BEB-20',
                address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A',
                }
            ]},
            {
                name:'Bitcoin',
                networks:[
                {
                name:'Bitcoin',
                address:'3Kij9vzS2eyLcVQpkQYBVficqMYzH5QGoS'
                }
                ]
            },
            {
                name:'Ethereum',
                networks:[
                    {
                        name:'ERC-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            },
            {
                name:'LiteCoin',
                networks:[
                    {
                        name:'Litcoin',
                        address:'ltc1qlvgzc6jxk0cwu6sc9gn9rxt6m4ug6lgeq3yvzj'
                    }
                ]
            },
            {
                name:'BnB',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            },
            {
                name:'Tron',
                networks:[
                    {
                        name:'Tron TRC-20',
                        address:"TS7tpKBZpXGzZPqwkaa4CtgWgzKcga1g5y"
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            },
            {
                name:'Xrp',
                networks:[
                    {
                    name:'Ripple',
                    address:"rshvnxLDE9Jsm8sJxPxct425HhQC2tk5CV"
                    }
                ]
            },
            {
                name:'Bitcoin Cash',
                networks:[
                    {
                        name:'Bitcion Cash',
                        address:'bitcoincash:qq8kpxfv9pmxsqn9fmmxpjclskllcy38vs9yfecm57'
                    }
                ]
            },
            {
                name:'Dash',
                networks:[
                    {
                        name:'Dash',
                        addrss:'XsVnWPLDRJEnKsK6SsybsmW342jmSWD8bA'
                    }
                ]
            },
            {
                name:'Gala',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:"0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A"
                    }
                ]
            },
            {
                name:'DogeCoin',
                networks:[
                    {
                        name:'DogeCoin',
                        address:'DRqwGhmWJpMefkU45VoycnNp3EEWZBky61'
                    }
                ]
            },
            {
            name:'Matic',
            networks:[
                {
                    name:'Ethereum ERC-20',
                    address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                },
                {
                    name:'BEP-20',
                    address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                }
            ]
            },
            {
                name:'USDC',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            },
            {
                name:'Mana',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            },
            {
                name:'SUSHI',
                networks:[
                    {
                        name:'Ethereum ERC-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    },
                    {
                        name:'BEP-20',
                        address:'0x3bde9Ba15E2BF8b4854e5e10106B6322d6979C1A'
                    }
                ]
            }
        ]
    }
];

async function seedDatabase() {
    try {
        await Wallet.deleteMany({}); // Clear existing data
        await Wallet.insertMany(wallets); // Insert the seed data
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
