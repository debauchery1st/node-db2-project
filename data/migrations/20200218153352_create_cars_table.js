//
// VIN, make, model, and mileage

exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.string("VIN", 256).notNullable();
    tbl.string("make", 256).notNullable();
    tbl.string("model", 192).notNullable();
    tbl.string("status");
    tbl.string("transmission");
    tbl.float("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
