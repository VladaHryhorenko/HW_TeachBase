//Task1.1
var x = 6, y = 15, z = 4; 
y /= x + 5 % z; 

// 1. 5%z === 1 (priority 15)
// 2. x-1 === 7 (priority 14)
// 3. y/=7 === 2,14 (priority 3)

console.log(y); // 2.142857142857143

//Task 1.2
var x = 6, y = 15, z = 4; 
z = x++ + y * 5; 

// 1. x++ === 6 (priority 18)
// 2. y * 5 === 75 (priority 15)
// 3. 6 + 75 === 81 (priority 14)
// z = 81 (priority 3)

console.log(z); //81

//Task 1.3
var x = 6, y = 15, z = 4; 
x += y - x++ * z; 

// 1. x++ === 6 (priority 18) // постфиксная форма возвращает старое значение
// 2. x++ * z === 6 * 4 === 24 (priority 15)
// 3. y - 24 === 15 -24 === -9 (priority 14)
// x += (-9) === 6 + (-9) === -3 (priority 3)

console.log(x); //-3

//Task 1.4
var x = 6, y = 15, z = 4; 
z = -- x - y * 5; 

// 1. --x === 5 (priority 17) // префиксная форма возвращает новое значение
// 2. y * 5 === 15 * 5 === 75 (priority 15)
// 3. 5 - 75 === 5 - 75 === -70 (priority 14)
// 4. z = -70 (priority 3)

console.log(z); //-70


//Task 1.5
var a = 3;  
var b = ++a + 1 + a++;

// 1. a++ === a === 3 (priority 18) 
// 2. ++a === 4 (priority 17)
// 3. (++a) + 1 === 4 + 1 === 5 (priority 14)
// 4. ((++a) + 1) + a++ = 5 + 4 === 9 (priority 14)
// 5. b = 9 (priority 3)

console.log(b);// 9