module.exports = (version, author, contributors) => {
  const banner = `/**
  * clashapi, A module to consume clashapi.xyz
  *
  * @version: ${version}
  * @authors: ${author} | ${contributors[0]}
  */`;

  return banner;
};

