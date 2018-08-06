function calculprice_elem(i) 
{

let produit1= document.getElementById("prd"+i).value;
let prix1= document.getElementById("prix"+i).textContent.replace('$','');
prix1=prix1.trim();

n=produit1*prix1;
console.log(n);
alert("la somme de ce produit est  " +n);
}
/*function somprix()
{
    let s=0;
for(let i=0;i<5;i++)
s=s+calculprice_elem(i);
alert('la somme de votre commande est',+s)
}*/

function somprix() {
    let somme=0;
let arr=document.getElementsByClassName("quantity");
let arr1= document.getElementsByTagName("strong");
//console.log(arr);
for(let i=0; i<arr.length; i++){
     //console.log(arr[i].value);
let q=arr[i].value; 

let prix = Number(arr1[i].textContent.replace('$',''));
if(q)

somme += q*prix;
}

alert('la somme de votre commande est '+somme)

}
