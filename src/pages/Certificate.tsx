import Icon from '@/components/ui/icon';

const Certificate = () => {
  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={printCertificate}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="Printer" size={20} />
            Распечатать
          </button>
        </div>

        <div className="bg-white p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary/60 to-primary"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary/60 to-primary"></div>
          
          <div className="absolute top-8 left-8 w-32 h-32 border-4 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-primary/10 rounded-full"></div>

          <div className="relative z-10 space-y-12">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground">
                БЛАГОДАРСТВЕННОЕ ПИСЬМО
              </h1>
              <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 text-center max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Настоящим письмом администрация кафе <span className="font-semibold text-foreground">"14 регион"</span> выражает 
                искреннюю благодарность
              </p>

              <div className="py-6 border-y-2 border-primary/20">
                <h2 className="text-3xl font-bold text-foreground">
                  Дмитриевой Прасковье Ивановне
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  За добросовестный труд, высокий профессионализм и ответственное отношение 
                  к выполнению своих обязанностей.
                </p>
                <p>
                  Ваша преданность делу, внимание к деталям и стремление создавать уютную 
                  атмосферу для наших гостей являются примером для всего коллектива.
                </p>
                <p>
                  Благодаря вашему вкладу кафе "14 регион" продолжает радовать гостей 
                  качественным обслуживанием и домашним уютом.
                </p>
              </div>

              <div className="pt-8">
                <p className="text-lg font-semibold text-foreground">
                  Желаем вам дальнейших успехов, крепкого здоровья и благополучия!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 pt-12 max-w-2xl mx-auto">
              <div className="text-center space-y-4">
                <div className="border-t-2 border-foreground/20 pt-2">
                  <p className="text-sm text-muted-foreground">Директор кафе "14 регион"</p>
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="text-lg font-medium text-foreground">________________</div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="border-t-2 border-foreground/20 pt-2">
                  <p className="text-sm text-muted-foreground">Дата</p>
                </div>
                <div className="h-12 flex items-center justify-center">
                  <div className="text-lg font-medium text-foreground">
                    {new Date().toLocaleDateString('ru-RU', { 
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <div className="inline-flex items-center gap-2 text-primary">
                <Icon name="MapPin" size={18} />
                <span className="text-sm">г. Москва, ул. Примерная, д. 14</span>
              </div>
              <div className="inline-flex items-center gap-2 text-primary ml-6">
                <Icon name="Phone" size={18} />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <div className="text-[12rem] font-bold text-primary">14</div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground print:hidden">
          <p>Благодарственное письмо · Кафе "14 регион"</p>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            background: white;
            padding: 0;
            margin: 0;
          }
          @page {
            margin: 0;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
