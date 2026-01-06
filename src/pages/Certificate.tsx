import Icon from '@/components/ui/icon';

const Certificate = () => {
  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={printCertificate}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Icon name="Printer" size={20} />
            Распечатать
          </button>
        </div>

        <div className="bg-white p-16 shadow-2xl relative overflow-hidden border-8 border-blue-600">
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
          
          <div className="absolute top-6 left-6 text-6xl opacity-20">❄️</div>
          <div className="absolute top-12 right-12 text-5xl opacity-20">🎄</div>
          <div className="absolute bottom-12 left-16 text-5xl opacity-20">⭐</div>
          <div className="absolute bottom-6 right-6 text-6xl opacity-20">❄️</div>
          
          <div className="absolute top-24 right-24 text-4xl opacity-15 animate-pulse">✨</div>
          <div className="absolute bottom-32 left-24 text-4xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}>✨</div>

          <div className="relative z-10 space-y-10">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4 gap-3">
                <span className="text-5xl">🎉</span>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
                <span className="text-5xl">🎉</span>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                БЛАГОДАРСТВЕННОЕ ПИСЬМО
              </h1>
              <p className="text-xl text-blue-600 font-semibold italic">К Новому 2026 году</p>
              <div className="flex justify-center gap-2">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-blue-500 rounded-full"></div>
                <span className="text-2xl">🎄</span>
                <div className="w-20 h-1 bg-gradient-to-l from-transparent via-blue-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-8 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                В преддверии Нового года администрация кафе <span className="font-bold text-blue-700">"14 регион"</span> выражает 
                искреннюю благодарность
              </p>

              <div className="py-6 px-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-lg border-2 border-blue-300 shadow-lg">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Максимовой Инне Макаровне
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  За безупречный труд на протяжении всего года, высокий профессионализм 
                  и преданность своему делу. Ваша трудолюбие и ответственность 
                  заслуживают самой высокой оценки.
                </p>
                <p>
                  Благодаря Вашему мастерству, теплоте и заботе о гостях, 
                  кафе "14 регион" создаёт по-настоящему домашнюю и праздничную атмосферу. 
                  Вы являетесь настоящим украшением нашего коллектива.
                </p>
                <p className="font-semibold text-blue-700">
                  Спасибо за Ваш вклад в успех нашего кафе и за то тепло, 
                  которое Вы дарите каждому гостю!
                </p>
              </div>

              <div className="pt-6 px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white shadow-xl">
                <p className="text-xl font-bold mb-2">
                  🎊 С Наступающим Новым 2026 Годом! 🎊
                </p>
                <p className="text-base">
                  Желаем Вам крепкого здоровья, счастья, благополучия и новых профессиональных успехов!
                </p>
                <p className="text-sm mt-3 italic opacity-90">
                  Пусть каждый день приносит радость, а все мечты исполняются! ✨
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

          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <div className="text-[12rem] font-bold text-primary">14</div>
          </div>
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