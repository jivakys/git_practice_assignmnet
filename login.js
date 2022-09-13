let str = "madam" ;
let count = 0;
    for(let i = 0;i<str.length;i++){
       if(str[i] != str[(str.length-1)-i]){
                count++;
                
            }
        
    }
if(count>0){
    console.log("No");
}
else{
    console.log("Yes");
}