$(document).ready(function() {
    $('#search-input').on('input', function() {
        var query = $(this).val().toLowerCase();
        $('.product-item').each(function() {
            var productName = $(this).find('.card-title').text().toLowerCase();
            if (productName.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});