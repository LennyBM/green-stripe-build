import type { LucideIcon } from "lucide-react";

export interface Service {
  num: string;
  slug: string;
  title: string;
  sub: string;
  desc: string;
  longDesc: string;
  process: string[];
  icon: LucideIcon;
}

export interface Area {
  name: string;
  slug: string;
  tagline: string;
  desc: string;
}

export interface CaseStudy {
  img: string;
  loc: string;
  title: string;
  desc: string;
  time: string;
}

export interface ServiceOption {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}
