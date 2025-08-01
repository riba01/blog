import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;
  delete(id: string): Promise<void>;
}
