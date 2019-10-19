function sendMail(contactForm) {
    emailjs.send("gmail", "zac_cv", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("success", response);
            },
            function (error) {
                console.log("failed", error);
            }
        );
    return false; // To block from loading a new page
};

function showModal(result){
    if(result == success){
        console.log("success modal can go here");
    }
    if (result == error){
        console.log("failed modal can go here, directing user to the email address or similar. ")
    }
}