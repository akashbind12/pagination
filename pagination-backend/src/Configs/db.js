const moongose = require("mongoose");

const connect=() =>{
    return  moongose.connect(
        "mongodb://akashbind12:akbind123@ac-7frl2xo-shard-00-00.rzyimmy.mongodb.net:27017,ac-7frl2xo-shard-00-01.rzyimmy.mongodb.net:27017,ac-7frl2xo-shard-00-02.rzyimmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-qbkj0m-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
}


module.exports = connect;