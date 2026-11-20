const poster = document.querySelector(".video-poster");

poster.addEventListener("click", (event) => {
  if (window.location.protocol === "file:" || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  event.preventDefault();

  const source = new URL(`https://www.youtube.com/embed/${poster.dataset.videoId}`);
  source.searchParams.set("autoplay", "1");
  source.searchParams.set("playsinline", "1");
  source.searchParams.set("origin", window.location.origin);

  const player = document.createElement("iframe");
  player.title = "BACKSHOT — Lines, Lines, Lines (Live at Loft Space)";
  player.referrerPolicy = "strict-origin-when-cross-origin";
  player.allow = "autoplay; encrypted-media; picture-in-picture; web-share";
  player.allowFullscreen = true;
  player.src = source.href;
  poster.replaceWith(player);
  player.focus();
});
