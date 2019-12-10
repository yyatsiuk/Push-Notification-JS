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

};

push.sendNotification(sub, 'test message');