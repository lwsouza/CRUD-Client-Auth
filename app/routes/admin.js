var router = require('express').Router();
var passport = require('passport');
var validateModulo = require('../utils/security').validateModulo;
var validatePermission = require('../utils/security').validatePermission;
var validateTemplateCB = require('../utils/templateValidation').validateCB;

var estabelecimentoControllers = require('../controllers/estabelecimentoController').estabelecimentoControllers;

// GET
// Permissão de GET
router.get('/listestablishment(/:estab_id(\\w+)?)',[
    passport.authenticate('bearer', {session: false}),
    validateModulo('MODULO1S'),
    validatePermission('GET', 'MODULO1S'),
    estabelecimentoControllers.listEstablishment
    ]
);


// POST
// Permissão de POST
router.post('/createestablishment',[
    validateTemplateCB.estabelecimento,
    passport.authenticate('bearer', {session: false}),
    validateModulo('MODULO1S'),
    validatePermission('POST', 'MODULO1S'),
    estabelecimentoControllers.createEstablishment
    ]
);

// PUT
// Permissão de PUT
router.put('/updateestablishment/:estab_id(\\w+)',[
    passport.authenticate('bearer', {session: false}),
    validateTemplateCB.estabelecimento,
    validateModulo('MODULO1S'),
    validatePermission('PUT', 'MODULO1S'),
    estabelecimentoControllers.updateEstablishment
    ]
);

exports.router = router;