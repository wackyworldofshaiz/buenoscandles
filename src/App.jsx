import { useState, useEffect } from 'react';

// Luxury E-Commerce Website - Anaïs Candle Replica
export default function App() {
  const [activeTab, setActiveTab] = useState('candles');
  const [newTab, setNewTab] = useState('all');
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 });
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = {
    candles: [
      { id: 1, name: "Amour, Anaïs™️", price: 80, originalPrice: 98, image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=400&h=500&fit=crop", badge: "Selling Fast", colors: [] },
      { id: 2, name: "Anaïs Halo 3-Wick Candle™️", price: 58, originalPrice: 63, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=500&fit=crop", badge: "Celebrities' Pick ✨", colors: ["#fff", "#c41e3a"] },
      { id: 3, name: "Grandeur Bouquet Candle", price: 58, originalPrice: 68, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop", badge: "Selling Fast", colors: [] },
      { id: 4, name: "Anaïs Man & Venus Set", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1594913503478-32da0cffb13e?w=400&h=500&fit=crop", badge: "Selling Fast", colors: ["#fff", "#f5c6d6", "#87ceeb", "#1a1a1a"] },
      { id: 5, name: "Miss Anaïs Candle", price: 53, originalPrice: 58, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=500&fit=crop", badge: "Selling Fast", colors: [] },
      { id: 6, name: "Majesté Dorée Gold Leaf", price: 98, originalPrice: 145, image: "https://images.unsplash.com/photo-1601479604588-36a4db25b0be?w=400&h=500&fit=crop", badge: "Selling Fast", colors: [] },
    ],
    vases: [
      { id: 7, name: "Olivia Glass Handbag Vase", price: 98, originalPrice: 126, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=500&fit=crop", badge: "Low Stock", colors: [] },
      { id: 8, name: "Camélia Padded Glass Vase", price: 120, originalPrice: 141, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop", badge: "Low Stock", colors: ["#ff6b6b"] },
      { id: 9, name: "Butterfly Whispers Glass Vase", price: 110, originalPrice: 164, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop", badge: "Celebrities' Pick ✨", colors: [] },
      { id: 10, name: "Scarlett Handbag Resin Vase", price: 130, originalPrice: 193, image: "https://images.unsplash.com/photo-1567225591450-06036b3b9419?w=400&h=500&fit=crop", badge: "Celebrities' Pick ✨", colors: [] },
    ],
    cups: [
      { id: 11, name: "Heart of Eternity Champagne Flute", price: 160, originalPrice: 180, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=500&fit=crop", badge: "Selling Fast", colors: [] },
      { id: 12, name: "Venus Goddess Wine Flute Set", price: 140, originalPrice: 180, image: "https://images.unsplash.com/photo-1556036518-a9b21e1ec6e5?w=400&h=500&fit=crop", badge: "Limited Edition", colors: [] },
      { id: 13, name: "'100-Carat' Diamond Flute Set", price: 115, originalPrice: 128, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=500&fit=crop", badge: "Celebrities' Pick ✨", colors: [] },
      { id: 14, name: "Étreinte d'Amour Heart Glass", price: 89, originalPrice: 130, image: "https://images.unsplash.com/photo-1530037339849-1edb3b0f91f0?w=400&h=500&fit=crop", badge: "Low Stock", colors: ["#ff69b4", "#ff1493"] },
    ],
  };

  const pressQuotes = [
    { quote: "Impossibly aesthetic... I'm obsessed.", source: "Bustle" },
    { quote: "I love how chic and unique these candles are.", source: "People" },
    { quote: "Roman candle collection that seems simply too stunning to be literally wax.", source: "BuzzFeed" },
    { quote: "Chic home accessory — curated edit of female body candles.", source: "GRAZIA" },
    { quote: "A bust that could've been sculpted by Michelangelo.", source: "Hunker" },
    { quote: "Sculptural candles that double as design objects.", source: "Bon Appétit" },
  ];

  const celebrities = [
    { name: "Miranda Kerr", quote: "Omg I'm obsessed! They're so beautiful!", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face" },
    { name: "Melissa Wood", quote: "I love this candle brand so much!", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" },
    { name: "Golden Barbie", quote: "OMG! Your candles are gorgeous!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
    { name: "Natalie Halcro", quote: "Beautiful Candles! I love them!", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face" },
  ];

  const ProductCard = ({ product }) => (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-stone-100 aspect-[4/5] mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            <span className="bg-stone-900 text-white text-[10px] tracking-wider px-2 py-1 uppercase">Sale</span>
            <span className="bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] tracking-wider px-2 py-1">{product.badge}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-6 py-2 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 hover:bg-stone-900 hover:text-white"
          onClick={() => setCartCount(prev => prev + 1)}
        >
          Add to Cart
        </button>
      </div>
      <h3 className="font-serif text-sm text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">{product.name}</h3>
      <div className="flex items-center gap-3">
        <span className="text-stone-400 line-through text-sm">${product.originalPrice}.00</span>
        <span className="text-stone-900 font-medium">${product.price}.00</span>
      </div>
      {product.colors.length > 0 && (
        <div className="flex gap-1 mt-2">
          {product.colors.map((color, i) => (
            <div key={i} className="w-4 h-4 rounded-full border border-stone-200" style={{ backgroundColor: color }} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden">
      {/* Announcement Bar */}
      <div className="bg-stone-900 text-white py-2.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-xs tracking-widest uppercase">
              ✨ Up To 60% Off Sitewide + FREE Gift + Extra 10–15% Off Bundle Sale
              <span className="mx-8 opacity-50">•</span>
              Enjoy a Complimentary Gift. Select Yours in Cart – Online Exclusive
              <span className="mx-8 opacity-50">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Left Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {['New In', 'Candles', 'Cups', 'Vases'].map((item) => (
                <a key={item} href="#" className="text-xs tracking-widest uppercase text-stone-700 hover:text-stone-900 transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Logo */}
            <a href="#" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-stone-900">
                Anaïs Candle
              </h1>
            </a>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button onClick={() => setSearchOpen(!searchOpen)} className="hidden md:block">
                <svg className="w-5 h-5 text-stone-700 hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <a href="#" className="hidden md:block">
                <svg className="w-5 h-5 text-stone-700 hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
              <button className="relative">
                <svg className="w-5 h-5 text-stone-700 hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-stone-900 text-white text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-4 animate-slideIn">
            <div className="max-w-2xl mx-auto relative">
              <input 
                type="text" 
                placeholder="Search our collections..." 
                className="w-full px-4 py-3 border border-stone-200 focus:border-stone-400 outline-none text-sm"
                autoFocus
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden animate-fadeIn">
          <div className="p-6">
            <button onClick={() => setMenuOpen(false)} className="mb-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              {['New In', 'Candles', 'Cups', 'Vases', 'All Decor', 'Sculpture Art', 'Anaïs Couture'].map((item, i) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-2xl font-serif text-stone-800 hover:text-stone-600"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-200 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6 animate-fadeIn">Limited Time Offer</p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-stone-900 mb-8 leading-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              Up To 60% Off Sitewide + FREE Gift
            </h2>
            
            {/* Countdown */}
            <div className="flex justify-center gap-4 md:gap-8 mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm border border-stone-200 flex items-center justify-center mb-2">
                    <span className="font-serif text-2xl md:text-4xl text-stone-900">{String(item.value).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-stone-500">{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-stone-500 mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>*No Code Needed, Select Gift in Cart.</p>
            
            <a 
              href="#" 
              className="inline-block bg-stone-900 text-white px-12 py-4 text-xs tracking-widest uppercase hover:bg-stone-800 transition-all duration-300 hover:shadow-xl animate-fadeIn"
              style={{ animationDelay: '0.4s' }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-8">Best Sellers</h3>
          <div className="flex justify-center gap-8">
            {['candles', 'vases', 'cups'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs tracking-widest uppercase pb-2 border-b-2 transition-all ${
                  activeTab === tab ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-400 hover:text-stone-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products[activeTab].map((product, i) => (
            <div key={product.id} className="animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block border border-stone-900 text-stone-900 px-10 py-3 text-xs tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-all duration-300">
            View All {activeTab}
          </a>
        </div>
      </section>

      {/* Press Section */}
      <section className="bg-stone-50 py-16 overflow-hidden">
        <div className="mb-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...pressQuotes, ...pressQuotes].map((item, i) => (
              <div key={i} className="flex items-center mx-12">
                <span className="font-serif text-xl md:text-2xl italic text-stone-700">"{item.quote}"</span>
                <span className="ml-4 text-xs tracking-widest uppercase text-stone-400">— {item.source}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-12 opacity-40">
          {['BUSTLE', 'PEOPLE', 'BUZZFEED', 'GRAZIA', 'HUNKER', 'BON APPÉTIT'].map((brand) => (
            <span key={brand} className="text-xs tracking-widest font-medium text-stone-600">{brand}</span>
          ))}
        </div>
      </section>

      {/* Collection Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Holiday Glow */}
          <div className="group relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576016770956-debb63d92058?w=800&h=600&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-80">Featured Collection</p>
              <h4 className="font-serif text-3xl mb-4">Holiday Glow</h4>
              <p className="text-sm opacity-80 mb-4">The perfect holiday presents for your loved ones.</p>
              <span className="inline-block border border-white/80 px-6 py-2 text-xs tracking-widest uppercase group-hover:bg-white group-hover:text-stone-900 transition-all duration-300">
                Shop Now
              </span>
            </div>
          </div>

          {/* Greek Sculptures */}
          <div className="group relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594913503478-32da0cffb13e?w=800&h=600&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xs tracking-widest uppercase mb-2 opacity-80">Exclusive Designs</p>
              <h4 className="font-serif text-3xl mb-4">Greek Sculptures</h4>
              <p className="text-sm opacity-80 mb-4">Turn your home into a mini museum with our exclusive designs.</p>
              <span className="inline-block border border-white/80 px-6 py-2 text-xs tracking-widest uppercase group-hover:bg-white group-hover:text-stone-900 transition-all duration-300">
                Shop Now
              </span>
            </div>
          </div>
        </div>

        {/* Full Width Collection */}
        <div className="mt-6 group relative aspect-[21/9] overflow-hidden bg-gradient-to-br from-rose-100 to-stone-100 cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1400&h=600&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-16">
            <div className="text-white max-w-lg">
              <p className="text-xs tracking-widest uppercase mb-3 opacity-80">Home Collection</p>
              <h4 className="font-serif text-3xl md:text-5xl mb-4">Parisian Home</h4>
              <p className="text-sm opacity-80 mb-6">A collection of luxurious home decor that you can't find anywhere else.</p>
              <span className="inline-block border border-white/80 px-8 py-3 text-xs tracking-widest uppercase group-hover:bg-white group-hover:text-stone-900 transition-all duration-300">
                Shop Now
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* New Designs Section */}
      <section className="bg-stone-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">New Designs</h3>
            <p className="text-sm text-stone-500">Exclusively designed and handcrafted.</p>
            <div className="flex justify-center gap-8 mt-8">
              {['all', 'candles', 'vases'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNewTab(tab)}
                  className={`text-xs tracking-widest uppercase pb-2 border-b-2 transition-all ${
                    newTab === tab ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {tab === 'all' ? 'All New' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[...products.candles.slice(0, 2), ...products.vases.slice(0, 2)].map((product, i) => (
              <div key={product.id} className="animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrity Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Loved By</p>
          <h3 className="font-serif text-3xl md:text-4xl text-stone-900">Celebrity Favorites</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {celebrities.map((celeb, i) => (
            <div 
              key={celeb.name} 
              className="text-center animate-fadeIn" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-stone-100">
                <img src={celeb.image} alt={celeb.name} className="w-full h-full object-cover" />
              </div>
              <blockquote className="font-serif text-lg italic text-stone-700 mb-4">"{celeb.quote}"</blockquote>
              <p className="text-xs tracking-widest uppercase text-stone-500">– {celeb.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-3xl md:text-5xl mb-8 leading-relaxed">Luxury You Can Feel</h3>
          <p className="text-stone-300 text-lg leading-relaxed mb-12">
            Anaïs Candle where elevated design meets ambiance. We create handcrafted elegant candles and timeless home decor 
            that transform everyday moments into curated rituals — luxurious, intentional, and unapologetically beautiful.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-stone-700">
            {[
              { title: 'Small-Batch', desc: 'Each candle is part of a small, deliberate production cycle' },
              { title: 'Sustainably Made', desc: 'Crafted with intention – 100% all-natural beeswax & soy wax' },
              { title: 'Crafted to Last', desc: 'Designed for timelessness – candles that last years' },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="text-xs tracking-widest uppercase mb-3">{item.title}</h4>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couture Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop" 
              alt="Jewelry" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">New Collection</p>
            <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Anaïs Couture</h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Haute couture-inspired accessories meet affordable luxury. Discover our exclusive collection 
              of jewelry and accessories designed to complement your refined taste.
            </p>
            <a href="#" className="inline-block bg-stone-900 text-white px-10 py-4 text-xs tracking-widest uppercase hover:bg-stone-800 transition-all duration-300">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900 mb-4">Join the Anaïs Family</h3>
          <p className="text-stone-500 text-sm mb-8">Subscribe for exclusive offers, early access, and design inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-stone-300 focus:border-stone-500 outline-none text-sm"
            />
            <button className="bg-stone-900 text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & Social */}
            <div>
              <h2 className="font-serif text-2xl text-stone-900 mb-6">Anaïs Candle</h2>
              <div className="flex gap-4">
                {['Instagram', 'Pinterest', 'TikTok'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:border-stone-400 transition-colors">
                    <span className="text-xs text-stone-600">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-stone-900 mb-6">Shop</h4>
              <ul className="space-y-3">
                {['New In', 'Candles', 'Cups', 'Vases', 'All Decor', 'Sculpture Art', 'Anaïs Couture'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-stone-900 mb-6">Anaïs Candle</h4>
              <ul className="space-y-3">
                {['Why Us?', 'Our Mission', 'Burn-Time', 'Product & Candle Care'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-xs tracking-widest uppercase text-stone-900 mb-6">Help</h4>
              <ul className="space-y-3">
                {['Shipping & Handling', 'Return & Refund Policy', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-400">Copyright © 2026, Anaïs Candle. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-stone-400">Currency:</span>
              <select className="text-xs text-stone-600 border-0 bg-transparent cursor-pointer">
                <option>USD $</option>
                <option>EUR €</option>
                <option>GBP £</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
