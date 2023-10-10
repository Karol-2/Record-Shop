import { questionsChatGpt, Question } from "./questions-chat-gpt";

interface Record {
  word: string;
  count: number;
}

function countWord(word: string, arr: string[]): number{
    const result: number = arr.reduce((prev: number,curr: string)=>{
        if( curr === word)
            return prev += 1
        else
            return prev
    },0)
    
    return result
}

function topThreeWords(questionsChatGpt: Question[]): Record[] {
  const everyWord: string = questionsChatGpt.reduce( // duży string
    (prev: string, curr: Question) => {
      return (prev = prev +" "+ curr.question.replace("?",""));
    },"");

    const wordArr: string[] = everyWord.replace(" ","").split(" "); //tablica gdzie każdy element to słowo

    const uniqueWords: string[] = wordArr.filter(
        (val: string,index: number,array: string[])=>{return array.indexOf(val)=== index}) // unikalne słowa

    const countedWords: Record[] = uniqueWords.reduce((prev: Record[],curr: string)=>{ // słowa z policzeniem występowania
        const newObject: Record = {
            word: curr,
            count: countWord(curr,wordArr),
        }

        return [...prev , newObject]
        
    },[])

    const recordsSorted: Record[] = countedWords.sort((a: Record,b: Record) => b.count - a.count)

    return recordsSorted.slice(0,3)
}

const topThree: Record[] = topThreeWords(questionsChatGpt);
console.log(topThree);
