import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 font-montserrat">
              FulFillment Pro
            </h1>
          </div>

          {/* Contact Info & Messengers */}
          <div className="hidden md:flex items-center gap-6">
            {/* Phone */}
            <a
              href="tel:+79688901002"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Icon name="Phone" size={16} />
              <span className="text-sm font-medium">+7 (968) 890-10-02</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ff-best@bk.ru"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Icon name="Mail" size={16} />
              <span className="text-sm font-medium">ff-best@bk.ru</span>
            </a>

            {/* Messenger Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/+79688901002"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-2 rounded-full transition-colors"
                title="WhatsApp"
              >
                <Icon name="MessageCircle" size={18} />
              </a>

              <a
                href="https://t.me/@best_shoping"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0088cc] hover:bg-[#006699] text-white p-2 rounded-full transition-colors"
                title="Telegram"
              >
                <Icon name="Send" size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+79688901002">
                <Icon name="Phone" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
