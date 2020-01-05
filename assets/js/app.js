
// Preview buttons on portfolio cards

$('.preview-button').click(function () {
    const ancestor = $(this).closest('.card');
    ancestor.addClass('spin');
});

$('.review-button').click(function () {
    const ancestor = $(this).closest('.card');
    ancestor.removeClass('spin');
});