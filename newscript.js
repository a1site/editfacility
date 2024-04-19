

// Select the form element by its ID
const form = document.querySelector('form');

// Add a submit event listener
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(form);
  
    // Construct the message
    let message = '';
  
    // Loop through form inputs and add them to the message
    for (const [name, value] of formData.entries()) {
    
   message+="This data is for our designer and web developer\n";
   message+="Thanks for sending us your response,our developers will update your website soon.\n\n";
    // Append the input ID to the message
      message += `ID: ${name}\n`;
      // Append the input value to the message
      message += `${value}\n\n`; // Add an extra line break for 
   
    }
  
    // Generate mailto link for opening default email client
    const recipient = 'chiefsm1234@gmail.com'; // Your Gmail address
    const subject = 'Form Submission';
    const body = encodeURIComponent(message); // Encode message body for URL
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  
    // Check if the user is on a Windows device
    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') > -1;
    
    // If the user is on Windows, open Outlook with the mailto link
    if (isWindows) {
      window.location.href = mailtoLink;
    } else {
      // If the user is not on Windows, open mailto link directly
      // This will prompt the user to choose an email client (like Gmail on Android)
      window.open(mailtoLink);
    }
  });
  