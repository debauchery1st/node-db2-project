const api = require("./server");

const port = process.env.PORT || 4000;
api.listen(port, () => console.log(`\n*** listening on ${port} ***\n`));
