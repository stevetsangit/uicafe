var row = '';
for (var i = 1; i <= 9; i++){ //行数
    for (var j = 1; j <= i; j++){ //列数，重点：与上面的区仅是 j <= 1 变为 j <= i
        row += j + '×' + i + '=' + i * j + '\t';
    }
    row = row + '\n';
}
console.log(row);