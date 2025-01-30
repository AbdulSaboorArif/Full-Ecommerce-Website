
interface ProductTypeGloble{

  _id: string;
  title: string;
  price: number;
  description: string;
  imageurl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  quantity: number;
    
}