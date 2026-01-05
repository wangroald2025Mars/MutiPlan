
import React from 'react';

export interface Dilemma {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceModule {
  id: string;
  title: string;
  subtitle: string;
  provider: string;
  content: {
    question: string;
    expression: string;
  }[];
  outputs: string[];
}

export interface SubService {
  name: string;
  description?: string;
  items?: string[];
}

export interface Phase {
  title: string;
  target: string;
  servicesDescription?: string; // Additional context for the service section
  services: SubService[];
  outcomes: string[];
}
