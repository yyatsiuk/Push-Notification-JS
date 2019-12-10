var push = require('web-push');

let vapidKeys = {
  publicKey:
    'BMHwd3G892ktziiq5Z44I7yX4f0lmGCj91u26qj2P8fSTMFGPiSZ5vroBzDgi2YaAAfznGPb1CrvVhUavcIMtxY',
  privateKey: '-bE-jdLpb6LjpUr5dNGYo6GCxMKXBe7Jffn9vh_g2_w'
};

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
"endpoint":"https://fcm.googleapis.com/fcm/send/fc0R4L7PBLI:APA91bHLnDd6e-dIKnQrDubNPm8e5O8OHQpMj6zRGGUw_m2QgQrlTwvK8Y4wrWY6Fq8Gyg_1wopejLhHSuUwK0htAA9x-oYchpKbOkM6CmkbzLR9kkc6n3-HoSedLxcLF5Thi_gjmeW1",
"expirationTime":null,
"keys":{
  "p256dh":"BGjmrzLPYx_iqQHVUMBDrOEtt7UVnKCMKQfvNFvDpHAgVFiKqfL4HviZDyk9QipDy7bfjUKaUl_dehWeQSHyPdU",
  "auth":"Dz-SWvQAxSmjh3lAGms3xg"
}
}

push.sendNotification(sub, 'test message');