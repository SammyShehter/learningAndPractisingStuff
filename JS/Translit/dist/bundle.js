const latSimple = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "'",
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '"'
];
const kirSimple = [
  'а', 'б', 'ц', 'д', 'е', 'ф', 'г', 'х', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'ъ', 'р', 'с', 'т', 'у', 'в', 'щ', 'х', 'ы', 'з', 'ь',
  'А', 'Б', 'Ц', 'Д', 'Е', 'Ф', 'Г', 'Х', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Ъ', 'Р', 'С', 'Т', 'У', 'В', 'Щ', 'Х', 'Ы', 'З', 'Ь'
];
const latSpec = [
  'сh', 'ыo', 'зh', 'цh', 'ыe', 'йe', 'ыa', 'йa', 'ыu', 'йu', 'йo',
  'Сh', 'Ыo', 'Зh', 'Цh', 'Ыe', 'Йe', 'Ыa', 'Йa', 'Ыu', 'Йu', 'Йo',
  'СH', 'ЫO', 'ЗH', 'ЦH', 'ЫE', 'ЙE', 'ЫA', 'ЙA', 'ЫU', 'ЙU', 'ЙO'
];
const kirSpec = [
  'ш', 'ё', 'ж', 'ч', 'э', 'э', 'я', 'я', 'ю', 'ю', 'ё',
  'Ш', 'Ё', 'Ж', 'Ч', 'Э', 'Э', 'Я', 'Я', 'Ю', 'Ю', 'Ё',
  'Ш', 'Ё', 'Ж', 'Ч', 'Э', 'Э', 'Я', 'Я', 'Ю', 'Ю', 'Ё'
];
const latSuperSpec = [
  'с-h', 'ы-o', 'з-h', 'ц-h', 'ы-e', 'й-e', 'ы-a', 'й-a', 'ы-u', 'й-u', 'й-o',
  'С-h', 'Ы-o', 'З-h', 'Ц-h', 'Ы-e', 'Й-e', 'Ы-a', 'Й-a', 'Ы-u', 'Й-u', 'Й-o',
  'С-H', 'Ы-O', 'З-H', 'Ц-H', 'Ы-E', 'Й-E', 'Ы-A', 'Й-A', 'Ы-U', 'Й-U', 'Й-O',
  'С_h', 'Ы_o', 'З_h', 'Ц_h', 'Ы_e', 'Й_e', 'Ы_a', 'Й_a', 'Ы_u', 'Й_u', 'Й_o',
  'С_H', 'Ы_O', 'З_H', 'Ц_H', 'Ы_E', 'Й_E', 'Ы_A', 'Й_A', 'Ы_U', 'Й_U', 'Й_O'
];
const kirSuperSpec = [
  'сх', 'ыо', 'зх', 'цх', 'ые', 'йе', 'ыа', 'йа', 'ыу', 'йу', 'йо',
  'Сх', 'Ыо', 'Зх', 'Цх', 'Ые', 'Йе', 'Ыа', 'Йа', 'Ыу', 'Йу', 'Йо',
  'СХ', 'ЫО', 'ЗХ', 'ЦХ', 'ЫЕ', 'ЙЕ', 'ЫА', 'ЙА', 'ЫУ', 'ЙУ', 'ЙО',
  'Сх', 'Ыо', 'Зх', 'Цх', 'Ые', 'Йе', 'Ыа', 'Йа', 'Ыу', 'Йу', 'Йо',
  'СХ', 'ЫО', 'ЗХ', 'ЦХ', 'ЫЕ', 'ЙЕ', 'ЫА', 'ЙА', 'ЫУ', 'ЙУ', 'ЙО'
];


String.prototype.replaceAt = function (index, char) {
  return this.substr(0, index) + char + this.substr(index + char.length);
}


const text = document.getElementById("translit");
text.addEventListener('input', (event) => {

  const key = event.data;
  let specCaseUsed = false;
  let superSpecCaseUsed = false;
  let position = text.selectionStart;

  let specCase = text.value;
  specCase = specCase.substring(position, position - 2);

  let superSpecCase = text.value;
  superSpecCase = superSpecCase.substring(position, position - 3);



  //  for(let i = 0; i < latSuperSpec.length; i++ ){
  //    if(superSpecCase === latSuperSpec[i]){

  //       mystring = text.value;
  //       let position = text.selectionStart;
  //       mystring = mystring.replaceAt(position - 3, kirSuperSpec[i]);
  //       mystring = mystring.substring(position - 1, position);
  //       text.value = mystring;
  //       text.selectionStart = position;
  //       superSpecCaseUsed = true;
  //    }
  //  }

  //  if(!superSpecCaseUsed){
  //    for(let i = 0; i < latSpec.length; i++){
  //      if(specCase === latSpec[i]){
  //       mystring = text.value;
  //       let position = text.selectionStart;
  //       mystring = mystring.replaceAt(position - 2, kirSpec[i]);
  //       text.value = mystring;
  //       text.selectionStart = position;
  //        specCaseUsed = true;
  //      }
  //    }
  //  }


  if (!specCaseUsed && !superSpecCaseUsed) {
    for (let j = 0; j < latSimple.length; j++) {
      if (key === latSimple[j]) {
        mystring = text.value;
        let position = text.selectionStart;
        mystring = mystring.replaceAt(position - 1, kirSimple[j]);
        text.selectionStart = position;
        text.value = mystring;
      }
    }
  }
});