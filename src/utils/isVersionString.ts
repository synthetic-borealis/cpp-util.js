export default function isVersionString(version: string) {
  const versionStringRegEx = /[0-9]+\.[0-9]+\.[0-9]+/;

  return versionStringRegEx.test(version);
}
