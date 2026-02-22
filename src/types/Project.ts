import { ElementType } from "react";

// Defines the structure for the individual technologies in the tooltip
export interface TechStackItem {
  name: string;
  color: string;
  icon: ElementType; // Allows passing React-icons or custom SVG components
}

// Defines the main structure for each project in your portfolio
export interface Project {
  title: string;
  description: string;
  
  // Filtering categories used by your Research/Engineering mode toggle
  category?: string;
  secondaryCategory?: string;

  // Media & Links (Made optional so the UI doesn't break if a project lacks one)
  image?: string;
  video?: string; // YouTube/Embed URL for the dialog popup
  live?: string;  // URL for the live demo
  code?: string;  // URL for the GitHub repository

  // The array of technologies used to map the tooltip icons
  techStack?: TechStackItem[];
}