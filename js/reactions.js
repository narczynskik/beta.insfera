(function($) { 

    $(document).ready(function() {
        $("#expandInsferaDefinition").click(function(){
            $("#expandInsferaDefinition").hide();
            $("#insferaDefinition").slideDown();
            $("#hideInsferaDefinition").show();
        });
        
        $("#hideInsferaDefinition").click(function(){
            $("#hideInsferaDefinition").hide();
            $("#insferaDefinition").slideUp();
            $("#expandInsferaDefinition").show();
        });


         $("#expandInsfera1Definition").click(function(){
            $("#expandInsfera1Definition").hide();
            $("#insfera1Definition").slideDown();
            $("#hideInsfera1Definition").show();
        });
        
        $("#hideInsfera1Definition").click(function(){
            $("#hideInsfera1Definition").hide();
            $("#insfera1Definition").slideUp();
            $("#expandInsfera1Definition").show();
        });
        
        $("#more-btn1").click(function(){
            $("#def-window1").show();
        });
        
        $("#more-btn2").click(function(){
            $("#def-window2").show();
        });
        
        $("#more-btn3").click(function(){
            $("#def-window3").show();
        });
        
        $("#more-btn4").click(function(){
            $("#def-window4").show();
        });
        
       
        
    });
    
})(jQuery);