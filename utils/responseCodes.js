module.exports.response_200 = (res, message, data) => {
  return res.status(200).json({
    status: 'OK',
    message,
    data,
  });
};

module.exports.response_201 = (res, message, data) => {
  return res.status(201).json({
    status: 'Inserted',
    message,
    data,
  });
};

module.exports.response_204 = (res, message) => {
  return res.status(204).json({
    status: 'No content',
    message,
  });
};

module.exports.response_400 = (res, message) => {
  return res.status(400).json({
    status: 'error',
    error: message,
  });
};

module.exports.response_401 = (res, message) => {
  return res.status(401).json({
    status: 'error',
    error: message,
  });
};

module.exports.response_403 = (res, message) => {
  return res.status(403).json({
    status: 'error',
    error: message,
  });
};

module.exports.response_404 = (res, message) => {
  return res.status(404).json({
    status: 'error',
    error: message,
  });
};

module.exports.response_500 = (res, log_message, err) => {
  var message = err != null ? `${log_message}: ${err}` : log_message;

  console.debug(message);

  return res.status(500).json({
    status: 'error',
    error: `Something went wrong.\n${message}`,
  });
};
