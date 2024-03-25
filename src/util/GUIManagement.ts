
interface GUIManagementInterface
{
    // Controller Background-Image
    toggleBackgroundImage(): void;

    // Controller Title
    setTitle(title: string): void;
    showTitle(): void;
    
    // Controller Dialog
    toggleDialog(): void;

    // Controller Speaker
    setSpeaker(): void;

    // Controller Content
    setContent(content: string): void;
}

export class GUIManagement implements GUIManagementInterface
{

    public backgroundImage: HTMLDivElement;
    public title: HTMLParagraphElement;
    public dialog: HTMLSelectElement;
    public speaker: HTMLDivElement;
    public content: HTMLParagraphElement;

    constructor(guiManagementHTMLDocument: GUIManagementHTMLElement) {
        this.backgroundImage = guiManagementHTMLDocument['backgroundImage']
        this.title = guiManagementHTMLDocument['title']
        this.dialog = guiManagementHTMLDocument['dialog']
        this.speaker = guiManagementHTMLDocument['speaker']
        this.content = guiManagementHTMLDocument['content']
    }

    toggleBackgroundImage(): void {

        if (this.backgroundImage.style.display === "none") {
            this.backgroundImage.style.display = "block"
        } else {
            this.backgroundImage.style.display = "none"
        }

    };

    setTitle(title: string): void {
        this.title.innerText = title;
    };

    showTitle(delay: number = 6): void {
        this.title.classList.add('active');
        setTimeout(() => {
            this.title.classList.remove('active');
        }, delay * 1000);
    };

    toggleDialog(): void {

        if (this.dialog.style.display === "none") {
            this.dialog.style.display = "block"
        } else {
            this.dialog.style.display = "none"
        }

    };

    setSpeaker(): void {

    };

    setContent(content: string): void {

        const data = content.split('')
        const container = this.content;

        if(container.innerHTML.split('').length > 0) {
            container.innerHTML = '';
        }

        let index = 0
        function writing() {
            if (index < data.length) {
                container.innerHTML += data[index ++];
                setTimeout(writing, 60);
            }
        }
        writing();

    };

}

class GUIManagementHTMLElement
{
    public backgroundImage: HTMLDivElement;
    public title: HTMLParagraphElement;
    public dialog: HTMLSelectElement;
    public speaker: HTMLDivElement;
    public content: HTMLParagraphElement;

    constructor(
        backgroundImage: HTMLDivElement,
        title: HTMLParagraphElement,
        dialog: HTMLSelectElement,
        speaker: HTMLDivElement,
        content: HTMLParagraphElement,
    ) {
        this.backgroundImage = backgroundImage;
        this.title = title;
        this.dialog = dialog;
        this.speaker = speaker;
        this.content = content;
    }
}

const backgroundImage = document.querySelector<HTMLDivElement>('#background-image')!;
const title = document.querySelector<HTMLParagraphElement>('#title')!;
const dialog = document.querySelector<HTMLSelectElement>('#dialog')!;
const speaker = document.querySelector<HTMLDivElement>('#speaker')!;
const content = document.querySelector<HTMLParagraphElement>('#content')!;

const config = new GUIManagementHTMLElement(
    backgroundImage,
    title,
    dialog,
    speaker,
    content,
);

export const guiManagement = new GUIManagement(config);
