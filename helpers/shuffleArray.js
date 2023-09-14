// https://stackoverflow.com/a/2450976

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  const result = Array(array.length);

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex], result[currentIndex]];
  }

  return result;
}

export default shuffle;
