import { Request } from "express"
export interface IGetUserAuthInfoRequest extends Request {
  user?: IUser 
  // or any other type
}