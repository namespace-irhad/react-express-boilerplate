// import * as helloWorldModel from './model';
import { Errors, APIError } from '../../utils/error';

export const getHelloWorld = async ({ conditions, orderBy }) => {
  /* @ TODO Database setup
 if (!conditions || !orderBy)
    throw new APIError(Errors.MISSING_ARGUMENTS, { conditions, orderBy });

   const data = helloWorldModel.getHelloWorld({ conditions, orderBy });
   return data;
*/
  return { message: 'Hello World 🌎' };
};
