import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">
              {inView && <CountUp end={125} suffix="+" duration={2.5} />}
              {!inView && "0+"}
            </p>
            <p className="text-white/80">Total Clients</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">
              {inView && <CountUp end={200} suffix="+" duration={2.5} />}
              {!inView && "0+"}
            </p>
            <p className="text-white/80">Total Projects</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">
              {inView && <CountUp end={2000} suffix="+" duration={2.5} />}
              {!inView && "0+"}
            </p>
            <p className="text-white/80">Total Hours</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-mint">
              {inView && <CountUp end={20} suffix="+" duration={2.5} />}
              {!inView && "0+"}
            </p>
            <p className="text-white/80">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;