import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [errorCode, setErrorCode] = useState('');
  const [problemDescription, setProblemDescription] = useState('');

  const diagnosticServices = [
    {
      title: "Базовая диагностика",
      price: "299 ₽",
      features: ["Расшифровка кода ошибки", "Возможные причины", "Общие рекомендации"],
      popular: false
    },
    {
      title: "Полная диагностика",
      price: "599 ₽", 
      features: ["Подробный анализ", "Пошаговая инструкция", "Список запчастей", "Техподдержка 24/7"],
      popular: true
    },
    {
      title: "Экспресс-консультация",
      price: "899 ₽",
      features: ["Видеоконсультация", "Персональные рекомендации", "Помощь в поиске мастера", "Гарантия результата"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      text: "Отличный сервис! За 10 минут получил полную информацию по ошибке P0420. Сэкономил время и деньги.",
      rating: 5
    },
    {
      name: "Мария К.", 
      text: "Очень помогли с диагностикой BMW. Подробно объяснили проблему и дали четкий план действий.",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      text: "Быстро, качественно, недорого. Рекомендую всем автовладельцам!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AutoDiagnostic
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">О нас</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              АВТО
              <br />
              ДИАГНОСТИКА
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Мгновенная расшифровка кодов ошибок и профессиональные рекомендации от экспертов
            </p>
            
            {/* Diagnostic Form */}
            <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Код ошибки</label>
                  <Input
                    placeholder="P0420, B1234, C0561..."
                    value={errorCode}
                    onChange={(e) => setErrorCode(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Или опишите проблему</label>
                  <Input
                    placeholder="Двигатель троит, не заводится..."
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    className="h-12 text-lg"
                  />
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full md:w-auto px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all"
              >
                <Icon name="Search" className="mr-2" />
                Получить диагностику
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15,000+</div>
                <div className="text-foreground/60">Решенных проблем</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5 мин</div>
                <div className="text-foreground/60">Среднее время</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-foreground/60">Точность диагностики</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-foreground/60">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Тарифы диагностики</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Выберите подходящий тариф для решения вашей автомобильной проблемы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {diagnosticServices.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all hover:scale-105 ${service.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`}>
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary my-4">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" className="text-primary" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${service.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Как это работает</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Введите код ошибки</h3>
              <p className="text-foreground/70">Укажите код ошибки или опишите проблему с вашим автомобилем</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Мгновенный анализ</h3>
              <p className="text-foreground/70">Наша система проанализирует проблему и найдет оптимальное решение</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Получите решение</h3>
              <p className="text-foreground/70">Подробные инструкции и рекомендации для устранения неисправности</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">AutoDiagnostic</span>
              </div>
              <p className="text-secondary-foreground/80">
                Профессиональная диагностика автомобилей онлайн
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Диагностика ошибок</li>
                <li>Консультации</li>
                <li>Техподдержка</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>FAQ</li>
                <li>Связаться с нами</li>
                <li>Гарантии</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@autodiagnostic.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-secondary-foreground/20" />
          
          <div className="text-center text-secondary-foreground/60">
            <p>&copy; 2024 AutoDiagnostic. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;