export function filterFilmsByDirector(list, director) {
  return director ? list.filter((film) => film.director === director) : list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((item) => item[prop]))];
}

export function getFilmStats(list) {
  const acc_score = list.reduce((acc, film) => acc + parseInt(film.rt_score), 0);
  const avg_score = list.length ? acc_score / list.length : 0;
  const total = list.length;
  const latest = Math.max(...list.map((film) => parseInt(film.release_date)));

  return { acc_score, avg_score, total, latest };
}