//排序
function sortBy(filed, rev, primer) {
  rev = (rev) ? -1 : 1;
  return function(a, b) {
    a = a[filed];
    b = b[filed];
    if (typeof(primer) != 'undefined') {
      a = primer(a);
      b = primer(b);
    }
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 1;
  }
}

export {
  sortBy
};
