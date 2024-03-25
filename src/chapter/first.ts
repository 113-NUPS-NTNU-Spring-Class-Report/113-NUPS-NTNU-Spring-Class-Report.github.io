import { GUIManagement, guiManagement } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";
import { OptionHandle } from '../util/OptionHandle'
// write down the event trigger and observer trigger 


// intro
guiManagement.toggleBackgroundImage();
guiManagement.toggleDialog();

const eventHandle = new EventHandle();

// Add action
eventHandle.addAction(() => {
    guiManagement.setTitle('Chp 1');
    guiManagement.showTitle(3);
}, 0);

eventHandle.addAction(() => {
    guiManagement.setTitle('第二次修改内容');
    guiManagement.showTitle();
}, 4000);

eventHandle.addAction(() => {
    guiManagement.toggleDialog();
    guiManagement.setContent('放眼望去，映入眼簾的是一片荒涼。塵土飛揚，似乎找不到任何一點人類生活的氣息');
}, 3000);

eventHandle.addAction(() => {
    guiManagement.setContent('以往繁忙的高樓大廈，已變得老舊。\n藤曼爬滿了建築，從外頭可以看出建築内凌亂不堪。');
}, 3000);

eventHandle.start();