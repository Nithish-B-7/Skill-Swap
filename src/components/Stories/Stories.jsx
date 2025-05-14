import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Stories.css";

const Stories = () => {
  const testimonials = [
    {
      name: "Sarah John",
      text: "This platform helped me find tutors for my online education program. Highly recommended!",
      bg: "/assets/bg1.jpg",
    },
    {
      name: "David McEthan",
      text: "I've been able to earn a full-time income offering my web development skills to clients worldwide.",
      bg: "/assets/bg2.jpg",
    },
    {
      name: "John Abraham",
      text: "Found an amazing graphic designer for my startup. The quality of talent here is outstanding!",
      bg: "/assets/bg3.jpg",
    },
    {
      name: "Priya Kannan",
      text: "As a college student, I got freelance writing gigs that helped cover my semester fees!",
      bg: "/assets/bg4.jpg",
    },
    {
      name: "Michael Lee",
      text: "I bartered my photography skills for coding lessons. It's a brilliant skill exchange system.",
      bg: "/assets/bg5.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <div className="test-container">
        <h2 className="section-headline">Success Stories</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          pagination={{ clickable: false }}
          freeMode={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div
                  className={`card ${t.color}`}
                  style={{ backgroundImage: `url(${t.bg})` }}
                >
                  <div className="card-content">
                    <p className="tip">{t.name}</p>
                    <p className="second-text">"{t.text}"</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Stories;
