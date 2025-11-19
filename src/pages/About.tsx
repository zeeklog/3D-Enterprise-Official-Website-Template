import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "使命",
      description: "AI驱动增长，科技点亮商机",
    },
    {
      icon: Users,
      title: "团队",
      description: "智能化转型升级专家团，深耕AI与物联网领域",
    },
    {
      icon: Award,
      title: "方案",
      description: "沉淀6大领域100+专业解决方案",
    },
    {
      icon: Lightbulb,
      title: "创新",
      description: "持续技术创新解决方案，为客户注入业务增长核心动力",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              关于<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              先帮助一部分企业实现AI智能化升级
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-3xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">公司简介</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              猫趴科技成立于2019年，总部位于中国深圳。我们是一家专注于人工智能、物联网和智能化系统集成的高精技术企业。
              公司拥有一支由资深工程师和行业专家组成的技术团队，在AI算法、物联网架构、系统集成等领域积累了丰富的经验。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我们的核心业务覆盖智慧停车、智能门禁、智慧物业、行业视频管理等多个领域，我们为企业提供了专业的智能化解决方案，积累了6大领域的100+解决方案。
              凭借先进的技术、可靠的产品和优质的服务，我们赢得了客户的广泛认可和信赖。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-card h-full group hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={32} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <Footer />
    </div>
  );
};

export default About;
