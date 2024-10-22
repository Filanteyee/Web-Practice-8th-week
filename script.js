function highlightLongWords() {
  const paragraph = document.getElementById('paragraph');
  let words = paragraph.innerHTML.split(' ');

  words = words.map(word => {
    return word.length > 8 ? `<span class="highlight">${word}</span>` : word;
  });

  paragraph.innerHTML = words.join(' ');
}

function addSourceLink() {
  const infoDiv = document.getElementById('info');
  const link = document.createElement('a');
  link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
  link.innerText = 'Source of the text';
  link.target = '_blank';
  infoDiv.appendChild(link);
}

function splitSentences() {
  const paragraph = document.getElementById('paragraph');

  let sentences = paragraph.innerHTML.split('. ');

  sentences = sentences.map(sentence => sentence.trim() + '.<br>');
  paragraph.innerHTML = sentences.join(' ');
}

function displayWordCount() {
  const paragraph = document.getElementById('paragraph').innerText;
  const wordCount = paragraph.split(/\s+/).length;

  const infoDiv = document.getElementById('info');
  const wordCountText = document.createElement('p');
  wordCountText.className = 'word-count';
  wordCountText.innerText = `Word count: ${wordCount}`;

  infoDiv.insertBefore(wordCountText, infoDiv.firstChild);
}

function replacePunctuation() {
  const paragraph = document.getElementById('paragraph');

  let modifiedText = paragraph.innerHTML.replace(/\?/g, '🤔');
  modifiedText = modifiedText.replace(/\!/g, '😲');

  paragraph.innerHTML = modifiedText;
}

highlightLongWords();
addSourceLink();
splitSentences();
displayWordCount();
replacePunctuation();
