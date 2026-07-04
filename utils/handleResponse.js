const headers = { 'Content-Type': 'application/json' };

function handleResponse(res, data) {
  console.log("res", data);
  res.writeHead(200, headers);
  res.end(JSON.stringify(data));
}

function handleError(res, statusCode, errorMessage) {
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify({
    status: statusCode === 500 ? 'error' : 'failed',
    error: errorMessage
  }))
}

module.exports = {
  handleResponse,
  handleError
}