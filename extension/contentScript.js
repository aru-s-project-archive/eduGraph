var play = document.getElementById('play');
var data = localStorage.getItem('data')
var running = false

var startClick = setInterval(() => {
    if (play) {
        clearInterval(startClick)
        chrome.runtime.sendMessage({ type: 'status', data: 1 })
        var end = setInterval(() => {
            data = localStorage.getItem('data')
            if (data != '') {
                console.log(data)
                chrome.runtime.sendMessage({ type: 'data', data: data })
                document.getElementById("record").innerText = 'You may close this window now'
                clearInterval(end)
            }
        }, 1000)
    }
}, 1000)



