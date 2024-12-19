function SumNum(){
    let a= document.getElementById("firstbox").value
    let b= document.getElementById("secondbox").value
    a=parseInt(a)
    b=parseInt(b)
    res=a+b
    let h2=document.getElementById("result")
    h2.innerHTML="Result : "+ res

}
function SubNum(){
    let a= document.getElementById("firstbox").value
    let b= document.getElementById("secondbox").value
    res=a-b
    let h2=document.getElementById("result")
    h2.innerHTML="Result : "+ res

}
function MulNum(){
    let a= document.getElementById("firstbox").value
    let b= document.getElementById("secondbox").value
    res=a*b
    let h2=document.getElementById("result")
    h2.innerHTML="Result : "+ res
}
function DivNum(){
    let a= document.getElementById("firstbox").value
    let b= document.getElementById("secondbox").value
    res=a/b
    let h2=document.getElementById("result")
    h2.innerHTML="Result : "+ res
}
function PowNum(){
    let a= document.getElementById("firstbox").value
    let b= document.getElementById("secondbox").value
    res=a**b
    let h2=document.getElementById("result")
    h2.innerHTML="Result : "+ res
}