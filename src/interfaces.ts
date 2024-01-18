import { TargetAndTransition, VariantLabels, Variants } from 'framer-motion';
import { ReactElement } from 'react';

export interface MenuElementInterface {
    whileHover?: VariantLabels | TargetAndTransition | undefined;
    variants?: Variants | undefined;
    initial?: boolean | VariantLabels | undefined;
    Icon: React.ComponentType<any>;
    label?: string | undefined;
    isActive?: boolean;
    to?: string | undefined;
}

export interface ButtonInterface {
    text: string;
    redirect?: string | undefined;
    icon?: ReactElement | undefined;
}

export interface PageTitleInterface {
    title: string;
    icon?: ReactElement | undefined;
}
