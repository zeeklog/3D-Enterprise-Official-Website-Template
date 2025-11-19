import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">智</span>
              </div>
              <span className="text-xl font-bold gradient-text">智慧科技</span>
            </div>
            <p className="text-muted-foreground text-sm">
              专注于AI驱动的智能化解决方案，为企业提供最前沿的技术服务
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">解决方案</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/solutions" className="hover:text-primary transition-colors">AI智慧停车</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">智能体定制</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">智慧门禁</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">智慧物业</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">关于我们</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">联系我们</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span>contact@smarttech.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span>中国·深圳</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} 智慧科技. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
