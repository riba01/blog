import { postRepository } from '@/repositories/post';

export async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div className='px-2'>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
