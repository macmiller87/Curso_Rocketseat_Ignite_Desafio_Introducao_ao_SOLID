import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
   const userId = this.usersRepository.findById(user_id); 

   if(!userId) {
     throw new Error("User not found!");
     
   }

   const userAdmin = this.usersRepository.turnAdmin(userId);
   return userAdmin;

  }
}

export { TurnUserAdminUseCase };
