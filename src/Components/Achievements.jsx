import React from "react";
import Marquee from "react-fast-marquee";
import { Trophy, Star, Award, Rocket, ThumbsUp, Crown } from "lucide-react";

const achievements = [
  { icon: <Trophy className="w-5 h-5 text-blue-600" />, text: "Completed 120+ Client Projects" },
  { icon: <Star className="w-5 h-5 text-blue-600" />, text: "4.9 ★ Average Client Rating" },
  { icon: <Award className="w-5 h-5 text-blue-600" />, text: "Top Agency 2024 – Clutch" },
  { icon: <Rocket className="w-5 h-5 text-blue-600" />, text: "30% Faster Delivery Time" },
  { icon: <ThumbsUp className="w-5 h-5 text-blue-600" />, text: "95% Repeat Customers" },
  { icon: <Crown className="w-5 h-5 text-blue-600" />, text: "Best UI/UX – DesignConf" },
];

const Pill = ({ icon, text }) => (
  <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-5 py-2 shadow-md backdrop-blur-sm hover:shadow-lg transition">
    <span className="text-blue-600">{icon}</span>
    <span className="text-sm font-medium text-gray-800 whitespace-nowrap">{text}</span>
  </div>
);

const AchievementsMarquee = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8">
           Our Achievements
        </h2>

        {/* Row 1 */}
        <Marquee speed={40} pauseOnHover gradient={false} className="py-3">
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
          className="py-3 mt-4"
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
