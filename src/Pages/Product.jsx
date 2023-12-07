import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_prodduct}= useContext(ShopContext);
  const {productId} = usseParams();
  const product = all_prodduct.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
