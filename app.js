//ใช้ javascript ในการสร้างปุ่ม
const sounds = ["Effect1","Effect2","Effect3","Effect4","Effect5"] //ชื่อสมาชิกจะเป็นชื่อเดียวกันกับ id กับชื่อไฟล์เสียง
//เราต้องการจะสร้างปุ่มโดยแปะข้อความที่อยู่ในอาร์เรย์ไว้ที่ปุ่ม =>ต้องการเข้าถึงสมาชิก => วนลูป
sounds.forEach(sound=>{
    const btn = document.createElement("button") //กำหนด element ให้เป็นปุ่ม
    btn.classList.add("btn") //เพิ่มคลาสให้ตัวปุ่มเพื่อนำไปกำหนดสไตล์
    btn.innerText = sound
    //เข้าถึงปุ่ม เมื่อคลิกแล้วจะแสดงเสียงออกมา
    btn.addEventListener("click",()=>{
        stopSounds()
        document.getElementById(sound).play() //ดึง id audio มาใช้ซึ่งกำหนดเป็นซาวไว้แล้วในไฟล์
    })
    //ส่วนของ document จะทำการเข้าถึง div.controller
    document.getElementById("controller").appendChild(btn) //นำเอาตัวปุ่มไปเก็บไว้ที่ div.controller ที่อยู่หน้า html
})
//ในการเล่นเสียงตอนแรกที่เราตั้งกดปุ่ม มันจะเล่นเสียงซ่อนกัน เราเลยต้องดักจับให้มันเล่นทีละตัวแม้ว่าเราจะกดปุ่มรัวมาก
function stopSounds(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound) //เข้าถึงไฟล์เสียงทุกเสียง
        song.pause() //เมื่อมีการกดเสียงอื่นให้หยุดการเล่นเสียงเดิม
        song.currentTime = 0 //เมื่อกดใหม่เสียงจะเริ่มที่จุดเริ่มต้นใหม่เสมอ
    })
}