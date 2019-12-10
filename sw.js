console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "News",
    icon: "https://24tv.ua/resources/photos/news/201912/1245458_10349987.jpg?201912164102"
  });
});