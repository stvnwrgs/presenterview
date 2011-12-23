$(document).bind('deck.init', function() {
    if (location.hash === "") {  
        var href = window.location.href;

        var hrefArr = href.split('/');
        var hrefArrLength = hrefArr.length;
        
        if (hrefArr[hrefArrLength - 1] === '') {
            delete hrefArr[hrefArrLength - 1];
            delete hrefArr[hrefArrLength - 2];
        }

        var baseUrl = hrefArr.join('/');
        var presenter = window.open(baseUrl + 'splitscreennote/deck.splitscreennote.html', 'My Window', 'width=' + screen.width + ', height=' + screen.height);
    }
});

$(document).bind('deck.change', function(event, from, to) {
    console.log('hash: ' + location.hash);
    curElem = document.getElementById(location.hash.substring(1)).innerHTML;
    startOfComment = curElem.indexOf('<!--');
    endOfComment   = curElem.indexOf('-->');
    comment = curElem.substring(startOfComment + 4,endOfComment);
    localStorage.setItem('slide_text', comment);
});