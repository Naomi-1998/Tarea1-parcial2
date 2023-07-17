class Numeros{
    vuelto() {
        let cantidad= document.getElementById("cantidad").value
        let  precio= document.getElementById("precio").value
        let  pago= document.getElementById("Pago").value
        let iva=document.getElementById("chek").checked
        let resp = document.getElementById("resp")
        let vuelto=0
        let total=0
        let totaliva=0
        let tt=0

        cantidad=parseInt(cantidad)
        precio=parseInt(precio)
        pago=parseInt(pago)
        total=cantidad*precio
        vuelto=pago-total
       // resp.textContent = `el valor del vuelto es ${vuelto}`  
        if(iva){
        iva==true
        totaliva= total*0.12
        tt=vuelto-totaliva
    resp.textContent = `el valor del vuelto es ${tt}`  
        }else{
        iva==false
        resp.textContent = `el valor del vuelto es ${vuelto}`  
        }  
    }
    multiplo(){
        let num = document.getElementById("num").value
        let mul = document.getElementById("multi").value
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        num = parseInt(num)
        mul = parseInt(mul)
        if (num%mul == 0) {
            resp.textContent = `${mul} Es multiplo de ${num}`
        }else{
            resp.textContent = `${mul} No es multiplo de ${num}`
        }
        
    }
    divisores(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let divisores=""
        let sd=0
        let cd=0
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                console.log(c)
                divisores= divisores +" "+c.toString()
                sd=sd+c
                cd=cd+1
            }
            c=c+1
        }
        resp.textContent=divisores
    }
    sumaDivisores() {
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let sd=0
    
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                sd=sd+c
            }
            c=c+1
        }
        resp.textContent=sd
        
    }
    cantidadDivisores(){
        let c=1
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let cd=0
        num = parseInt(num)
        while(c < num){
            if(num % c == 0){
                cd=cd+1
            }
            c=c+1
        }
        resp.textContent=cd
    }
    perfecto(){
        console.log("Perfecto")
        let num = parseInt(document.getElementById("num").value)
        let res =document.getElementById("resp")
        let r=0
        let c=1;
        let ac=0
        while(c < num){
            r = num %c
            if (r == 0) {
                console.log(c)
                ac=ac+c
            }
            
            c=c+1
        }
        console.log("suma de divisores",ac)
        if (ac == num) {
            console.log(num, "Es perfecto")
            res.textContent = `${num} Es perfecto`
        } else {
            console.log(num, "No es perfecto")
            res.textContent = `${num} No es perfecto`
        }
    }
    amigos(){
        let div1 = 0;
        let div2 = 0;
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resp = document.getElementById("resp");
        for (let i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            div1 += i;
        }
        }
        for (let j = 1; j < num2; j++) {
        if (num2 % j === 0) {
            div2 += j;
        }
        }
        if (div1 === num2 && div2 === num1) {
        resp.textContent = "Son números amigos";
        } else {
        resp.textContent = "No son números amigos";
        }
    }
    primo(){
        let num = document.getElementById("num").value
        num = parseFloat(num)
        let suma = 0
        let resp = []
        for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            resp.push(i);
        }
        }
        for (let i = 0; i < resp.length; i++) {
        suma += resp[i];
        }
        
        if (suma - 1 == num){
        document.getElementById("resp").textContent = `El número ${num} es primo`
        } else {
        document.getElementById("resp").textContent = `El número ${num} no es primo`
        }
    }
    primosGemelos(){
        let num=document.getElementById("num").value
        let num2=document.getElementById("num2").value
        let resp=document.getElementById("resp")
        let p=num
        let q=num2
        let cant=0
        let cant2=0
        let j=1
        let h=1
        while(j<=p){
            if(p%j==0){
                cant=cant+1
            }
            j=j+1
        }
        while(h<=q){
            if(q%h==0){
                cant2=cant2+1
            }
            h=h+1
        }
        if(cant==2 && cant2==2){
            if((p>q ||q>p)&&(p-q==2||q-p==2)){
                resp.textContent=`Los numero ${p} y ${q} son primos gemelos`
            }else{
                resp.textContent=`Los numero ${p} y ${q} no son primos gemelos`
            }
        }else{
            resp.textContent=`Los numeros ${p} y ${q} no son primos`
        }
    }
    invertir(){
        let num = parseInt(document.getElementById("num").value)
        let resp = document.getElementById("resp")
        let digito=0
        let ni=0
        while(num!==0){
            digito=num%10
            ni=(ni*10)+digito
            num=Math.trunc(num/10)
        }
        resp.textContent= ni
    }
    cantidadDigitos(){
        let num=document.getElementById("num").value
        let resp=document.getElementById("resp")
        let con=0
        while(num>0){
            num=parseInt(num/10)
            con=con+1

        }
        resp.textContent=`La cantidad de digitios son ${con}`
    
    }
    factorial(){
        let num=document.getElementById("num").value
        num=parseFloat(num)
        let resp=document.getElementById("resp")
        let l=1
        let com=0
        let factorial=1
        if(num>com){
            while(l<=num){
                factorial=factorial*l
                l=l+1
            }
            resp.textContent=`La  factorial de ${num} es ${factorial}`
        }else{
            resp.textContent=`Solo numero positivos`
        }
        
    }
    exponente(){
        let num = document.getElementById("num").value
        num = parseInt (num)
        let exp = document.getElementById("exp").value
        exp = parseInt (exp)
        let resp = document.getElementById("resp")
        //let exponente = " "
        let r = 1
        let c = 1
        for (let i = 1; i <= exp; i++) {
            c *= num;
        //exponente = exponente + c.toString () + "*"  
        }
        resp.textContent = c //exponente
    }
    multiplicar(){
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let tem = ''
        for (let i = 1; i <= 12; i++) {
         tem +=(num + "x" + i + "=" + num * i+"   ") 
        }
        resp.textContent = (tem)
    }
    fibonaci(){
        let a=0,b=1,c=0,cont=2
        let num =parseInt(document.getElementById("num").value)
        let res = document.getElementById("resp")
        res.innerHTML=""
        let serie=a.toString()+"<br>"+b.toString()
        console.log(a,b)
        while(cont<num){
            c=a+b
            serie=serie+"<br>"+c.toString()
            a=b
            b=c
            cont=cont+1
        }
        res.innerHTML=serie
    }
}
const numero = new Numeros();
numero.vuelto()
numero.multiplo()
numero.divisores()
numero.cantidadDivisores()
numero.perfecto()
numero.amigos()
numero.primo()
numero.primosGemelos()
numero.invertir()
numero.cantidadDigitos()
numero.factorial()
numero.exponente()
numero.multiplicar()
numero.fibonaci()