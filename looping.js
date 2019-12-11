// No.1 looping while 
    
/* Output: 
       
        LOOPING PERTAMA
        2 - I love coding
        4 - I love coding
        6 - I love coding
        8 - I love coding
        10 - I love coding
        12 - I love coding
        14 - I love coding
        16 - I love coding
        18 - I love coding
        20 - I love coding
        LOOPING KEDUA
        20 - I will become mobile developer
        18 - I will become mobile developer         
        16 - I will become mobile developer
        14 - I will become mobile developer
        12 - I will become mobile developer
        10 - I will become mobile developer
        8 - I will become mobile developer
        6 - I will become mobile developer
        4 - I will become mobile developer
        2 - I will become mobile developer */

console.log ("LOOPING PERTAMA")

var l1 = 2;
while (l1 <= 20) {
  console.log (l1 + " - I love coding ");
  l1+=2;
}

console.log ("LOOPING KEDUA")
var l2 = 20;
while (l2 >= 2){
	console.log(a + " - I will become mobile developer")
	l2-=2
}

// ---------------------------------------------------------------------
// No. 2 Looping menggunakan for
/* Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:
SYARAT: 
A. Jika angka ganjil maka tampilkan Santai 
B. Jika angka genap maka tampilkan Berkualitas 
C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding. */

 /* OUTPUT 
        1 - Santai
        2 - Berkualitas
        3 - I Love Coding 
        4 - Berkualitas
        5 - Santai
        6 - Berkualitas
        7 - Santai
        8 - Berkualitas
        9 - I Love Coding
        10 - Berkualitas
        11 - Santai
        12 - Berkualitas
        13 - Santai
        14 - Berkualitas
        15 - I Love Coding
        16 - Berkualitas
        17 - Santai
        18 - Berkualitas
        19 - Santai
        20 - Berkualitas*/

for( var b = 1 ; b <= 20 ; b++) {
	if (b%2==0){
		console.log(b+' - Berkualitas')
	}else if(b%3==0 && b%2!=0){
		console.log(b+' - I love coding')
	}else{
		console.log(b+' - Santai')
	}
	
}

// -----------------------------------------------------------------------------
/*No. 3 Membuat persegi panjang #
Kamu diminta untuk menampilkan persegi dengan dimensi 8x4 dengan tanda # dengan perulangan atau looping. Looping boleh menggunakan syntax apa pun (while, for, do while). 
Output
########
########
########
######## */

var persegi = "";
var i = 0;
while (i < 4){
	for (var j = 0; j < 8 ; j++){
		persegi+="#"
	}
	persegi+='\n'
	i++;
}
console.log(persegi)

// -----------------------------------------------------------------------------
/*No. 4 Membuat Tangga
Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar # dengan dimensi tinggi 7 dan alas 7.  Looping boleh menggunakan syntax apa pun (while, for, do while). 
Output
#
##
###
####
#####
######
####### */

var tangga = ""
for (var i = 0; i < 7 ; i++){
		console.log(tangga+="#")
}
console.log('\n')

// -----------------------------------------------------------------------------
/*No. 5 Membuat Papan Catur
Buatlah suatu looping untuk menghasilkan sebuah papan catur dengan ukuran 8 x 8 . Papan berwarna hitam memakai tanda pagar # sedangkan papan putih menggunakan spasi. 
Output: 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */

var papan = ""
var i = 1;
while (i <= 8){
	if(i%2!=0){
		for (var j = 1; j <= 8 ; j++){
		if(j%2==0){
			papan+="#"
		}else{
			papan+=" "
		}
	}
	}else{
		for (var j = 1; j <= 8 ; j++){
		if(j%2!=0){
			papan+="#"
		}else{
			papan+=" "
		}
	}	
	}
	papan+='\n'
	i++;
}
console.log(papan)
