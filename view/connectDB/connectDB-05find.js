const mongo = require("mongodb");
/// Thông tin Database Collection / Tables
const userName = "dbThaoMy";
const userPassword = "GLZkVYPM2rw4kagd";
const dbName = "ATN_SHOP";
const dbTable = "Customers";
const url = "mongodb+srv://" + userName + ":" + userPassword + "@cluster0.bfttv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/// --- Kết nối DataBase
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db(dbName);

        var conds = { };
        //... Find
        dbObj.collection(dbTable).findOne(conds,
            (err, result) => {
                if (err) {
                    console.log("\n ERR Query-Find: ", err);
                    process.exit(0);
                }
                console.log("\n Query/Find Result : ", result);

                /// --- Close
                db.close();
            }
        );
    }
);