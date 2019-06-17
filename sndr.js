var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerConfig = {}, // Define the player config here
    queue = { // To queue a function and invoke when player is ready
        content: null,
        push: function(fn) {
            this.content = fn;
        },
        pop: function() {
            this.content.call();
            this.content = null;
        }
    },
    vunglePlayer;

var players = [];

window.onYouTubeIframeAPIReady = function() {
    players['vungle'] = new YT.Player('vungle', {
        videoId: '4RINyzASkuw',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['agent-patissier'] = new YT.Player('agent-patissier', {
        videoId: 'STw3-U0IRDo',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['honeymoon'] = new YT.Player('honeymoon', {
        videoId: 'l5qwKGea-HA',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['casino'] = new YT.Player('casino', {
        videoId: 'w5jfMYUSeUA',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['this-dungeon-is-alive'] = new YT.Player('this-dungeon-is-alive', {
        videoId: 'DdSEK-y_J1o',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['glioblastoma'] = new YT.Player('glioblastoma', {
        videoId: 'KTxF0qY_uUI',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    players['cake-shop'] = new YT.Player('cake-shop', {
        videoId: '0tT7zLOmer8',
        playerVars: playerConfig,
        events: {
            onReady: onPlayerReady
        }
    });
    //0tT7zLOmer8
};

// API event: when the player is ready, call the function in the queue
function onPlayerReady() {
    console.log("player is ready");
    if (queue.content) queue.pop();
}

// Helper function to check if the player is ready
function isPlayerReady(player) {
    return player && typeof player.playVideo === 'function';
}

// Instead of calling player.playVideo() directly, 
// using this function to play the video. 
// If the player is not ready, queue player.playVideo() and invoke it when the player is ready
function playVideo(player) {
    isPlayerReady(player) ? player.playVideo() : queue.push(function() {
        player.playVideo();
    });
}

function hideOverlay(element, overlay, videoPlayer) {
    element.style.opacity = 0;
    document.getElementById(overlay).style.opacity = 0;

    setTimeout(function() {
        element.style.display = "none";
        document.getElementById(overlay).style.display = "none";
    }, 300);

    playVideo(players[videoPlayer]);
}

$(document).ready(function() {
    // Add smooth scrolling to all links
    $('a[href^=#]').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            if (this.parentElement.nodeName == "LI") {
                var menuElem = this.parentElement.parentElement.getElementsByTagName("LI");

                for (var i = 0; i < menuElem.length; i++) {
                    menuElem[i].className = "";
                }
                this.parentElement.className = "active";
            }
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});