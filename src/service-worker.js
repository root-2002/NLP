// Mock the service worker registration
global.navigator.serviceWorker = {
    register: jest.fn().mockResolvedValue({ scope: '/' }),
};

import { fetchData } from '../src/js/apiHandler';

// Your test code
