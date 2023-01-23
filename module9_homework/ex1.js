const parser = new DOMParser();
const list = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(list, "text/xml");

const studentEn = {
  name: xmlDOM.getElementsByTagName("name")[0].childNodes[1].childNodes[0].nodeValue + " " + xmlDOM.getElementsByTagName("name")[0].childNodes[3].childNodes[0].nodeValue,
  age: Number(xmlDOM.getElementsByTagName("age")[0].childNodes[0].nodeValue),
  prof: xmlDOM.getElementsByTagName("prof")[0].childNodes[0].nodeValue,
  lang: xmlDOM.getElementsByTagName("name")[0].attributes["lang"].nodeValue
}

const studentRu = {
 name: xmlDOM.getElementsByTagName("name")[1].childNodes[1].childNodes[0].nodeValue + " " + xmlDOM.getElementsByTagName("name")[0].childNodes[3].childNodes[0].nodeValue,
  age: Number(xmlDOM.getElementsByTagName("age")[1].childNodes[0].nodeValue),
  prof: xmlDOM.getElementsByTagName("prof")[1].childNodes[0].nodeValue,
  lang: xmlDOM.getElementsByTagName("name")[1].attributes["lang"].nodeValue
}
const result = {
  list: [studentEn, studentRu]
}

console.log(result);