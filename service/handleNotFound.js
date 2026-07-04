const { handleError } = require("../utils/handleResponse")

function handleNotFound(_req, res) {
  handleError(res, 404, "Not Found")
}

module.exports = {
  handleNotFound
}