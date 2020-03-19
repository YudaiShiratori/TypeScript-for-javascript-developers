export {};

function returnNothing(): void {
  console.log('no receive');
  //undeined型の場合のエラー対策なら以下を挿入
  // return;
}

console.log(returnNothing());
