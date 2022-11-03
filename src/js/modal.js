import { getMovieDetails, getVideoTrailer } from '../filmsApi';
import { Notify } from 'notiflix';

export function getRefs() {
  const refs = {
    modalEl: document.querySelector('[data-modal]'),
    bodyEl: document.querySelector('body'),
    idTargetCard: '',
    modalCloseBtn: '',
    movieListEL: '',
    watchedBtn: '',
    queueBtn: '',
    videoPlayerEl: '',
    modalBoxEl: '',
  };
  return refs;
}

const refs = getRefs();

export function getModal(selector) {
  refs.movieListEL = document.querySelector(selector);
  refs.movieListEL.addEventListener('click', onModalOpen);
}

async function onModalOpen(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.idTargetCard = e.target.closest('.movie-card').attributes.id.value;
  await createModal();
  refs.modalEl.classList.remove('movie-backdrop_is-hidden');
  getAccessToBtn();
  refs.modalBoxEl = refs.modalEl.querySelector('.movie-modal');
  refs.modalCloseBtn.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onKeyDown);
  refs.modalEl.addEventListener('click', onClickOutside);
  refs.bodyEl.classList.add('overflow-hidden');
  refs.modalEl.addEventListener('click', onPosterClick);
}

async function createModal() {
  await getMovieDetails(refs.idTargetCard).then(response => {
    return createModalMarkup(response);
  });
}

function getAccessToBtn() {
  refs.modalCloseBtn = refs.modalEl.querySelector('[data-modal-close]');
  refs.watchedBtn = refs.modalEl.querySelector('[data-control-watched]');
  refs.queueBtn = refs.modalEl.querySelector('[data-control-turn]');
}

function onModalClose() {
  refs.idTargetCard = '';
  refs.modalEl.classList.add('movie-backdrop_is-hidden');
  resetModal();
  document.removeEventListener('keydown', onKeyDown);
  refs.modalEl.removeEventListener('click', onClickOutside);
  refs.bodyEl.classList.remove('overflow-hidden');
}

function onKeyDown(e) {
  e.code === 'Escape' && onModalClose();
}

function createModalMarkup({
  title,
  original_title,
  popularity,
  vote_average,
  vote_count,
  overview,
  genres,
  poster_path,
}) {
  const genreList = quantityRegulator(genres);
  const voteAverage = vote_average.toFixed(1);
  const popularityValue = popularity.toFixed(1);
  const markup = `<div class="movie-modal">
  <button type="button" class="close-button" data-modal-close>
    <svg
      class="close-button__icon"
      width="30"
      height="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <symbol viewBox="0 0 32 32">
          <path
            d="M23.733 10.304l-1.504-1.504-5.963 5.963-5.963-5.963-1.504 1.504 5.963 5.963-5.963 5.963 1.504 1.504 5.963-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.963z"
          ></path>
        </symbol>
      </defs>
    </svg>
  </button>
  <div class="movie-modal__poster-container">
    <img
      src="https://image.tmdb.org/t/p/w500/${poster_path}"
      alt="The poster of the movie '${original_title}' "
      class="movie-modal__poster-item"
    />
  </div>
  <div class="movie-modal__content-container">
    <h2 class="movie-modal__title">${title}</h2>
    <div class="movie-modal__content-thumb">
      <ul class="movie-modal__table">
        <li class="movie-modal__table_grey">
          <p>Vote / Votes</p>
        </li>
        <li class="movie-modal__table_grey">
          <p>
            <span class="movie-modal__table_bc_accent">${voteAverage}</span>&#32;&#47;&#32;
            <span class="movie-modal__table_bc_grey">${vote_count}</span>
          </p>
        </li>
        <li class="movie-modal__table_grey">
          <p>Popularity</p>
        </li>
        <li><p>${popularityValue}</p></li>
        <li class="movie-modal__table_grey"><p>Original Title</p></li>
        <li><p>${original_title}</p></li>
        <li class="movie-modal__table_grey"><p>Genre</p></li>
        <li><p>${genreList}</p></li>
      </ul>
    </div>
    <div class="movie-modal__text-thumb">
      <h3 class="movie-modal__description-title">About</h3>
      <p class="movie-modal__description">${overview}</p>
    </div>
    <div class="movie-modal-button__thumb">
      <button
        type="button"
        class="movie-modal-button movie-modal-button_accent"
        data-control-watched
      >
        Add to Watched
      </button>
      <button type="button" class="movie-modal-button" data-control-turn>
        Add to queue
      </button>
    </div>
  </div>
</div>`;
  return refs.modalEl.insertAdjacentHTML('afterbegin', markup);
}

function onClickOutside(e) {
  e.target === refs.modalEl && onModalClose();
}

function resetModal() {
  refs.modalEl.innerHTML = '';
}

function quantityRegulator(arr) {
  if (arr.length <= 2) {
    return arr
      .map(item => {
        return item.name;
      })
      .join(', ');
  } else {
    return `${arr[0].name}, ${arr[1].name}, Other`;
  }
}

async function onPosterClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  await getVideoTrailer(refs.idTargetCard).then(response => {
    return getTrailer(response.results);
  });
  refs.videoPlayerEl = refs.modalEl.querySelector(
    '.movie-modal__video-player-container'
  );
  document.removeEventListener('keydown', onKeyDown);
  refs.modalEl.removeEventListener('click', onClickOutside);
  refs.modalEl.removeEventListener('click', onPosterClick);
  refs.modalEl.addEventListener('click', onPlayerCloseToClick);
  document.addEventListener('keydown', onClosePlayerToEsc);
}

function onClosePlayerToEsc(e) {
  console.log(e.code);
  e.code === 'Escape' && removeVideoPlayer();
}

function onPlayerCloseToClick(e) {
  e.currentTarget === refs.modalEl && removeVideoPlayer();
}

function removeVideoPlayer() {
  refs.videoPlayerEl.remove();
  refs.modalEl.removeEventListener('click', onPlayerCloseToClick);
  document.removeEventListener('keydown', onClosePlayerToEsc);
  document.addEventListener('keydown', onKeyDown);
  refs.modalEl.addEventListener('click', onClickOutside);
  refs.modalEl.addEventListener('click', onPosterClick);
}

function getTrailer(arr) {
  const officialTrailer = arr.find(obj => obj.name === 'Official Trailer');
  if (!officialTrailer) {
    return Notify.failure(`Oops! "Can't find video"`);
  }
  createVideoPlayer(officialTrailer);
}

function createVideoPlayer({ key }) {
  const markup = `<div class="movie-modal__video-player-container">
  <iframe
    class="movie-modal__video-player"
    src="https://www.youtube.com/embed/${key}"
    title="YouTube video player"
    frameborder="0"
    autoplay="1"
    allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>`;
  return refs.modalBoxEl.insertAdjacentHTML('beforeend', markup);
}
