//
// VIN, make, model, and mileage

exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("VIN", 256);
    tbl.string("make", 256);
    tbl.float("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
