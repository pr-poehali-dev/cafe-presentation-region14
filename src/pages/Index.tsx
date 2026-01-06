import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      category: 'Завтраки',
      items: [
        { name: 'Классический завтрак', description: 'Яичница, бекон, тосты, свежие овощи', price: '450₽' },
        { name: 'Панкейки', description: 'С кленовым сиропом и свежими ягодами', price: '380₽' },
        { name: 'Авокадо тост', description: 'Гуакамоле, слабосоленая семга, яйцо пашот', price: '520₽' },
      ],
    },
    {
      category: 'Основные блюда',
      items: [
        { name: 'Бургер 14 регион', description: 'Фирменная котлета из мраморной говядины', price: '680₽' },
        { name: 'Паста карбонара', description: 'Традиционный итальянский рецепт', price: '590₽' },
        { name: 'Стейк из лосося', description: 'С овощами гриль и лимонным соусом', price: '850₽' },
      ],
    },
    {
      category: 'Напитки',
      items: [
        { name: 'Капучино', description: 'На основе эспрессо с молочной пенкой', price: '220₽' },
        { name: 'Авторский лимонад', description: 'Свежевыжатый сок с мятой', price: '280₽' },
        { name: 'Смузи', description: 'Микс сезонных фруктов и ягод', price: '320₽' },
      ],
    },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/ba7edf07-4298-4c73-9e5f-a3f5f703a6fe/files/9a0dab82-2eb1-4530-9e87-a5bcebcbc236.jpg',
    'https://cdn.poehali.dev/projects/ba7edf07-4298-4c73-9e5f-a3f5f703a6fe/files/727a6d38-28ee-4b67-8f1b-d488f26376ab.jpg',
    'https://cdn.poehali.dev/projects/ba7edf07-4298-4c73-9e5f-a3f5f703a6fe/files/7bf50e4a-eb71-4e6c-8c7e-680005a887d8.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">14 регион</h1>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'menu' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                О кафе
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === 'gallery' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Галерея
              </button>
              <Button>Забронировать</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative pt-20 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                С 2019 года в сердце города
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Кафе<br />
                <span className="text-primary">14 регион</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Уютное пространство для семейных встреч, деловых обедов и романтических вечеров. 
                Авторская кухня встречается с домашним уютом.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button size="lg" onClick={() => scrollToSection('menu')} className="w-full sm:w-auto">
                  Посмотреть меню
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Блюд</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/ba7edf07-4298-4c73-9e5f-a3f5f703a6fe/files/8c21bfd9-bf80-4535-8ee4-318e79a7ea68.jpg"
                  alt="Кафе 14 регион"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">Довольных гостей</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Уютная атмосфера</h3>
              <p className="text-muted-foreground">
                Идеальное место для встреч с семьёй и друзьями
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="ChefHat" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Свежие продукты</h3>
              <p className="text-muted-foreground">
                Только качественные ингредиенты от проверенных поставщиков
              </p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover-scale">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Быстрое обслуживание</h3>
              <p className="text-muted-foreground">
                Ваш заказ готов всего за 15-20 минут
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Наше меню</h2>
            <p className="text-lg text-muted-foreground">
              Авторская кухня с акцентом на местные продукты
            </p>
          </div>
          <div className="space-y-12 max-w-4xl mx-auto">
            {menuItems.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <Card key={itemIdx} className="p-6 hover-scale">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-foreground mb-2">{item.name}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                        <span className="text-xl font-semibold text-primary whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">О кафе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Кафе "14 регион" — это современное пространство, где каждый найдёт что-то для себя.
              Утром здесь проходят деловые встречи за чашкой ароматного кофе, днём собираются семьи
              с детьми, а вечером создаётся романтическая атмосфера для пар.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы гордимся нашей авторской кухней, которая сочетает классические рецепты с современными
              трендами. Наша команда шеф-поваров создаёт блюда из свежих локальных продуктов,
              а профессиональные бариста готовят лучший кофе в городе.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Лет работы</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Блюд в меню</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Гостей в месяц</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Галерея</h2>
            <p className="text-lg text-muted-foreground">Атмосфера нашего кафе</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-lg hover-scale">
                <img
                  src={img}
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">14 регион</h3>
              <p className="text-background/70">
                Уютное кафе в сердце города для всех, кто ценит качество и атмосферу
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Контакты</h3>
              <div className="space-y-2 text-background/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@14region.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 14</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Режим работы</h3>
              <div className="space-y-2 text-background/70">
                <div>Понедельник - Пятница: 8:00 - 23:00</div>
                <div>Суббота - Воскресенье: 9:00 - 00:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50">
            © 2024 14 регион. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;