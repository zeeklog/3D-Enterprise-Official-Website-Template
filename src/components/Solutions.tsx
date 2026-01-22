import { motion } from "framer-motion";
import { Car, Brain, Lock, Building2, Radio, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      icon: Car,
      title: "AI智慧车场",
      description: "智能车位识别、自动计费、无感支付，打造高效停车体验",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI智能体定制",
      description: "教育、医疗领域AI助手，提供个性化智能服务解决方案",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lock,
      title: "体育赛事解决方案",
      description: "体育赛事全流程数字化",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Building2,
      title: "客户端APP专业定制",
      description: "专业苹果、安卓、MAC、Windows客户端定制",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Radio,
      title: "宠物领域AI解决方案",
      description: "宠物行业APP、物联网产品定制、智能控制、AI分析",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Video,
      title: "IVM行业视频管理",
      description: "智能监控、视频分析、事件预警，保障安全运营",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            核心<span className="gradient-text">解决方案</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            六大核心业务，全方位满足企业智能化需求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:glow-effect transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Solutions;
