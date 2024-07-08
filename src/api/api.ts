import getAxiosInstance from "../utils/instance";

const instance = getAxiosInstance();

export const getPosts = async () => {
  const response = await instance.get("/posts");

  return response.data;
};

export const createPost = async (post: {
  title: string;
  description: string;
  tags: string[];
  comments: string[];
  authorId: string;
}) => {
  const response = await instance.post("/posts", post);

  return response.data;
};

export const getUser = async (id: string) => {
  const response = await instance.get(`auth/user/${id}`);

  return response.data;
};
