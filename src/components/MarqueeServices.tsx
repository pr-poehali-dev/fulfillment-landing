const MarqueeServices = () => {
  const services = [
    "упаковка",
    "маркировка",
    "стикировка",
    "сборка заказа",
    "отгрузка на маркетплейсы",
    "забор товара",
    "проверка на брак",
  ];

  return (
    <div className="bg-blue-600 text-white py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-lg font-medium">
          {services.map((service, index) => (
            <span key={index} className="mx-8">
              {service.toUpperCase()}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {services.map((service, index) => (
            <span key={`dup-${index}`} className="mx-8">
              {service.toUpperCase()}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default MarqueeServices;
