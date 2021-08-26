let str = " Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!"
let arr = str.split(/[.?]/);

let a = arr[0].split(" ").length - 1;
let b = arr[1].split(" ").length - 1;
let c = arr[2].split(" ").length - 1;
let d = arr[3].split(" ").length - 1;
let e = arr[4].split(" ").length - 1;
let f = arr[5].split(" ").length - 1;
let g = arr[6].split(" ").length - 1;
let h = arr[7].split(" ").length - 1;
let i = arr[8].split(" ").length - 1;
let j = arr[7].replace("9876535362", "XXXXXXXXXX");

if (a >= 3) {
    console.log(arr[0])
}
if (b >= 3) {
    console.log(arr[1])
}
if (c >= 3) {
    console.log(arr[2])
}
if (d >= 3) {
    console.log(arr[3])
}
if (e >= 3) {
    console.log(arr[4])
}
if (f >= 3) {
    console.log(arr[5])
}
if (g >= 3) {
    console.log(arr[6])
}
if (h >= 3) {
    console.log(j)
}
if (i >= 3) {
    console.log(arr[8])
}