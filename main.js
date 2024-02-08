//uyga vazifa////////////////
//1-masala
// function kattaHarflar(n) {
//     let alfavit = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
//     let kattaHarflar = alfavit.slice(0, n);
//     return kattaHarflar;
// }
// let n = +prompt(`topmoqchi bo'lgan harfni raqamini kiriting`);
// console.log(kattaHarflar(n));

//2-masala
// function utf16KodiniChiqar(string) {
//     let birinchiBelgi = string.charCodeAt(0);
//     let oxirgiBelgi = string.charCodeAt(string.length - 1);
//     return { birinchiBelgi, oxirgiBelgi };
// }
// let testString = "Hello"; 
// let utf16Kodlari = utf16KodiniChiqar(testString);
// console.log("Birinchi belgi UTF-16 kodi:", utf16Kodlari.birinchiBelgi);
// console.log("Oxirgi belgi UTF-16 kodi:", utf16Kodlari.oxirgiBelgi);

//3-masala
// function teskariChiqar(string) {
//     let teskariString = string.split('').reverse().join('');
//     return teskariString;
// }
// let testString = "Hello world"; 
// let teskari = teskariChiqar(testString);
// console.log("Teskari tartibdagi matn:", teskari);


//4-masala

// function almashtir(berilgansatr) {
//     let natija = '';
//     for (let i = 0; i < berilgansatr.length; i++) {
//         let harf = berilgansatr[i];
//         if (harf >= 'a' && harf <= 'z') {
//             natija += harf.toUpperCase();
//         } else if (harf >= 'A' && harf <= 'Z') {
//             natija += harf.toLowerCase();
//         } else {
//             natija += harf;
//         }
//     }
//     return natija;
// }
// let berilgansatr = prompt('matin kiriting');
// let natija = almashtir(berilgansatr);
// console.log("Berilgan satr:", berilgansatr);
// console.log("Natija:", natija);


//5-masala
// function kichikgaAlmashtir(berilganSatr) {
//     let natijaSatr = '';
//     for (let i = 0; i < berilganSatr.length; i++) {
//         let harf = berilganSatr[i];
//         // Katta lotin harflarini tekshiramiz
//         if (harf >= 'A' && harf <= 'Z') {
//             // Har bir katta harfi kichik qilamiz
//             natijaSatr += harf.toLowerCase();
//         } else {
//             // Boshqa belgilarni oldiga qo'shamiz
//             natijaSatr += harf;
//         }
//     }
//     return natijaSatr;
// }

// let berilganSatr = "Bu Bir Berilgan Satr Va Bunda Katta Harflar Bor";
// let natija = kichikgaAlmashtir(berilganSatr);
// console.log("Berilgan satr:", berilganSatr);
// console.log("Natija:", natija);

//6-masala

// function getInverseNumber(n) {
//     let inverse = "";
//     while (n > 0) {
//         let qoldiq = n % 10; 
//         inverse += qoldiq; 
//         n = Math.floor(n / 10);
//     }
//     return inverse;
// }

// let n = 12345;
// let inverse = getInverseNumber(n);
// console.log("Berilgan son:", n);
// console.log("Teskarisi:", inverse);

//7-masala

// function countOccurrences(s1, s2) {
//     let regex = new RegExp(s2, 'g');
//     let matches = s1.match(regex);
//     return matches ? matches.length : 0;
// }

// let s1 = "abcababcabc";
// let s2 = "abc";
// let result = countOccurrences(s1, s2);
// console.log("S2 s1 ichida", result, "marta takrorlangan");


//8-masala
// function countOccurrences(s1, s2) {
//     let count = 0;
//     let index = -1;
//     while ((index = s1.indexOf(s2, index + 1)) !== -1) {
//         count++;
//     }

//     return count;
// }

// let s1 = "abcababcabc";
// let s2 = "abc";
// let result = countOccurrences(s1, s2);
// console.log("S2 s1 ichida", result, "marta takrorlangan.");

//9-masala

// function add(s, c, s2) {
//     let natija = "";
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === c) {
//             natija += s2 + c;
//             index = i + 1;
//         }
//     }
//     natija += s.substring(index);

//     return natija;
// }
// let s = "abcdefcghcijklcmnop";
// let c = "c";
// let s2 = "123";
// let natija = add(s, c, s2);
// console.log("Natija:", natija);


//10-masala
// function add(s1, s2, s3) {
//     let last = s1.lastIndexOf(s2);
//     if (last !== -1) {
//         let before = s1.substring(0, last);
//         let after = s1.substring(last + s2.length);
//         return before + s3 + after;
//     }
//     return s1;
// }
// let s1 = "abcdeabc";
// let s2 = "abc";
// let s3 = "123";
// let natija = add(s1, s2, s3);
// console.log("Natija:", natija);

//11-masala
// function countWhitespaceCharacters(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ' || str[i] === '\t' || str[i] === '\n' || str[i] === '\r') {
//             count++;
//         }
//     }
//     return count;
// }
// let str = "o'zbekiston dunyodagi eng go'zal davlatlardan biridir";
// let whitespaceCount = countWhitespaceCharacters(str);
// console.log("Tinish belgilari soni:", whitespaceCount);


//12-masala
// function aniqlash(str) {
//     let sozlar = str.split(" ");
//     let boshHarf = '';
//     let tugHarf = '';
//     let boshlangich = 0;
//     let tugash = 0;

//     for (let soz of sozlar) {
//         let harf = soz.charAt(0).toUpperCase();
//         if (boshHarf === '') {
//             boshHarf = harf;
//             boshlangich++;
//         } else if (boshHarf !== harf) {
//             boshHarf = harf;
//             boshlangich++;
//         }

//         let oxirgiHarf = soz.charAt(soz.length - 1).toUpperCase();
//         if (tugHarf === '') {
//             tugHarf = oxirgiHarf;
//             tugash++;
//         } else if (tugHarf !== oxirgiHarf) {
//             tugHarf = oxirgiHarf;
//             tugash++;
//         }
//     }

//     return {
//         boshlanuvchiSozlar: boshlangich,
//         tugovchiSozlar: tugash
//     };
// }
// let str = "Bir bugun balki Boshlagan";
// let natija = aniqlash(str);
// console.log("Bir xil harflar bilan boshlanuvchi so'zlar soni:", natija.boshlanuvchiSozlar);
// console.log("Bir xil harflar bilan tugovchi so'zlar soni:", natija.tugovchiSozlar);

//13-masala

// function chiqarish(str) {
//     let sozlar = str.split(" ");
//     let natija = sozlar.join(", ");

//     console.log(natija);
// }
// let str = "Assalomu alaykum hurmatli o'quvchilar";
// chiqarish(str);





