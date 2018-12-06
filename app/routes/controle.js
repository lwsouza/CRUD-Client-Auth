var router = require('express').Router();
var passport = require('passport');
var validateModulo = require('../utils/security').validateModulo;
var validatePermission = require('../utils/security').validatePermission;
var validateTemplateCB = require('../utils/templateValidation').validateCB;

var clienteControllers = require('../controllers/clienteController').clienteControllers;

// GET
router.get('/listclient(/:cliente_id(\\w+)?)',[
    passport.authenticate('bearer', {session: false}),
    validateModulo('MODCLIENT1S'),
    validatePermission('GET', 'MODCLIENT1S'),
    clienteControllers.listClient
    ]
);

// POST
router.post('/createclient',[
    passport.authenticate('bearer', {session: false}),
    validateTemplateCB.cliente,
    validateModulo('MODCLIENT1S'),
    validatePermission('POST', 'MODCLIENT1S'),
    clienteControllers.createClient
    ]
);

// PUT
router.put('/updateclient/:cliente_id(\\w+)',[
    passport.authenticate('bearer', {session: false}),
    validateTemplateCB.cliente,
    validateModulo('MODCLIENT1S'),
    validatePermission('PUT', 'MODCLIENT1S'),
    clienteControllers.updateClient
    ]
);

// DELETE
router.delete('/deleteclient/:cliente_id(\\w+)',[
    passport.authenticate('bearer', {session: false}),
    validateModulo('MODCLIENT1S'),
    validatePermission('DELETE', 'MODCLIENT1S'),
    clienteControllers.deleteClient
    ]
);


exports.router = router;