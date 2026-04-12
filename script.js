
/**
 * @type {Midi[]}
 */
const MIDIS = [
    { "midi": 21, "octave": 0, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 22, "octave": 0, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 23, "octave": 0, "name": "シ", "eng": "B", "alt": null },
    { "midi": 24, "octave": 1, "name": "ド", "eng": "C", "alt": null },
    { "midi": 25, "octave": 1, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 26, "octave": 1, "name": "レ", "eng": "D", "alt": null },
    { "midi": 27, "octave": 1, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 28, "octave": 1, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 29, "octave": 1, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 30, "octave": 1, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 31, "octave": 1, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 32, "octave": 1, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 33, "octave": 1, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 34, "octave": 1, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 35, "octave": 1, "name": "シ", "eng": "B", "alt": null },
    { "midi": 36, "octave": 2, "name": "ド", "eng": "C", "alt": null },
    { "midi": 37, "octave": 2, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 38, "octave": 2, "name": "レ", "eng": "D", "alt": null },
    { "midi": 39, "octave": 2, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 40, "octave": 2, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 41, "octave": 2, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 42, "octave": 2, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 43, "octave": 2, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 44, "octave": 2, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 45, "octave": 2, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 46, "octave": 2, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 47, "octave": 2, "name": "シ", "eng": "B", "alt": null },
    { "midi": 48, "octave": 3, "name": "ド", "eng": "C", "alt": null },
    { "midi": 49, "octave": 3, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 50, "octave": 3, "name": "レ", "eng": "D", "alt": null },
    { "midi": 51, "octave": 3, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 52, "octave": 3, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 53, "octave": 3, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 54, "octave": 3, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 55, "octave": 3, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 56, "octave": 3, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 57, "octave": 3, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 58, "octave": 3, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 59, "octave": 3, "name": "シ", "eng": "B", "alt": null },
    { "midi": 60, "octave": 4, "name": "ド", "eng": "C", "alt": null },
    { "midi": 61, "octave": 4, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 62, "octave": 4, "name": "レ", "eng": "D", "alt": null },
    { "midi": 63, "octave": 4, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 64, "octave": 4, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 65, "octave": 4, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 66, "octave": 4, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 67, "octave": 4, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 68, "octave": 4, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 69, "octave": 4, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 70, "octave": 4, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 71, "octave": 4, "name": "シ", "eng": "B", "alt": null },
    { "midi": 72, "octave": 5, "name": "ド", "eng": "C", "alt": null },
    { "midi": 73, "octave": 5, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 74, "octave": 5, "name": "レ", "eng": "D", "alt": null },
    { "midi": 75, "octave": 5, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 76, "octave": 5, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 77, "octave": 5, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 78, "octave": 5, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 79, "octave": 5, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 80, "octave": 5, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 81, "octave": 5, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 82, "octave": 5, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 83, "octave": 5, "name": "シ", "eng": "B", "alt": null },
    { "midi": 84, "octave": 6, "name": "ド", "eng": "C", "alt": null },
    { "midi": 85, "octave": 6, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 86, "octave": 6, "name": "レ", "eng": "D", "alt": null },
    { "midi": 87, "octave": 6, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 88, "octave": 6, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 89, "octave": 6, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 90, "octave": 6, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 91, "octave": 6, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 92, "octave": 6, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 93, "octave": 6, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 94, "octave": 6, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 95, "octave": 6, "name": "シ", "eng": "B", "alt": null },
    { "midi": 96, "octave": 7, "name": "ド", "eng": "C", "alt": null },
    { "midi": 97, "octave": 7, "name": "ド♯", "eng": "C#", "alt": "レ♭" },
    { "midi": 98, "octave": 7, "name": "レ", "eng": "D", "alt": null },
    { "midi": 99, "octave": 7, "name": "レ♯", "eng": "D#", "alt": "ミ♭" },
    { "midi": 100, "octave": 7, "name": "ミ", "eng": "E", "alt": null },
    { "midi": 101, "octave": 7, "name": "ファ", "eng": "F", "alt": null },
    { "midi": 102, "octave": 7, "name": "ファ♯", "eng": "F#", "alt": "ソ♭" },
    { "midi": 103, "octave": 7, "name": "ソ", "eng": "G", "alt": null },
    { "midi": 104, "octave": 7, "name": "ソ♯", "eng": "G#", "alt": "ラ♭" },
    { "midi": 105, "octave": 7, "name": "ラ", "eng": "A", "alt": null },
    { "midi": 106, "octave": 7, "name": "ラ♯", "eng": "A#", "alt": "シ♭" },
    { "midi": 107, "octave": 7, "name": "シ", "eng": "B", "alt": null },
    { "midi": 108, "octave": 8, "name": "ド", "eng": "C", "alt": null }
];

