import React from 'react';

export default function HashtagSection() {
    const images = [
        { src: "/hashtag/shlef with plants.jpg", alt: "Shelf with plants", className: "row-span-2" },
        { src: "/bedroom.png", alt: "Desk setup", className: "col-span-2" },
        { src: "/hashtag/diningroom.jpg", alt: "Armchair", className: "" },
        { src: "/dining.png", alt: "Side tables", className: "" },
        { src: "/scandinavian-interior-mockup-wall-decal-background 1.png", alt: "Dining room", className: "col-span-2" },
        { src: "/living.png", alt: "Bedroom", className: "row-span-2 col-span-2" },
        { src: "/modern-luxurious-living-room.jpg", alt: "Kitchen counter", className: "col-span-2" },
        { src: "/gray-sofa-white-living-room.jpg", alt: "Wall decoration", className: "" },
        { src: "/bright-loft-office.jpg", alt: "Kitchen shelves", className: "" },
    ];

    return (
        <div className="w-full  mx-auto my-8">
            <div className="text-center max-h-min mb-8">
                <h2 className="text-3xl font-bold mb-2">Share your setup with</h2>
                <p className="text-2xl font-semibold text-gray-700">#FurniroFurniture</p>
            </div>

            <div className="grid  grid-cols-12 gap-2 auto-rows-min">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative  overflow-hidden group ${image.className}  rounded-lg`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="  object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute  inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};