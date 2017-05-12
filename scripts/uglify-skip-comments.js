module.exports = (node, { type, value }) => {
  if (type === 'comment') {
    // multiline comment
    return /clashapi/i.test(value);
  }
};

