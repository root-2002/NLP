export const fetchData = async (text) => {
    const response = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    try {
        const data = await response.json();
        return {
            polarity: data.polarity,
            subjectivity: data.subjectivity,
            text: data.text,
        };
    } catch (error) {
        console.error('Error:', error);
    }
};

// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    });
}
