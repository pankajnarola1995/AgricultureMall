function getmonth(monthno)
{
var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Octr", "Nov", "Dec" ];
    return monthNames[monthno];
}

function enableSelectBoxes() {
    var a = new Date(); 
      
    var ampm = 'AM';
    var h = a.getHours();
     var m = a.getMinutes()+20;
    if (m >= 60) {
        m = m - 60;
        h = h + 1;        
    }
    
    if (h >= 12) 
    {
        h = h - 12;
        ampm = 'PM';
    }
    if (h == 0) {
        h = 12;
    }
    if (m < 10) {
        m = '0' + m;
    }
      
    var s = a.getSeconds();
    $('div.selectBox').each(function() {
        if ($(this).children('div.selectOptions').attr('id') == 'hrsdropdown') {
            $(this).children('span.selected').html(h);
        }
        else if ($(this).children('div.selectOptions').attr('id') == 'mindropdown') {
            $(this).children('span.selected').html(m);
        }
        else if ($(this).children('div.selectOptions').attr('id') == 'meridiandropdown') {
        $(this).children('span.selected').html(ampm);
    }
    else if ($(this).children('div.selectOptions').attr('id') == 'yeardropdown') {
    $(this).children('span.selected').html(a.getFullYear());
}
else if ($(this).children('div.selectOptions').attr('id') == 'monthdropdown') {
$(this).children('span.selected').html(getmonth(a.getMonth()));
}
else if ($(this).children('div.selectOptions').attr('id') == 'daydropdown') {
$(this).children('span.selected').html(a.getDate());
}
        else {
            $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
        }
        $(this).attr('value', $(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));


        $(this).children('span.selected,span.selectArrow').click(function() {
            if ($(this).parent().children('div.selectOptions').css('display') == 'none') {
                $(this).parent().children('div.selectOptions').css('display', 'block');
            }
            else {
                $(this).parent().children('div.selectOptions').css('display', 'none');
            }
        });

        $(this).find('span.selectOption').click(function() {
            $(this).parent().css('display', 'none');
            $(this).closest('div.selectBox').attr('value', $(this).attr('value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });
    });
    
    $('#hrsdropdown')
}