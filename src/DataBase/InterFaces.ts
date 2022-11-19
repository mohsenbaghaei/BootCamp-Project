export interface suraData {
    sura?: (string | number)[]
    index : number;
    juz ?: number[];
    page ? : number;

}

export interface HeaderName {
    headerName: string;
    headerSubName?: string;
    isSetting: boolean;
}
export interface QuranAyehs {
    ayeh : (string | number)[] ;
    index : number;
}
export interface qariButton {
    showButton? : boolean ;
}
