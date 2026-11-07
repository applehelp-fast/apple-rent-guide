// A link shared from an open section should still start at the beginning.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.addEventListener('pageshow', () => window.scrollTo(0, 0));

// Navigate within the guide without adding a fragment to its shareable URL.
for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  });
}

for (const figure of document.querySelectorAll('[data-screenshot]')) {
  const image = figure.querySelector('img');
  const show = () => figure.classList.add('has-image');
  if (image.complete && image.naturalWidth > 0) show();
  else image.addEventListener('load', show, { once: true });
}
