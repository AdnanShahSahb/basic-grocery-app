import emailjs from '@emailjs/browser';

export const emailSending = (theCart) => {

    emailjs.send('service_qnco0zd', 'template_9wgsfhh', theCart, 'fBolk9UfGDZBaTmTo')
    .then((result) => {
        console.log(result.text);
        alert("Message sent")
    }, (error) => {
        console.log(error.text);
        alert(error.text)
    });


}