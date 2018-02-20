/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var  a=preferences;
  var numberOfLoveTriangles=0;
  for(var i=1;i<a.length+1;i++) {
  if (i != a[i - 1]) {
  if (a[i - 1] <= a.length) {
  if (a[(a[i - 1]-1)] != a[i - 1]) {
  if (a[(a[i - 1]-1)] <= a.length) {
  if (a[(a[(a[i - 1]-1)]-1)] == i) {

  numberOfLoveTriangles++;
   }
  }
  }
  }
  }
  }
  return numberOfLoveTriangles/3; 
};
