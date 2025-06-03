import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Package",
      title: "Приём товаров",
      description:
        "Забираем товары от ваших поставщиков и доставляем на наш склад",
      features: [
        "Приём от поставщиков",
        "Документооборот",
        "Уведомления о поступлении",
      ],
    },
    {
      icon: "Search",
      title: "Складская обработка",
      description:
        "Полный цикл обработки: пересчёт, проверка, маркировка, упаковка",
      features: [
        "Пересчёт товара",
        "Проверка на брак",
        "Маркировка",
        "Упаковка по стандартам",
      ],
    },
    {
      icon: "Truck",
      title: "Доставка на склады",
      description:
        "Отправляем готовые товары на склады всех популярных маркетплейсов",
      features: ["Wildberries", "Ozon", "Яндекс.Маркет", "Другие площадки"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр фулфилмент-услуг для вашего бизнеса на маркетплейсах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center mb-6">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={40}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
