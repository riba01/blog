import { findAllPostsAdmin } from '../../lib/post/queries/admin';

export default async function PostListAdmin() {
  const posts = await findAllPostsAdmin();
  return (
    <div className='container flex flex-col items-center justify-center'>
      <h1 className='text-3xl'>Admin Post Page</h1>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
      <p>Admin Post page content</p>
    </div>
  );
}
