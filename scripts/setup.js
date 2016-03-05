"use strict";
// This script defines a setup routine that is executed every time
// this Foxx Service is installed.
// So we have to make sure that it is able to be executed multiple
// times and reacts to previous states.

// Load a reference to the database object.
// This is used to create collections.
var db = require("org/arangodb").db;

const PRODUCTS = "Products"; 
const PROFILES = "Profiles"; 

var productCol = db._collection(PRODUCTS);
var profilesCol = db._collection(PROFILES);

// Check if the collection already exists.
// Can be if this script was executed before.
if (productCol == null) {
  productCol = db._create(PRODUCTS);

  // Insert some dummy data:
  productCol.save({
    seller: "Alice",
    title: "TV Station",
    description: "A TV station in original packing. Bought end of last year.",
    price: 129.00
  });

  productCol.save({
    seller: "Alice",
    title: "Pair of shoes",
    description: "A well used pair of shoes. Color: black. Size: 37",
    price: 29.00
  });
}

if (profilesCol == null) {
  profilesCol = db._create(PROFILES);

  // Insert some profiles:
  profilesCol.save({
    _key: "Alice",
    name: "Alice",
    credits: 1000
  });
}
