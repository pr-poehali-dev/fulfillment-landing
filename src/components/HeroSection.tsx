import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          Фулфилмент в Москве
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Полный цикл обработки товаров для маркетплейсов: от приёма до доставки
          на склады
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-lg">
            <Icon name="MapPin" size={24} className="text-orange-400" />
            <span>Рядом с 3-м кольцом</span>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Icon name="DollarSign" size={24} className="text-green-400" />
            <span>Низкие цены</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            onClick={() => {
              const contactSection = document.querySelector("#contact-form");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Получить расчёт
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
          >
            Узнать больше
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Clock"
              size={48}
              className="mx-auto mb-4 text-orange-400"
            />
            <h3 className="text-xl font-semibold mb-2">24/7 Работа</h3>
            <p className="opacity-80">Круглосуточная обработка заказов</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Shield"
              size={48}
              className="mx-auto mb-4 text-green-400"
            />
            <h3 className="text-xl font-semibold mb-2">Качество</h3>
            <p className="opacity-80">Тщательная проверка каждого товара</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Truck"
              size={48}
              className="mx-auto mb-4 text-blue-300"
            />
            <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
            <p className="opacity-80">Оперативная отправка на склады</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
