
interface GUIManagementInterface
{
    // Controller Background-Image
    toggleBackgroundImage(): void;

    // Controller Title
    setTitle(title: string): void;
    
    // Controller Dialog
    toggleDialog(): void;

    // Controller Options
    toggleOptions(): void;

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
    public options: HTMLDivElement;

    constructor(guiManagementHTMLDocument: GUIManagementHTMLElement) {
        this.backgroundImage = guiManagementHTMLDocument['backgroundImage']
        this.title = guiManagementHTMLDocument['title']
        this.dialog = guiManagementHTMLDocument['dialog']
        this.speaker = guiManagementHTMLDocument['speaker']
        this.content = guiManagementHTMLDocument['content']
        this.options = guiManagementHTMLDocument['options']
    }

    setToggleBackgroundImage(path: string): void {

        this.backgroundImage.querySelector('img')!.src = path;

    }

    toggleBackgroundImage(): void {

        if (this.backgroundImage.style.display === "none") {
            this.backgroundImage.style.display = "block"
        } else {
            this.backgroundImage.style.display = "none"
        }

    };

    setTitle(title: string): void {
        
        this.title.classList.contains('active') ?
            this.title.classList.remove('active') : '';

        this.title.innerText = title;
        setTimeout(() => {
            this.title.classList.add('active');
        }, 1000);
    };

    toggleDialog(): void {

        if (this.dialog.style.display === "none") {
            this.dialog.style.display = "block"
        } else {
            this.dialog.style.display = "none"
        }

    };

    toggleOptions(): void {

        if (this.options.style.display === "none") {
            this.options.style.display = "block"
        } else {
            this.options.style.display = "none"
        }

    }

    setOptions(options: Array<any>): void {

        // clear child
        const oldOptions = this.options.querySelectorAll<HTMLParagraphElement>('#option')
        oldOptions.forEach(oldOption => {
            this.options.removeChild(oldOption);
        })

        // create child
        options.forEach(option => {

            // validation
            if(!option.text || !option.event) {
                throw new Error('The \'Options\' missing parameter');
            }

            // 
            const button = document.createElement('p');
            button.innerText = option.text;
            button.id = 'option';
            button.onclick = function() {
                option.event();
            }

            this.options.appendChild(button);
        });

    }

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
    public options: HTMLDivElement;

    constructor(
        backgroundImage: HTMLDivElement,
        title: HTMLParagraphElement,
        dialog: HTMLSelectElement,
        speaker: HTMLDivElement,
        content: HTMLParagraphElement,
        options: HTMLDivElement
    ) {
        this.backgroundImage = backgroundImage;
        this.title = title;
        this.dialog = dialog;
        this.speaker = speaker;
        this.content = content;
        this.options = options;
    }
}

const backgroundImage = document.querySelector<HTMLDivElement>('#background-image')!;
const title = document.querySelector<HTMLParagraphElement>('#title')!;
const dialog = document.querySelector<HTMLSelectElement>('#dialog')!;
const speaker = document.querySelector<HTMLDivElement>('#speaker')!;
const content = document.querySelector<HTMLParagraphElement>('#content')!;
const options = document.querySelector<HTMLDivElement>('#options')!;

const config = new GUIManagementHTMLElement(
    backgroundImage,
    title,
    dialog,
    speaker,
    content,
    options
);

export const guiManagement = new GUIManagement(config);