const storage = {
    notes: {},
};
3
let tempoValue = 120;
const header = {
    /**
     * @type {HTMLInputElement}
     */
    load: document.querySelector(".load input"),
    loadmidi: document.querySelector(".loadmidi input"),
    save: document.querySelector(".save button"),
    play: document.querySelector(".play button"),
    stop: document.querySelector(".stop button"),
    half: document.querySelector(".half button"),
    double: document.querySelector(".double button"),
    clear: document.querySelector(".clear button"),
    export: document.querySelector(".export button"),
    dialog: document.querySelector(".overlay"),
    /**
     * @type {HTMLTextAreaElement}
     */
    dialogCH: document.getElementById("c-head"),
    dialogCB: document.getElementById("c-body"),
    /**
     * @type {HTMLInputElement}
     */
    tempo: document.querySelector(".tempo input"),
    /**
     * @type {HTMLInputElement}
     */
    mute: document.querySelector(".mute input"),
    init() {
        this.tempo.addEventListener("input", () => tempoValue = parseInt(this.tempo.value) || 120);
        this.mute.addEventListener("click", () => {
            if (this.mute.checked) {
                editor.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
            } else {
                editor.audioCtx.close();
            }
        })
        this.play.addEventListener("click", () => editor.play());
        this.stop.addEventListener("click", () => editor.stop());
        this.clear.addEventListener("click", () => {
            if (!confirm("全消去しますか?")) {
                return;
            }
            localStorage.setItem("_notes", "[]");
            location.hash = "";
            location.reload();
        });
        this.export.addEventListener("click", () => {
            const c = exportC(editor.notes, prompt("name?", "NAME") || "NAME");
            this.dialog.style.display = "block";
            this.dialogCB.value = c;
            this.dialogCH.value = cHeader;
        });
        this.dialogCH.addEventListener("focus", () => this.dialogCH.setSelectionRange(0, -1))
        this.dialogCB.addEventListener("focus", () => this.dialogCB.setSelectionRange(0, -1))

        this.dialog.addEventListener("click", (e) => {
            if (e.target === this.dialog) {
                this.dialog.style.display = "none";
            }
        });
        this.save.addEventListener("click", () => {
            const name = prompt("name?", "arduino");
            if (!name) {
                return;
            }
            const a = document.createElement("a");
            const url = URL.createObjectURL(new Blob([JSON.stringify(editor.notes)]));
            a.href = url;
            a.download = name + ".tone.json";
            a.click();
            URL.revokeObjectURL(url);
        });
        this.load.addEventListener("input", () => {
            if (this.load.files.length) {
                const file = this.load.files[0];
                file.text().then(t => {
                    if (!confirm("書き換えますか?")) {
                        return;
                    }
                    localStorage.setItem("_notes", t);
                    location.hash = "";
                    location.reload();
                });
            }
        });

        this.loadmidi.addEventListener("input", () => {
            if (this.loadmidi.files.length) {
                const file = this.loadmidi.files[0];
                file.arrayBuffer().then(buffer => {
                    if (!confirm("MIDIファイルで書き換えますか?")) {
                        return;
                    }
                    const notes = parseMidiFile(buffer);
                    localStorage.setItem("_notes", JSON.stringify(notes));
                    location.hash = "";
                    location.reload();
                });
            }
        });

        this.half.addEventListener("click", () => {
            const half = [];
            for (let i = 0; i < editor.notes.length; i += 2) {
                const n = editor.notes[i];
                const n2 = editor.notes[i + 1];
                half.push(Math.max(n, n2));
            }
            if (!confirm("ノーツをx1/2しますか?")) {
                return;
            }
            localStorage.setItem("_notes", JSON.stringify(half));
            location.hash = "";
            location.reload();
        });
        this.double.addEventListener("click", () => {
            const double = [];
            for (let i = 0; i < editor.notes.length; i++) {
                const n = editor.notes[i];
                double.push(n, n);
            }
            if (!confirm("ノーツをx2しますか?")) {
                return;
            }
            localStorage.setItem("_notes", JSON.stringify(double));
            location.hash = "";
            location.reload();
        });

    }
};
header.init();

