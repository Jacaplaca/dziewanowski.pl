const asyncForEach = async (
  array: any[],
  callback: (e: any, i: number, a: any[]) => any
) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

export default asyncForEach;
