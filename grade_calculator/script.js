alert("Byenvini ! ");
let kantiteNot, kar, endis = 0, not, som = 0, mwayen, mansyon, n;
let lisNot = [];
do {
    do{
        kantiteNot = prompt("Antre kantite nòt ou pral mete an ? : ");
        for(kar of kantiteNot){
            if(!'0123456789'.includes(kar)){
                alert('Ou antre yon move tip de done ! Silvouplè eseye ankò');
                break;
            }
        }
    }while(!kantiteNot || kantiteNot <= 0 || !'0123456789'.includes(kar));

    while (endis < parseInt(kantiteNot)) {
        not = prompt("Antre not #" + (parseInt(endis) + 1));
        if (parseFloat(not) <= 0) {
            alert("Nòt lan pa dwe pi ba oubyen egal a 0 !");
        } else if (parseFloat(not) > 100) {
            alert("Nòt lan pa dwe depase 100 !");
        }else if(!not){
            alert("Nòt lan pa dwe vid oubyen null !");
        }else {
            let verif = true;
            for(n of not){
                if(!'0123456789'.includes(n)){
                    alert('Ou antre yon move tip de done ! ');
                    verif = false;
                    break;
                }
            }
            if(verif){
                lisNot.push(parseFloat(not));
                endis++;
            }
        }
    }    
} while (lisNot.length < parseInt(kantiteNot));

for (let l = 0; l < lisNot.length; l++) {
    som += lisNot[l];
    console.log("Not #" + (l + 1) + " : " + lisNot[l]);
}
mwayen = parseFloat(som / (parseInt(kantiteNot)));
if (mwayen >= 90) {
    mansyon = "A";
} else if (mwayen >= 80 && mwayen < 90) {
    mansyon = "B";
} else if (mwayen >= 70 && mwayen < 80) {
    mansyon = "C";
} else if (mwayen >= 60 && mwayen < 70) {
    mansyon = "D";
} else {
    mansyon = "F";
}
console.log("Mwayèn nan se : " + mwayen + " | Mansyon : " + mansyon);


