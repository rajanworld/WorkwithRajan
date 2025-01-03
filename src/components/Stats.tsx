const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">$100K+</p>
            <p className="text-white/80">Earnings</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">125</p>
            <p className="text-white/80">Total Jobs</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">2,000+</p>
            <p className="text-white/80">Total Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;