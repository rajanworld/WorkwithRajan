import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This freelancer is 5 stars all the way, I will highly recommend to anyone, and can't wait to work with them again!",
      author: "Client",
      role: "Tech Company CEO"
    },
    {
      quote: "Raj was very quick to respond to my invite, communicated well and did a great job. He also took on board my feedback well and made the adjustments I needed - and all within the specified timeframe.",
      author: "Project Manager",
      role: "Software Company"
    },
    {
      quote: "Raja has been the most responsible and skillful developer I've ever meet. Complete my project in time and find ways to solve extra problems in limited time.",
      author: "Tech Lead",
      role: "Enterprise Client"
    },
    {
      quote: "Raj is a SuperStar at Shopify. Hire him!",
      author: "E-commerce Client",
      role: "Shopify Store Owner"
    },
    {
      quote: "Blown away with my experience with Raj. I couldn't find a dev to figure this project out and Raj did it quicker and better than I could have ever imagined.",
      author: "Startup Founder",
      role: "Technology Company"
    },
    {
      quote: "RAJ AN consistently delivers A++++ work! He is very humble about his extensive knowledge and is always a pleasure to work with!",
      author: "Long-term Client",
      role: "Digital Agency"
    }
  ];

  return (
    <section className="py-20 px-4 bg-forest-light">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-white/80">Trusted by leading companies worldwide</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-forest p-8 rounded-xl relative border border-mint/10 hover:border-mint/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-divine fill-divine" />
                ))}
              </div>
              <Quote className="text-mint w-8 h-8 mb-4 opacity-50" />
              <p className="text-white/90 mb-6 line-clamp-4">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="font-medium text-mint">{testimonial.author}</p>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;