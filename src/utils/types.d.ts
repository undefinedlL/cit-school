import { JSX } from "react";

export type CourseType = {
    id: number;
    title: string;
    category: string;
    format: string;
    academic_hours: number;
    schedule: string;
    classes_frequency: string;
    module_duration: string;
    target_audience: string;
    themes: string[];
    icon: string
};