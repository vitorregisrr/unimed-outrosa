(function () {
    'use strict';

    $("#inputSearch").autocomplete({
            minLength: 0,
            source: depoimentosList,
            multiple: true,
            multipleSeparator: " ",
            appendTo: ".inputSearch",
            open: function () {
                $('ul.ui-autocomplete').addClass('opened')
            },
            close: function () {
                $('ul.ui-autocomplete')
                    .removeClass('opened')
                    .css('display', 'block');
            },
        })
        .autocomplete("instance")
        ._renderItem = function (ul, item) {
            var newText = String(item.label).replace(
                new RegExp(this.term, "gi"),
                "<span class='highlighted'>$&</span>");

            return $("<li>")
                .append(`
                <a class="inputSearch__item" href="${item.link}">
                    <span class="title">${newText}</span>
                    <span class="desc">${item.desc}</span>
                </a>
            `)
                .appendTo(ul);
        };

    $('#inputSearch').focus(function () {
        $(this).autocomplete('search', $(this).val())
    });
})();