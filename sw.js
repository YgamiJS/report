self.addEventListener("push", function (event) {
  const options = {
    body: "Уведомление о ежедневном отправки отчета",
    vibrate: [50, 60, 100],
  };

  event.waitUntil(
    self.registration.showNotification(
      "Уведомление о ежедневном отправки отчета",
      options
    )
  );
});
