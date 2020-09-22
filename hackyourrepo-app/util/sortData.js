export function sortData(data, name) {
  function compare(a, b) {
    const dataA = a.name.toUpperCase();
    const dataB = b.name.toUpperCase();
    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return comparison;
  }
  return data.sort(compare);
}
