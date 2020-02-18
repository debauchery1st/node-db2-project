exports.seed = function(knex) {
  const cars = [
    { VIN: 1001, make: "Nissan", mileage: 0 },
    { VIN: 2002, make: "Chevy", mileage: 0 },
    { VIN: 3003, make: "Honda", mileage: 0 }
  ];
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert(cars);
    });
};
