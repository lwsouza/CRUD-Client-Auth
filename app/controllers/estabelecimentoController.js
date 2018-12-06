var EstabelecimentoDAO = require('../model/EstabelecimentoDAO').EstabelecimentoDAO;
var hashPassword = require('../utils/security').hashPassword;
var objectId = require('mongodb').ObjectId;

function createEstablishment(req, res) {
    var estabelecimento = req.body;

    estabelecimento.usuarios[0]._id = objectId();
    estabelecimento.usuarios[0].senha = hashPassword(estabelecimento.usuarios[0].senha);
    estabelecimento.usuarios[0].criado = new Date();
    estabelecimento.usuarios[0].modificado = new Date();
    estabelecimento.criado = new Date();
    estabelecimento.modificado = new Date();

    EstabelecimentoDAO.criarEstabelecimento(estabelecimento, function (err, rows) {
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

function listEstablishment(req, res) {

    if (req.params.estab_id === undefined) {
        var parameters = {};
    } else {
        var parameters =  {
            _id: objectId(req.params.estab_id)
        }
    }

    EstabelecimentoDAO.buscarEstabelecimentos(parameters, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        var estabelecimento = rows;

        res.status(200).json({ status: "success", field: 'estabelecimento', data: estabelecimento});
        
      });


};

// function listEstablishmentByID(req, res) {
//     var estab_id = req.params.estab_id;

//     var parameters =  {
//         _id: objectId(estab_id)
//     }

//     EstabelecimentoDAO.buscarEstabelecimentos(parameters, function (err, rows) {
//         if (err) {
//             console.log(err)
//             if (err.code == 11000) {
//                 return res.status(500).send({ status: "error", error: err.errmsg});
//             } else {
//                 return res.status(500).send("Internal Error");
//             }
//         }

//         var estabelecimento = rows;

//         res.status(200).json({ status: "success", field: 'estabelecimento', data: estabelecimento});
        
//       });


// };

function updateEstablishment(req, res) {
    var estab_id = req.params.estab_id;
    var estabelecimento = req.body;

    var parameters = {
        _id: objectId(estab_id)
    }
    var i = 0;

    estabelecimento.usuarios.forEach(element => {
        
        estabelecimento.usuarios[i].senha = hashPassword(element.senha);
        // estabelecimento.usuarios[i].criado = new Date(estabelecimento.usuarios[i].criado);
        estabelecimento.usuarios[i].modificado = new Date();
        i++;
    });

    estabelecimento.criado = new Date(estabelecimento.criado);
    estabelecimento.modificado = new Date();

    EstabelecimentoDAO.atualizarEstabelecimentos(parameters, estabelecimento, function (err, rows) {
        if (err) {
            console.log(err)
            if (err.code == 11000) {
                return res.status(500).send({ status: "error", error: err.errmsg});
            } else {
                return res.status(500).send("Internal Error");
            }
        }

        res.status(200).json({ status: "success", field: 'estabelecimento'});
        
      });


};

exports.estabelecimentoControllers = {
    createEstablishment: createEstablishment,
    listEstablishment: listEstablishment,
    updateEstablishment: updateEstablishment
    // listEstablishmentByID: listEstablishmentByID
}