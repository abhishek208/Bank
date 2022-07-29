let unameNode,emailNode,passNode;
$(function(){
   
   
    emailNode=$("#mail");
    passNode=$("#pass");
    unameNode=$("#uname");
    errorNode1=$("#error1");
    errorNode2=$("#error2");
    errorNode3=$("#error3");
   
    let array=[errorNode1,errorNode2,errorNode3];
     for(let node of array){
    // node.css('color',"red");
     node.css({color:"red"});
    }
     emailNode.blur(()=>validate4());
     unameNode.blur(()=>validate5());
     passNode.blur(()=>validate6());
     $("#regForm").submit(()=>validateForm());
   
   
});
function validateForm(){

    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
    
    return ( v4 && v5 && v6 ); 
}
function validate4(){
    let email=emailNode.val();
    errorNode2.html("");
    if(email===''){
        errorNode2.html("<small>Email is required</small>");
  
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.html("<small>Please enter valid email</small>");
        
        return false;
    }
    else{
        emailNode.css({border:"2px solid grren"});
        return true;
    }
}
function validate5(){
    let uname=unameNode.val();
    errorNode1.html("");
    if(uname===''){
        errorNode1.html("<small>username is required</small>");
        
        return false;
    }
    else if(uname.length<3 || uname.length>10){
        errorNode1.html("<small>username must be 3 to 10 characters long</small>");
       
        return false;
    }
    else{
        unameNode.css({border:"2px solid green"});
        return true;
    }
}
function validate6(){
    let pass=passNode.val();
    errorNode3.html("");
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode3.html("<small>Password is required</small>");
        
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode3.html("<small>Password should be 6 to 12 characters long Password should have atleast</small>");
        let ulNode=$('<ul>');
        errorNode3.append(ulNode);
        ulNode.css({fontSize:"10px"});
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let vallue of ar){
            let liNode=$('<li>');
            liNode.text(vallue);
            ulNode.append(liNode);
        }
        
        return false;
    }
    else{
        passNode.css({border:"2px solid green"});
        return true;
    }
}