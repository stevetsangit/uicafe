<<<<<<< HEAD
var pw1 = 'Fung'
var pw2 = prompt('请输入暗语，如果输入不对你只能强制关闭浏览器了！哈哈哈');
if (pw2 === pw1) {
    console('welcome');
} else {
    location.reload();
}
=======
var row = '';
for (var i = 1; i <= 9; i++){ //行数
    for (var j = 1; j <= i; j++){ //列数，重点：与上面的区仅是 j <= 1 变为 j <= i
        row += j + '×' + i + '=' + i * j + '\t';
    }
    row = row + '\n';
}
console.log(row);
>>>>>>> ca28cbaa83b84cd26bf6f2b06b988f125d2c1ab2
