chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'manipulateElements') {
        const textareas = document.querySelectorAll(".wrapper form mat-form-field textarea");
        const map = localStorage.getItem("coding-ninja-form-data") ? JSON.parse(localStorage.getItem("coding-ninja-form-data")) : {};

        
        textareas.forEach(textarea => {
            let text = document.querySelector(`label[for="${textarea.id}"]`).innerText.toLowerCase();
            
            for(let key in map) {
                if(text.includes(key)) {
                    textarea.value = map[key];
                    break;
                }
            }
        });
        
        console.log("Script executed successfully!");
  
      sendResponse({ message: 'Elements manipulated successfully' });
    }
});
  

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message.action === "saveFormData") {
        const textareas = document.querySelectorAll(".wrapper form mat-form-field textarea");
        const map = localStorage.getItem("coding-ninja-form-data") ? JSON.parse(localStorage.getItem("coding-ninja-form-data")) : {};
        
        textareas.forEach(textarea => {
            if(textarea.value === "") return;

            let text = document.querySelector(`label[for="${textarea.id}"]`).innerText.toLowerCase();
            map[text] = textarea.value;
        });
        
        localStorage.setItem("coding-ninja-form-data", JSON.stringify(map));

        sendResponse({ message: 'Form data saved successfully' });
    }
});


