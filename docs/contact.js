const form = document.querySelector(".booking-form");
const status = form.querySelector(".booking-status");
const submit = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submit.disabled = true;
  status.textContent = "Sending your enquiry…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
      headers: { Accept: "application/json" },
    });
    const result = await response.json();
    if (!response.ok || result.ok !== true) throw new Error("Formspree rejected submission");
    status.textContent = "Thanks. Your enquiry was sent.";
    form.reset();
  } catch {
    status.textContent = "Couldn’t send your enquiry. Try again or message BACKSHOT on Instagram.";
  } finally {
    submit.disabled = false;
  }
});
