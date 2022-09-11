chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'START') {
    changeImages();
    sendResponse({ result: 'OK' });
  }
});

function changeImages() {
  let imgs = document.querySelectorAll('img');
  chrome.storage.sync.get({
    imgUrl: 'https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-Meme-Transparent-Background.png'
  }, (items) => {
    imgUrl = items.imgUrl;
    imgs.forEach((img, index) => {
      img.src = imgUrl;
    });
  });
}
