

async function fetchData(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
        console.log(res.json())
    }).catch(()=>{
        console.log(`Nie znaleziono użytkownika o id ${id}`)
    })
}

fetchData(5)