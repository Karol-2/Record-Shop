import { UserStatus } from "../enums/user-status.enum";
import { User } from "../models/user.model";

const userObj: User = {
    firstName: 'Anna',
    lastName: 'Kowalska',
    status: UserStatus.ACTIVE,
    age: 23
  }

export default userObj