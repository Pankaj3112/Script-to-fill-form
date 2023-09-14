//Change this map according to your needs
const map = {
    "current location": "Patiala, Punjab",
    "mention your academic criteria": "7.29 CGPA",
    "12th %": "64%",
    "10th %": "84.67%",
    "qualification stream": "Finance",
    "mention your qualification": "Bachelor of Business Administration",
    "graduation year": "2023",
    "are you ready to join immediately": "Yes",
    "relevant exp. in months": "0",
    "current ctc": "Not Applicable",
};




//----------------------------------Don't change anything below this line -------------------------------------------------------
const textareas = document.querySelectorAll(".wrapper form mat-form-field textarea");
textareas.forEach(textarea => {
    let text = document.querySelector(`label[for="${textarea.id}"]`).innerText.toLowerCase();
    
    for(let key in map) {
        if(text.includes(key)) {
            textarea.value = map[key];
            break;
        }
    }
});
