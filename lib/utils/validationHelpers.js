function isVersionString(version) {
  const versionStringRegEx = /[0-9]+\.[0-9]+\.[0-9]+/;

  return versionStringRegEx.test(version);
}

module.exports = { isVersionString };
