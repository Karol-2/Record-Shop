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
          resolve(5);
        }, 300);
      });

  }

  function cb(res){
    console.log(res)}

const funTab = [func1, func2, func2 ,func1]

const zliczPoKolei = (funTab, threshold, cb) => {
    funTab.reduce((prev,curr)=>{

    })
  };

zliczPoKolei(funTab, 3, cb )