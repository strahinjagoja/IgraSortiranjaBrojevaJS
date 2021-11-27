function PrebaciSliku(slikica){
var slike1=document.getElementsByClassName("slike");
var duzina = slike1.length;
for(var i=0;i<duzina;i++){
pom=slike1.item(i).id;
document.getElementById(pom).style.borderBottom="none";
}
document.getElementById("glavna").src="../img/"+slikica+".jpg";
document.getElementById(slikica).style.borderBottom="1px solid red";
}

function SledecaSlika(){
    var slike1=document.getElementsByClassName("slike");
    var duzina = slike1.length;
    var pom1=document.getElementById("glavna").src.slice(44,54);
    console.log(pom1);
    var pom;
    var pom2=0;
    for(var i=0;i<duzina;i++){
    pom=slike1.item(i).id;
    document.getElementById(pom).style.borderBottom="none";
    }  
    switch(pom1){
        case "slika1.jpg":
        document.getElementById("glavna").src="../img/slika2.jpg";
        pom1="slika2";
        break;
        case "slika2.jpg":
        document.getElementById("glavna").src="../img/slika3.jpg";
        pom1="slika3";
        break;
        case "slika3.jpg":
        document.getElementById("glavna").src="../img/slika4.jpg";
        pom1="slika4";
        break;
        case "slika4.jpg":
        document.getElementById("glavna").src="../img/slika5.jpg";
        pom1="slika5";
        break;
        case "slika5.jpg":
        document.getElementById("glavna").src="../img/slika1.jpg";
        pom1="slika1";
        break;
    }
    document.getElementById(pom1).style.borderBottom="1px solid red";
}

