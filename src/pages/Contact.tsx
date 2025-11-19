import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { contactInfo } from "@/data/contact-info";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("消息已发送！我们会尽快与您联系。");
  };

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
              联系<span className="gradient-text">我们</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              有任何问题或需求？欢迎随时与我们取得联系，我们将竭诚为您服务
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-card group hover:glow-effect transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">发送消息</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">姓名</label>
                      <Input
                        placeholder="请输入您的姓名"
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">公司</label>
                      <Input
                        placeholder="请输入您的公司名称"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">电话</label>
                      <Input
                        type="tel"
                        placeholder="请输入您的联系电话"
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">邮箱</label>
                      <Input
                        type="email"
                        placeholder="请输入您的邮箱"
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">需求描述</label>
                    <Textarea
                      placeholder="请描述您的需求..."
                      className="bg-background/50 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:opacity-90 transition-opacity group"
                  >
                    发送消息
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