const editor = {
    /**
     * @type {HTMLCanvasElement}
     */
    canvas: document.querySelector(".editor-canvas"),
    notes: [],

    scroll: [0, 0],
    select: [0, 0],
    current: [0, 0],
    audioCtx: null,
    pressedS: false,
    pressedQ: false,
    init() {
        this.canvas.width = window.innerWidth * window.devicePixelRatio;
        this.canvas.height = (window.innerHeight - 50) * window.devicePixelRatio;

        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth * window.devicePixelRatio;
            this.canvas.height = (window.innerHeight - 50) * window.devicePixelRatio;
            this.update();
        });

        this.canvas.addEventListener("wheel", (e) => {
            e.preventDefault();
            this.scroll[0] -= e.deltaX;
            this.scroll[1] -= e.deltaY;
            if (this.scroll[0] > 0) {
                this.scroll[0] = 0;
            }
            if (this.scroll[1] > 0) {
                this.scroll[1] = 0;
            } else if (this.scroll[1] < (-22 * 87 + (window.innerHeight - 50))) {
                this.scroll[1] = (-22 * 87 + (window.innerHeight - 50))
            }
            this.update();
        });

        this.canvas.addEventListener("pointermove", (e) => {
            this.select = [
                Math.floor((e.offsetX - this.scroll[0] - 180) / 22),
                108 - Math.floor((e.offsetY - this.scroll[1] - 22) / 22)
            ];

            if (this.pressedS) {
                this.notes[this.select[0]] = this.select[1];
            } else if (this.pressedQ) {
                this.notes[this.select[0]] = 0;
            }

            this.update();
        });


        this.canvas.addEventListener("paste", (ev) => {
            ev.preventDefault();
            const notes = JSON.parse(ev.clipboardData.getData("text"));
            this.notes.splice(this.select[0], 0, ...notes);
            this.update();
        })

        this.canvas.addEventListener("cut", (ev) => {
            ev.preventDefault();
            ev.clipboardData.clearData();
            ev.clipboardData.setData("text/x-notes", JSON.stringify(this.notes.splice(Math.min(this.current[0], this.select[0]), Math.abs(this.current[0] - this.select[0]) + 1)));

            this.update();
        })

        this.canvas.addEventListener("copy", (ev) => {
            ev.preventDefault();
            ev.clipboardData.clearData();
            ev.clipboardData.setData("text/x-notes", JSON.stringify(this.notes.slice(Math.min(this.current[0], this.select[0]) - 1, Math.max(this.current[0], this.select[0]))));
        })



        this.canvas.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            this.notes[this.select[0]] = 0;
            this.update();
        });

        this.canvas.addEventListener("pointerdown", (e) => {
            e.preventDefault();
            if (e.offsetY < 30) {
                this.current[0] = this.select[0];
                this.update();
                return;
            }
            if (e.offsetX < 180) {
                this.current[1] = this.select[1];
                this.playNote(this.select[1], 1);
                this.update();
                return;
            }
            this.notes[this.select[0]] = this.select[1];
            this.update();
            this.playNote(this.select[1], 0.5);
        });

        try {
            if (location.hash.length >= 2) {
                const load = location.hash.substring(1).split("/");
                while (true) {
                    const n = load.pop();
                    if (n !== 0) {
                        load.push(n);
                        break;
                    }
                }
                load.forEach(e => this.create(e));
            } else {
                const load = JSON.parse(localStorage.getItem("_notes") || "[]");
                if (load.length) {
                    while (true) {
                        const n = load.pop();
                        if (n !== 0) {
                            load.push(n);
                            break;
                        }
                    }
                    load.forEach(e => this.create(Number(e) || 0));
                } else {
                    for (let i = 0; i < 120; i++) {
                        this.create();
                    }
                }
            }
        } catch (_) {
            for (let i = 0; i < 120; i++) {
                this.create();
            }
        }


        window.addEventListener("pointerdown", () => { this.pressedS = true; })
        window.addEventListener("pointerup", () => { this.pressedS = false; })

        window.addEventListener("keydown", (e) => {
            if (e.target.tagName === "INPUT") {
                return;
            }

            if (e.code === "Space") {
                e.preventDefault();
                this.pressedS = true;
            } else if (e.code.startsWith("Shift")) {
                e.preventDefault();
                this.pressedQ = true;
            } else if (e.code === ("ArrowDown")) {
                e.preventDefault();
                for (let i = this.select[0]; i < this.notes.length; i++) {
                    if (this.notes[i] === 0) {
                        continue;
                    }
                    this.notes[i]--;
                }
                this.update();
            } else if (e.code === ("ArrowUp")) {
                e.preventDefault();
                for (let i = this.select[0]; i < this.notes.length; i++) {
                    if (this.notes[i] === 0) {
                        continue;
                    }
                    this.notes[i]++;
                }
                this.update();
            } else if (e.code === ("ArrowRight")) {
                e.preventDefault();
                this.notes.splice(this.select[0], 0, 0);
                this.create(this.notes.pop());
                this.update();
            } else if (e.code === ("ArrowLeft")) {
                e.preventDefault();
                this.notes.splice(this.select[0], 1);
                this.notes[this.notes.length] = 0;
                this.update();
            } else if (e.code === ("KeyC") && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                navigator.clipboard.writeText(JSON.stringify(this.notes.slice(Math.min(this.current[0], this.select[0]), Math.max(this.current[0], this.select[0]) + 1)));
            } else if (e.code === ("KeyV") && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                navigator.clipboard.readText().then(t => {
                    const notes = JSON.parse(t);
                    this.notes.splice(this.select[0] - 1, 0, ...notes);
                    this.update();
                })
            }
        });
        window.addEventListener("keyup", (e) => {
            if (e.target.tagName === "INPUT") {
                return;
            }

            if (e.code === "Space") {
                e.preventDefault();
                this.pressedS = false;
            }

            if (e.code.startsWith("Shift")) {
                e.preventDefault();
                this.pressedQ = false;
            }
        });
        this.update();
    },
    save() {
        if (this.save.last && this.save.last.length === this.notes.length && this.notes.every((e, i) => e === this.save.last[i])) {
            return;
        }
        console.log("save!");
        localStorage.setItem("_notes", JSON.stringify(this.notes));
        this.save.last = [...this.notes]
    },

    update() {
        const ctx = this.canvas.getContext("2d");
        ctx.resetTransform();
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.render_notes();
        this.render_midi_headers();
        this.render_time_headers();
        this.render_highlight();
        this.save();
    },
    render_notes() {
        const ctx = this.canvas.getContext("2d");
        ctx.resetTransform();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.translate(this.scroll[0] + 180, this.scroll[1] + 22);

        ctx.beginPath();
        ctx.fillStyle = "purple";
        ctx.strokeStyle = "#eee";
        ctx.lineWidth = 1;
        for (let i = 0; i < 88; i++) {
            ctx.moveTo(0, i * 22);
            ctx.lineTo(this.notes.length * 22 + 440, i * 22);
        }
        for (let i = 0; i < this.notes.length; i++) {
            ctx.moveTo(i * 22, 0);
            ctx.lineTo(i * 22, 22 * 88);
            const note = this.notes[i];
            if (note > 20 && note < 109) {
                ctx.fillRect(i * 22 + 1, (108 - note) * 22 + 1, 20, 20);
            }
        }
        ctx.stroke();
    },
    render_highlight() {
        const ctx = this.canvas.getContext("2d");
        ctx.resetTransform();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.beginPath();
        ctx.translate(this.scroll[0] + 180, this.scroll[1] + 22);
        ctx.fillStyle = "#f006";
        if (this.select[1] > 20 && this.select[1] < 109) {
            ctx.fillRect(-180, (108 - this.select[1]) * 22, 22 * this.notes.length + 180, 22);
        }
        ctx.fillRect(this.select[0] * 22, -22, 22, 22 * 88);

        ctx.beginPath();
        ctx.fillStyle = "#0f06";
        if (this.current[1] > 20 && this.current[1] < 109) {
            ctx.fillRect(-180, (108 - this.current[1]) * 22, 22 * this.notes.length + 180, 22);
        }
        ctx.fillRect(this.current[0] * 22, -22, 22, 22 * 88);
    },
    render_midi_headers() {
        const ctx = this.canvas.getContext("2d");
        ctx.resetTransform();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.translate(0, this.scroll[1] + 22);

        ctx.beginPath();
        ctx.fillStyle = "#eeed"
        ctx.fillRect(0, 0, 180, 88 * 22);

        ctx.beginPath();
        ctx.font = "16px 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace";
        ctx.fillStyle = "#000"
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ddd";
        for (let i = 0; i < MIDIS.length; i++) {
            const e = MIDIS[87 - i];
            ctx.fillText(e.eng[0] + e.octave + (e.eng[1] || ""), 5, i * 22 - 3 + 22);
            ctx.fillText(e.name, 65, i * 22 - 3 + 22);
            if (e.alt) {
                ctx.fillText(e.alt, 125, i * 22 - 3 + 22);
            }
            ctx.moveTo(0, i * 22);
            ctx.lineTo(180, i * 22);
        }
        ctx.moveTo(0, 88 * 22);
        ctx.lineTo(180, 88 * 22);
        ctx.stroke();
    },
    render_time_headers() {
        const ctx = this.canvas.getContext("2d");
        ctx.resetTransform();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.translate(this.scroll[0] + 180, 0);

        ctx.beginPath();
        ctx.fillStyle = "#eeed"
        ctx.fillRect(0, 0, this.notes.length * 22, 22);

        ctx.beginPath();
        ctx.font = "16px 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace";
        ctx.fillStyle = "#000"
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ddd";
        for (let i = 0; i < this.notes.length + 20; i++) {
            if (!(i % 4)) {
                ctx.fillText((i / 4) % 100 + "", i * 22 + 1, 20);
            }
            ctx.moveTo(i * 22, 0);
            ctx.lineTo(i * 22, 22);
        }
        ctx.moveTo(0, 22);
        ctx.lineTo(this.notes.length * 22, 22);
        ctx.stroke();


        ctx.resetTransform();
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        ctx.beginPath();
        ctx.fillStyle = "#eee"
        ctx.fillRect(0, 0, 180, 22);
        ctx.font = "16px 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace";
        ctx.fillStyle = "#000"
        ctx.fillText("time", 125, 20);

    },
    create_callbacks: {
        pointerdown: function (current, j) {
            this.notes[current] = j + 21;
            this.update();
            this.playNote(j + 21);
        },
        contextmenu: function (current, e) {
            e.preventDefault();
            this.notes[current] = 0;
            this.update();
        },
        pointerenter: function (current, j) {
            this.selectRow(j + 21);
            this.selectCol(current);
            if (this.pressedS) {
                this.notes[current] = j + 21;
                this.update();
                this.playNote(j + 21);
            } else if (this.pressedQ) {
                this.notes[current] = 0;
                this.update();
            }
        },
        pointerleave: function (current, j) {
            this.selectRow(j + 21);
            this.selectCol(current);
            if (this.pressedS) {
                this.notes[current] = j + 21;
                this.update();
            } else if (this.pressedQ) {
                this.notes[current] = 0;
                this.update();
            }
        }
    },
    create(value = 0) {
        this.notes.push(Math.min(108, Math.max(value, 0)));
    },
    play() {
        this.stop();
        const delay = 15000 / tempoValue;
        this.id = setInterval(() => {
            this.current[1] = this.notes[this.current[0]];
            this.scroll[0] += -22;
            this.update();
            if (this.notes[this.current[0]] !== 0) {
                this.playNote(this.notes[this.current[0]], (delay / 1000) + 0.05);
            }
            this.current[0]++;
            if (this.notes.length === this.current[0]) {
                this.stop();
                this.current[0] = 0;
                this.update();
            }
        }, delay);
    },
    stop() {
        if (this.id) {
            clearInterval(this.id);
        }
    },
    playNote(midi, duration = 1) {
        if (midi === 0) {
            return;
        }

        const oscillator = this.audioCtx.createOscillator();
        // 2. ゲインノード（音量調節）を作成
        const gainNode = this.audioCtx.createGain();

        // 周波数を設定
        oscillator.frequency.value = midiToFreq(midi);
        oscillator.type = 'square';

        gainNode.gain.setValueAtTime(0.1, this.audioCtx.currentTime);


        // 接続: オシレーター -> 音量調節 -> スピーカー
        oscillator.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        try {
            this.playNote.current.stop(this.audioCtx.currentTime);
        } catch (_) {
        }
        // 再生開始と停止
        oscillator.start();
        this.playNote.current = oscillator;

        setTimeout(() => {
            oscillator.stop(this.audioCtx.currentTime);
        }, duration * 1000)
        // oscillator.stop(this.audioCtx.currentTime + duration);
    }
};
editor.init();

