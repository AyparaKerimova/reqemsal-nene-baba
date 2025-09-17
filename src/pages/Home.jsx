import React from 'react';
import { Users, BookOpen, Heart, Target, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#63358A] to-purple-600 opacity-10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-4 rounded-full">
                  <BookOpen size={48} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-[#63358A]">Rəqəmsal</span> Nənə-Baba
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Hekayələrdən Gələcəyə – Yaşlı nəslin dəyərli xatirələrini gələcək nəsillərə ötürən rəqəmsal platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about-project" className="bg-[#63358A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105">
                  Layihə Haqqında
                </Link>
                <Link to="/stories" className="border-2 border-[#63358A] text-[#63358A] px-8 py-4 rounded-lg font-semibold hover:bg-[#63358A] hover:text-white transition-colors">
                  Hekayələri Kəşf Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nə <span className="text-[#63358A]">Problem</span> Həll Edirik?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Müasir dövrdə texnologiya sürətlə inkişaf edir, amma yaşlı nəsil və onların həyat hekayələri unudulmaq təhlükəsi ilə üz-üzədir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="bg-red-500 p-3 rounded-full w-fit mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nəsillərarası Əlaqələr Zəifləyir</h3>
              <p className="text-gray-700">
                Gənc nəsil ilə yaşlı nəsil arasında ünsiyyət azalır və dəyərli təcrübələr ötürülmür.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl">
              <div className="bg-yellow-500 p-3 rounded-full w-fit mb-6">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Yaddaşlar İtirilir</h3>
              <p className="text-gray-700">
                Hər bir ailədə tarix yaradan insanlar var, amma bu yaddaşlar rəqəmsal formaya salınmır.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="bg-blue-500 p-3 rounded-full w-fit mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mədəni İrs Təhlükədə</h3>
              <p className="text-gray-700">
                Azərbaycanın zəngin mədəni irsi və həyat hekayələri gələcək nəsillərə ötürülmür.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layihəmizin <span className="text-[#63358A]">Məqsədləri</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yaşlı nəslin dəyərli hekayələrini qoruyub gələcəyə ötürməklə sosial həssas qrupların özünü dəyərli hiss etməsinə dəstək olmaq.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-3 rounded-full w-fit mb-4">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Xatirələrin Ötürülməsi</h3>
              <p className="text-gray-600 text-sm">Yaşlı nəslin xatirələrini gələcək nəsillərə ötürmək</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-3 rounded-full w-fit mb-4">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Könüllü Fəaliyyəti</h3>
              <p className="text-gray-600 text-sm">Könüllülərin sosial fəaliyyətini artırmaq</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-3 rounded-full w-fit mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Rəqəmsal Arxiv</h3>
              <p className="text-gray-600 text-sm">Azərbaycanda rəqəmsal yaddaş platforması yaratmaq</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-3 rounded-full w-fit mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sosial Dəstək</h3>
              <p className="text-gray-600 text-sm">Sosial həssas qrupların özünü dəyərli hiss etməsinə dəstək</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Plan Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#63358A]">İcra</span> Planımız
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Layihəmiz üç mərhələdən ibarət olan davamlı və sistemli bir plan əsasında həyata keçiriləcək.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-full mr-4">
                  <Calendar size={24} className="text-[#63358A]" />
                </div>
                <h3 className="text-2xl font-bold">1️⃣ Pilot Mərhələ (3 ay)</h3>
              </div>
              <p className="text-lg opacity-90 mb-4">
                10 nəfər yaşlı ilə müsahibələr aparılacaq və sınaq video çəkilişləri hazırlanacaq.
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Layihənin işləmə mexanizminin yoxlanması</li>
                <li>İlkin feedback toplama və analiz</li>
                <li>Metodologiyanın təkmilləşdirilməsi</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-full mr-4">
                  <Users size={24} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">2️⃣ Genişləndirmə Mərhələsi (6 ay)</h3>
              </div>
              <p className="text-lg opacity-90 mb-4">
                50 nəfərin hekayəsi toplanacaq və rəqəmsal platformaya yüklənəcək.
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>İlkin rəqəmsal arxivin yaradılması</li>
                <li>Materialların sistemləşdirilməsi</li>
                <li>Platform funksionallığının təkmilləşdirilməsi</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-8 rounded-2xl text-white">
              <div className="flex items-center mb-4">
                <div className="bg-white p-2 rounded-full mr-4">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">3️⃣ Davamlı Mərhələ</h3>
              </div>
              <p className="text-lg opacity-90 mb-4">
                Hər il ən azı 100 hekayə toplanacaq, paylaşılacaq və nəşr olunacaq.
              </p>
              <ul className="list-disc list-inside space-y-2 opacity-90">
                <li>Uzun müddətli davamlılıq təmin edilməsi</li>
                <li>Kitab şəklində materialların nəşri</li>
                <li>Məktəb və universitetlərdə təqdimat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#63358A] to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bizə Qoşulun və Gələcəyə Töhfə Verin
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Yaşlı nəslin dəyərli hekayələrini qoruyub gələcək nəsillərə ötürən bu mühüm layihədə iştirak edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://konullu.dost.gov.az/' target='blank' className="bg-white text-[#63358A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Könüllü Ol
            </a>
            <a href='https://konullu.dost.gov.az/sehife/26' target='blank' className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#63358A] transition-colors">
              Əlaqə Saxla
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}