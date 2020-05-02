$(document).ready(function() {



    var newParent = document.getElementById('arjs-video');
    var oldParent = document.getElementById('nft');
    
    while (oldParent.childNodes.length > 0) {
        newParent.appendChild(oldParent.childNodes[0]);
    }

})