/**
 * 
 * @returns {number[]}
 */
function midiToFreqMap() {
    // A4 (MIDI 69) = 440Hz を基準とした計算
    if (midiToFreqMap.returns) {
        return midiToFreqMap.returns;
    }
    const returns = [];
    for (let i = 21; i < 109; i++) {
        returns.push(Math.floor(440 * Math.pow(2, (i - 69) / 12)));
    }
    midiToFreqMap.returns = returns;
    return returns;
}

function midiToFreq(midi) {
    return midiToFreqMap()[midi - 21];
}



/**
 * MIDIファイルを解析してnotesを生成する
 * @param {ArrayBuffer} buffer 
 * @returns {number[]}
 */
function parseMidiFile(buffer) {
    const view = new DataView(buffer);
    let offset = 0;

    // MIDIヘッダーチェック
    const headerChunk = String.fromCharCode(
        view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3)
    );

    if (headerChunk !== "MThd") {
        throw new Error("Invalid MIDI file");
    }

    offset = 8; // ヘッダーチャンクサイズをスキップ
    const format = view.getUint16(offset, false); // ビッグエンディアン
    const trackCount = view.getUint16(offset + 2, false);
    const division = view.getUint16(offset + 4, false);
    offset += 6;

    // タイムディビジョンから四分音符あたりのティック数を取得
    const ticksPerQuarter = division & 0x7FFF;

    // 全トラックのイベントを収集
    const allEvents = [];

    for (let track = 0; track < trackCount; track++) {
        // トラックヘッダー
        const trackHeader = String.fromCharCode(
            view.getUint8(offset), view.getUint8(offset + 1),
            view.getUint8(offset + 2), view.getUint8(offset + 3)
        );

        if (trackHeader !== "MTrk") {
            throw new Error("Invalid track header");
        }

        const trackLength = view.getUint32(offset + 4, false);
        offset += 8;

        const trackEvents = parseTrack(view, offset, trackLength);
        allEvents.push(...trackEvents);
        offset += trackLength;
    }

    // イベントを時間順にソート
    allEvents.sort((a, b) => a.absoluteTime - b.absoluteTime);

    // 四分音符単位でnotes配列を生成
    return convertEventsToNotes(allEvents, ticksPerQuarter);
}

