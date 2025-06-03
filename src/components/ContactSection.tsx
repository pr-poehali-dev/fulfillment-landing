import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Новая заявка с сайта FF-Best:

Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Количество товаров в месяц: ${formData.quantity}
Сообщение: ${formData.message}`;

    // Отправка в Telegram
    const telegramUrl = `https://t.me/best_shoping?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");

    // Отправка на email
    const emailUrl = `mailto:ff-best@bk.ru?subject=Новая заявка с сайта&body=${encodeURIComponent(message)}`;
    window.open(emailUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                    <div className="opacity-80">+7 (968) 890-10-02</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-80">ff-best@bk.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="opacity-80">
                      Москва, ул. Сормовский проезд 7А к2
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

          <div
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8"
            id="contact-form"
          >
            <h3 className="text-2xl font-bold mb-6">Получить расчёт</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Телефон"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>

              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Количество товаров в месяц"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Расскажите о ваших товарах и требованиях"
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
              >
                Получить расчёт
              </Button>
            </form>

            {/* Messenger Buttons */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-center text-sm opacity-80 mb-4">
                Или свяжитесь с нами в мессенджерах:
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://t.me/best_shoping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Icon name="MessageCircle" size={18} />
                  WhatsApp
                </a>

                <a
                  href="https://t.me/best_shoping"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0088cc] hover:bg-[#006699] text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
