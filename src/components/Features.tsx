import { motion } from "framer-motion";
import { Zap, Shield, Headphones, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "快速部署",
      description: "模块化设计，快速集成现有系统，缩短项目周期",
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "企业级安全保障，数据加密传输，符合国家安全标准",
    },
    {
      icon: Headphones,
      title: "专业服务",
      description: "7×24小时技术支持，专业团队保驾护航",
    },
    {
      icon: TrendingUp,
      title: "持续创新",
      description: "紧跟技术前沿，不断迭代优化，保持竞争优势",
    },
  ];

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            为什么选择<span className="gradient-text">我们</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            专业、可靠、创新，为您的数字化转型提供坚实保障
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
