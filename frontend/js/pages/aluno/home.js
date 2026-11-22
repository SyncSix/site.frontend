const card = document.querySelector('.progress-card');

function updateProgress(done, total) {
  const percent = Math.round((done / total) * 100);
  const remaining = total - done;

  card.querySelectorAll('[data-done-text]').forEach(el => el.textContent = done);
  card.querySelectorAll('[data-total-text]').forEach(el => el.textContent = total);
  card.querySelector('[data-percent]').textContent = percent;
  card.querySelector('[data-remaining]').textContent = remaining;

  card.querySelector('.progress-card__fill').style.width = `${percent}%`;
  card.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', percent);
}

updateProgress(
  Number(card.dataset.done),
  Number(card.dataset.total)
);