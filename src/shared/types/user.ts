export type LoginInput = {
  username: string;
  password: string;
};

export type Auth = {
  refresh: string;
  access: string;
} | null;
