var dbConfig = require('../../config/dbConnection').dbConfig;
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;

var ClienteDAO = function (config) {
    this.configs = config;
}

ClienteDAO.prototype.criarCliente = function (parameters, cb) {

        // mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {
        mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {

            if (err) {
                if (cb) return cb(err);
                else throw new Error({ err: err, err2: 'Expected a callback' });
            }

            client.db().collection("CLIENTES").insertOne(parameters, function (err, result) {

                if (err) {
                    console.log(err);
                    if (cb) return cb(err);
                    else throw new Error({ err: err, err2: 'Expected a callback' });
                }

                data = result.ops ? result.ops : [];

                cb(err, data);

                client.close();
            });
    })
}

ClienteDAO.prototype.buscarCliente = function (parameters, cb) {

    // mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {
    mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {

        if (err) {
            if (cb) return cb(err);
            else throw new Error({ err: err, err2: 'Expected a callback' });
        }


        client.db().collection("CLIENTES").find(parameters, { collation: { locale: 'pt', strength: 2 } }).toArray( function (err, result) {

            if (err) {
                console.log(err);
                if (cb) return cb(err);
                else throw new Error({ err: err, err2: 'Expected a callback' });
            }

            data = result ? result : [];

            cb(err, data);

            client.close();
        });
})
}

ClienteDAO.prototype.atualizarCliente = function (query, dados, cb) {

    // mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {
    mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {

        if (err) {
            if (cb) return cb(err);
            else throw new Error({ err: err, err2: 'Expected a callback' });
        }

        var newValues = { $set: dados };

        client.db().collection("CLIENTES").updateOne(query, newValues, function (err, result) {

            if (err) {
                console.log(err);
                if (cb) return cb(err);
                else throw new Error({ err: err, err2: 'Expected a callback' });
            }

            data = result.ops ? result.ops : [];

            cb(err, data);

            client.close();
        });
    })
}

ClienteDAO.prototype.deleteCliente = function (query, cb) {

    // mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {
    mongodb.connect(this.configs, { useNewUrlParser: true }, function (err, client) {

        if (err) {
            if (cb) return cb(err);
            else throw new Error({ err: err, err2: 'Expected a callback' });
        }

        client.db().collection("CLIENTES").deleteOne(query, { collation: { locale: 'pt', strength: 2 } }, function (err, result) {

            if (err) {
                console.log(err);
                if (cb) return cb(err);
                else throw new Error({ err: err, err2: 'Expected a callback' });
            }

            data = result ? result : [];

            cb(err, data);

            client.close();
        });
})
}


function dbFactory(dbConfig) {
    return new ClienteDAO(dbConfig);
}

exports.ClienteDAO = dbFactory(dbConfig);


