/**
* set interval to read localStorage
*/
window.setInterval("update()", 200);

var stylesheets = JSON.parse(localStorage.getItem('stylesheets'));

for (var i = 0; i <= stylesheets.length - 1; i++) {
    var linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylsheet');
    linkElement.setAttribute('href', stylesheets[i]);

    document.head.appendChild(linkElement);
}

/**
 * updates the notes and next slide section
 */
function update() {
    var note            = document.getElementById('note');
    note.innerHTML      = localStorage.getItem('notes');
    
    var nextSlide       = document.getElementById('next-slide');
    nextSlide.innerHTML = localStorage.getItem('next_slide');
}