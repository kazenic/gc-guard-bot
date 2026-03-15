console.log("BOT PENJAGA GRUP AKTIF");

function cekPesan(user, pesan) {

if (pesan.includes("chat.whatsapp.com")) {
console.log("⚠️ " + user + " mengirim link grup!");
console.log("Bot: Link tidak diizinkan di grup");
}

if (pesan.toLowerCase().includes("spam")) {
console.log("⚠️ " + user + " melakukan spam!");
}

}

cekPesan("member1", "halo semua");
cekPesan("member2", "chat.whatsapp.com/xxxx");
cekPesan("member3", "spam spam spam");
