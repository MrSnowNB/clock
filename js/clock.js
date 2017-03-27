$(function(){
    
    var buzzer = $("#buzzer")[0],
    count = parseInt($('#num').html());
    count2 = parseInt($('#breakNum').html());
    
        // alert(count);
        //buzzer.play();
        
    $('#minus5Clock').click(function(){
        if (count>0){
            count -=5;
            $('#num').html(count);
        }
        event.preventDefault();
    });
    
    $('#add5Clock').click(function(){
        count +=5;
        $('#num').html(count);
        event.preventDefault();
    });
    
    $('#minus5Break').click(function(){
        if (count2 >0){
            count2 -=5;
            $('#breakNum').html(count2);
        }
        event.preventDefault();
    });
    
    $('#add5Break').click(function(){
        count2 +=5;
        $('#breakNum').html(count2);
        event.preventDefault();
    });
    
    $('#reset').click(function() {
    location.reload();
    event.preventDefault();
});
    
});