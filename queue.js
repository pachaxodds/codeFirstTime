// ข้อ 1
function callQueue(queue, counterNumber) {
    callMessage = "คิวที่ " + queue + " เชิญที่ช่องบริการหมายเลข " + counterNumber + " ครับ"
    console.log(callMessage);
}

callQueue(230, 3);

console.log("------------------------");

// ข้อ 2
function getQueueType(pax, queueType) {
    console.log("ลูกค้า " + pax + " ท่าน รับคิว " + queueType);
}

getQueueType("1", "A");
getQueueType("2", "A");
getQueueType("3", "A");
getQueueType("4", "A");
getQueueType("5", "B");

// ข้อ ?
// function getQueue(customerPax) {
//     if (customerPax <= 4) {
//         console.log("ลูกค้า " + customerPax + " ท่าน รับคิว A")
//     } else {
//         console.log("ลูกค้า " + customerPax + " ท่าน รับคิว B")
//     }
// }

// getQueue(5);