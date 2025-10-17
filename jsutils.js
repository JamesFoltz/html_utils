export function newArr2d(rows,cols,init=0){
  return Array.from({ length: rows }, () => new Array(cols).fill(init));
}
