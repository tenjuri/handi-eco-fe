import React from "react";

const OurStory: React.FC = () => {
  const images = Array.from(Array(4).keys());
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mt-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="px-10">
            <span className="text-3xl font-bold">OUR STORY</span>
            <p className="mt-5">It&apos;s all about what we love the most...</p>
            <p>
              For the passion of spreading the beauty of Vietnamese nature to
              the whole world, Handi &amp; Eco intends to becoming one of the
              leading companies in Vietnam who is specialized in producing and
              supplying home decorative products that made from natural
              materials such as seagrass, waterhyacinth, rattan, bamboo, fern,
              palm leaf, maize &mldr; we have our own designer team who has been
              educated in USA. We offer OEM service and willing to develop
              customer&rsquo;s own design. Our factory is located in traditional
              village in Ninh Binh province, where is very famous for handicraft
              products. We have over 1000 home workers , who has many years of
              experience in making handmade home decoration products.
            </p>
          </div>
          <div className="grid grid-cols-2 px-10 lg:p-0">
            {images.map((image, index) => (
              <img
                key={image}
                src={`https://media.handi-eco.vn/images/story-${index}.jpg`}
                alt={index.toString()}
                width={100}
                height={100}
                className="w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
