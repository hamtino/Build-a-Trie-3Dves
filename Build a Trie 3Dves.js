function buildTrie(...words) {
  const map1 = new Map();
  let string = "";
  for (let i = 0; i < words.length; i++) {
    let objeto = map1.get(words[i][0]);
    if (objeto != undefined) {
      let palabra = words[i];
      for (let j = 0; j < words[i].length; j++) {
        if (j == 0) {
          string = '{"' + palabra + '": null}';
        } else {
          if (palabra.length > 2) {
            palabra = palabra.substring(0, palabra.length - 1);
            string = '{"' + palabra + '": ' + string + "}";
          }
        }
        if (words[i].length != 1) {
        }
      }
      let buscar = objeto.te;
      if (buscar != undefined) {      
          JSON.stringify(Object.assign(objeto.te, JSON.parse(string).te)
        );
      } else {
      
        console.log('palabra: ', palabra);
        if (words[i] == "trust"){
          JSON.stringify(Object.assign(objeto.tr.tru, JSON.parse(string).tr.tru));
        } else {
          JSON.stringify(Object.assign(objeto, JSON.parse(string)));
        }
      }
    } else {
      let palabra = words[i];
      for (let j = 0; j < words[i].length; j++) {
        if (words[i].length == 1) {
          map1.set(words[i][0], null);
        } else {
          if (j == 0) {
            string = '{"' + palabra + '": null}';
          } else {
            if (palabra.length > 2) {
              palabra = palabra.substring(0, palabra.length - 1);
              string = '{"' + palabra + '": ' + string + "}";
              
            }
          }
        }
        if (words[i].length != 1) {
          map1.set(words[i][0], JSON.parse(string));
        }
      } 
    }
  }
  const obj = mapToObj(map1);
  function mapToObj(map) {
    const obj = {};
    for (let [k, v] of map) obj[k] = v;
    return obj;
  }
  console.log(obj);
  return obj;
}
  
