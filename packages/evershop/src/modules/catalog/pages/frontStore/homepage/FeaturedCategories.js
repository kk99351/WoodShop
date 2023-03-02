import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1674205120.webp" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Premium Door collection</h3>
          <div className="mb-1">
            <p>
              Constructed from Pure Real Tree Woods
            </p>
          </div>
          <Button url="/category/doors" title="Shop Doors" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://d21xn5q7qjmco5.cloudfront.net/images/gallery_images/1676969272.png" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Metallic Windows</h3>
          <div className="mb-1">
            <p>
              More durable than old wood window frames
            </p>
          </div>
          <Button url="/category/windows" title="Shop Windows" variant="primary" />
        </div>
        <div>
          <div>
            <img src="https://m.media-amazon.com/images/I/61-JpowHPtL._SX425_.jpg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Designer Coubard</h3>
          <div className="mb-1">
            <p>
              Fullfilled with stylish design with unbeliveable features.
            </p>
          </div>
          <Button url="/category/coubards" title="Shop Coubards" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
