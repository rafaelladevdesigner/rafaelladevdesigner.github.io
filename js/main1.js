var url = 'https://randomuser.me/api?results=10';
$(document).ready(function(){
$.ajax({ 
    type: 'GET', 
     url: url, 
    dataType: 'json',
    success: function (data) { 
        console.log( data );
        $.each(data.results, function(index, value) {
            console.log(index);
            console.log(value);
            var result = '<li>\
                            <a class="favoriteEmpty">\
                                <i class="far fa-star">\
                                </i>\
                            </a>\
                            <div class="photo">\
                                <img src=' + value.picture.medium + '\ > \
                            </div>\
                            <h1 class="name">\
                                    ' + value.name.first + ' ' + value.name.last + '\
                            </h1>\
                            <div class="info">\
                                <a class="more">\
                                    <i class="fas fa-plus"></i>\
                                </a>\
                                <div class="box-info" style="display: none;">\
                                    <div class="email">\
                                        <a href="mailto: ' + value.email + '\ ">\
                                        <i class="far fa-envelope">\
                                        </i>\
                                        ' + value.email + '\
                                        </a>\
                                    </div>\
                                    <div class="phone">\
                                        <a href="tel: ' + value.phone + '\ ">\
                                            <i class="fas fa-phone">\
                                            </i>\
                                            ' + value.phone + '\
                                        </a>\
                                    </div>\
                                    <div class="cel">\
                                        <a href="tel: ' + value.cell + '\ ">\
                                            <i class="fas fa-mobile-alt">\
                                            </i>\
                                            ' + value.cell + '\
                                        </a>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>';
            $('.box-contato .content .all').append(result);

        });  
    }
});

    $(document).on("click",".more", function(e) {
        $(".more").show();
        e.preventDefault();

        var $this = $(this).parent().find('.box-info');

        $(".box-info").not($this).slideUp("fast");
       
       
            $(this).next('.box-info').slideToggle('fast');
            if ($(this).find('i').hasClass('fa-plus')) {
                $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
                
            } else {
                $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
            }
            $(".more").not(this).find('i').removeClass('fa-minus').addClass('fa-plus');
            return false;
    });
     
 });