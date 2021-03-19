// Lengkapi function di bawah agar dapat memunculkan deret sebagai berikut tanpa menggunakan loop. Munculkan menggunakan console.log()
// 1
// 3
// 5
// 7
// 11
// 13
// 15
// 17
// 19

// Clue : Recursive
// Extra Point : Munculkan hanya bilangan primer

const generate = (max) => {
  // Do Something Here

  if(max < 0) return
  if (max > 5) {
    if(max % 2 !== 0 && max % 3 !== 0 && max % 5 !== 0) console.log(max);
  }
  else {
    if (max % 4 !== 0) console.log(max);
  } 
  generate(max - 1);
}

generate(20);

