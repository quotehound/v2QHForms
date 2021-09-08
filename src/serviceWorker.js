

//[::1] is the IPv6 localhost address; // 127.0.0.0/8 are considered localhost for IPv4
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        //The URL constructor is available in all browsers that support SW
        const publicURL = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicURL.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}service-worker.js`;
            if (isLocalhost) {
                // This is running on localhost, we check if service worker still exists or njot
                checkValidServiceWorker(swUrl, config);
                navigator.serviceWorker.ready.then(() => {
                    console.log('this is cached by service worker');
                });
            }
            else {
                // Not local host, just register the service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {

                        if (navigator.serviceWorker.controller) {
                            console.log('close other tabs for new content to load');
                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        }
                        else {
                            console.log('ready for offline use');
                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch(error => {
            console.log('error during service worker regist. ', error);
        });
}

function checkValidServiceWorker(swUrl, config) {
    // Check if sw can be found, if not reload
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then(response => {
            // Make sure sw exists, and get js file
            const contentType = response.headers.get('content-type');
            if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') - 1)) {
                // no sw found, maybe diff file? reload app 
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            }
            else {
                //SW  found, continue with OG load
                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log('running in offline mode');
        });
}


export function unregister() {
    if('serviceWorker' in navigator){
        navigator.serviceWorker.ready
        .then(registration => {
            registration.unregister();
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
}