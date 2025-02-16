import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [task, setTask] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceCategories = [
    {
      title: "AI Automation",
      tasks: [
        "Data entry automation",
        "Document processing",
        "Marketing automation",
        "Customer support automation",
        "Social media automation",
        "Chatbot development",
        "Email automation",
        "Other services",
      ]
    },
    {
      title: "Web Development",
      tasks: [
        "Custom website development",
        "E-commerce solutions",
        "Web application",
        "Mobile application",
        "Web design",
        "Web hosting",
        "API integration",
        "Other services",
      ]
    },
    {
      title: "Digital Services",
      tasks: [
        "SEO optimization",
        "Onpage SEO",
        "Offpage SEO",
        "Google Ads management",
        "Meta tag optimization",
        "Social media marketing",
        "Performance optimization",
        "Technical consulting",
        "Other services",
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(serviceCategories[0].title);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
          const response = await fetch('https://script.google.com/macros/s/AKfycbx9uqpwQuXVih0YStD0eShEAYWiXB9HhK9yk3vS8MtSqZvRD6Nq5lyo2BB_Pbeu2r7J/exec', {
              method: 'POST',
              body: JSON.stringify({ email, serviceType, task }),
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const result = await response.json();
          if (result.status === 'success') {
              setEmail('');
              setServiceType('');
              setTask('');
              alert("Thanks for reaching out! I'll get back to you soon.");
          } else {
              throw new Error('Submission failed');
          }
      } catch (error) {
          console.error('Error submitting form:', error);
          alert(`Something went wrong. Please try again. Error: ${error.message}`);
      } finally {
          setIsSubmitting(false);
      }
  };

  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-medium text-white">Get Free Consultation</h3>
      <p className="text-white/60 text-sm">Let me help you with AI automation, web development, or digital services.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Your work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-forest border-mint/20 text-white placeholder:text-white/60"
        />
        
        <div className="space-y-2">
          <label className="text-sm text-white/80">Select Service Category:</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {serviceCategories.map(category => (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedCategory(category.title)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  selectedCategory === category.title
                    ? 'bg-mint text-forest'
                    : 'bg-forest text-mint/80 hover:bg-mint/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <label className="text-sm text-white/80">Select Specific Service:</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {serviceCategories
              .find(category => category.title === selectedCategory)
              ?.tasks.map(task => (
                <button
                  key={task}
                  type="button"
                  onClick={() => setServiceType(task)}
                  className={`text-xs px-3 py-1 rounded-full transition-colors ${
                    serviceType === task
                      ? 'bg-mint text-forest'
                      : 'bg-forest text-mint/80 hover:bg-mint/10'
                  }`}
                >
                  {task}
                </button>
            ))}
          </div>

          <Textarea
            placeholder="Tell me more about your project requirements..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            className="bg-forest border-mint/20 text-white placeholder:text-white/60 min-h-[80px]"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-mint hover:bg-mint/90 text-forest font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
