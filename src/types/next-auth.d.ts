import 'next-auth/jwt';
import 'next-auth';
import {IUser} from "@interfaces/user/IUser";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module 'next-auth/jwt' {
  interface JWT {
    user?: any;
  }
}

declare module 'next-auth' {
  interface Session {
    jwt: string;
    user: IUser;
  }
}
