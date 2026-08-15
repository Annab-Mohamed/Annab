// 1. Qoraal Ku Soo Dhaweyn Ah
console.log("=== SYSTEM-KA TIJAABADA ARDAYDA ===");

// 2. Kaydinta Xogta (Variables)
let magacaArdayga = "Cali";
let dhibcahaImtixaanka = 78;

// 3. Go'aan Ka Gaaris (Condition)
if (dhibcahaImtixaanka >= 50) {
    console.log(magacaArdayga + " waa uu gudbay imtixaanka! Natiijadu waa: PASS");
} else {
    console.log(magacaArdayga + " ma uusan gudbin. Natiijadu waa: FAIL");
}

// 4. Function (Sida shaqo loo soo celceliyo)
function xisaabiCelcelis(imtixaan1, imtixaan2) {
    let wadag = imtixaan1 + imtixaan2;
    return wadag / 2;
}

let celcelis = xisaabiCelcelis(80, 90);
console.log("Celceliska dhibcaha waa: " + celcelis);