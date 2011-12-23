$(document).bind('deck.init', function() {
    var href = window.location.href;
    var hrefArr = href.split('/');
    var hrefArrLength = hrefArr.length;
    
    if (hrefArr[hrefArrLength - 1] === '') {
        delete hrefArr[hrefArrLength - 1];
        delete hrefArr[hrefArrLength - 2];
    }

    var baseUrl = hrefArr.join('/');
    var presenter = window.open(baseUrl + 'extensions/presenterview/deck.presenterview.html', 'My Window', 'width=' + screen.width + ', height=' + screen.height);
    
    // write css links to localstorage
    if (document.styleSheets) {
        var styleArr = [];
        for (var i = 0; i < document.styleSheets.length; i++) {
            styleArr.push(document.styleSheets[i].href);
        }
        localStorage.setItem('stylesheets', JSON.stringify(styleArr));
    }
});

$(document).bind('deck.change', function(event, from, to) {
    curElem        = document.getElementById(location.hash.substring(1));
    curElemHtml    = curElem.innerHTML;
    startOfComment = curElemHtml.indexOf('<!--');
    endOfComment   = curElemHtml.indexOf('-->');
    
    if (startOfComment !== -1 && endOfComment !== -1) {
        comment = curElemHtml.substring(startOfComment + 4, endOfComment);
    } else {
        comment = '';
    }
    
    localStorage.setItem('slide_text', comment);
});