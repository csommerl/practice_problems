function areAnagrams(str1, str2) {
  return getSortedStr(str1) === getSortedStr(str2);
}

function getSortedStr(str) {
  return str.split('').sort().join('');
}