/**
 * トラックデータを解析
 * @param {DataView} view 
 * @param {number} startOffset 
 * @param {number} length 
 * @returns {Array}
 */
function parseTrack(view, startOffset, length) {
    const events = [];
    let offset = startOffset;
    let currentTime = 0;
    let runningStatus = 0;

    while (offset < startOffset + length) {
        // デルタタイム読み取り
        const deltaTime = readVariableLength(view, offset);
        offset += deltaTime.bytesRead;
        currentTime += deltaTime.value;

        // イベントタイプ読み取り
        let eventType = view.getUint8(offset);

        if (eventType < 0x80) {
            // ランニングステータス
            eventType = runningStatus;
            offset--;
        } else {
            runningStatus = eventType;
        }

        offset++;

        if ((eventType & 0xF0) === 0x90) {
            // ノートオンイベント
            const note = view.getUint8(offset);
            const velocity = view.getUint8(offset + 1);
            offset += 2;

            if (velocity > 0) {
                events.push({
                    type: 'noteOn',
                    note: note,
                    velocity: velocity,
                    absoluteTime: currentTime
                });
            } else {
                events.push({
                    type: 'noteOff',
                    note: note,
                    absoluteTime: currentTime
                });
            }
        } else if ((eventType & 0xF0) === 0x80) {
            // ノートオフイベント
            const note = view.getUint8(offset);
            offset += 2; // velocityもスキップ

            events.push({
                type: 'noteOff',
                note: note,
                absoluteTime: currentTime
            });
        } else if (eventType === 0xFF) {
            // メタイベント
            const metaType = view.getUint8(offset);
            offset++;
            const length = readVariableLength(view, offset);
            offset += length.bytesRead + length.value;
        } else {
            // その他のイベント（システムエクスクルーシブなど）
            if (eventType === 0xF0 || eventType === 0xF7) {
                const length = readVariableLength(view, offset);
                offset += length.bytesRead + length.value;
            } else if ((eventType & 0xF0) >= 0xC0 && (eventType & 0xF0) <= 0xE0) {
                // 1バイトパラメータのイベント
                offset += ((eventType & 0xF0) === 0xC0 || (eventType & 0xF0) === 0xD0) ? 1 : 2;
            }
        }
    }

    return events;
}

