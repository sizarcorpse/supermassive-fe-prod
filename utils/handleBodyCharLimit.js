export const handleBodyCharLimit = (text) => {
  let texts = [];
  for (let i = 0; i <= 100; i++) {
    texts.push(text[i]);
  }
  return texts.join("") + "...";
};
