import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 font-montserrat">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600">
            Ключевые преимущества нашего фулфилмент-центра
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <Icon name="MapPin" size={32} className="text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Идеальное расположение
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Наш склад находится в Москве рядом с 3-м транспортным кольцом.
                  Это обеспечивает быстрый доступ ко всем магистралям и
                  минимальное время доставки на склады маркетплейсов.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Icon name="DollarSign" size={32} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Конкурентные цены
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Предлагаем одни из самых низких цен на рынке фулфилмент-услуг
                  без ущерба качеству. Прозрачное ценообразование и никаких
                  скрытых платежей.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <Icon name="Users" size={32} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Опытная команда
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Профессиональные сотрудники с многолетним опытом работы с
                  товарами для маркетплейсов. Знаем все требования площадок.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">
                Наши показатели
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <div className="text-gray-600">
                    Обработанных заказов в день
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    99.8%
                  </div>
                  <div className="text-gray-600">Точность обработки</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    24 ч
                  </div>
                  <div className="text-gray-600">Среднее время обработки</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
