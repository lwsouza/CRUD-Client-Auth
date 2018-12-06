var Ajv = require('ajv');
var ajvDefault = new Ajv({ useDefaults: true });
var ajv = new Ajv();


try {
    var estabelecimentoTemplate = require('../templates/estabelecimentoTemplate').template;
    var clienteTemplate = require('../templates/clienteTemplate').template;

} catch (err) {
    console.log({
        ERRO: {
            REST: "Não foi possível carregar um dos módulos de template",
            system: err
        }
    })
    process.exit(1);

}


try {
    var validateEstabelDefault = ajvDefault.compile(estabelecimentoTemplate);
    // var validateService = ajv.compile(serviceTemplate);

} catch (err) {
    debugLog.log('Falha ao compilar template de estabelecimento');
    throw err;
};

try {
    var validateClienteDefault = ajvDefault.compile(clienteTemplate);
    // var validateFileTypeGlobal = ajv.compile(fileTypeGlobalTemplate);

} catch (err) {
    debugLog.log('Falha ao compilar template de cliente');
    throw err;
};

function estabelecimentoValidation(req, res, next) {

    if (!(validateEstabelDefault(req.body))) {
        console.log(validateEstabelDefault.errors);
        return res.status(400).send('Dados inválidos do estabelecimento, checar template');
    }

    next();
}

function clienteValidation(req, res, next) {
    
    if (!(validateClienteDefault(req.body))) {
        debugLog.log(validateClienteDefault.errors);
        return res.status(400).send('Dados inválidos do cliente, checar template');
    }

    next();
}

var validateCB = {
    estabelecimento: estabelecimentoValidation,
    cliente: clienteValidation
};

exports.validateCB = validateCB;


