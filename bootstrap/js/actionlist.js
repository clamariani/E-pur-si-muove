$(document).ready(function () {
    $('#btnFiltra').click(function () {
        var cd1 = false;
        var cd2 = false;
        var cd3 = false;
        var cd4 = false;
        var cd5 = false;
        var cd6 = false;
        var cd7 = false;
        var cd8 = false;

        if ($('#ck1').is(":checked")) {
            cd1 = true;
        }

        if ($('#ck2').is(":checked")) {
            cd2 = true;
        }

        if ($('#ck3').is(":checked")) {
            cd3 = true;
        }

        if ($('#ck4').is(":checked")) {
            cd4 = true;
        }

        if ($('#ck5').is(":checked")) {
            cd5 = true;
        }

        if ($('#ck6').is(":checked")) {
            cd6 = true;
        }

        if ($('#ck7').is(":checked")) {
            cd7 = true;
        }

        if ($('#ck8').is(":checked")) {
            cd8 = true;
        }

        $("#cddata1").css("display", "none");
        $("#cddata2").css("display", "none");
        $("#cddata3").css("display", "none");
        $("#cddata4").css("display", "none");
        $("#cddata5").css("display", "none");
        $("#cddata6").css("display", "none");

        if (!cd1 && !cd2 && !cd3 && !cd4 && !cd5 && !cd6 && !cd7 && !cd8) {
            $("#cddata1").css("display", "block");
            $("#cddata2").css("display", "block");
            $("#cddata3").css("display", "block");
            $("#cddata4").css("display", "block");
            $("#cddata5").css("display", "block");
            $("#cddata6").css("display", "block");
        }

        if (cd1) {
            $("#cddata1").css("display", "block");
            $("#cddata2").css("display", "block");
        }

        if (cd2) {
            $("#cddata3").css("display", "block");
        }

        if (cd3) {
            $("#cddata4").css("display", "block");
        }

        if (cd4) {
            $("#cddata5").css("display", "block");
            $("#cddata6").css("display", "block");
        }

        if (cd5 || cd6 || cd7 || cd8) {
            $("#cddata6").css("display", "block");
        }
    });
});