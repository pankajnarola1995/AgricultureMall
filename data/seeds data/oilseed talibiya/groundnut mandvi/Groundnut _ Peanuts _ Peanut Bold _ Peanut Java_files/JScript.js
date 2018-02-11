function CheckNumericOnly(e) {

    var key;
    key = e.which ? e.which : e.keyCode;
    if ((key >= 48 && key <= 57) || key == 40 || key == 46 || key == 41 || key == 44 || key == 8 || key == 32 || key == 45 || key == 9 || key == 37 || key == 38 || key == 39 || key == 40 || key == 36 || key == 35 || key == 13)
    { return true; }
    else {
        alert("Please Enter Numeric.");
        return false;
    }
}

function OpenWindow(obj) {
            window.open('productinquiry.aspx?Product='+obj, '_blank', 'top=50, left=300, height=650, width=630, status=no, menubar=no, resizable=no, scrollbars=no');
        }