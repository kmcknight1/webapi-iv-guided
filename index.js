const server = require("./api/server.js");
const dotenv = require("dotenv");
dotenv.config();

const port = 5000 || process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
