alert("Byenvini nan jwèt lawoulèt la ! Règ jwèt la trè senp : "+
"\n1.- Pou'w genyen w'ap bezwen chwazi yon valè nan entèval yo ba'w lan. "+
"\n2.- W'ap gen 5 tantativ pou'w jwenn valè an. \n3.- Si tout tantativ ou yo echwe, ou pèdi w'ap oblije rekòmanse.");
let chans = 5, chwa = '', karakte;
let nonbJenere = Math.floor(Math.random() * (100 - 1 + 1) + 1);
do{
    switch(chans){
        case 5 : console.info("Sa se premye tantativ lan !");break;
        case 4 : console.info("Sa se dezyèm tantativ lan !");break;
        case 3 : console.info("Sa se twazyèm tantativ lan !");break;
        case 2 : console.info("Sa se katriyèm tantativ lan !");break;
        case 1 : console.info("Sa se senkyèm e dènye tantativ ou !");break;
    }
    
    do{
        chwa = window.prompt("Silvouplè chwazi yon nonb ki nan entèval 1 - 100.");
        for(karakte of chwa){
            if(!'0123456789'.includes(karakte)){
                alert('Ou antre yon tip de done ki pa konpatib ! Silvouplè eseye ankò');
                break;
            }
        }
    }while(!chwa || !'0123456789'.includes(karakte));
    
    if(parseInt(chwa) === nonbJenere && chans > 0){
        alert("Felisitasyon ! Ou jwenn nonb ekzat la ki se : "+nonbJenere);
        break;
    }else if(parseInt(chwa) > nonbJenere && chans > 0){
        console.error("Nonb ou chwazi an twò gwo ! Eseye ak yon pi piti nonb");
    }else{
        console.error("Nonb ou chwazi an twò piti ! Eseye ak yon pi gwo nonb");
    }

    chans--;

    if(chans < 1){
        alert("Pa gen chans ankò ! Ou itilize tout tantativ ou yo ! Ou echwe...");
    }
}while(chans > 0 || parseInt(chwa) === nonbJenere);

alert("Mèsi dèske'w te patisipe avèk nou nan jwèt woulèt la. A la pwochèn  ");
