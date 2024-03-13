
// register background image here
const backgroundImages = [
    {
        id:<String> 'menu',
        path:<String> '/vite.svg',
        nextImage:<String> 'test',
    },
    {
        id:<String> 'test',
        path:<String> '/test.png',
        previousImage:<String> 'menu',
        nextImage:<String> 'class',
    },
    {
        id:<String> 'class',
        path:<String> '/class.png',
        previousImage:<String> 'test',
    },
];

interface BackgroundImageInterface
{
    getPath(): String;
    getPreviousImage(): BackgroundImage | void;
    getNextImage(): BackgroundImage | void;
}

// Management image state
class BackgroundImage implements BackgroundImageInterface
{
    public image;
    public imageId;
    public imagePath;
    public previousImage!: BackgroundImage;
    public nextImage!: BackgroundImage;

    constructor(image: any) {
        this.image = image;
        this.imageId = image['id']
        this.imagePath = image['path']
        this.previousImage = image['previousImage']
        this.nextImage = image['nextImage']
    }

    public getId() {
        return this.imageId;
    }

    public getPath() {
        return this.imagePath;
    }

    public getPreviousImage(): BackgroundImage | void {
        const imageId = this.previousImage;
        let previous = <any>'';
        BackgroundImageRegsiterFactory.imageArray.forEach(image => {
            if (image.getId() === imageId) {
                previous = image;
            }
        });
        return previous;
    }

    public getNextImage(): BackgroundImage | void {
        const imageId = this.nextImage;
        let next = <any>'';
        BackgroundImageRegsiterFactory.imageArray.forEach(image => {
            if (image.getId() === imageId) {
                next = image;
            }
        });
        return next;
    }

}

// Register image to application
export class BackgroundImageRegsiterFactory
{

    static imageArray: BackgroundImage[] = [];

    public registerImage(image: BackgroundImage)
    {
        BackgroundImageRegsiterFactory.imageArray.push(image);
    }

    public static getImageArray(): Array<BackgroundImage> {
        return this.imageArray;
    }

    private getCurrentDisplayImage(): BackgroundImage | any {
        const image = document.querySelector<HTMLImageElement>('#background-image');
        const imageId = image!.getAttribute('imageId');
        let imageInstace = <any>'';
        BackgroundImageRegsiterFactory.imageArray.forEach(image => {
            if (image.getId() === imageId) {
                imageInstace = image;
            } else {
                //
            }
        });
        return imageInstace;
    }

    public switchToPreviousImage(): void {
        const currentImage = this.getCurrentDisplayImage();
        console.log(currentImage)
        console.log(currentImage instanceof BackgroundImage)

        if(currentImage instanceof BackgroundImage) {
            let image = document.querySelector<HTMLImageElement>('#background-image')!;

            image.setAttribute('imageId', currentImage.getPreviousImage()!.getId());
            image.src = currentImage.getPreviousImage()!.getPath();
        }
    }

    public switchToNextImage(): void {
        const currentImage = this.getCurrentDisplayImage();
        if(currentImage instanceof BackgroundImage) {
            let image = document.querySelector<HTMLImageElement>('#background-image')!;

            image.setAttribute('imageId', currentImage.getNextImage()!.getId());
            image.src = currentImage.getNextImage()!.getPath();
        }
    }
    
}

// init an register factory
const imageRegisterFactory = new BackgroundImageRegsiterFactory();

backgroundImages.forEach(image => {
    const instance = new BackgroundImage(image);
    imageRegisterFactory.registerImage(instance);
});

export { imageRegisterFactory };