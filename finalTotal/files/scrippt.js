function encryptText(text) {
    const encryptionMap = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
  
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char in encryptionMap) {
        encryptedText += encryptionMap[char];
      } else {
        encryptedText += char;
      }
    }
    return encryptedText;
  }
  
  function decryptText(text) {
    const decryptionMap = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
  
    let decryptedText = '';
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word in decryptionMap) {
        decryptedText += decryptionMap[word];
      } else {
        decryptedText += word;
      }
      if (i < words.length - 1) {
        decryptedText += ' ';
      }
    }
    return decryptedText;
  }
  const parafo = document.getElementById("#contenedor_parrafo");
  const munecoImg = document.getElementById("#munecoImg");
  const muneco = document.querySelector(".devanecer");
  const textarea = document.querySelector(".text-area");
  const outputText = document.querySelector(".mensaje");
  const encryptButton = document.querySelector(".btn-encriptar");
  const decryptButton = document.querySelector(".btn-desencritador");
  
  encryptButton.addEventListener('click', () => {
    const text = textarea.value;
    outputText.value = encryptText(text);
    muneco.style.display = "none";

  });
  
  decryptButton.addEventListener('click', () => {
    const text = textarea.value;
    outputText.value = decryptText(text);
    muneco.style.display = "block";
    munecoImg.style.display = "block";
    parafo.style.display = "block";
  });
  

  const copyButton = document.querySelector(".btn_copiar");
  
  copyButton.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
  });