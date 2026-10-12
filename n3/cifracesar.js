function rot13(str) {
  return str.replace(/[A-Z]/g, function(char) {

    const charCode = char.charCodeAt(0);

    const decodedCode = ((charCode - 65 + 13) % 26) + 65;
    
    return String.fromCharCode(decodedCode);
  });
}

rot13("SERR PBQR PNZC");