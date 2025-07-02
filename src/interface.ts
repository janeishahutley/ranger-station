import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface AccordionData {
    question?:string;
    answer?: string;
}

export interface CardProps {
    header: string;
    text: string;
    url: string;
    img: string;
}

export interface ScrollViewProps {
    pic: string;
}

export interface FooterProps {
    header: string;
    text: string[];
}

export interface AmbassadorImg {
    url: StaticImport;
  }
  
export interface PhotoImageProps {
    data: Photo,
    getImg: () => void,
}


export interface AccordPolicy {
    listItem: string;
}

export interface AccordionItemProps {
    data: AccordionData;
    active?:boolean;
    btnOnClick: () => void,
}

export interface AccordionProps {
    items: AccordionData[]
}

export interface ContainerProps {
    children?:any;
}

export interface NavLinkProps {
    item: LinkItem;
    onClick?: (close?:boolean) => void;
}

export interface LinkItem {
    title: string;
    path: string;
}

export interface LinksProps {
    items: LinkItem[];
    open?: boolean;
    onClick?: (open?:boolean) => void;
}

export interface AmbassadorImageProps {
    items: AmbassadorImg[]
}


export interface Photo {
    url: StaticImport;
}

export interface PhotoMapProps {
    items: Photo[];
}

export interface PhotoImageProps {
    data: Photo;
    getImg: () => void;
}
