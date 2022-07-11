//===============================BT1=====================================

// input: nhập số ngày làm & lương 1 ngày
var soNgaylam = 30;
var luongMotngay = 100000;
// output: lương 1 tháng
var luongMotthang = 0;
// progress
luongMotthang = soNgaylam * luongMotngay;
// xuất ra màn hình 
console.log('lương 1 tháng là: ' + luongMotthang.toLocaleString() + ' VNĐ');

//===============================BT2=====================================

// input: nhập vào 5 số thực
var soThuc1 = 1.5;
var soThuc2 = 2.4;
var soThuc3 = 3.3;
var soThuc4 = 4.2;
var soThuc5 = 5.2;
// output: tính trung bình 5 số thực
average = 0;
// progress
average = Number( (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5);
// xuất ra màn hình 
console.log('trung bình cộng của 5 số thực là:', average.toFixed(3));

//===============================BT3=====================================

// input: nhập số tiền USD
var usd = 2;
const tiSuat = 23500;
// output: trả về số tiền VN
var vnd = 0;
// progress
vnd = Number(usd * tiSuat) ;
// xuất ra màn hình 
console.log('Số tiền VNĐ tương ứng là: ' + vnd.toLocaleString() + ' VNĐ');

//===============================BT4=====================================

// input: chiều dài & chiều rộng
var chieuDai = 5.5;
var chieuRong = 11.2;
// output: Diện tích, Chu Vi HCN
var dienTich = 0;
var chuVi = 0;
// progress
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
// in ra màn hình consolelog
console.log('diện tích HCN là: ' + dienTich.toFixed(3) + ' mét vuông');
console.log('chu vi HCN là: ' + chuVi.toFixed(3) + ' mét');

//===============================BT5=====================================

// input: nhập vào 1 số nguyên dương có 3 ký số
var so = 983;
// output: tính tổng 3 ký số
var hundred = (so - (so % 100)) / 100;
console.log('số hàng trăm:', hundred)
var ten = ((so % 100) - (so % 100 % 10)) / 10;
console.log('số hàng chục:', ten)
var unit = so % 100 % 10;
console.log('số hàng đơn vị:', unit)
// progress
var sum = hundred + ten + unit;
// xuất ra màn hình
console.log('tổng 3 ký số là:', sum)

//===============================END=====================================

var btnClick = document.getElementById('btnClick');
btnClick.onclick = function() {
    alert('F12 trên bàn phím của bạn, chứ không phải màn hình đâu mà nhấn !!!');
}