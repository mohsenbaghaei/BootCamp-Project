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
    AyehAudio ? : HTMLAudioElement
    TranslateAudio ? : HTMLAudioElement
}
export interface QuranAyehs {
    ayeh : (string | number)[] ;
    index : number;
    play : (index : number) => void;
}
export interface qariButton {
    showButton? : boolean ;
}
export interface footeritems {
    AyehAudio ? : HTMLAudioElement
    TranslateAudio ? : HTMLAudioElement
}
export interface singleAyeh {
    ayeh : any
}