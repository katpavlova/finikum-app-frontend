import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    appearance: 'primary' | 'secondary' | 'primary_white' ;

}