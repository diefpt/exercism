export const rotate = (text, key) => {
  const a = 'a'.charCodeAt(0),
        A = 'A'.charCodeAt(0);
  
  return text.replace(/[a-z]/g, char => String.fromCharCode(a + (char.charCodeAt(0) - a + key) % 26))
             .replace(/[A-Z]/g, char => String.fromCharCode(A + (char.charCodeAt(0) - A + key) % 26));
}

