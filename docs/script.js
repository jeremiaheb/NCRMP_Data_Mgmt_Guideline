document.addEventListener("DOMContentLoaded", function () {
    // Hide all tab contents initially
    document.querySelectorAll('.tab-pane').forEach(function (tab) {
        tab.classList.remove('active');
        tab.style.display = 'none';
    });

    // Ensure clicking a tab opens it
    document.querySelectorAll('ul.nav-tabs > li > a').forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all tabs first
            document.querySelectorAll('.tab-pane').forEach(function (tabContent) {
                tabContent.classList.remove('active');
                tabContent.style.display = 'none';
            });

            // Show only the selected tab
            let target = this.getAttribute('href');
            let targetTab = document.querySelector(target);
            if (targetTab) {
                targetTab.classList.add('active');
                targetTab.style.display = 'block';
            }
        });
    });
});
