var admin = require("firebase-admin");

var serviceAccount = require("./iotproject-41f08-firebase-adminsdk-vc4s7-9f433b1bea.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iotproject-41f08-default-rtdb.firebaseio.com"
});

// Mở DB lên, SET / Create 1 Record
var db = admin.database();

const ref = db.ref('/Users');
const newNode = ref.child("1112");
newNode.set({

    name: "Tú Aka",
    age: 43

});