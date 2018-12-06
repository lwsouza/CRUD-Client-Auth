var crypto = require('crypto');

var conf = {
    iterations: 5000,
    outputBytes: 64,
    digest: 'sha512'
}

var hashPassword = function (password) {
    var pwd = crypto.pbkdf2Sync(password, password, conf.iterations, conf.outputBytes, conf.digest).toString('hex');

    return pwd
}

var validatePassword = function (password, hashed) {
    var pwd = crypto.pbkdf2Sync(password, password, conf.iterations, conf.outputBytes, conf.digest).toString('hex');

    ret = (hashed === pwd) ? true : false;

    return ret;
}

var validateModulo = function (modulo) {

    return function (req, res, next) {

        if (req.authInfo.permitedModels[modulo]) {
            return next()
        } else {
            // debugLog.log('Invalid GET Permissions for: ' + req.user)
            return res.status(403).json({ error: 'You do not have permission on this module' });
        }

    }
}

var validatePermission = function (method, modulo) {

    // Permissões
    GET = 1
    POST = 2
    PUT = 4
    DELETE = 8

    return function (req, res, next) {

        if (method === 'GET') {
            if (req.authInfo.permissions[modulo] & GET) {
                return next()
            }

            return res.status(403).json({ error: 'Operator has no permissions for this operation' })
        }

        if (method === 'POST') {
            if (req.authInfo.permissions[modulo] & POST) {
                return next()
            }

            return res.status(403).json({ error: 'Operator has no permissions for this operation' })
        }

        if (method === 'PUT') {
            if (req.authInfo.permissions[modulo] & PUT) {
                return next()
            }

            return res.status(403).json({ error: 'Operator has no permissions for this operation' })
        }

        if (method === 'DELETE') {
            if (req.authInfo.permissions[modulo] & DELETE) {
                return next()
            }

            return res.status(403).json({ error: 'Operator has no permissions for this operation' })
        }
        
    }
}

exports.hashPassword = hashPassword;
exports.validatePassword = validatePassword;
exports.validateModulo = validateModulo;
exports.validatePermission = validatePermission;