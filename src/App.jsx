import React, { useEffect, useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const translations = {
  ru: {
    menu: {
      about: "О нас",
      services: "Услуги",
      workprocess: "Как работаем",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    heroTitle: "Ремонт под ключ в Барселоне",
    heroSubtitle: "Квартиры, дома, коммерция. Работаем быстро и честно.",
    consultBtn: "Получить консультацию",
    aboutTitle: "О нас",
    about13Years: "Мы — строительная компания с 13-летним опытом работы в Барселоне.",
    aboutSpec: "Наша команда специализируется на ремонте и строительстве под ключ:",
    apartments: "Квартиры",
    houses: "Частные дома",
    commerical: "Коммерческие помещения и магазины",
    soonPhotos: "Фото команды и объектов появятся здесь совсем скоро",
    ourServices: "Наши услуги",
    howWeWork: "Как мы работаем",
    reviewsTitle: "Отзывы наших клиентов",
    contactTitle: "Связаться с нами",
    contactSubtitle: "Оставьте заявку — мы перезвоним и обсудим ваш проект",
    nameLabel: "Имя",
    phoneLabel: "Телефон",
    commentLabel: "Комментарий",
    commentPlaceholder: "Расскажите, что нужно сделать",
    sendRequest: "Отправить заявку",
    mapTitle: "Мы на карте Барселоны",
    mapSubtitle: "Приходите к нам в офис в удобное для вас время",

    servicesData: {
      aptTitle: "🏠 Ремонт квартир",
      aptDesc: "Ремонт под ключ, дизайн, электрика, сантехника — быстро и качественно.",
      houseTitle: "🏡 Частные дома",
      houseDesc: "Строим современные, тёплые и стильные дома по вашему проекту или под ключ.",
      commTitle: "🏢 Коммерция",
      commDesc: "Офисы, магазины, шоурумы. Работаем по срокам, без сюрпризов.",
      airconTitle: "❄️ Кондиционеры",
      airconDesc: "Монтаж и обслуживание. Работаем с любым оборудованием.",
    },

    steps: [
      {
        icon: "📞",
        title: "1. Консультация",
        desc: "Свяжитесь с нами и расскажите, что нужно сделать.",
      },
      {
        icon: "📐",
        title: "2. Замеры и смета",
        desc: "Приезжаем, оцениваем объём и составляем точную смету.",
      },
      {
        icon: "🛠️",
        title: "3. Выполнение работ",
        desc: "Выполняем всё по плану: аккуратно, в срок и по-честному.",
      },
      {
        icon: "🎉",
        title: "4. Сдача и результат",
        desc: "Вы принимаете работу, а мы радуемся вместе с вами 😊",
      },
    ],

    reviewsData: [
      {
        text: "“Очень доволен ремонтом! Сделали быстро, качественно и без головной боли. Всем рекомендую.”",
        author: "Александр, Барселона",
      },
      {
        text: "“Заказали постройку дома — всё было идеально. Команда пунктуальна и профессиональна. Будем обращаться снова.”",
        author: "Мария и Пабло",
      },
      {
        text: "“Открывали магазин — сделали ремонт с нуля. Всё современно и точно по проекту. Спасибо!”",
        author: "Елена, Gracia",
      },
      {
        text: "“Монтаж кондиционеров прошёл быстро и аккуратно. Больше нигде не доверяю — только этим ребятам.”",
        author: "Жорди, Педральбес",
      },
    ],
  },
  es: {
    menu: {
      about: "Sobre nosotros",
      services: "Servicios",
      workprocess: "Cómo trabajamos",
      reviews: "Reseñas",
      contact: "Contacto",
    },
    heroTitle: "Reforma integral en Barcelona",
    heroSubtitle: "Pisos, casas, comercios. Hablamos español y ruso. Trabajamos rápido y con honestidad.",
    consultBtn: "Solicitar consulta",
    aboutTitle: "Sobre nosotros",
    about13Years: "Somos una empresa de construcción con 13 años de experiencia en Barcelona.",
    aboutSpec: "Nuestro equipo se especializa en reformas y construcciones llave en mano:",
    apartments: "Apartamentos",
    houses: "Casas particulares",
    commerical: "Locales comerciales y tiendas",
    soonPhotos: "¡Pronto subiremos fotos de nuestro equipo y proyectos realizados!",
    ourServices: "Nuestros servicios",
    howWeWork: "Cómo trabajamos",
    reviewsTitle: "Reseñas de nuestros clientes",
    contactTitle: "Contáctanos",
    contactSubtitle: "Deja tu solicitud – te llamaremos para analizar tu proyecto",
    nameLabel: "Nombre",
    phoneLabel: "Teléfono",
    commentLabel: "Comentario",
    commentPlaceholder: "Cuéntanos qué necesitas",
    sendRequest: "Enviar solicitud",
    mapTitle: "Estamos en Barcelona",
    mapSubtitle: "Visítanos en nuestra oficina cuando quieras",

    servicesData: {
      aptTitle: "🏠 Reforma de pisos",
      aptDesc: "Reforma integral, diseño, electricidad, fontanería — rápido y de calidad.",
      houseTitle: "🏡 Casas particulares",
      houseDesc: "Construimos casas modernas, cálidas y con estilo, con tu proyecto o llave en mano.",
      commTitle: "🏢 Locales comerciales",
      commDesc: "Oficinas, tiendas, showrooms. Trabajamos a tiempo, sin sorpresas.",
      airconTitle: "❄️ Aire acondicionado",
      airconDesc: "Instalación y mantenimiento de cualquier equipo de climatización.",
    },

    steps: [
      {
        icon: "📞",
        title: "1. Consulta",
        desc: "Contáctanos y cuéntanos qué necesitas.",
      },
      {
        icon: "📐",
        title: "2. Medición y presupuesto",
        desc: "Visitamos el lugar, evaluamos la obra y hacemos un presupuesto exacto.",
      },
      {
        icon: "🛠️",
        title: "3. Ejecución de la obra",
        desc: "Trabajamos según el plan: con cuidado, a tiempo y con honestidad.",
      },
      {
        icon: "🎉",
        title: "4. Entrega y resultado",
        desc: "Aceptas el trabajo y nos alegramos juntos 😊",
      },
    ],

    reviewsData: [
      {
        text: "“Estoy muy contento con la reforma! Fue rápida, de calidad y sin preocupaciones. Lo recomiendo.”",
        author: "Alejandro, Barcelona",
      },
      {
        text: "“Encargamos la construcción de una casa — todo fue perfecto. Equipo puntual y profesional. Volveremos a contratar.”",
        author: "María y Pablo",
      },
      {
        text: "“Abrimos una tienda — hicieron la reforma desde cero. Todo moderno y fiel al proyecto. ¡Gracias!”",
        author: "Elena, Gracia",
      },
      {
        text: "“La instalación de aire acondicionado fue rápida y limpia. No confío en nadie más — solo en estos chicos.”",
        author: "Jordi, Pedralbes",
      },
    ],
  },
};

function FloatingCallButton() {
  return (
    <a
      href="tel:+34644935269"
      className="fixed bottom-6 right-6 bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-orange-700 transition"
      style={{ zIndex: 9999 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2 3h4l2 7-2 2c1 2 3 4 5 5l2-2 7 2v4c0 1-1 2-2 2A19 19 0 012 3z"
        />
      </svg>
    </a>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, once: true });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const leftImg = document.getElementById("about-left");
      const rightImg = document.getElementById("about-right");

      // Отключаем параллакс на мобильных устройствах
      if (window.innerWidth < 768) return;

      if (leftImg) {
        leftImg.style.transform = `translateY(${scrollY * 0.05}px) rotate(-1deg)`;
      }
      if (rightImg) {
        rightImg.style.transform = `translateY(${scrollY * 0.08}px) rotate(1deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [locale, setLocale] = useState("ru");
  const toggleLocale = () => {
    setLocale((prev) => (prev === "ru" ? "es" : "ru"));
  };

  // Функция переводов
  const t = (path) => {
    const keys = path.split(".");
    let result = translations[locale];
    for (let k of keys) {
      if (result[k] !== undefined) {
        result = result[k];
      } else {
        return path;
      }
    }
    return result;
  };

  const steps = translations[locale].steps || [];
  const reviewsData = translations[locale].reviewsData || [];

  return (
    <div className="relative">
      {/* Header Menu */}
      <header className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm text-white px-6 md:px-16 py-4 flex justify-between items-center z-50">
        <div className="font-bold text-xl">Barcelona Pro Home</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-orange-300 transition">
            {t("menu.about")}
          </a>
          <a href="#services" className="hover:text-orange-300 transition">
            {t("menu.services")}
          </a>
          <a href="#workprocess" className="hover:text-orange-300 transition">
            {t("menu.workprocess")}
          </a>
          <a href="#reviews" className="hover:text-orange-300 transition">
            {t("menu.reviews")}
          </a>
          <a href="#contact" className="hover:text-orange-300 transition">
            {t("menu.contact")}
          </a>
        </nav>
        <button
          onClick={toggleLocale}
          className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded font-semibold"
        >
          {locale === "ru" ? "ES" : "RU"}
        </button>
      </header>

      {/* Hero Section с видеофоном */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Видео на фоне */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/sagrada.webm" type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
        {/* Затемнение */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10" />
        {/* Контент */}
<div
  className="relative z-20 p-10 rounded-2xl max-w-2xl text-center text-white animate-fade-in mt-16"
  data-aos="fade-up"
>
  <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("heroTitle")}</h1>
  <p className="text-lg md:text-xl mb-8">{t("heroSubtitle")}</p>
  <div className="flex justify-center gap-4 flex-wrap">
    
    {/* Обновлённая кнопка */}
    <a href="#contact">
      <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-semibold transition">
        {t("consultBtn")}
      </button>
    </a>

    <a href="#about">
      <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
        {t("menu.about")}
      </button>
    </a>

    <a
      href="https://wa.me/34644935269"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-green-500 text-green-500 px-6 py-3 rounded-2xl font-semibold hover:bg-green-500 hover:text-white transition"
    >
      <span>WhatsApp</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12a11.85 11.85 0 001.61 6L0 24l6.38-1.67A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12a11.85 11.85 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.39l-.36-.21-3.79.99 1.01-3.69-.24-.38A9.9 9.9 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.3-7.7l-1.61-.46c-.21-.06-.44 0-.6.14l-.87.88a9.18 9.18 0 01-4.1-4.1l.88-.87c.14-.15.2-.39.14-.6l-.46-1.61a.48.48 0 00-.45-.35H9c-.28 0-.5.22-.5.5 0 5.25 4.25 9.5 9.5 9.5.28 0 .5-.22.5-.5v-1.39c0-.2-.14-.4-.35-.45z" />
      </svg>
    </a>
  </div>
</div>

      </div>

      {/* About Section */}
      <div id="about" className="relative bg-[#1A1A1A] text-white py-14 px-6 md:px-16 overflow-hidden" data-aos="fade-up">
        {/* Левое PNG */}
        <img
          id="about-left"
          src="/images/left.png"
          alt=""
          className="hidden md:block absolute top-28 left-[5%] w-60 opacity-25 pointer-events-none animate-float-left"
          data-aos="fade-right"
        />
        {/* Правое PNG */}
        <img
          id="about-right"
          src="/images/right.png"
          alt=""
          className="hidden md:block absolute top-28 right-[5%] w-60 opacity-25 pointer-events-none animate-float-right"
          data-aos="fade-left"
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("aboutTitle")}</h2>
          <p className="text-lg md:text-xl mb-3">{t("about13Years")}</p>
          <p className="text-lg md:text-xl mb-6">{t("aboutSpec")}</p>
          <ul className="text-center list-disc list-inside text-lg md:text-xl mb-6 leading-relaxed">
            <li>{t("apartments")}</li>
            <li>{t("houses")}</li>
            <li>{t("commerical")}</li>
          </ul>
          <p className="text-sm text-gray-400">{t("soonPhotos")}</p>
        </div>
      </div>

     {/* Services Section */}
<div
  id="services"
  className="relative text-white py-20 px-6 md:px-16 overflow-hidden"
  data-aos="fade-up"
  style={{
    backgroundImage: "url('/images/kitchen.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Уменьшенное затемнение — стало почти прозрачным */}
  <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

  {/* Контент */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">{t("ourServices")}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Карточка 1 */}
      <div className="rounded-xl p-8 text-left shadow-lg backdrop-blur-sm bg-black/20">
        <h3 className="text-2xl font-bold mb-2">{t("servicesData.aptTitle")}</h3>
        <p className="text-lg text-white/90">{t("servicesData.aptDesc")}</p>
      </div>

      {/* Карточка 2 */}
      <div className="rounded-xl p-8 text-left shadow-lg backdrop-blur-sm bg-black/20">
        <h3 className="text-2xl font-bold mb-2">{t("servicesData.houseTitle")}</h3>
        <p className="text-lg text-white/90">{t("servicesData.houseDesc")}</p>
      </div>

      {/* Карточка 3 */}
      <div className="rounded-xl p-8 text-left shadow-lg backdrop-blur-sm bg-black/20">
        <h3 className="text-2xl font-bold mb-2">{t("servicesData.commTitle")}</h3>
        <p className="text-lg text-white/90">{t("servicesData.commDesc")}</p>
      </div>

      {/* Карточка 4 */}
      <div className="rounded-xl p-8 text-left shadow-lg backdrop-blur-sm bg-black/20">
        <h3 className="text-2xl font-bold mb-2">{t("servicesData.airconTitle")}</h3>
        <p className="text-lg text-white/90">{t("servicesData.airconDesc")}</p>
      </div>

    </div>
  </div>
</div>

   {/* Секция: Наши постоянные клиенты */}
   <div id="partners" className="bg-[#1A1A1A] py-12 px-6 md:px-16" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <p
      className="text-2xl text-white mb-10 tracking-tight"
      style={{ fontWeight: 1000 }}
    >
      Наши постоянные клиенты
    </p>
    <div className="flex flex-wrap justify-between items-center gap-y-8">
      <img
        src="/images/company1.png"
        alt="Компания 1"
        className="h-16 object-contain max-w-[22%] mx-auto"
      />
      <img
        src="/images/company2.png"
        alt="Компания 2"
        className="h-16 object-contain max-w-[22%] mx-auto"
      />
      <img
        src="/images/company3.png"
        alt="Компания 3"
        className="h-16 object-contain max-w-[22%] mx-auto"
      />
      <img
        src="/images/company4.png"
        alt="Компания 4"
        className="h-16 object-contain max-w-[22%] mx-auto"
      />
    </div>
  </div>
</div>

      {/* Work Process Section */}
      <div
  id="workprocess"
  className="relative bg-[#121212] text-white py-20 px-6 md:px-16 overflow-hidden"
  data-aos="fade-up"
>
  {/* PNG кондиционера поверх фона */}
  <img
    src="/images/aircon-overlay.png" // 👈 убедись, что путь правильный
    alt="Кондиционер"
    className="absolute top-[-40px] right-10 w-64 opacity-70 pointer-events-none z-0"
  />

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">{t("howWeWork")}</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="bg-[#1E1E1E] border border-gray-700 text-white rounded-xl p-6 shadow-md backdrop-blur-sm"
        >
          <div className="text-4xl mb-2">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-300">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Reviews Section */}
<div
  id="reviews"
  className="relative text-white py-20 px-6 md:px-16 overflow-hidden"
  style={{
    backgroundImage: "url('/images/wet-asphalt.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  data-aos="fade-up"
>
  {/* Верхняя оранжевая полоса */}
  <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 z-10" />

  {/* Нижние две полосы */}
  <div className="absolute bottom-6 left-0 w-full h-1 bg-orange-500 z-10" />
  <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 z-10" />

  {/* Контент */}
  <div className="max-w-5xl mx-auto text-center relative z-20">
    <h2 className="text-3xl md:text-5xl font-bold mb-12">{t("reviewsTitle")}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {reviewsData.map((review, i) => (
        <div
          key={i}
          className="bg-black/40 border border-orange-400 text-white rounded-xl p-6 shadow-lg backdrop-blur-md"
        >
          <p className="text-lg italic mb-4">{review.text}</p>
          <p className="font-bold text-orange-300">{review.author}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Contact Form Section */}
<div
  id="contact"
  className="relative text-white py-20 px-6 md:px-16 overflow-hidden"
  style={{
    backgroundImage: "url('/images/apartment-bg.jpg')", // 👈 путь к твоему фону
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  data-aos="fade-up"
>
  {/* Затемнение фона для читаемости */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Контент поверх фона */}
  <div className="max-w-3xl mx-auto relative z-10">
    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">{t("contactTitle")}</h2>
    <p className="text-center mb-8 text-lg md:text-xl">{t("contactSubtitle")}</p>

    <form className="bg-black/40 rounded-xl p-6 shadow-lg space-y-4 backdrop-blur-md">
      <div>
        <label className="block mb-2 font-semibold text-white" htmlFor="name">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black focus:outline-none focus:border-orange-400"
          placeholder={locale === "ru" ? "Ваше имя" : "Tu nombre"}
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold text-white" htmlFor="phone">
          {t("phoneLabel")}
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black focus:outline-none focus:border-orange-400"
          placeholder="+34 ..."
        />
      </div>
      <div>
        <label className="block mb-2 font-semibold text-white" htmlFor="message">
          {t("commentLabel")}
        </label>
        <textarea
          id="message"
          rows="4"
          className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black focus:outline-none focus:border-orange-400"
          placeholder={t("commentPlaceholder")}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-semibold transition w-full"
      >
        {t("sendRequest")}
      </button>
    </form>
  </div>
</div>

     {/* Maps Section */}
<div
  id="map"
  className="relative bg-[#121212] text-white py-20 px-6 md:px-16 overflow-hidden"
  data-aos="fade-up"
>
  {/* Статичная оранжевая полоса сверху */}
  <div className="absolute top-0 left-0 w-full h-2 bg-orange-600 z-10" />

  {/* Контент */}
  <div className="max-w-6xl mx-auto text-center relative z-20">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">Мы на карте Барселоны</h2>
    <p className="text-lg md:text-xl mb-8">Приходите к нам в офис в удобное для вас время</p>
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md border border-gray-800">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.34845250794!2d2.1744136762250554!3d41.385063079262876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3f5fd4cc9%3A0x42e9bf6e6e3c2553!2sBarcelona!5e0!3m2!1sen!2ses!4v1681595002435!5m2!1sen!2ses"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  </div>
</div>

      {/* Footer Section */}
      <footer className="bg-primary text-white py-10 px-6 md:px-16 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h4 className="text-xl font-semibold mb-1">Barcelona Pro Home</h4>
            <p className="text-gray-400">© {new Date().getFullYear()} Все права защищены</p>
          </div>
          <div className="space-x-4">
            <a href="tel:+34644935269" className="hover:underline">+34 644935269</a>
            <a href="mailto:boychuk.rus@gmail.com" className="hover:underline">boychuk.rus@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Плавающая кнопка «Позвонить» */}
      <FloatingCallButton />
    </div>
  );
}

export default App;
