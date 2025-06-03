import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://cdn.poehali.dev/files/e0e49bae-d891-4c94-adc9-062c07e86180.jpg",
      title: "Складские операции",
    },
    {
      url: "https://cdn.poehali.dev/files/6a8172f4-aae5-47f0-befe-4a16bb2c8ac3.jpg",
      title: "Процесс упаковки",
    },
    {
      url: "https://cdn.poehali.dev/files/3f2107e1-bad4-449d-93e8-4dc217ad4989.jpg",
      title: "Управление инвентарем",
    },
    {
      url: "https://cdn.poehali.dev/files/f44d4abe-ae8e-4902-b8f9-e20732d025c4.jpg",
      title: "Логистика и доставка",
    },
    {
      url: "https://cdn.poehali.dev/files/11d6b9b7-ab50-4051-8acf-d05d4099cfe1.jpg",
      title: "Контроль качества",
    },
    {
      url: "https://cdn.poehali.dev/files/a8b27ae0-d3ce-428a-949a-2a66f2e5c5f6.jpg",
      title: "Хранение товаров",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-montserrat">
            Наш фулфилмент-центр
          </h2>
          <p className="text-xl text-gray-600">
            Современное оборудование и профессиональная команда
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-[500px] overflow-hidden">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].title}
              className="w-full h-full object-cover transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {images[currentImage].title}
              </h3>
              <p className="text-lg opacity-90">
                {images[currentImage].description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 p-6 bg-white">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-600">
            {currentImage + 1} из {images.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
