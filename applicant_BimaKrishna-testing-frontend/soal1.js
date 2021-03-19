// Lengkapi function di bawah agar dapat memunculkan bentuk sebagai berikut. Munculkan menggunakan console.log()
// -----=-----
// ----=-=----
// ---=---=---
// --=-----=--
// -=-------=-
// =---------=
// -=-------=-
// --=-----=--
// ---=---=---
// ----=-=----
// -----=-----

// Extra Point : Pengecheckan bila inputan yang diisi tidak dapat di proses.

const generate = (limit) => {
  // Do something here
  let jml = limit;
  let dash = '-';
  let star = '=';
  let res= "";
  let median = jml / 2 + 0.5;
  let z = 1;

  if(jml % 2 === 0) return console.log("angka yang dimasukan salah")


  for (a = 1; a <= median; a++){
    res= "";
    for(b = median; b>a; b--){    
        res =	 res.concat(dash);      
    }
    
    for (c = 1; c>=1; c--){
        res = res.concat(star);
    }
        
    if (a > 2) {
        for (d = 1; d<a + z ; d++ ){
          res = res.concat(dash);
        }
        z++
    } else {
      for (d = 1; d<a; d++ ){
        res = res.concat(dash);
      }
    }
    
    if (a == 1) {
        for (e = 1; e <= jml - median; e++){
          res = res.concat(dash);
        }
    } else {
      for (c = 1; c>=1; c--){
        res = res.concat(star);
      }
    }
    
    if (a > 1) {
      for (g = 0; g < median - a; g++) {
        res = res.concat(dash);
      }
    }   
    console.log(res);
    }
};



generate(13);