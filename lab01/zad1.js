async function fetchData(id) {
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await userRes.json();

  if (userRes.status === 404) {
    console.log(`Nie znaleziono użytkownika o id ${id}`);
    return;
  }

  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const posts = await postsRes.json();

  const result = {
    userId: user.id,
    name: user.name,
    posts: posts.map((post) => {
      return { postId: post.id,title: post.title, body: post.body };
    }),
  };
  console.log(result);
}

fetchData(5);
