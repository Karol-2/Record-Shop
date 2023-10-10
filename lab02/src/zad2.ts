// Fragment kodu do uzupełnienia
import { questionsChatGpt, Question } from "./questions-chat-gpt";

function topThreeWords(questionsChatGpt: Question[] ): void {
    const arrayWords: string[] = [];
 
    questionsChatGpt.reduce((prev: Question ,curr: Question)=>{
        arrayWords.push(curr.question)
    },[])

    console.log(arrayWords)
}

topThreeWords(questionsChatGpt);

// const topThree = topThreeWords(questionsChatGpt);
// console.log(topThree);

// Oczekiwany output
// [
//   { word: 'Jakie', count: 18 },
//   { word: 'są', count: 18 },
//   { word: 'najlepsze', count: 17 }
// ]