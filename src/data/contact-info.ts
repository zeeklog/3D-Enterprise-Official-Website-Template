import type { LucideIcon } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

export interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  content: string;
  gradient: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "联系电话",
    content: "0755-32867416 / 13828510994",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "电子邮箱",
    content: "sales@catparty.cn",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "公司地址",
    content: "中国·深圳市",
    gradient: "from-green-500 to-emerald-500",
  },
];

