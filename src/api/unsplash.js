import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 0d33a4a06013d9595a4786cc64312e84a0d1105c5047903ecc93e083f6ba3d22'
    }
});

