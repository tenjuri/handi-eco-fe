export interface Blog {
  id: number;
  slug: string;
  title: string;
  content: JSON;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateBlogDto = Omit<Blog, "id" | "createdAt" | "updatedAt">;
export type UpdateBlogDto = Partial<CreateBlogDto>;
