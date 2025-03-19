import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

// Adding a more appropriate mosque background image URL - Blue Mosque
const mosqueBackgroundUrl = 'https://images.unsplash.com/photo-1545424436-1be2e3c7b73b?q=80&w=2000&auto=format&fit=crop'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [gradientClass, setGradientClass] = useState('from-emerald-950/95 via-blue-900/95 to-indigo-950/95');

  // Update gradient based on score when quiz is complete
  useEffect(() => {
    if (showScore) {
      if (score <= 5) {
        setGradientClass('from-red-900/95 via-red-800/95 to-red-700/95');
      } else if (score >= 6) {
        setGradientClass('from-green-900/95 via-green-800/95 to-emerald-700/95');
      }
    } else {
      setGradientClass('from-emerald-950/95 via-blue-900/95 to-indigo-950/95');
    }
  }, [showScore, score]);

  const questions = [
    {
      questionText: 'Bishee ayaa Ramadan ah bisha Islaamka?',
      answerOptions: [
        { answerText: 'Shawwal', isCorrect: false },
        { answerText: 'Dhul-Hijjah', isCorrect: false },
        { answerText: 'Ramadan', isCorrect: true },
        { answerText: 'Rajab', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay caasimadda Soomaaliya?',
      answerOptions: [
        { answerText: 'Hargeysa', isCorrect: false },
        { answerText: 'Muqdisho', isCorrect: true },
        { answerText: 'Kismaayo', isCorrect: false },
        { answerText: 'Boosaaso', isCorrect: false },
      ],
    },
    {
      questionText: 'Kee ka mid ah kuwan ayaa ka mid ah Tiirarka Shan ee Islaamka?',
      answerOptions: [
        { answerText: 'Xajka', isCorrect: true },
        { answerText: 'Ixsaan', isCorrect: false },
        { answerText: 'Wudu', isCorrect: false },
        { answerText: 'Jimce', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay dharka dhaqanka ee dumarka Soomaaliyeed?',
      answerOptions: [
        { answerText: 'Saari', isCorrect: false },
        { answerText: 'Thobe', isCorrect: false },
        { answerText: 'Dirac', isCorrect: true },
        { answerText: 'Xijaab', isCorrect: false },
      ],
    },
    {
      questionText: 'Yaa ahaa nebi ugu horreeyay Islaamka?',
      answerOptions: [
        { answerText: 'Muxammad ﷺ', isCorrect: false },
        { answerText: 'Ibraahim عليه السلام', isCorrect: false },
        { answerText: 'Aadam عليه السلام', isCorrect: true },
        { answerText: 'Nuux عليه السلام', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay xoolaha ugu badan ee ay xoolo dhaqato Soomaalidu dhaqaan?',
      answerOptions: [
        { answerText: 'Doofaarro', isCorrect: false },
        { answerText: 'Geel', isCorrect: true },
        { answerText: 'Digaag', isCorrect: false },
        { answerText: 'Fardo', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay kitaabka quduuska ah ee Islaamka?',
      answerOptions: [
        { answerText: 'Baybal', isCorrect: false },
        { answerText: 'Tawreed', isCorrect: false },
        { answerText: 'Injiil', isCorrect: false },
        { answerText: 'Qur\'aan', isCorrect: true },
      ],
    },
    {
      questionText: 'Waa maxay luuqadda ugu badan ee lagu hadlo Soomaaliya?',
      answerOptions: [
        { answerText: 'Carabi', isCorrect: false },
        { answerText: 'Soomaali', isCorrect: true },
        { answerText: 'Swaaxili', isCorrect: false },
        { answerText: 'Ingiriisi', isCorrect: false },
      ],
    },
    {
      questionText: 'Imisa salaad ayaa waajib ah maalintiiba?',
      answerOptions: [
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '5', isCorrect: true },
        { answerText: '6', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay cuntada caanka ah ee Soomaalida?',
      answerOptions: [
        { answerText: 'Bariis', isCorrect: false },
        { answerText: 'Canjeero', isCorrect: true },
        { answerText: 'Baasto', isCorrect: false },
        { answerText: 'Hilib', isCorrect: false },
      ],
    },
    {
      questionText: 'Makka waxay ku taallaa wadanka?',
      answerOptions: [
        { answerText: 'Masar', isCorrect: false },
        { answerText: 'Sacuudi Carabiya', isCorrect: true },
        { answerText: 'Soomaaliya', isCorrect: false },
        { answerText: 'Yordan', isCorrect: false },
      ],
    },
    {
      questionText: 'Webi Shabeelle iyo Webi Jubba waxay ku yaalaan?',
      answerOptions: [
        { answerText: 'Koonfurta Soomaaliya', isCorrect: true },
        { answerText: 'Waqooyi Soomaaliya', isCorrect: false },
        { answerText: 'Bariga Soomaaliya', isCorrect: false },
        { answerText: 'Galbeedka Soomaaliya', isCorrect: false },
      ],
    },
    {
      questionText: 'Kintee ayaa ah bilaha Islaamka ee ugu horreeya?',
      answerOptions: [
        { answerText: 'Safar', isCorrect: false },
        { answerText: 'Rajab', isCorrect: false },
        { answerText: 'Muharram', isCorrect: true },
        { answerText: 'Ramadan', isCorrect: false },
      ],
    },
    {
      questionText: 'Calanka Soomaaliya midabkee ayuu leeyahay?',
      answerOptions: [
        { answerText: 'Caddaan', isCorrect: false },
        { answerText: 'Casaan', isCorrect: false },
        { answerText: 'Guduud', isCorrect: false },
        { answerText: 'Buluug', isCorrect: true },
      ],
    },
    {
      questionText: 'Tukashada Jimcaha waxay waajib ku tahay?',
      answerOptions: [
        { answerText: 'Dumarka', isCorrect: false },
        { answerText: 'Carruurta', isCorrect: false },
        { answerText: 'Raqaalka', isCorrect: false },
        { answerText: 'Ragga', isCorrect: true },
      ],
    },
    {
      questionText: 'Waa maxay magaalada labaad ee ugu weyn Soomaaliya?',
      answerOptions: [
        { answerText: 'Muqdisho', isCorrect: false },
        { answerText: 'Hargeysa', isCorrect: true },
        { answerText: 'Garoowe', isCorrect: false },
        { answerText: 'Kismaayo', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay salaadda lagu tukado subaxnimada?',
      answerOptions: [
        { answerText: 'Duhur', isCorrect: false },
        { answerText: 'Maqrib', isCorrect: false },
        { answerText: 'Subax', isCorrect: true },
        { answerText: 'Cisho', isCorrect: false },
      ],
    },
    {
      questionText: 'Geela caanaha waa muhiim Soomaalida, imisa maalmood ayuu geel ku noolaan karaa biyaha la\'aan?',
      answerOptions: [
        { answerText: 'Ilaa 5 maalmood', isCorrect: false },
        { answerText: 'Ilaa 10 maalmood', isCorrect: false },
        { answerText: 'Ilaa 20 maalmood', isCorrect: false },
        { answerText: 'Ilaa 30 maalmood', isCorrect: true },
      ],
    },
    {
      questionText: 'Goormee ayaa la soomaa bisha Ramadan?',
      answerOptions: [
        { answerText: 'Habeenkii', isCorrect: false },
        { answerText: 'Maalintii', isCorrect: true },
        { answerText: 'Subaxdii', isCorrect: false },
        { answerText: 'Galabtii', isCorrect: false },
      ],
    },
    {
      questionText: 'Waa maxay midka aan laga soomi karin bisha Ramadan?',
      answerOptions: [
        { answerText: 'Cidda xanuunsan', isCorrect: false },
        { answerText: 'Maalintii Ciidda', isCorrect: true },
        { answerText: 'Haweeneyda uurka leh', isCorrect: false },
        { answerText: 'Musaafurka', isCorrect: false },
      ],
    },
  ];

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      toast.success('Waad saxday!', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      toast.error(`Khalad! Jawaabta saxda ah waa: ${questions[currentQuestion].answerOptions.find(option => option.isCorrect)?.answerText}`, {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      // Show completion toast after a slight delay
      setTimeout(() => {
        if (score + (isCorrect ? 1 : 0) === questions.length) {
          toast('Dhibco dhameystiran! MashaAllah! 🎉', {
            icon: '🏆',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 5000,
          });
        } else if (score + (isCorrect ? 1 : 0) >= questions.length / 2) {
          toast('Mahadsanid waad guulaysatay Hambalyo🎉', {
            icon: '🎓',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 5000,
          });
        } else {
          toast('Mar kale baad isku daysan kartaa! InshaAllah! 📚', {
            icon: '📝',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 5000,
          });
        }
      }, 800);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    toast('Waydiimaha dib ayaa loo bilaabay! Bismillah 🍀', {
      icon: '🔄',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Mosque background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('${mosqueBackgroundUrl}')` }}
      >
        {/* Gradient overlay - changes based on score */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-colors duration-1000`}></div>
      </div>
      
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-emerald-500/20 z-10 relative">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">waydiimuhu way dhammaadeen</h2>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-500">
                {score}
              </span>
              <span className="text-2xl text-white"> / {questions.length}</span>
            </div>
            <p className="text-emerald-100 mb-6">
              {score === questions.length ? 'Dhibco dhameystiran! MashaAllah!' : 
               score >= questions.length / 2 ? 'Mahadsanid waad guulaysatay Hambalyo🎉' : 'Mar kale isku day! InshaAllah!'}
            </p>
            <button 
              onClick={resetQuiz}
              className="px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-white font-medium transition-all"
            >
              Mar Kale Isku Day
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-emerald-100">Su'aal {currentQuestion + 1}/{questions.length}</span>
                <span className="text-sm font-medium text-emerald-100">Dhibco: {score}</span>
              </div>
              <div className="w-full bg-gray-200/20 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2.5 rounded-full" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">{questions[currentQuestion].questionText}</h2>
            
            <div className="space-y-3">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answerOption.isCorrect)}
                  className="w-full text-left p-4 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg text-white font-medium transition-all border border-emerald-500/20"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App
