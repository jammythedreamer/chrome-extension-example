function saveOptions() {
  const imgUrl = document.getElementById('imgUrl').value;
  chrome.storage.sync.set({
    imgUrl: imgUrl
  }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    imgUrl: 'https://www.pngmart.com/files/11/Sad-Pepe-The-Frog-Meme-Transparent-Background.png'
  }, (items) => {
    document.getElementById('imgUrl').value = items.imgUrl;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
