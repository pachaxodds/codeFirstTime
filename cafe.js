// let customerName = "Plu";
// let shopName = "Wellcom";
// let openTime = "7 AM";
// let closeTime = "5 PM";
// let tel = "09x-xxx-xxxx";
// let recommandMenu = "Dirty Coffee";

// message = "Welcome to " + shopName;
// orderReadyMessage = "เมนู " + recommandMenu + " ของคุณ " + customerName + " ได้แล้วครับ "

// console.log(message);
// console.log(orderReadyMessage);

// customerName = "เก้า";
// shopName = "แกฟา";
// recommandMenu = "ชาชักปักษ์ใต้เข้ม ๆ ตาค้าง";

// message = "ยินดีต้อนรับสู่ร้าน " + shopName + " ครับ";
// orderReadyMessage = "เมนู " + recommandMenu + " ของคุณ " + customerName + " ได้แล้วครับ"

// console.log(message);
// console.log(orderReadyMessage);

function welcomeMessage(shopName) {
    message = "ยินดีต้อนรับสู่ร้าน " + shopName + " ครับ";
    console.log(message)
}
welcomeMessage("แกฟา");

function readyIsReady(recommandMenu, customerName) {
    orderReadyMessage = "เมนู " + recommandMenu + " ของคุณ " + customerName + " ได้แล้วครับ";
    console.log(orderReadyMessage)
}
readyIsReady("ชาชัก", "มังกร");
readyIsReady("ชาไทย", "อาร์ท");
readyIsReady("ชามะนาว", "บูม");