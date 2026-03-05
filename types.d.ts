interface Tone {
    ms: number;
    hz: number;
}

interface Midi {
    midi: number,
    octave: number,
    name: string,
    eng: string,
    alt: string | null,
    element: HTMLDivElement,
}

interface Editor {
    id: number;
    headers: HTMLDivElement[];
    header: Element;
    contents: HTMLDivElement;
    notes: number[];
    pressedS: boolean;
    pressedQ: boolean;
    noteElements: {
        parent: HTMLDivElement;
        elements: HTMLDivElement[];
    }[];
    audioCtx: AudioContext;
    init(): void;
    create(value?: number): void;
    current: number;
    currentR:number;
    currentC:number;
    play(): void;
    stop(): void;
    update(): void;
    save(): void;
    selectRow(midi: number): void;
    selectCol(col: number): void;
    playNote(midi: number, duration?: number): void;
}