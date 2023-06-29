import PocketBase from 'pocketbase';

const pb = new PocketBase('http://0.0.0.0:8090');

// example create data
const data = {
    "username": "test_username",
    "email": "test@example.com",
    "emailVisibility": true,
    "password": "12345678",
    "passwordConfirm": "12345678",
    "name": "test"
};

const record = await pb.collection('users').create(data);

// (optional) send an email verification request
// await pb.collection('users').requestVerification('test@example.com');
