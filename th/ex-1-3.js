/* 
ให้เขียน Function ที่ชื่อว่า generatePattern ซึ่งมีคุณสมบัติต่อไปนี้
    1. รับ Parameter 1 ตัวคือ size
        1. size เป็น Data Type ประเภท Number ที่บรรจุตัวเลข 
    2. Function นี้จะนำ size มาสร้างรูปแบบเป็นครึ่งสามเหลี่ยมหัวคว่ำ และ Return ค่าออกมา
    3. เมื่อ Algorithm นี้ทำงานจะเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

const generatePattern = (size) =>{
   let result = ''
   for (let i = size ; i>0 ; i--){
    for (let j = 0 ; j < i ; j++){
        result += '* '
    }
    result +='\n'
   }
   return result
}

console.log(generatePattern(3)); 

/* 

* * * 
* * 
*  

*/ 


console.log(generatePattern(5)); 

/*

* * * * * 
* * * * 
* * * 
* * 
* 

*/

