export interface New {
  id: number;
  slug: string;
  title: string;
  content: JSON;
  banner: string;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateNewDto = Omit<New, "id" | "createdAt" | "updatedAt">;
export type UpdateNewDto = Partial<CreateNewDto>;
