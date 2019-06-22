$("#plan, #bill").change(function () {
    $('#total').text($('#plan').val() * $('#bill').val())
})