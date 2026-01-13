import React from 'react';
import { LucideIcon } from "lucide-react";

export interface DemoSite {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  component: React.ComponentType;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}