function PrethodnaSlika(){
    var slike1=document.getElementsByClassName("slike");
    var duzina = slike1.length;
    var pom1=document.getElementById("glavna").src.slice(44,54);
    console.log(pom1);
    var pom;
    var pom2=0;
    for(var i=0;i<duzina;i++){
    pom=slike1.item(i).id;
    document.getElementById(pom).style.borderBottom="none";
    }  
    switch(pom1){
        case "slika1.jpg":
        document.getElementById("glavna").src="../img/slika5.jpg";
        pom1="slika5";
        break;
        case "slika2.jpg":
        document.getElementById("glavna").src="../img/slika1.jpg";
        pom1="slika1";
        break;
        case "slika3.jpg":
        document.getElementById("glavna").src="../img/slika2.jpg";
        pom1="slika2";
        break;
        case "slika4.jpg":
        document.getElementById("glavna").src="../img/slika3.jpg";
        pom1="slika3";
        break;
        case "slika5.jpg":
        document.getElementById("glavna").src="../img/slika4.jpg";
        pom1="slika4";
        break;
    }
    console.log(pom2);
    document.getElementById(pom1).style.borderBottom="1px solid red";
}
var br=0;
function Sortiraj(kolona, strelica){
    console.log(kolona);
    console.log(strelica);
    var i;
    var j;
    var z;
    var k=0;
    var pom;
    var jednaki=true;
    var kol=document.getElementsByClassName(kolona);
    var kol1=document.getElementsByClassName('kolona1');
    var kol2=document.getElementsByClassName('kolona2');
    var kol3=document.getElementsByClassName('kolona3');
    var kol4=document.getElementsByClassName('kolona4');
    var kol5=document.getElementsByClassName('kolona5');
    var brisi=document.getElementsByClassName('prazno');
    var duzinakol=kol.length;
    if(br==0){
    for(i=0;i<duzinakol-1;i++){
       for(j=i+1;j<duzinakol;j++){
           while(jednaki==true){
            if(kol.item(i).innerHTML.charAt(k)!=kol.item(j).innerHTML.charAt(k)){
                jednaki=false;
                break;
            }
            k++;
           }
           console.log(k);
           if(kol.item(i).innerHTML.charAt(k)>kol.item(j).innerHTML.charAt(k))
           {
             pom=kol1.item(i).innerHTML;
             kol1.item(i).innerHTML=kol1.item(j).innerHTML;
             kol1.item(j).innerHTML=pom;

             pom=kol2.item(i).innerHTML;
             kol2.item(i).innerHTML=kol2.item(j).innerHTML;
             kol2.item(j).innerHTML=pom;

             pom=kol3.item(i).innerHTML;
             kol3.item(i).innerHTML=kol3.item(j).innerHTML;
             kol3.item(j).innerHTML=pom;

             pom=kol4.item(i).innerHTML;
             kol4.item(i).innerHTML=kol4.item(j).innerHTML;
             kol4.item(j).innerHTML=pom;

             pom=kol5.item(i).innerHTML;
             kol5.item(i).innerHTML=kol5.item(j).innerHTML;
             kol5.item(j).innerHTML=pom;
           }
           k=0;
       }
}
br=1;
 for(i=0;i<brisi.length;i++){
     brisi.item(i).innerHTML=" ";
     console.log(brisi.item(i).innerHTML);
 }
document.getElementById(strelica).innerHTML="&#9652;";
}
else if(br==1){
    for(i=0;i<duzinakol-1;i++){
        for(j=i+1;j<duzinakol;j++){
            while(jednaki==true){
             if(kol.item(i).innerHTML.charAt(k)!=kol.item(j).innerHTML.charAt(k)){
                 jednaki=false;
                 break;
             }
             k++;
            }
            console.log(k);
            if(kol.item(i).innerHTML.charAt(k)<kol.item(j).innerHTML.charAt(k))
            {
              pom=kol1.item(i).innerHTML;
              kol1.item(i).innerHTML=kol1.item(j).innerHTML;
              kol1.item(j).innerHTML=pom;
 
              pom=kol2.item(i).innerHTML;
              kol2.item(i).innerHTML=kol2.item(j).innerHTML;
              kol2.item(j).innerHTML=pom;
 
              pom=kol3.item(i).innerHTML;
              kol3.item(i).innerHTML=kol3.item(j).innerHTML;
              kol3.item(j).innerHTML=pom;
 
              pom=kol4.item(i).innerHTML;
              kol4.item(i).innerHTML=kol4.item(j).innerHTML;
              kol4.item(j).innerHTML=pom;
 
              pom=kol5.item(i).innerHTML;
              kol5.item(i).innerHTML=kol5.item(j).innerHTML;
              kol5.item(j).innerHTML=pom;
            }
            k=0;
        }
 }
 br=0;
 for(i=0;i<brisi.length;i++){
     brisi.item(i).innerHTML=" ";
 }
 document.getElementById(strelica).innerHTML="&#9662;";
}
//for(i=0;i<duzinakol;i++)
  // console.log(kol.item(i).innerHTML);
}
function SortirajBr(kolona1,strelica){
    var i;
    var j;
    var pom="";
    var kol=document.getElementsByClassName(kolona1);
    var kol1=document.getElementsByClassName('kolona1');
    var kol2=document.getElementsByClassName('kolona2');
    var kol3=document.getElementsByClassName('kolona3');
    var kol4=document.getElementsByClassName('kolona4');
    var kol5=document.getElementsByClassName('kolona5');
    var brisi=document.getElementsByClassName('prazno');
    var duzinakol=kol.length;
    console.log(duzinakol);
    if(br==0){
    for(i=0;i<duzinakol-1;i++){
       for(j=i+1;j<duzinakol;j++){
           console.log(parseInt(kol.item(i).innerHTML));
           if(parseInt(kol.item(i).innerHTML)>parseInt(kol.item(j).innerHTML))
           {
             pom=kol1.item(i).innerHTML;
             kol1.item(i).innerHTML=kol1.item(j).innerHTML;
             kol1.item(j).innerHTML=pom;

             pom=kol2.item(i).innerHTML;
             kol2.item(i).innerHTML=kol2.item(j).innerHTML;
             kol2.item(j).innerHTML=pom;

             pom=kol3.item(i).innerHTML;
             kol3.item(i).innerHTML=kol3.item(j).innerHTML;
             kol3.item(j).innerHTML=pom;

             pom=kol4.item(i).innerHTML;
             kol4.item(i).innerHTML=kol4.item(j).innerHTML;
             kol4.item(j).innerHTML=pom;

             pom=kol5.item(i).innerHTML;
             kol5.item(i).innerHTML=kol5.item(j).innerHTML;
             kol5.item(j).innerHTML=pom;
           }
       }
}
 for(i=0;i<brisi.length;i++){
     brisi.item(i).innerHTML=" ";
 }
document.getElementById(strelica).innerHTML="&#9652;";
br=1;
}
else if(br==1){
    for(i=0;i<duzinakol-1;i++){
       for(j=i+1;j<duzinakol;j++){
           console.log(parseInt(kol.item(i).innerHTML))
           if(parseInt(kol.item(i).innerHTML)<parseInt(kol.item(j).innerHTML))
           {
             pom=kol1.item(i).innerHTML;
             kol1.item(i).innerHTML=kol1.item(j).innerHTML;
             kol1.item(j).innerHTML=pom;

             pom=kol2.item(i).innerHTML;
             kol2.item(i).innerHTML=kol2.item(j).innerHTML;
             kol2.item(j).innerHTML=pom;

             pom=kol3.item(i).innerHTML;
             kol3.item(i).innerHTML=kol3.item(j).innerHTML;
             kol3.item(j).innerHTML=pom;

             pom=kol4.item(i).innerHTML;
             kol4.item(i).innerHTML=kol4.item(j).innerHTML;
             kol4.item(j).innerHTML=pom;

             pom=kol5.item(i).innerHTML;
             kol5.item(i).innerHTML=kol5.item(j).innerHTML;
             kol5.item(j).innerHTML=pom;
           }
       }
}
br=0;
 for(i=0;i<brisi.length;i++){
     brisi.item(i).innerHTML=" ";
 }
document.getElementById(strelica).innerHTML="&#9662;";
}
}

