import { JsonPostRepositiry } from './json-post-repositiry';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new JsonPostRepositiry();
