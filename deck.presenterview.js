$(document).bind('deck.init', function() {
    // write css links to localstorage
    presenterView.writeAllCssPathsToLocalStorage();
    
    // open popup
    var presenter = window.open(presenterView.getLinkToPresenterView(), 'My Window', 'width=' + screen.width + ', height=' + screen.height);
});

$(document).bind('deck.change', function(event, from, to) {
    presenterView.setCurrentItem(document.getElementById(location.hash.substring(1)));
    
    if (presenterView.currentItemIsFromTypeSection()) {
        // prepare
        presenterView.storeNotes();
        presenterView.storeNextSlide();
        
        // write prepared content to localStorage
        presenterView.write();
    }
});


var presenterView = (function() {
    var currentItem = null;
    var currentItemsContent = null;
    var writeToLocalStorage = [];

    var createLinkToPresenterView = function() {
        var hrefArr        = window.location.href.split('/');
        var lastElemsIndex = hrefArr.length - 1;

        delete hrefArr[lastElemsIndex];
        delete hrefArr[lastElemsIndex - 1];

        var baseUrl = hrefArr.join('/');
        var urlToPresenterView = baseUrl + 'extensions/presenterview/deck.presenterview.html';
        
        return urlToPresenterView;
    }
    
    var addItemToLocalStorageArray = function(identifier, item) {
        writeToLocalStorage[identifier] = item;
    }
    
    var getNotes= function() {
        startOfComment = currentItemsContent.indexOf('<!--');
        endOfComment   = currentItemsContent.indexOf('-->');

        if (startOfComment !== -1 && endOfComment !== -1) {
            return currentItemsContent.substring(startOfComment + 4, endOfComment);
        }
        
        return '';
    }
    
    var getNextSlide = function() {
        if (currentItem.nextElementSibling.nodeName === 'SECTION') {
            return currentItem.nextElementSibling.innerHTML;
        } else {
            return '';
        }
    }

    return {
        writeAllCssPathsToLocalStorage: function() {
            if (document.styleSheets.length > 0) {
                var styleArr = [];
                
                for (var i = 0; i < document.styleSheets.length - 1; i++) {
                    styleArr.push(document.styleSheets[i].href);
                }
                
                localStorage.setItem('stylesheets', JSON.stringify(styleArr));
            }
        },

        getLinkToPresenterView: function() {
            return createLinkToPresenterView();
        },
        
        currentItemIsFromTypeSection: function() {
            return currentItem.nodeName === 'SECTION';
        },
        
        setCurrentItem: function(DomNode) {
            currentItem = DomNode;
            currentItemsContent = DomNode.innerHTML;
        },
        
        storeNotes: function() {
            addItemToLocalStorageArray('notes', getNotes());
        },
        
        storeNextSlide: function() {
            addItemToLocalStorageArray('next_slide', getNextSlide());
        },
        
        write: function() {
            if (writeToLocalStorage.notes !== 'undefined') {
                localStorage.setItem('notes', writeToLocalStorage['notes']);
            }
            
            if (writeToLocalStorage.next_slide !== 'undefined') {
                localStorage.setItem('next_slide', writeToLocalStorage['next_slide']);
            }
        }
    }
})();









