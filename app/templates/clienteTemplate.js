var template = {
    "type": "object",
    "additionalItems": false,
    "properties": {
        "tipo": {
            "type": "string",
            "default": ""
        },
        "cnpjCpf": {
            "type": "string",
            "default": ""
        },
        "nomeFantasia": {
            "type": "string",
            "default": ""
        },
        "endereco": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "cep": { "type": "string", "default": "" },
                "uf": { "type": "string", "default": "" },
                "cidade": { "type": "string", "default": "" },
                "rua": { "type": "string", "default": "" },
                "numero": { "type": "number", "default": 0 },
                "complemento": { "type": "string", "default": "" },
                "bairro": { "type": "string", "default": "" }
            },
            "default": {
                cep: "",
                uf: "",
                cidade: "",
                rua: "",
                numero: 0,
                complemento: "",
                bairro: ""
            }
        },
        "contato": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "tipo": { "type": "string", "default": "" },
                    "contato": { "type": "string", "default": "" }
                },
                "default": {
                    tipo: "",
                    contato: ""
                }
            }
        },
        "dataNascimento": {
            "type": "string",
            "default": ""
        },
        "sexo": {
            "type": "string",
            "default": ""
        },
        "consignado": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "codigo": { "type": "string", "default": "" },
                    "titulo": { "type": "string", "default": "" },
                    "qtdVendido": { "type": "number", "default": 0 },
                    "valorCompra": { "type": "string", "default": "" },
                    "valorVenda": { "type": "string", "default": "" },
                    "valorVendido": { "type": "string", "default": "" },
                    "categoria": { "type": "string", "default": "" },
                    "subcategoria": { "type": "string", "default": "" }
                },
                "default": {
                    codigo: "",
                    titulo: "",
                    qtdVendido: 0,
                    valorCompra: "",
                    valorVenda: "",
                    valorVendido: "",
                    categoria: "",
                    subcategoria: ""
                }
            }
        }
    }
}

exports.template = template;