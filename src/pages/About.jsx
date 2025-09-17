import React from 'react';
import { Users, Award, Globe, MapPin, Calendar, Star } from 'lucide-react';
import GulareDost from '../assets/media/gularedost.jpeg';
import AylaDost from '../assets/media/ayladost.jpeg';
import NezrinDost from '../assets/media/nezrindost.jpeg';
import LacinDost from '../assets/media/lacindost.jpeg';
import SeymaDost from '../assets/media/seymadost.jpeg';
import FatimeDost from '../assets/media/fatimedost.jpeg';

export default function About() {
  const teamMembers = [
  {
    name: 'Gülarə Nemətova',
    role: 'Layihə Rəhbəri',
    description: 'Layihənin açılış və bağlanış təqdimatçısı, komanda koordinatoru',
    img: GulareDost  
  },
  {
    name: 'Fatimə Allahverdiyeva',
    role: 'Problem Analitiki və İcra Planı Mütəxəssisi',
    description: 'Problem təhlili və SWOT analizi, icra planının hazırlanması',
    img: FatimeDost
  },
  {
    name: 'Ayla Aslanova',
    role: 'Beynəlxalq Təcrübə Mütəxəssisi',
    description: 'Dünya təcrübəsinin araşdırılması və analizi',
    img: AylaDost
  },
  {
    name: 'Nəzrin Həsənli',
    role: 'Yerli Təcrübə Analitiki',
    description: 'Azərbaycan kontekstində mövcud təcrübələrin araşdırılması',
    img: NezrinDost
  },
  {
    name: 'Laçın Hümbətova',
    role: 'Məqsəd və Strategiya Mütəxəssisi',
    description: 'Layihənin məqsədlərinin formalaşdırılması və strategiya hazırlanması',
    img: LacinDost
  },
  {
    name: 'Şeyma Abbasova',
    role: 'Təklif və Həll Yolları Mütəxəssisi',
    description: 'Praktiki təkliflərin hazırlanması və həll yollarının təqdimi',
    img: SeymaDost
  }
];


  const internationalExperiences = [
    {
      country: 'ABŞ',
      project: 'StoryCorps',
      description: 'Könüllülər müxtəlif insanlardan hekayələr toplayır və Milli Səs Arxivində saxlayır.',
      icon: '🇺🇸'
    },
    {
      country: 'Almaniya',
      project: 'Zeitzeugenbörse',
      description: 'Yaşlı nəslin müharibə və həyat xatirələrini rəqəmsal olaraq gənclərlə paylaşır.',
      icon: '🇩🇪'
    },
    {
      country: 'Yaponiya',
      project: 'Oral History Project',
      description: 'Kəndlərdə yaşayan yaşlı insanların həyat hekayələrini toplayaraq universitetlərdə dərs materialı kimi istifadə edir.',
      icon: '🇯🇵'
    }
  ];

  const swotAnalysis = {
    strengths: [
      'DOST könüllülərinin fəal iştirakı',
      'Sosial yönümlü və innovativ ideya',
      'Güclü komanda işi və təşkilatçılıq',
      'Mədəni dəyərlərin qorunması missiyası'
    ],
    weaknesses: [
      'Texniki avadanlıq tələbi',
      'Maliyyə resurslarına asılılıq',
      'İnsan resurslarının məhdudluğu',
      'Texnoloji bacarıq tələbi'
    ],
    opportunities: [
      'Beynəlxalq əməkdaşlıq imkanları',
      'Media və ictimai dəstək potensialı',
      'Təhsil proqramlarına inteqrasiya',
      'Dövlət dəstəyi alma imkanı'
    ],
    threats: [
      'Yaşlıların müsahibəyə razılıq verməməsi',
      'Məxfilik və hüquqi məsələlər',
      'Rəqib layihələrin olması',
      'Texnoloji dəyişikliklər'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-6 rounded-full">
                <Users size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Layihə <span className="text-[#63358A]">Haqqında</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              "Rəqəmsal Nənə-Baba – Hekayələrdən Gələcəyə" layihəsi 1DK-74 qrupunun könüllüləri tərəfindən 
              yaşlı nəslin dəyərli xatirələrini qorumaq və gələcək nəsillərə ötürmək məqsədi ilə hazırlanmışdır.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-[#63358A]" />
                <span>15 dəqiqəlik təqdimat</span>
              </div>
              <div className="flex items-center">
                <Users size={16} className="mr-2 text-[#63358A]" />
                <span>6 nəfər komanda üzvü</span>
              </div>
              <div className="flex items-center">
                <Award size={16} className="mr-2 text-[#63358A]" />
                <span>1DK-74 Qrup Layihəsi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bizim <span className="text-[#63358A]">Komanda</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hər biri öz sahəsində ixtisaslaşmış və layihənin müxtəlif aspektlərində məsuliyyət daşıyan komanda üzvlərimiz.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative object h-70 w-full">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-white p-3 rounded-full">
                      <Star size={24} className="text-yellow-500" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#63358A] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Experience */}
      {/* ... digərləri eyni qalır ... */}
    </div>
  );
}
