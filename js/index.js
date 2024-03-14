document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#navitemlist li").forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Remove 'selected' class from all <li> elements
            document.querySelectorAll("#navitemlist li").forEach(function(item) {
                item.classList.remove('selected');
            });
            
            // Add 'selected' class to the clicked <li>
            event.currentTarget.classList.add('selected');
        });
    });
    
});