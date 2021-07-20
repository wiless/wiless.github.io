console.log('service.js: Hello from service worker')

self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    console.log('service.js: Attempting on activate');


    try {
        const options = { userVisibleOnly: true, applicationServerKey: "BEveyLxjdgvClfx_ddbGnFkqdhUcdf8eEX_3KiDST1o6T5_12MhUaDV-rVMNOYorGhph5vCzxNY0G-yvGfrUcPk" }
        const subscription = await self.registration.pushManager.subscribe(options)
        console.log(JSON.stringify(subscription))
    } catch (err) {
        console.log('Error', err)
    }

})


self.addEventListener('push', function (event) {
    if (event.data) {
        console.log('Push event!! ', event.data.text())
        showLocalNotification("Message", event.data.text(), self.registration);
    } else {
        console.log('Push event but no data')
    }
})




const showLocalNotification = (title, body, swRegistration) => {
    // actions: [{ action: "button", title: "<" }, { action: "right", title: ">" }],

    const options = {
        body: body,
        // here you can add more properties like icon, image, vibrate, etc.
    };
    swRegistration.showNotification(title, options);

}