export const generateAccToUser = (length) => {

  const arr = [1];

  for (let i = 1; i < length; i++) {
    const nextNum = arr[i - 1] + 3;
    arr.push(nextNum)
  }

  return arr

}