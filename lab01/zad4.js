// Działa!
const porownaj = (fun1, fun2, cb) => {
  fun1().then(
    (f1Res) => {
    fun2().then(
        (f2Res)=>{
        f1Res === f2Res? cb(true): cb(false)
       
    })
  })}

    async function func1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 300);
      });

  }

   async function func2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2);
        }, 300);
      });

  }

  async function func3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 300);
      });

  }

  function cb(res){
    console.log("wynik porównania: ",res)}


  porownaj(func1, func2, cb);
  porownaj(func1, func3, cb);