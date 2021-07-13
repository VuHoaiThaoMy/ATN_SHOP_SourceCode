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

        var data = { idCustomer: "VHTMy", custName: "Vũ Hoài Thảo My" };
        //... Insert
        dbObj.collection(dbTable).insert(data,
            (err, result) => {
                if (err) {
                    console.log("\n ERR insert: ", err);
                    process.exit(0);
                }
                console.log("\n Result - record added ", result);

                /// --- Close
                db.close();
            }
        );
    }
);