/**
 * 可変長数値を読み取り
 * @param {DataView} view 
 * @param {number} offset 
 * @returns {{value: number, bytesRead: number}}
 */
function readVariableLength(view, offset) {
    let value = 0;
    let bytesRead = 0;
    let byte;

    do {
        byte = view.getUint8(offset + bytesRead);
        value = (value << 7) + (byte & 0x7F);
        bytesRead++;
    } while (byte & 0x80);

    return { value, bytesRead };
}

/**
 * MIDIイベントをnotes配列に変換
 * @param {Array} events 
 * @param {number} ticksPerQuarter 
 * @returns {number[]}
 */
function convertEventsToNotes(events, ticksPerQuarter) {
    const notes = [];
    const activeNotes = new Set();

    // 四分音符の単位で処理（4つのnotesで1四分音符）
    const sixteenthNoteTicks = ticksPerQuarter / 4;

    let currentTick = 0;
    let eventIndex = 0;

    // 最大時間を計算
    const maxTime = events.length > 0 ? events[events.length - 1].absoluteTime : 0;
    const maxSixteenthNotes = Math.ceil(maxTime / sixteenthNoteTicks);

    for (let sixteenthNote = 0; sixteenthNote < maxSixteenthNotes; sixteenthNote++) {
        const targetTime = sixteenthNote * sixteenthNoteTicks;
        const nextTargetTime = (sixteenthNote + 1) * sixteenthNoteTicks;

        // この16分音符の範囲内のイベントを処理
        while (eventIndex < events.length && events[eventIndex].absoluteTime < nextTargetTime) {
            const event = events[eventIndex];

            if (event.type === 'noteOn') {
                activeNotes.add(event.note);
            } else if (event.type === 'noteOff') {
                activeNotes.delete(event.note);
            }

            eventIndex++;
        }

        // 最高音を選択（同時発音時）
        let highestNote = 0;
        if (activeNotes.size > 0) {
            highestNote = Math.max(...Array.from(activeNotes));
        }

        notes.push(highestNote);
    }

    // 最低120個の音符を確保
    while (notes.length < 120) {
        notes.push(0);
    }

    return notes;
}


