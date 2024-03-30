// Inisialisasi array dengan elemen
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Menambahkan elemen baru ke array
fruits.push('Grapes');

// Mengubah nilai elemen dalam array
fruits[1] = 'Pear';

console.log(fruits); // Output: ['Apple', 'Pear', 'Orange', 'Mango', 'Grapes']

// Inisialisasi array kosong
const numbers = [];

// Menetapkan nilai ke elemen array
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;

console.log(numbers); // Output: [10, 20, 30]

const colors = ['Red', 'Green', 'Blue', 'Yellow'];

// Mengakses elemen berdasarkan indeks
console.log(colors[0]); // Output: 'Red'
console.log(colors[2]); // Output: 'Blue'
console.log(colors[3]); // Output: 'Yellow'

const numbers = [1, 2, 3, 4, 5];
// Menggunakan loop untuk mengakses semua elemen dalam array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output:
// 1
// 2
// 3
// 4
// 5