var pw1 = 'Fung'
var pw2 = prompt('请输入暗语，如果输入不对你只能强制关闭浏览器了！哈哈哈');
if (pw2 === pw1) {
    console('welcome');
} else {
    location.reload();
}