
var startTime = Date.now()
var distractedTime = 0
var relevant = ["https://www.youtube.com/"]
var distractedStart = 0
var status = 0



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(status)
  if (changeInfo.title) {
    if (status != 0) {
      var title = changeInfo.title
      var goog = title.includes('Google Search')
      var newTab = title.includes('New Tab')
      var rel = relevant.includes(tab.url)
      if (!(goog || newTab || rel)) {
        fetch('http://127.0.0.1:5000/data?title=' + title, { method: "GET" }).then(data => {
          return data.json()
        }).then(res => {
          console.log(res)
          if (res.relevant == 'False') {
            if (distractedStart == 0) {
              distractedStart = Date.now()
            }
            var opt = {
              type: "basic",
              title: "Distracted?",
              message: "It seems that the website you are on is unrelated to your coursework. Time to refocus?",
              iconUrl: "images/get_started48.png",
              buttons: [
                { title: 'Mark as Relevant' },
                { title: 'Go Back' }
              ]
            }
            chrome.notifications.create('distractedNotif', opt, async function () {
              await new Promise(r => setTimeout(r, 5000));
              chrome.notifications.clear('distractedNotif')
            })
          } else {
            if (distractedStart != 0) {
              console.log('relevant')
              distractedTime += Date.now() - distractedStart
              distractedStart = 0
            }
          }
        })
      }
    }
  }
});
chrome.notifications.onButtonClicked.addListener(function (notifId, buttonIndex) {
  if (buttonIndex) {
    chrome.tabs.goBack()
  } else {
    relevant.push(window.location.href)
    if (distractedStart) {
      distractedTime += Date.now() - distractedStart
      distractedStart = 0
    }
  }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type == "status") {
      status = request.data
    }
  });

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.type == "data") {
      status = 0
      raw = request.data
      console.log(raw)
      raw = JSON.parse(raw)
      console.log(raw)
      if (distractedStart != 0) {
        distractedTime += Date.now() - distractedStart
      }
      raw.data.distractedTime = distractedTime
      console.log(raw)
      raw = JSON.stringify(raw)

      // var settings = {
      //   "url": "https://us-central1-edugraph-78964.cloudfunctions.net/app/attention/uploadDetails",
      //   "method": "POST",
      //   "timeout": 0,
      //   "headers": {
      //     "Content-Type": "application/javascript"
      //   },
      //   "data": raw,
      // };

      // $.ajax(settings).done(function (response) {
      //   console.log(response);
      // });
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/javascript");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://us-central1-edugraph-78964.cloudfunctions.net/app/attention/uploadDetails", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      console.log(raw)
    }
  });