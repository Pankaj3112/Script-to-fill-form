document.addEventListener('DOMContentLoaded', function () {
  const manipulateButton = document.getElementById('manipulateButton');
  const addDataButton = document.getElementById('addButton');

  manipulateButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'manipulateElements' },
        function (response) {
          console.log('Content script response:', response);
        }
      );
    });
  });


  addDataButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'saveFormData' },
        function (response) {
          console.log('Content script response:', response);
        }
      );
    });
  });

});