const cHeader = `#ifdef __AVR__
  #include <avr/pgmspace.h>
#else
  #define PROGMEM
  #define pgm_read_word(addr) (*(const uint16_t*)(addr))
  #define pgm_read_byte(addr) (*(const uint8_t*)(addr))
#endif
#define playNotes(array, bpm, pin) _tone_play_notes((array), sizeof(array), (15000 / (bpm)), (pin))

const uint16_t _tone_freqTable[] PROGMEM = {${midiToFreqMap().join(",")}};

void _tone_play_notes(const uint8_t* array, size_t arraySize, uint16_t delayt, uint8_t pin){
    for (size_t i = 0; i < arraySize; i += 2) {
        uint8_t duration = pgm_read_byte(&array[i]);
        uint8_t midiNote = pgm_read_byte(&array[i + 1]);
        if (midiNote == 0) {
            delay(delayt * duration);
        } else {
            uint16_t frequency = pgm_read_word(&_tone_freqTable[midiNote - 21]);
            tone(pin, frequency);
            delay(delayt * duration);
            noTone(pin);
        }
    }
}
`

function exportC(notes = [0], name = "name") {
    while (true) {
        const n = notes.pop();
        if (n !== 0) {
            notes.push(n);
            break;
        }
    }
    /**
     * @type {[number,number][]}
     */
    const compiledNotes = [];

    const lastop = { midi: 0, time: 0 };
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        if (i === 0) {
            lastop.midi = note;
            lastop.time = 1;
        } else {
            if (lastop.midi !== note) {
                compiledNotes.push([lastop.time, lastop.midi]);
                lastop.midi = note;
                lastop.time = 1;
            } else {
                lastop.time++;
            }
        }
    }
    compiledNotes.push([lastop.time, lastop.midi]);

    return `const uint8_t notes_${name}[] PROGMEM = {${compiledNotes.flat().join(",")}};
// playNotes(notes_${name}, ${tempoValue}, 8)`
}