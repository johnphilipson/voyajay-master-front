
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var currentStep = 1;
var transition = false;
var step1=null; step2=null;var step3=null;
last_fs = null;
next_fs = $('#fieldset1');

function animateFiledSet(){
    current_fs.show(); 
    transition = true;
    //hide the current fieldset with style
    next_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1-now) * 50)+"%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            next_fs.css({'left': left});
            current_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity });
        }, 
        duration: 800, 
        complete: function(){
            next_fs.hide();
            next_fs.css({'left': 0, 'transform': 'scale(1)'});
            current_fs.css({'left': 0, 'transform': 'scale(1)'});
            next_fs = current_fs;
            animating = false;
            transition = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
        
    });
    $("#progressbar li").removeClass("active");
    $("#step1").addClass("active")
    if(currentStep>1) $("#step2").addClass("active");
    if(currentStep>2) $("#step3").addClass("active");
}


$("#step1").click(function(){  
    if(step1 && currentStep!=1){
        if(animating) return false;
        animating = true;
        currentStep = 1;
        current_fs = $('#fieldset1');
        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).addClass("active");
        //show the previous fieldset
        animateFiledSet(current_fs)
    }
})

    
$("#step2").click(function(){  
    if((step1 || step2)  && currentStep!=2){  
        if(animating) return false;
        animating = true;    
        currentStep = 2;
        current_fs = $('#fieldset2');;
        $("#progressbar li").eq($("fieldset").index(current_fs)).addClass("active");
        animateFiledSet(current_fs)
    } 
})

$("#step3").click(function(){
    if(((step1 && step2) || step3) && currentStep!=3){
        if(animating) return false;
        animating = true;    
        currentStep = 3;
        current_fs = $('#fieldset3');
        $("#progressbar li").eq($("fieldset").index(current_fs)).addClass("active");
        animateFiledSet(current_fs)  
    }
 })


$(".next").click(function(){
    if(animating || transition)  return false;
    animating = true;
    current_fs = $('#fieldset'+(currentStep));
    animateFiledSet(current_fs);
    return;
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50)+"%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
            next_fs.css({'left': left, 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
            current_fs.hide();
            animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function(){
    if(transition) return false;
    animating = true;
    --currentStep;
    current_fs = $('#fieldset'+(currentStep));
    animateFiledSet(current_fs);
    return;
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();    
    
    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1-now) * 50)+"%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity });
        }, 
        duration: 800, 
        complete: function(){
            current_fs.hide();
            animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function(){
    return false;
})
