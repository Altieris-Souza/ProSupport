export interface iRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iUser {
  accessToken: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  image: string;
  id: string;
  admin?: boolean;
  user: {
    accessToken: string;
    email: string;
    password: string;
    name: string;
    id: string;
    bio: string;
    image: string;
    admin?: boolean;
  };
}

export interface iUserContext {
  handleRegister(data: iRegister): Promise<void>;
  handleLogin(data: iLogin): Promise<void>;
  user: iUser;
}

export interface iQuestion {
  title: string;
  description: string;
  tech: string;
  userId: number;
  id: number;
  responses: [
    title: string,
    description: string,
    tech: string[],
    userId: number,
    id: number,
    length: number
  ];
  user: iUser;
}
