jQuery(function ($) {
    $(document).ready(function () {
        const $serviceBoxes = $('.left-content .question-ans-box');
        const $sideBarContainer = $('.right-content');

        const $ul = $('<ul>', { class: 'side-bar' });

        $serviceBoxes.each(function (index) {
            const id = `spy-scroll-item-${index + 1}`;
            $(this).attr('id', id);

            const title = $(this).find('h2').text();

            const $li = $('<li>');
            const $a = $('<a>', {
                href: `#${id}`,
                title: title,
                text: title
            });

            if (index === 0) {
                $a.addClass('active');
            }

            $li.append($a);
            $ul.append($li);
        });

        $sideBarContainer.append($ul);

        // Add scroll event listener to highlight active link
        const $sections = $('.question-ans-box');
        const $navLinks = $('.side-bar a');

        $(window).on('scroll', function () {
            let current = '';

            $sections.each(function () {
                const sectionTop = $(this).offset().top;
                if ($(window).scrollTop() >= sectionTop - 60) {
                    current = $(this).attr('id');
                }
            });

            $navLinks.removeClass('active');
            $navLinks.each(function () {
                if ($(this).attr('href') === `#${current}`) {
                    $(this).addClass('active');
                    const sidebar = $('.side-bar');
                    const activeLink = $(this);
                    const sidebarTop = sidebar.scrollTop();
                    const linkTop = activeLink.position().top + sidebarTop;
                    const linkBottom = linkTop + activeLink.outerHeight();

                    if (linkBottom > sidebarTop + sidebar.height()) {
                        sidebar.scrollTop(linkBottom - sidebar.height());
                    } else if (linkTop < sidebarTop) {
                        sidebar.scrollTop(linkTop);
                    }
                }
            });
        });
    });
});