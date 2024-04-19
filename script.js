document.addEventListener('DOMContentLoaded', function () {



    /*  
    so now ,
      
        const headingInput = document.getElementById('heading-text');
        const paragraphInput = document.getElementById('paragraph-text');
      
    
    const headingInput == variable
    */
    //front-page varibales
    const htc1Input = document.getElementById('htc1');
    const htc2Input = document.getElementById('htc2');
    const htc3Input = document.getElementById('htc3');
    //about page variables
    const abc1Input = document.getElementById('abc1');
    const abc2Input = document.getElementById('abc2');
    const abc3Input = document.getElementById('abc3');
    //contact-details varialbes
    const cdc1Input = document.getElementById('cdc1');
    const cdc2Input = document.getElementById('cdc2');


    // Function to update content of the iframe dynamically
    function updateIframeContent() {
        const iframe = document.getElementById('iframe');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;


        /*here comes diff sections*/
        // section (first-page)

        //update ht
        /*   Template
        Note heading== the id of element in iframe src doc
        heading-text==the id of element on showcasing website.
  
        const heading = iframeDocument.getElementById('heading');
        if (heading && event.target.id === 'heading-text') {
          heading.textContent = headingInput.value;
        }
        */


        //section- front page
        // Update label-1
        const htc1 = iframeDocument.getElementById('ht1');
        if (htc1 && event.target.id === 'htc1') {
            htc1.textContent = htc1Input.value;
        }

        // Update label-2
        const htc2 = iframeDocument.getElementById('ht2');
        if (htc2 && event.target.id === 'htc2') {
            htc2.textContent = htc2Input.value;
        }

        // Update label-3
        const htc3 = iframeDocument.getElementById('ht3');
        if (htc3 && event.target.id === 'htc3') {
            htc3.textContent = htc3Input.value;
        }
        //section-about page
        // Update label-1
        const abc1 = iframeDocument.getElementById('additionalh2');
        if (abc1 && event.target.id === 'abc1') {
            abc1.textContent = abc1Input.value;
        }
        // Update label-2
        const abc2 = iframeDocument.getElementById('additionalh5');
        if (abc2 && event.target.id === 'abc2') {
            abc2.textContent = abc2Input.value;
        }
        // Update label-3
        const abc3 = iframeDocument.getElementById('ab3');
        if (abc3 && event.target.id === 'abc3') {
            abc3.textContent = abc3Input.value;
        }
        //contact-section
        // Update label-1
        const cdc1 = iframeDocument.getElementById('cd1');
        if (cdc1 && event.target.id === 'cdc1') {
            cdc1.textContent = cdc1Input.value;
        }
        // Update label-2
        const cdc2 = iframeDocument.getElementById('cd2');
        if (cdc2 && event.target.id === 'cdc2') {
            cdc2.textContent = cdc2Input.value;
        }
    }

    /*  Event listener for heading input change
    headingInput.addEventListener('input', function (event) {
        updateIframeContent();
    });
*/


    //section-front page
    //Event listener for label-1 input change
    htc1Input.addEventListener('input', function (event) {
    updateIframeContent();
});
//Event listener for label-2 input change
htc2Input.addEventListener('input', function (event) {
    updateIframeContent();
});

//Event listener for label-3 input change
htc3Input.addEventListener('input', function (event) {
    updateIframeContent();
});

//section- aboutpage
//Event listener for label-1 input change
abc1Input.addEventListener('input', function (event) {
    updateIframeContent();
});
//Event listener for label-2 input change
abc2Input.addEventListener('input', function (event) {
    updateIframeContent();
});
//Event listener for label-2 input change
abc3Input.addEventListener('input', function (event) {
    updateIframeContent();
});

//section contact-details
//Event listener for label-1 input change
cdc1Input.addEventListener('input', function (event) {
    updateIframeContent();
});
//Event listener for label-2 input change
cdc2Input.addEventListener('input', function (event) {
    updateIframeContent();
});




});






