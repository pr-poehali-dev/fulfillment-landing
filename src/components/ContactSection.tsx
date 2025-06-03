import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-montserrat">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl opacity-80">
            Свяжитесь с нами для получения индивидуального предложения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="opacity-80">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-80">info@fulfillment.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="opacity-80">
                      Москва, рядом с 3-м кольцом
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Время работы</div>
                    <div className="opacity-80">24/7 без выходных</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Получить расчёт</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>

              <Input
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Input
                placeholder="Количество товаров в месяц"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Textarea
                placeholder="Расскажите о ваших товарах и требованиях"
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                Получить расчёт
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
