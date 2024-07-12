import type { Props } from "astro";


export type TechProps = {
    name: string;
    color: string;
    icon: (_props: Props) => any;
};