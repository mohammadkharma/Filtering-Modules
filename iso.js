$grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: function (element) {
            return $(element).text();
        }
        // symbol: '.symbol',
        // number: '.number parseInt',
        // category: '[data-category]',
        // weight: function (itemElem) {
        //     var weight = $(itemElem).find('.weight').text();
        //     return parseFloat(weight.replace(/[\(\)]/g, ''));
        // }
    }
});



$('.filter-item button').on('click', function () {
    let value = $(this).attr('data-name');
    $grid.isotope({
        filter: value
    });
    // $('.filter button').removeClass('active');
    // $(this).addClass('active');
});


// bind sort button click
$('.sort div').on('click', function () {
    var value = $(this).attr('data-name');
    console.log(value);
    $grid.isotope({
        sortBy: value
    });
    // $('.sort button').removeClass('active');
    // $(this).addClass('active');
});

// change is-checked class on buttons
$('.sort button').each(function (i, sort) {
    var $sort = $(sort);
    $sort.on('click', 'button', function () {
        $sort.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

