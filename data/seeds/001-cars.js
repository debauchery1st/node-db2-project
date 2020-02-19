exports.seed = function(knex) {
  const cars = [
    { VIN: 1111, make: "Nissan", model: "Sentra", mileage: 0 },
    { VIN: 2222, make: "Chevy", model: "Camaro", mileage: 0 },
    { VIN: 3333, make: "Honda", model: "Accord", mileage: 0 }
  ];
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert(cars);
    });
};
