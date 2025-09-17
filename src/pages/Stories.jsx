import React, { useState } from 'react';
import { Play, Pause, Volume2, Heart, Share2, Calendar, MapPin, User, Quote, BookOpen, Filter, Search } from 'lucide-react';

export default function Stories() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [playingStory, setPlayingStory] = useState(null);

  const categories = [
    { id: 'all', name: 'Hamısı', count: 24 },
    { id: 'childhood', name: 'Uşaqlıq', count: 8 },
    { id: 'war', name: 'Müharibə', count: 6 },
    { id: 'traditions', name: 'Ənənələr', count: 5 },
    { id: 'family', name: 'Ailə', count: 5 }
  ];

  const stories = [
    {
      id: 1,
      title: 'Bakının Köhnə Günləri',
      narrator: 'Həsən müəllim',
      age: 78,
      location: 'Bakı, İçərişəhər',
      date: '15 Oktyabr 2024',
      duration: '12:34',
      category: 'childhood',
      description: 'İçərişəhərdə keçən uşaqlıq illərindən xatirələr və köhnə Bakının mənzərələri.',
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 45,
      excerpt: 'O vaxtlar İçərişəhərin daş küçələrində oynadığımız oyunlar, qonşuların bir-birinə olan mehribanlığı...'
    },
    {
      id: 2,
      title: 'Nənəmin Çörək Resepti',
      narrator: 'Gülnar xanım',
      age: 82,
      location: 'Gəncə',
      date: '12 Oktyabr 2024',
      duration: '8:45',
      category: 'traditions',
      description: 'Nəsildən-nəslə ötürülən ənənəvi çörək bişirmə sirləri və ailə reseptləri.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 67,
      excerpt: 'Nənəm deyərdi ki, çörəyin dadı əllərin məhəbbətindən gəlir. Hər səhər tezdən...'
    },
    {
      id: 3,
      title: 'Qarabağın Gözəl Günləri',
      narrator: 'Məmməd ağa',
      age: 85,
      location: 'Şuşa',
      date: '10 Oktyabr 2024',
      duration: '15:22',
      category: 'childhood',
      description: 'Şuşanın mədəni həyatı, muğam məclisləri və doğma yurdun gözəllikləri.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 89,
      excerpt: 'Şuşanın hər daşı, hər küçəsi bizim üçün müqəddəs idi. Muğam səsləri...'
    },
    {
      id: 4,
      title: 'Müharibə İllərindən Xatirələr',
      narrator: 'Rəşid baba',
      age: 91,
      location: 'Sumqayıt',
      date: '8 Oktyabr 2024',
      duration: '18:56',
      category: 'war',
      description: 'İkinci Dünya Müharibəsi illərindən çətin günlər və xalqın birliyi.',
      image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 123,
      excerpt: 'Müharibə illərində hamımız bir ailə kimi yaşayırdıq. Çətinliklər bizi...'
    },
    {
      id: 5,
      title: 'Kənd Həyatının Gözəllikləri',
      narrator: 'Fatma nənə',
      age: 76,
      location: 'Quba',
      date: '5 Oktyabr 2024',
      duration: '11:18',
      category: 'traditions',
      description: 'Kənd həyatının sadəliyi, təbiətlə yaşamaq və ənənəvi peşələr.',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 56,
      excerpt: 'Kənddə hər səhər xoruzun banı ilə oyanardıq. Təmiz hava, təmiz su...'
    },
    {
      id: 6,
      title: 'Ailə Dəyərləri və Tərbiyə',
      narrator: 'Əli dədə',
      age: 88,
      location: 'Lənkəran',
      date: '3 Oktyabr 2024',
      duration: '14:33',
      category: 'family',
      description: 'Ailədə uşaq tərbiyəsi, böyüklərə hörmət və nəsil dəyərlərinin ötürülməsi.',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 78,
      excerpt: 'Bizim vaxtımızda uşaqlar böyüklərin sözünü dinləyərdi. Hörmət, ədəb...'
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.narrator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const togglePlay = (storyId) => {
    setPlayingStory(playingStory === storyId ? null : storyId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-6 rounded-full">
                <BookOpen size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-[#63358A]">Hekayələr</span> Kolleksiyası
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Yaşlı nəslin dəyərli xatirələri, həyat təcrübələri və müdriklikləri ilə dolu 
              rəqəmsal arxivimizi kəşf edin.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Volume2 size={16} className="mr-2 text-[#63358A]" />
                <span>24 Audio Hekayə</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2 text-[#63358A]" />
                <span>18 Nağılçı</span>
              </div>
              <div className="flex items-center">
                <Heart size={16} className="mr-2 text-[#63358A]" />
                <span>500+ Bəyənmə</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Hekayələrdə axtarış..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#63358A] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-[#63358A] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => togglePlay(story.id)}
                      className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all transform hover:scale-110"
                    >
                      {playingStory === story.id ? (
                        <Pause size={24} className="text-[#63358A]" />
                      ) : (
                        <Play size={24} className="text-[#63358A] ml-1" />
                      )}
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#63358A] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-purple-100 text-[#63358A] px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === story.category)?.name}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Heart size={14} className="mr-1" />
                      {story.likes}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <User size={14} className="mr-2" />
                    <span className="mr-4">{story.narrator}, {story.age} yaş</span>
                    <MapPin size={14} className="mr-2" />
                    <span>{story.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    {story.date}
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-start">
                      <Quote size={16} className="text-[#63358A] mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm italic leading-relaxed">
                        {story.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => togglePlay(story.id)}
                      className="bg-[#63358A] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                    >
                      {playingStory === story.id ? (
                        <>
                          <Pause size={16} className="mr-2" />
                          Dayandır
                        </>
                      ) : (
                        <>
                          <Play size={16} className="mr-2" />
                          Dinlə
                        </>
                      )}
                    </button>
                    <button className="text-gray-500 hover:text-[#63358A] transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hekayələr <span className="text-[#63358A]">Statistikası</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Toplanmış hekayələrin rəqəmlərlə ifadəsi və layihənin təsiri.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#63358A] to-purple-600 p-6 rounded-2xl mb-4">
                <BookOpen size={32} className="text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24</h3>
              <p className="text-gray-600">Toplam Hekayə</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl mb-4">
                <User size={32} className="text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">18</h3>
              <p className="text-gray-600">Nağılçı</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl mb-4">
                <Volume2 size={32} className="text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.2</h3>
              <p className="text-gray-600">Saatlıq Audio</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 rounded-2xl mb-4">
                <Heart size={32} className="text-white mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">538</h3>
              <p className="text-gray-600">Bəyənmə</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#63358A] to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Siz də Öz Hekayənizi Paylaşın
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Yaşlı yaxınlarınızın dəyərli xatirələrini bizim kolleksiyaya əlavə edin və 
            gələcək nəsillər üçün qoruyun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://konullu.dost.gov.az/' target='blank' className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#63358A] transition-colors">
              Könüllü Ol
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}