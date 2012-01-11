var isPresenterView = false;

$(document).bind('deck.init', function() {
	if (window.location.hash != "#no-presenterview") {
		isPresenterView = true;
		
		var href = window.location.href;
	    var hrefArr = href.split('/');
	    var hrefArrLength = hrefArr.length;
	    
	    localStorage.setItem('presentation_url', hrefArr.join('/'));
	    
	    if (hrefArr[hrefArrLength - 1] === '') {
	        delete hrefArr[hrefArrLength - 1];
	        delete hrefArr[hrefArrLength - 2];
	    }

	    var baseUrl = hrefArr.join('/');
	    
	    var presenter = window.open(baseUrl + 'extensions/presenterview/deck.presenterview.html', 'My Window', 'width=' + screen.width + ', height=' + screen.height);	    
	}  
});

$(document).bind('deck.change', function(event, from, to) {
	if (!isPresenterView) {
	    if (document.getElementById(location.hash.substring(1)).nodeName === 'SECTION') {
	        curElem        = document.getElementById(location.hash.substring(1));
	        curElemHtml    = curElem.innerHTML;
	        startOfComment = curElemHtml.indexOf('<!--');
	        endOfComment   = curElemHtml.indexOf('-->');
	        
	        if (startOfComment !== -1 && endOfComment !== -1) {
	            comment = curElemHtml.substring(startOfComment + 4, endOfComment);
	        } else {
	            comment = '';
	        }
	        
	        localStorage.setItem('notes', comment);
	        if (curElem.nextElementSibling.nodeName === 'SECTION') {
	            localStorage.setItem('next_slide_hash', curElem.nextElementSibling.id);
	        } else {
	            localStorage.setItem('next_slide_hash', '');
	        }
	    }
	}
});