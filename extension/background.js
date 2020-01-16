

var relevant = ["https://www.youtube.com/"]


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.video){
    console.log(request.data.title)
      fetch('http://127.0.0.1:5000/data?title='+request.data.title,{method: "GET"}).then(data=>{
        console.log('done')
      })
  }
});chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.title){
    var title = changeInfo.title
    var goog = title.includes('Google Search')
    var newTab = title.includes('New Tab')
    var rel = relevant.includes(tab.url)
    if(!(goog || newTab || rel)){
      fetch('http://127.0.0.1:5000/data?title='+title,{method: "GET"}).then(data=>{
        return data.json()
      }).then(res=>{
        console.log(res)
        if(res.relevant=='False'){
          var opt = {
            type: "basic",
            title: "Distracted?",
            message: "It seems that the website you are on is unrelated to your coursework. Time to refocus?",
            iconUrl: "images/get_started48.png",
            buttons: [
              {title: 'Mark as Relevant'},
              {title: 'Go Back'}
            ]
          }
          chrome.notifications.create('distractedNotif', opt,async function() {
            await new Promise(r => setTimeout(r, 5000));
            chrome.notifications.clear('distractedNotif')
          })
        }
      })
    }
  }
}); 
chrome.notifications.onButtonClicked.addListener(function (notifId,buttonIndex){
  if(buttonIndex){
    chrome.tabs.goBack()
  }else{
    relevant.push(window.location.href)
  }
});

