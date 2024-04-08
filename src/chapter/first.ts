import { GUIManagement, guiManagement } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";
import { OptionHandle } from '../util/OptionHandle'

// write down the event trigger and observer trigger 


// intro
guiManagement.toggleBackgroundImage();
guiManagement.toggleDialog();
guiManagement.toggleOptions();

const eventHandle = new EventHandle();

// Add action
eventHandle.addAction(() => {
    guiManagement.setTitle('Chp 1');
}, 0);

eventHandle.addAction(() => {
    guiManagement.setTitle('第二次修改内容');
}, 6000);

eventHandle.addAction(() => {
    guiManagement.toggleDialog();
    guiManagement.setContent('放眼望去，映入眼簾的是一片荒涼。塵土飛揚，似乎找不到任何一點人類生活的氣息');
}, 2000);

eventHandle.addAction(() => {
    guiManagement.setContent('以往繁忙的高樓大廈，已變得老舊。\n藤曼爬滿了建築，從外頭可以看出建築内凌亂不堪。');
}, 0);

eventHandle.addAction(() => {
    guiManagement.toggleOptions();
}, 2000);

eventHandle.addAction(() => {
    guiManagement.setOptions(
        [
            {
                text: '測試',
                event: () => {guiManagement.toggleBackgroundImage();}
            },
            {
                text: '測試2',
                event: () => {guiManagement.toggleBackgroundImage();}
            },
        ]
    );
}, 0);

// run event serial
eventHandle.start();