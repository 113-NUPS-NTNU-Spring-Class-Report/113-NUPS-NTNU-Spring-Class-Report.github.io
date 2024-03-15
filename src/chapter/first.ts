import { GUIManagement, guiManagement } from "../util/GUIManagement";
import { EventHandler } from "../util/EventHandler";
// write down the event trigger and observer trigger 


// intro
guiManagement.toggleBackgroundImage();
guiManagement.toggleDialog();
guiManagement.setTitle('測試 第一章節');
guiManagement.showTitle();

setTimeout( () => {
    guiManagement.setTitle('第二次修改内容');
    guiManagement.showTitle();

    setTimeout( () => {
        guiManagement.setTitle('第二次修改内容');
        guiManagement.showTitle();
    
        guiManagement.toggleDialog()
        guiManagement.setContent('放眼望去，映入眼簾的是一片荒涼。塵土飛揚，似乎找不到任何一點人類生活的氣息')
    
        setTimeout( () => {
            guiManagement.setContent('以往繁忙的高樓大廈，已變得老舊。\n藤曼爬滿了建築，從外頭可以看出建築内凌亂不堪。')

        }, 5000)

    }, 5000)

}, 7000)