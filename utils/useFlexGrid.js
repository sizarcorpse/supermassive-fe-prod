/**
 *
 * @param {*} givenArray
 * @param {*} chunkSize
 *
 *
 */

export const useFlexGrid = (givenArray, chunkSize) => {
  let index = 0;
  const arrayLength = givenArray.length;
  const rearrangeArray = [];
  for (index = 0; index < arrayLength; index += chunkSize) {
    let myChunk = givenArray.slice(index, index + chunkSize);
    rearrangeArray.push(myChunk);
  }
  return rearrangeArray;
};
