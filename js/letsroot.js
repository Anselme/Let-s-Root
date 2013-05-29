
$(function() {   
    $('#form-button').on('click', function () {       

        var name = $('input[id=name]');
        var email = $('input[id=email]');
        var sujet = $('input[id=subject]');
        var message = $('textarea[id=message]');
         
        if (name.val()=='') {
            name.addClass('highlight');
            name.focus();
            return false;
        } else name.removeClass('highlight');
         
        if ((email.val()=='') || (!isValidEmailAddress(email.val()))) {
            email.addClass('highlight');
            email.focus();
            return false;
        } else email.removeClass('highlight');
         
        if (message.val()=='') {
            message.addClass('highlight');
            message.focus();
            return false;
        } else message.removeClass('highlight');

        var url=$("#form-contact").attr("action");

        $.ajax({
            url: url,
            type: "POST",
            data: $("#form-contact").serialize(),
            cache: false,
            statusCode: {
                400: function() {
                    alert("Désolé, une erreur est survenue. Impossible de joindre le serveur. Vous pouvez aussi me joindre ici : stephane@letsroot.net.");
                }
             },
            success: function (data, textStatus) {             
                if(data == "ok"){
                    $('#form-contact').fadeOut('slow');         
                    $('#confirm-email').fadeIn('slow');
                }else{
                    alert("Désolé, impossible d'envoyer votre message. Vous pouvez aussi me joindre ici : stephane@letsroot.net.");
                }
            }      
        });
        return false;
    });
});

function isValidEmailAddress(emailAddress) 
{
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

