/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

const fairRations = (B) => {
    // Write your code here
    let sum = B.reduce((a, b) => a + b, 0);
    let breadHandedOut = 0;
    if(sum % 2 === 0) {
      for(let i = 0; i < B.length; i++) {
        if(B[i] % 2 !== 0) {
          B[i] = B[i] + 1;
          B[i + 1] = B[i + 1] + 1;
          breadHandedOut +=2;
        }
      }
    } else return 'NO';
  
    return breadHandedOut;
}
