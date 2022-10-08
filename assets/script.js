var topics = ['HTML','CSS','Git','JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function ListTopics(){
  for(var x = 0; x < topics.length; x++){
    console.log(topics[x]);
  }
}
function SelectTopics() {
  if(randomTopic === 'HTML'){
    console.log("You have picked HTML");
  }
  else if(randomTopic === 'CSS'){
    console.log("You have picked CSS");
  }
  else if(randomTopic === 'Git'){
    console.log("You have picked Git");
  }
  else if(randomTopic === 'JavaScrip'){
    console.log("You have picked JavaScript");
  }
  else{
    console.log("Error with input");
  }
}
console.log('Topics that we have worked on throughout Prework:');
ListTopics();
console.log('Which topic should we study first?');
SelectTopics(topics[3]);