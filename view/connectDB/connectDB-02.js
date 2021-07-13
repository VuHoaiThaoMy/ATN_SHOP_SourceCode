const mongo = require("mongodb");
const url = "mongodb+srv://dbThaoMy:GLZkVYPM2rw4kagd@cluster0.bfttv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongo.connect(url, { useNewUrlParser: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db("ATN_SHOP");
    
        //... cre
//... create
        dbObj.createCollection("Customers",
            (err, result) => {
                if (err) {
                    console.log("\n ERR create: ", err);
                    process.exit(0);
                }
                console.log("\n Result - create collection ", result);

                /// --- Close
                db.close();
            }
        );
    }
);