import Image from "next/image";
import React from "react";

export const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/121109714?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Sameer Ahmed</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            esse ratione, ab ducimus quod odio rerum optio voluptatibus quis
            saepe tempore consequatur tenetur earum delectus quaerat unde
            perferendis magnam voluptatum!
          </p>
        </div>
      </div>
    </div>
  );
};