var timer;

function PraviPolja(){
    var upis=document.getElementById('Red');
    upis.style.backgroundColor="";
    upis.style.border="";
    clearInterval(timer);
    var i;
    var j;
    document.getElementById("Kontejner2").innerHTML="";
    document.getElementById("Red").innerHTML="";
    var polja=document.getElementsByClassName('polje');
    for(i=0;i<16;i++){
        r=Math.floor((Math.random()*50)+1);
        document.getElementById("Kontejner2").innerHTML+="<div id='div"+i+"' class='polje' onclick='Ispitivanje(this.id)'>"+r+"</div>"; 
        for(j=0;j<i;j++){
            while(r==parseInt(polja.item(j).innerHTML))
            {
                r=Math.floor((Math.random()*40)+1); 
            }
            document.getElementById('div'+i).innerHTML=r;
            console.log(document.getElementById('div'+i).innerHTML);
        }   
    }
}
var br2=0;
function Ispitivanje(poljezp){
    var poljepr=document.getElementById(poljezp);
    var polja=document.getElementsByClassName("polje");
    var upis=document.getElementById('Red');
    var i;
    var j;
    var divovi=document.getElementsByTagName("div");
    var brojilo=0;
for(i=0;i<polja.length;i++){
if(parseInt(poljepr.innerHTML)<parseInt(polja.item(i).innerHTML)){
    brojilo++;
}
}
    if(brojilo==polja.length-1){
        br2++;
        if(br2==1){
            upis.style.border='2px solid rgb(47, 80, 230)';
            upis.style.backgroundColor='rgba(245, 217, 181, 0.836)';
            upis.innerHTML+="Resenje: <span class='rezultat'>"+poljepr.innerHTML+"</span>";
            poljepr.parentNode.removeChild(poljepr);    
        }
        else{
        upis.innerHTML+=", <span class='rezultat'>"+poljepr.innerHTML+"</span>";
        poljepr.parentNode.removeChild(poljepr);
        }
    }
    if(br2==16){
        alert("Igra je zavrsena, uspeli ste!");
        for(j=0;j<divovi.length;j++){
            divovi.item(j).onclick="return false";
        }
        clearInterval(timer);
        br2=0;
    }
}

function tajmer(){
    var sec=10;
    var j;
    var divovi=document.getElementsByClassName("polje");
    timer=setInterval(function(){
        document.getElementById("Timer").innerHTML=sec;
        if(sec==0){
         clearInterval(timer);
         if(br2!=16){
             alert("Niste uspeli da zavrsite na vreme, da biste pokusali ponovo, kliknite na dugme!");
             br2=0;
             for(j=0;j<divovi.length;j++){
                divovi.item(j).onclick="return false";
            }
         }
        }
        sec--;
    },1000);
}
function Poslovice(){
    var niz=['"Više je dana nego kobasica."','"Zlato se u vatri proba, a čovek u nesreći."','"Ne krij istinu od svog doktora i advokata."','"Lako je uz dobrog dobar biti."','"Život je crtanje bez gumice."'];
    var i=0;
    var upis=document.getElementById("poslovica");
    var interv=setInterval(function(){
        upis.innerHTML=niz[i];
        i++;
        if(i>=niz.length){
            i=0;
        }
    },5000);
}
function NovaTabela(){
    var i;
    var nt=document.getElementById("nt").value;
    console.log(nt);
    var tabela2=document.getElementById("t2");
    tabela2.style.border="2px rgba(79, 79, 216, 0.705) solid";
    var tabela2body=document.getElementById("tb2");
    tabela2body.innerHTML="";
    for(i=0;i<nt;i++){
    tabela2body.innerHTML+="<tr class='k' id='r"+i+"'><td>Red"+i+"</td></tr>";
    }
}