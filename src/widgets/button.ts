// importing local code, code we have written
import {IdleUpWidgetState, PressedWidgetState } from "../core/ui";
import {Window, Widget, RoleType, EventArgs} from "../core/ui";
// importing code from SVG.js library
import {Rect, Text, Box} from "../core/ui";

class Button extends Widget{
    private _rect: Rect;
    private _text: Text;
    private _input: string;
    private _fontSize: number;
    private _text_y: number;
    private _text_x: number;
    private defaultText: string = "Click Me!";
    private defaultFontSize: number = 18;
    private defaultWidth: number = 100;
    private defaultHeight: number = 40;
    private _clickCallback: (() => void) | null = null;
    private _clickCount: number = 0;

    constructor(parent: Window){
        super(parent);
        this.height = this.defaultHeight;
        this.width = this.defaultWidth;
        this._input = this.defaultText;
        this._fontSize = this.defaultFontSize;
        this.role = RoleType.button;
        this.render();
        this.setState(new IdleUpWidgetState());
        this.selectable = false;
    }

    set fontSize(size:number){
        this._fontSize = size;
        this.update();
    }

    set label(text: string) {
        this._input = text;
        this.update();
    }

    get label(): string {
        return this._input;
    }

    set size([w, h]: [number, number]) {
        this.width = w;
        this.height = h;
        this.update();
    }

    private positionText(){
        let box: Box = this._text.bbox();
        this._text_y = (+this._rect.y() + ((+this._rect.height()/2)) - (box.height/2));
        this._text_x = (Number(this._rect.x()) + (Number(this._rect.width()) / 2) - (box.width / 2));
        this._text.move(this._text_x, this._text_y);
    }

    render(): void {
        this._group = (this.parent as Window).window.group();
        this._rect = this._group.rect(this.width, this.height).fill("#cccccc").stroke("#333");
        this._text = this._group.text(this._input).font({ size: this._fontSize });
        this.outerSvg = this._group;

        let eventrect = this._group.rect(this.width, this.height).opacity(0).attr('id', 0);
        eventrect.css('cursor', 'pointer');
        this.registerEvent(eventrect);
    }

    override update(): void {
        if (this._text != null) {
            this._text.font('size', this._fontSize);
            this._text.text(`${this._input} (${this._clickCount})`);
            this.positionText();
        }

        if (this._rect != null)
            this._rect.fill(this.backcolor);

        super.update();
    }

    pressReleaseState(): void {
        if (this.previousState instanceof PressedWidgetState) {
            this.raise(new EventArgs(this));
            this._clickCount++;
            this.update();
            if (this._clickCallback) this._clickCallback();
        }
    }

    onClick(callback: () => void): void {
        this._clickCallback = callback;
    }

    idleupState(): void {
        this._rect.fill("#cccccc");
    }

    idledownState(): void {
        this._rect.fill("#999999");
    }

    pressedState(): void {
        this._rect.fill("#666666");
    }

    hoverState(): void {
        this._rect.fill("#bbbbbb");
        this._rect.animate(100).attr({ rx: 10, ry: 10 });
    }

    hoverPressedState(): void {
        this._rect.fill("#444444");
    }

    pressedoutState(): void {
        this._rect.fill("#999999");
    }

    moveState(): void {
        // Optional: Add hover animations here
    }

    keyupState(keyEvent?: KeyboardEvent): void {
        if (keyEvent && keyEvent.key === "Enter") {
            this._clickCount++;
            this.update();
            if (this._clickCallback) this._clickCallback();
        }
    }
}

export { Button }
