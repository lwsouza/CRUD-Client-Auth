var ClienteDAO = require('../model/ClienteDAO').ClienteDAO;
var hashPassword = require('../utils/security').hashPassword;
var objectId = require('mongodb').ObjectId;

function createClient(req, res) {
    var database = req.authInfo.database;
    var estoque = req.body;

    estoque.dataNascimento = new Date(estoque.dataNascimento);
    estoque.criado = new Date();
    estoque.modificado = new Date();

    ClienteDAO.criarCliente(database, estoque, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        var user = rows;

        res.status(200).json({ status: "success", data: user});
        
      });


};

function listClient(req, res) {
    var database = req.authInfo.database;
    
    if (req.params.cliente_id === undefined) {
        var parameters = {};
    } else {
        var parameters =  {
            _id: objectId(req.params.cliente_id)
        }
    }

    ClienteDAO.buscarCliente(database, parameters, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        var provider = rows;

        res.status(200).json({ status: "success", field: 'cliente', data: provider});
        
      });
};

function updateClient(req, res) {
    var database = req.authInfo.database;

    var cliente_id = req.params.cliente_id;
    var cliente = req.body;

    cliente.dataNascimento = new Date(cliente.dataNascimento);
    cliente.modificado = new Date();

    var parameters = {
        _id: objectId(cliente_id)
    }

    ClienteDAO.atualizarCliente(database, parameters, cliente, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        res.status(200).json({ status: "success", field: 'cliente'});
        
      });
};

function deleteClient(req, res) {
    var database = req.authInfo.database;

    var cliente_id = req.params.cliente_id;

    var parameters = {
        _id: objectId(cliente_id)
    }

    ClienteDAO.deleteCliente(database, parameters, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        res.status(200).json({ status: "success", field: 'cliente'});
        
      });
};

exports.clienteControllers = {
    createClient: createClient,
    listClient: listClient,
    updateClient: updateClient,
    deleteClient: deleteClient
}