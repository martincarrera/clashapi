module.exports = (format, isProd) => {
  if (format === 'cjs') {
    return 'clashapi';
  }
  return isProd ? 'clashapi.umd.min' : 'clashapi.umd';
};

