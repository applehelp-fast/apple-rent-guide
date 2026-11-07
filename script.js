for (const figure of document.querySelectorAll('[data-screenshot]')) {
  const image = figure.querySelector('img');
  const show = () => figure.classList.add('has-image');
  if (image.complete && image.naturalWidth > 0) show();
  else image.addEventListener('load', show, { once: true });
}
