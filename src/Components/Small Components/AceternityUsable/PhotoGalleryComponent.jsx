import React from "react";
import { LayoutGrid } from "../../ui/photo-gallery";

export function PhotoGalleryComponent() {
  return (
    <div className="min-h-[600px] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="p-4">
      <p className="font-bold text-2xl md:text-3xl text-white mb-2">
        Serene Wilderness
      </p>
      <p className="text-sm text-gray-300 mb-3">Nature Photography</p>
      <p className="font-normal text-sm leading-relaxed max-w-lg text-neutral-200">
        Capturing the untouched beauty of nature, where silence speaks louder than words 
        and every frame tells a story of tranquility.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="p-4">
      <p className="font-bold text-2xl md:text-3xl text-white mb-2">
        Above the Clouds
      </p>
      <p className="text-sm text-gray-300 mb-3">Landscape Photography</p>
      <p className="font-normal text-sm leading-relaxed max-w-lg text-neutral-200">
        Elevated perspectives that showcase the world from a different angle, 
        where earth meets sky in perfect harmony.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="p-4">
      <p className="font-bold text-2xl md:text-3xl text-white mb-2">
        Emerald Dreams
      </p>
      <p className="text-sm text-gray-300 mb-3">Nature Photography</p>
      <p className="font-normal text-sm leading-relaxed max-w-lg text-neutral-200">
        Immersed in nature's vibrant palette, where every shade of green 
        tells a story of life, growth, and renewal.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="p-4">
      <p className="font-bold text-2xl md:text-3xl text-white mb-2">
        Flowing Serenity
      </p>
      <p className="text-sm text-gray-300 mb-3">Water Photography</p>
      <p className="font-normal text-sm leading-relaxed max-w-lg text-neutral-200">
        The gentle flow of water creates a symphony of peace, 
        reflecting the sky and surrounding beauty in perfect stillness.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
