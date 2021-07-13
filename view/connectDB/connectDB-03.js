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
        var data = { idCustomer: "VHTMy", custName: "Vũ Hoài Thảo My" };
        //... Insert
        dbObj.collection("Customers").insert(data,
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