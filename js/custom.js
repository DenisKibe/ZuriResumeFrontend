$(document).ready(function() {
    //for the form
    $('#submit').click(function(e){
        e.preventDefault();
        var firstname=$('#firstname').val();
        var lastname=$('#lastname').val();
        var email=$('#email').val();
        var phone=$('#phone').val();
        var message=$('#message').val();

        //validate the fields
        if( firstname =='' || lastname == '' || email == '' || phone == '' || message == ''){
            alert('Please fill out all the fields.');
            return false;
        }
        else if(phone.length > 10 || phone.length < 10 ) {
            alert('Phone number must be 10 digits!');
            return false;
        }
        
        //use ajax to submit the data
        $.ajax({
            url:'http://deniskibe.pw:8080/api/ppdata',
            method:'Post',
            dataType:'json',
            data:JSON.stringify({'firstname':firstname,'lastname':lastname,'email':email,'phone':phone,'message':message}),
            success:function(RespBody){
                alert('Thank you for contacting us. We will get back to you soonest.');
                console.log(JSON.stringify(RespBody));
            },
            error:function(error){
                alert('We have encountered an error please try again later');
                console.log(JSON.stringify(error));
            }
        });    

    });
})
