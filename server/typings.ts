interface  IUser{
      id:string ,
      fullname: string,
      email: string, // no duplicates allowed.
      gender:string,
      phone: string  ,
      address:string ,
      password: string
    
}

declare namespace Express {
      interface Request {
        user?: IUser;
      }
    }


    interface  IProducts{
      id: number,
     name: string,
     image: string,
     brand: string,
     category: string,
     description: string,
     price: number,
     countInStock: number,
     rating: number,
     numReviews: number,
     }
  
     interface  IProductNew{
      id: number,
     name: string,
     image: string,
     brand: string,
     category: string,
     description: string,
     price: number,
     countInStock: number,
     rating: number,
     numReviews: number,
     }
  
     interface  IProductUpdate{
      productId?: number,
     name?: string,
     image?: string,
     brand?: string,
     category?: string,
     description?: string,
     price?: number,
     countInStock?: number,
     rating?: number,
     numReviews?: number,
     }

     interface IProductReview {
      name: string;
      rating: number;
      comment: string;
  }
  
  
  