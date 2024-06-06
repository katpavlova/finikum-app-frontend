import { ReactNode } from "react";

export type HtagTypes_dark = 'h1_dark'| 'h2_dark' | 'h3_dark' | 'h4_dark';
export type HtagTypes_light = 'h1_light'| 'h2_light' | 'h3_light' | 'h4_light';

export interface HtagProps {
    tag: 'h1'| 'h2' | 'h3' | 'h4';
    children: ReactNode;
    style: HtagTypes_dark | HtagTypes_light;
}