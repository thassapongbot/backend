let mongoose = require('mongoose');
let houseSchema = new mongoose.Schema(
    {
        "_id": {
          "type": "Number"
        },
        "address": {
          "type": "String"
        },
        "county": {
          "type": "String"
        },
        "description": {
          "type": "String"
        },
        "price": {
          "type": "Number"
        },
        "photo": {
          "type": "String"
        }
      }
);

let enquirySchema = new mongoose.Schema(
    {
        "address": {
            "type": "String",
            "required": true
        },
        "name": {
          "type": "String",
          "required": true
        },
        "email": {
          "type": "String",
          "required": true
        },
        "phone": {
          "type": "String"
        },
        "remarks": {
          "type": "String",
          "required": true
        },
        "submittedDate": {
            "type": "Date",
            "default": new Date()
        }
      }
)

const userSchema = new mongoose.Schema(
    {
      "name": {
        "type": "String",
        "required": true
      },
      "email": {
        "type": "String",
        "required": true,
        "unique": true
      },
      "phone": {
        "type": "String",
        "required": true
      },
      "password": {
        "type": "String",
        "required": true
      },
      "role": {
        "type": "String",
        "required": true,
        "default": "customer"
      }
    }
  );

let Houses = mongoose.model("House",houseSchema);
let Users = mongoose.model("User",userSchema);
let Enquiries = mongoose.model("Enquiry",enquirySchema);
module.exports = {Houses, Users, Enquiries};