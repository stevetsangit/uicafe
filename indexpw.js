
var pw1 = 'Fung'
var pw2 = prompt("🔢\n请输入暗语，如果你不知道只能强制关闭浏览器了！哈哈哈😂\nPlease enter the code word, if you don't know, you can only force close the browser! Hahaha\n");
if (pw2 === pw1) {
    console('welcome');
} else {
    location.reload();
}