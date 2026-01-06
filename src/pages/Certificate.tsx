import Icon from '@/components/ui/icon';

const Certificate = () => {
  const printCertificate = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{
      backgroundImage: 'url(https://cdn.poehali.dev/files/Новый точечный рисунок.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="max-w-4xl w-full">
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={printCertificate}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            <Icon name="Printer" size={20} />
            Распечатать
          </button>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-16 shadow-2xl relative overflow-hidden border-8 border-yellow-500">

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4 gap-3">
                <span className="text-5xl">🎉</span>
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-xl">
                  <Icon name="Award" size={40} className="text-white" />
                </div>
                <span className="text-5xl">🎉</span>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-700 via-yellow-600 to-red-700 bg-clip-text text-transparent">
                БЛАГОДАРСТВЕННОЕ ПИСЬМО
              </h1>
              <div className="flex justify-center gap-2">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600 rounded-full"></div>
                <span className="text-2xl">🎄</span>
                <div className="w-24 h-1 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-600 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-800 leading-relaxed">
                В преддверии Нового года администрация кафе <span className="font-bold text-red-700">"14 регион"</span> выражает 
                искреннюю благодарность
              </p>

              <div className="py-5 px-8 bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 rounded-lg border-3 border-yellow-500 shadow-lg">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
                  Максимовой Инне Макаровне
                </h2>
              </div>

              <div className="space-y-5 text-lg text-gray-800 leading-relaxed">
                <p>
                  За безупречный труд на протяжении всего года, высокий профессионализм 
                  и преданность своему делу. Ваше трудолюбие и ответственность 
                  заслуживают самой высокой оценки.
                </p>
                <p>
                  Благодаря Вашему мастерству, теплоте и заботе о гостях, 
                  кафе "14 регион" создаёт по-настоящему домашнюю и праздничную атмосферу. 
                  Вы являетесь настоящим украшением нашего коллектива.
                </p>
                <p className="font-semibold text-red-700">
                  Спасибо за Ваш вклад в успех нашего кафе и за то тепло, 
                  которое Вы дарите каждому гостю!
                </p>
              </div>

              <div className="pt-5 px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg text-white shadow-xl">
                <p className="text-xl font-bold mb-2">
                  🎊 С Наступающим Новым 2026 Годом! 🎊
                </p>
                <p className="text-base">
                  Желаем Вам крепкого здоровья, счастья, благополучия и новых профессиональных успехов!
                </p>
                <p className="text-sm mt-2 italic opacity-90">
                  Пусть каждый день приносит радость, а все мечты исполняются! ✨
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 pt-8 max-w-2xl mx-auto">
              <div className="text-center space-y-3">
                <div className="border-t-2 border-gray-400 pt-2">
                  <p className="text-sm text-gray-600">Директор кафе "14 регион"</p>
                </div>
                <div className="h-10 flex items-center justify-center">
                  <div className="text-base font-medium text-gray-800">________________</div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="border-t-2 border-gray-400 pt-2">
                  <p className="text-sm text-gray-600">Дата</p>
                </div>
                <div className="h-10 flex items-center justify-center">
                  <div className="text-base font-medium text-gray-800">________________</div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <p className="text-base font-semibold text-gray-700">с. Магарас, 2026 г.</p>
            </div>

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