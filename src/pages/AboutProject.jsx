import React from 'react';
import { BookOpen, Target, Users, Globe, Calendar, CheckCircle, ArrowRight, Lightbulb, Heart, Award } from 'lucide-react';

export default function AboutProject() {
  const projectPhases = [
    {
      phase: 1,
      title: 'Pilot Mərhələ',
      duration: '3 ay',
      description: '10 nəfər yaşlı ilə müsahibələr aparılacaq və sınaq video çəkilişləri hazırlanacaq.',
      goals: [
        'Layihənin işləmə mexanizminin yoxlanması',
        'İlkin feedback toplama və analiz',
        'Metodologiyanın təkmilləşdirilməsi'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      phase: 2,
      title: 'Genişləndirmə Mərhələsi',
      duration: '6 ay',
      description: '50 nəfərin hekayəsi toplanacaq və rəqəmsal platformaya yüklənəcək.',
      goals: [
        'İlkin rəqəmsal arxivin yaradılması',
        'Materialların sistemləşdirilməsi',
        'Platform funksionallığının təkmilləşdirilməsi'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      phase: 3,
      title: 'Davamlı Mərhələ',
      duration: 'Davamlı',
      description: 'Hər il ən azı 100 hekayə toplanacaq, paylaşılacaq və nəşr olunacaq.',
      goals: [
        'Uzun müddətli davamlılıq təmin edilməsi',
        'Kitab şəklində materialların nəşri',
        'Məktəb və universitetlərdə təqdimat'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const projectFeatures = [
    {
      icon: BookOpen,
      title: 'Rəqəmsal Arxiv',
      description: 'Video, audio və yazılı materialların sistemli saxlanması',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Könüllü Şəbəkəsi',
      description: 'DOST könüllülərinin fəal iştirakı və koordinasiyası',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Onlayn Platform',
      description: 'Hekayələrin geniş auditoriyaya çatdırılması',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Nəşriyyat Fəaliyyəti',
      description: 'Ən maraqlı hekayələrin kitab şəklində çapı',
      color: 'bg-orange-500'
    }
  ];

  const expectedOutcomes = [
    {
      title: 'Mədəni İrsin Qorunması',
      description: 'Azərbaycanın zəngin mədəni yaddaşının rəqəmsal formada arxivləşdirilməsi',
      percentage: '100%',
      color: 'text-blue-600'
    },
    {
      title: 'Nəsillərarası Əlaqələr',
      description: 'Gənc və yaşlı nəsil arasında güclü körpülərin qurulması',
      percentage: '85%',
      color: 'text-purple-600'
    },
    {
      title: 'Sosial Təsir',
      description: 'Yaşlı insanların özünü dəyərli hiss etməsi və sosial inteqrasiya',
      percentage: '90%',
      color: 'text-green-600'
    },
    {
      title: 'Təhsil Dəyəri',
      description: 'Məktəb və universitetlərdə dərs materialı kimi istifadə',
      percentage: '75%',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-6 rounded-full">
                <Lightbulb size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#63358A]">Layihə</span> Haqqında
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              "Rəqəmsal Nənə-Baba – Hekayələrdən Gələcəyə" layihəsi yaşlı nəslin dəyərli xatirələrini 
              rəqəmsal formada qoruyub gələcək nəsillərə ötürməyi hədəfləyən innovativ bir təşəbbüsdür.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-[#63358A]" />
                <span>3 mərhələli icra planı</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2 text-[#63358A]" />
                <span>DOST könüllüləri</span>
              </div>
              <div className="flex items-center">
                <Target size={16} className="mr-2 text-[#63358A]" />
                <span>Mədəni irsin qorunması</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layihənin <span className="text-[#63358A]">Vizyonu</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hər bir yaşlı insanın həyat hekayəsi bir kitabdır. Bizim məqsədimiz bu kitabları 
              gələcək nəsillər üçün açıq saxlamaqdır.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Niyə Bu Layihə Vacibdir?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#63358A] p-2 rounded-full mr-4 mt-1">
                    <Heart size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mədəni Yaddaşın Qorunması</h4>
                    <p className="text-gray-600">Hər bir yaşlı insanın xatirələrində Azərbaycanın tarixi və mədəniyyəti yaşayır.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#63358A] p-2 rounded-full mr-4 mt-1">
                    <Users size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Nəsillərarası Körpü</h4>
                    <p className="text-gray-600">Gənc və yaşlı nəsil arasında ünsiyyət və anlayış yaradır.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#63358A] p-2 rounded-full mr-4 mt-1">
                    <Globe size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sosial Təsir</h4>
                    <p className="text-gray-600">Yaşlı insanların özünü dəyərli və lazımlı hiss etməsinə kömək edir.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#63358A] to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Layihənin Əhatə Dairəsi</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Pilot mərhələ</span>
                  <span className="font-bold">10 hekayə</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Genişləndirmə</span>
                  <span className="font-bold">50 hekayə</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>İllik məqsəd</span>
                  <span className="font-bold">100+ hekayə</span>
                </div>
                <div className="border-t border-white/20 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Ümumi hədəf</span>
                    <span>1000+ hekayə</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layihənin <span className="text-[#63358A]">Xüsusiyyətləri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Müasir texnologiya və ənənəvi hekayəçiliyin birləşməsi ilə yaradılan unikal platform.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`${feature.color} p-3 rounded-full w-fit mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#63358A]">İcra</span> Mərhələləri
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Layihəmiz üç əsas mərhələdən ibarət olan sistemli və davamlı bir plan əsasında həyata keçiriləcək.
            </p>
          </div>
          
          <div className="space-y-8">
            {projectPhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-r ${phase.color} p-8 rounded-2xl text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-white p-3 rounded-full mr-4">
                        <span className="text-2xl font-bold text-gray-900">{phase.phase}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                        <p className="text-lg opacity-90">{phase.duration}</p>
                      </div>
                    </div>
                    {index < projectPhases.length - 1 && (
                      <ArrowRight size={32} className="text-white opacity-60" />
                    )}
                  </div>
                  <p className="text-lg opacity-90 mb-6">{phase.description}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {phase.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                        <span className="text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gözlənilən <span className="text-[#63358A]">Nəticələr</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Layihəmizin həyata keçirilməsi ilə əldə ediləcək konkret nəticələr və sosial təsir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expectedOutcomes.map((outcome, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{outcome.title}</h3>
                  <span className={`text-2xl font-bold ${outcome.color}`}>{outcome.percentage}</span>
                </div>
                <p className="text-gray-600 mb-4">{outcome.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${outcome.color.replace('text-', 'bg-')}`}
                    style={{ width: outcome.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#63358A] to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Layihəyə Dəstək Olun
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Bu mühüm sosial layihənin həyata keçirilməsində bizə dəstək olun və 
            Azərbaycanın mədəni yaddaşının qorunmasına töhfə verin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://konullu.dost.gov.az/' target='blank' className="bg-white text-[#63358A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Könüllü Qeydiyyatı
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}