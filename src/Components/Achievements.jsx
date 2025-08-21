import React from "react";
import Marquee from "react-fast-marquee";
import { Trophy, Star, Award, Rocket, ThumbsUp, Crown } from "lucide-react";

const achievements = [
  { icon: <Trophy className="w-5 h-5" />, text: "Completed 120+ Client Projects" },
  { icon: <Star className="w-5 h-5" />, text: "4.9 ★ Average Client Rating" },
  { icon: <Award className="w-5 h-5" />, text: "Top Agency 2024 – Clutch" },
  { icon: <Rocket className="w-5 h-5" />, text: "30% Faster Delivery Time" },
  { icon: <ThumbsUp className="w-5 h-5" />, text: "95% Repeat Customers" },
  { icon: <Crown className="w-5 h-5" />, text: "Best UI/UX – DesignConf" },
];

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
    <span className="text-gray-800">{icon}</span>
    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{text}</span>
  </div>
);

const AchievementsMarquee = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Our Achievements
        </h2>

        {/* Row 1 */}
        <Marquee
          speed={40}
          pauseOnHover
          gradient={false}
          className="py-3"
        >
          <div className="flex items-center gap-4 mr-8">
            {achievements.map((a, i) => (
              <Pill key={`row1-${i}`} icon={a.icon} text={a.text} />
            ))}
          </div>
        </Marquee>

        {/* Row 2 (reverse direction for variety) */}
        <Marquee
          speed={35}
          pauseOnHover
          gradient={false}
          direction="right"
          className="py-3 mt-3"
        >
          <div className="flex items-center gap-4 mr-8">
            {achievements.slice().reverse().map((a, i) => (
              <Pill key={`row2-${i}`} icon={a.icon} text={a.text} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default AchievementsMarquee;
