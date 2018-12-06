var template = {
	"type": "object",
	"additionalItems": false,
	"properties": {
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
		"usuarios": {
			"type": "array",
			"additionalItems": false,
			"items": {
				"type": "object",
				"additionalProperties": false,
				"properties": {
					"nome": { "type": "string", "default": "" },
					"senha": { "type": "string", "default": "" },
					"email": { "type": "string", "default": "" },
					"permissaoModulo": {
						"type": "object",
						"additionalProperties": false,
						"properties": {
							"GESTAO3S": { "type": "number", "default": 0 },
							"ESTOQUE3S": { "type": "number", "default": 0 },
							"VENDA3S": { "type": "number", "default": 0 },
							"CLIENTE3S": { "type": "number", "default": 0 },
							"GASTO3S": { "type": "number", "default": 0 },
							"FORNECEDOR3S": { "type": "number", "default": 0 },
							"CATEGPROD3S": { "type": "number", "default": 0 },
							"CATEGFINC3S": { "type": "number", "default": 0 }
						}
					},
					"default": {
						GESTAO3S: 0,
						ESTOQUE3S: 0,
						VENDA3S: 0,
						CLIENTE3S: 0,
						GASTO3S: 0,
						FORNECEDOR3S: 0,
						CATEGPROD3S: 0,
						CATEGFINC3S: 0
					}
				},
				"default": {
					tipo: "",
					contato: "",
					permissaoModulo: {
						GESTAO3S: 0,
						ESTOQUE3S: 0,
						VENDA3S: 0,
						CLIENTE3S: 0,
						GASTO3S: 0,
						FORNECEDOR3S: 0,
						CATEGPROD3S: 0,
						CATEGFINC3S: 0
					}
				}
			}
		},
		"dataPagamento": {
			"type": "string",
			"default": ""
		},
		"database": {
			"type": "string",
			"default": ""
		},
		"database": {
			"type": "boolean",
			"default": false
		},
		"modulos": {
			"type": "object",
			"additionalProperties": false,
			"properties": {
				"GESTAO3S": { "type": "number", "default": 0 },
				"ESTOQUE3S": { "type": "number", "default": 0 },
				"VENDA3S": { "type": "number", "default": 0 },
				"CLIENTE3S": { "type": "number", "default": 0 },
				"GASTO3S": { "type": "number", "default": 0 },
				"FORNECEDOR3S": { "type": "number", "default": 0 },
				"CATEGPROD3S": { "type": "number", "default": 0 },
				"CATEGFINC3S": { "type": "number", "default": 0 }
			},
			"default": {
				GESTAO3S: 0,
				ESTOQUE3S: 0,
				VENDA3S: 0,
				CLIENTE3S: 0,
				GASTO3S: 0,
				FORNECEDOR3S: 0,
				CATEGPROD3S: 0,
				CATEGFINC3S: 0
			}
		}
	}
}



exports.template = template;