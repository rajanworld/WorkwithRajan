import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [task, setTask] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const commonTasks = [
    "Data entry automation",
    "Document processing",
    "Customer support automation",
    "Email automation",
    "Other task"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you can add your form submission logic
      // For example, sending to an API endpoint
      console.log({ email, task });
      
      // Clear form
      setEmail('');
      setTask('');
      alert("Thanks for reaching out! I'll get back to you soon.");
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 mt-4">
      <h3 className="text-lg font-medium text-white">Get Free AI Automation Assessment</h3>
      <p className="text-white/60 text-sm">I'll analyze your task and suggest the best automation solution.</p>
      
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
          <label className="text-sm text-white/80">What would you like to automate?</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {commonTasks.map(task => (
              <button
                key={task}
                type="button"
                onClick={() => setTask(task)}
                className={`text-xs px-3 py-1 rounded-full transition-colors ${
                  task === task
                    ? 'bg-mint text-forest'
                    : 'bg-forest text-mint/80 hover:bg-mint/10'
                }`}
              >
                {task}
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Describe your task in detail..."
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
          {isSubmitting ? 'Analyzing...' : 'Get Free Assessment'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
