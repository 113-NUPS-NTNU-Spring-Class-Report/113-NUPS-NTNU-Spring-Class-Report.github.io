import { game } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";

// #region

const buttonOne = game.buttonOne;
const buttonTwo = game.buttonTwo;

buttonOne.addEventListener('click', () => {
    game.runButtonOne();
})

buttonTwo.addEventListener('click', () => {
    game.runButtonTwo();
})

document.body.onkeyup = function(e) {
    if (e.code == "Space") {
        main.skip();
    }
}

document.querySelector("#content")!.addEventListener('click', () => {
    main.skip();
})

document.querySelector("#skip")!.addEventListener('click', () => {
    main.skip();
})

// #endregion

const main = new EventHandle();

const branch1 = new EventHandle();

const branch2 = new EventHandle();

    const branch21 = new EventHandle();

        const branch211 = new EventHandle();

            const branch2111 = new EventHandle();
            const branch2112 = new EventHandle();
            const branch22123 = new EventHandle();
            const branch21122212 = new EventHandle();

                const branch21121 = new EventHandle();
                const branch21122211 = new EventHandle();

                    const branch211211 = new EventHandle();
                    const branch211212 = new EventHandle();

                        const branch2112121 = new EventHandle();

                            const branch21121211 = new EventHandle();
                            const branch21121212 = new EventHandle();

                        const branch2112122 = new EventHandle();

                            const branch21121221 = new EventHandle();
                            const branch21121222 = new EventHandle();

                const branch21122 = new EventHandle();

                    const branch211221 = new EventHandle();

                        const branch2112211 = new EventHandle();

                            const branch21122111 = new EventHandle();

                                const branch211221111 = new EventHandle();
                                const branch211221112 = new EventHandle();

                            const branch21122112 = new EventHandle();

                        const branch2112212 = new EventHandle();

                            const branch21122121 = new EventHandle();
                            const branch21122122 = new EventHandle();

                    const branch211222 = new EventHandle();

                        const branch2112221 = new EventHandle();
                        const branch2112222 = new EventHandle();

        
        const branch212 = new EventHandle();

    const branch22 = new EventHandle();

        const branch221 = new EventHandle();
        
            const branch2211 = new EventHandle();
            const branch2212 = new EventHandle();

                const branch22121 = new EventHandle();

                    const branch221211 = new EventHandle();
                    const branch221212 = new EventHandle();
                    
                const branch22122 = new EventHandle();

        const branch222 = new EventHandle();

// main
// #region

main.addAction(() => {

    game.setContent("你睜開眼睛，發現周圍白茫茫的一片。對周圍的感覺除了寒冷就是疼痛，感覺自己受了很重的傷，思索片刻，你決定：")

    game.toggleButton()

    game.setButtonText(
        "還是睡下去吧..",
        "艱難起身"
    )

    game.chooseButtonOne(() => {
        branch1.start()
    })

    game.chooseButtonTwo(() => {
        branch2.start()
    })
})

// #endregion

// branch1
// #region

branch1.addAction(() => {
    game.setContent("不對啊你怎麼想的 這情況也敢睡？(遊戲結束 妳在雪地裏長眠了) 收錄劇情<span class='plot' title='開局即結束'>《落地成盒》</span>")

    game.setImage("死亡.jpg")

    game.toggleButton(false, true)

    game.setButtonText(
        "重新開始",
        ""
    )

    game.chooseButtonOne(() => {
        location.reload()
    })

    game.chooseButtonTwo(() => {
        // null
    })
})

// #endregion

// branch2
// #region

branch2.addAction(() => {

    game.toggleButton()

    game.setContent("'怎麼想都不對勁啊！！' 帶著這樣的想法妳拼盡掙扎起身，環顧四周。發現自己身處在一片雪地中，站起來後身上的疼痛感突然全部消失了。")
    
    main.addAction(() => {
        game.setContent("零星的記憶在腦海中浮現，這個世界已經被怪物侵占了，現在必須想辦法活下去，可附近一點食物也沒有。此時，你注意到前方不遠處貌似有炊煙升起...")
    })
    
    main.addAction(() => {
        game.setContent("(前往")
    })

    main.addAction(() => {

        game.setContent("到了目的地後，只見一個詭異的老者佇立在篝火前，篝火燒烤著幾大串的肉。但不知道是什麼生物的肉類，飢餓的驅使下，你")

        game.toggleButton()

        game.setButtonText(
            "撿起了一塊石頭 往老者的左側丟去以製造聲響", // branch21
            "主動走出並向老者請求分點肉吃" // branch22
        )

        game.chooseButtonOne(() => {
            branch21.start()
        })

        game.chooseButtonTwo(() => {
            branch22.start()
        })

    })
})

// #endregion

// branch21
// #region

branch21.addAction(() => {

    game.toggleButton()

    game.setContent("老者被聲響吸引並警惕地躲回屋內，而你趁機上前從篝火架上拿了一根最大的烤肉串便頭也不回地逃走了。")

    main.addAction(() => {
        game.setContent("待你覺得逃出安全距離後，開始大口地吃肉，口感像極了回憶裏曾經吃過的烤全羊，且肉鮮甜無比，當然也可能是你太餓了")
    })

    main.addAction(() => {

        game.setContent("吃完後你決定選擇一個方向持續前進，爭取找到一個適合的庇護所。可冬天看不見太陽，你分不清東南西北")

        game.toggleButton()

        game.setButtonText(
            "總感覺繼續往前走下去也沒有什麼希望..", // branch211
            "順著逃跑路線繼續嚮前走吧！" // branch221
        )

        game.chooseButtonOne(() => {
            branch211.start()
        })

        game.chooseButtonTwo(() => {
            branch221.start()
        })

    })
})

// #endregion


// branch22
// #region

branch22.addAction(() => {

    game.toggleButton()

    game.setContent("對方給了你一串烤肉 你聞了聞 看到對方也拿了一串開吃後 便不再猶豫 大快朵頤了起來 ")

    main.addAction(() => {
        game.setContent("很快你吃完了一大串 老者看著你 眼神中帶了點詫異 但你沒有注意到。")
    })

    main.addAction(() => {
        game.setContent("''飽了吧 小夥子 累了的話就進屋睡會兒吧''老者道。但你才剛睡醒 自然沒什麼睡意 表達謝意後便婉拒了他 可他堅持留你下來留宿")
    })

    game.toggleButton()

    game.setButtonText(
        "逃走..", // branch221
        "畢竟吃了人家東西 拿人手短 留下來看看能不能幫他點什麼作為回報吧" // branch222
    )

    game.chooseButtonOne(() => {
        branch221.start()
    })

    game.chooseButtonTwo(() => {
        branch222.start()
    })

})
// #endregion


// branch221
// #region

branch221.addAction(() => {

    game.toggleButton()

    game.setContent("途中 你遇到了一個山洞 洞裏還有個小水潭 你喝了兩口  想道： ")

    game.toggleButton()

    game.setButtonText(
        "既然這山洞與我如此有緣 不如就在這裏度過今夜吧", // branch2211
        "就此離去 沒人會受傷" // branch2212
    )

    game.chooseButtonOne(() => {
        branch2211.start()
    })

    game.chooseButtonTwo(() => {
        branch2212.start()
    })
})
// #endregion

// branch222
// #region

branch222.addAction(() => {
    game.toggleButton()

    game.setContent("老者要你幫忙找了點柴火 讓篝火繼續點燃 你對此感到很疑惑")

    main.addAction(() => {
        game.setContent("為什麼在怪物肆虐橫行的世界裏老者不怕那麽張揚會引來怪物？但你還是照做了 畢竟是吃了人家的食物")
    })

    main.addAction(() => {
        game.setContent("夜裏 你和老人促膝長談 對話中得知對方七歲時親眼看著父母被不知名的怪物殺害 從此孤身一人在這末日下 生存至今 你既感慨命運無常又痛恨怪物們殘暴的性情")
    })

    main.addAction(() => {
        branch22123.start()
    })
})
// #endregion

// branch2211
// #region

branch2211.addAction(() => {
    game.toggleButton()

    game.setContent("深夜 你突然感覺到背脊發涼 如芒在背 可是身邊明明什麼也沒有 你決定坐起來持續觀察四周")

    main.addAction(() => {
        game.setContent("突然 你感覺到左邊有動靜 猛地看去 卻感到一陣劇痛 看著從胸前破體而出 沾滿了鮮血的利爪 你明白")
    })

    main.addAction(() => {
        game.setContent("你死了(遊戲結束)-死因 被幽夜裏的常駐怪物-極 殺死了 <span class='plot'>收錄劇情《我被極敗了 你是最超然的極敗人》</span>")
    })
})
// #endregion

// branch2212
// #region

branch2212.addAction(() => {
    game.toggleButton()

    game.setContent("你選擇回到剛剛遇到老者的地方 好好地道個歉並請求留宿 老者看到你的歸來 並沒有怪罪 依舊是熱情地邀請你進屋子裏留宿 你感嘆道：''世上還是好人多啊''")

    main.addAction(() => {
        branch22123.start();
    })

})

branch22123.addAction(() => {
    game.toggleButton()

    game.setContent("睡前 老者帶著兩杯熱可可走了過來 遞了一杯給你 在這麽冷的天 你感覺他彷彿就是個天使")

    game.toggleButton()

    game.setButtonText(
        "接過來但找機會調換杯子", // branch22121
        "接過並喝下" // branch22122
    )

    game.chooseButtonOne(() => {
        branch22121.start()
    })

    game.chooseButtonTwo(() => {
        branch22122.start()
    })

})

// #endregion

// branch22121
// #region

branch22121.addAction(() => {
    game.toggleButton()

    game.setContent("很顯然你不是性善論的類型 你對一切充滿了猜忌 趁著老者沒注意 你與他調換了杯子 ")
    
    main.addAction(() => {
        game.setContent("老者喝下去後很快就睡著了 一柄鋒利的匕首從他的袖口落下 你的判斷果然是正確的 看著眼前的老者 你選擇")
    })

    game.toggleButton()

    game.setButtonText(
        "選擇放過並離開", // branch221211
        "刀了他" // branch221212
    )

    game.chooseButtonOne(() => {

        main.addAction(() => {
            game.setContent("心地善良的你選擇放過這個在末日世界心懷鬼胎的老逼登 但你也不敢在此逗留 連夜離開了")
        })

        main.addAction(() => {
            game.setContent("路上 你發現雪地好像在慢慢退去 也不知道是連續的精神刺激還是怎地 你最後憑著本能的意識爬上一棵樹 緩緩睡了過去... ...(傳送到主線''再度睜眼..春至的景象！'')")
        })

    })

    game.chooseButtonTwo(() => {
        
        main.addAction(() => {
            game.setContent("你發現只要刀了他 既有現成的糧食亦有了一個完美的庇護所 簡直一舉兩得不要太爽(⃔ *`꒳´♆ )⃕↝")
        })
        
        main.addAction(() => {
            game.setContent("在一段叮叮噹噹的聲響後 你把得到的肉肉們整齊地擺進一個裝滿冰的櫃子裏 雖然在這大冬天的應該也不需要這種保存措施")
        })
        
        main.addAction(() => {
            game.setContent("做完這一切後 一整天各種炸裂的經歷帶來的疲憊開始席捲全身 你躺在老者那用草垛堆起的方形物品 被他稱之為''床''的傢具上沉沉地睡了過去")
        })

        main.addAction(() => {
            game.setContent("早晨 你被熱醒了(懵) 你詫異地爬起身子 跑到屋外 發現沒有一點雪地的痕跡 甚至是樹上的一片花瓣飄落 哪裏還有冬天的樣子")
        })

        main.addAction(() => {
            game.setContent("本想思考到底發生了什麼 但飢餓的情緒佈滿了你的腦袋 你決定把昨晚的戰利品拿出來解凍後做成美味的燒烤")
        })

        main.addAction(() => {
            game.setContent("收集柴火")
        })

        main.addAction(() => {
            game.setContent("你收集了不少乾柴 用屋內翻找到的火摺子點燃後就開始進行美好的燒烤⸜( ˶'ᵕ'˶)⸝ 烤著烤著 你感覺到哪裏不對勁 明明還是早上 怎麼有種光線被遮擋的感覺")
        })

        main.addAction(() => {
            game.setContent("*抬頭")
        })

        main.addAction(() => {
            game.setContent("你抬起頭 看見一個渾身包裹著一層白漿的人形巨像正在俯視著你 很顯然它是被炊煙吸引來的 可是 為什麼？昨天的老者不也是這樣烤卻無事發生嗎？？(這裏不用多加解釋 如果有玩過其他劇情的玩家就會知道老者為什麼會沒事了) 你帶著遺憾與不解 看著對方的腳掌落下 而你就在正下方無處可逃.. ..")
        })

        main.addAction(() => {
            game.setContent("你死了 <span class='plot'>收錄劇情《真·''降維''打擊》</span>")
        })

        main.addAction(() => {
            branch22121.start();
        })

    })

})
// #endregion

// branch22122
// #region

branch22122.addAction(() => {
    game.toggleButton()

    game.setContent("你選擇回到剛剛遇到老者的地方 好好地道個歉並請求留宿 老者看到你的歸來 並沒有怪罪 依舊是熱情地邀請你進屋子裏留宿 你感嘆道：''世上還是好人多啊''")


})
// #endregion

// branch211
// #region

branch211.addAction(() => {

    game.toggleButton()

    game.setContent("你選擇了往左轉後再繼續前行，一路上你看到了一些浮在空中的迷你人頭。雖然場面很詭異但他們沒有傷害你的意思，反而詢問你能不能一起組隊，他們能提供你一些幫助。")

    main.addAction(() => {
        game.setContent("由於記憶力的缺失你不敢冒險 深怕這是某種詐騙 被怪物詐騙的話未免也太丟人了 於是你婉拒了他們 他們也沒再多作強求 就這麽放你走了 貌似是個不起眼的小插曲 (絕對不是製作組時間不足刪減了這些小可愛的劇情)")
    })

    main.addAction(() => {
        game.setContent("就這樣從白天走到了黑夜，路過一條小溪，剛剛吃了烤肉的能力感到口乾舌燥。就這樣趴在溪邊大口灌水，接著便心滿意足的離開了。")
    })

    main.addAction(() => {
        game.setContent("一路上， 你看到過許許多多的怪物，有渾身裹著一層白漿的人形巨像，看似被吊在樹上求助但腳下明顯有一張深淵巨口的明目張膽型陷阱怪..")
    })

    main.addAction(() => {
        game.setContent("夜深了 你依舊找不到適合躲藏的地方 哪怕是一個山洞都沒見著 黑夜裏總感覺身邊有影子跟著 但每次警惕地回頭換來的卻只是無邊的寂靜 你決定")

        game.toggleButton()

        game.setButtonText(
            "開始狂奔尋找適宜的住所", // branch2111
            "躲在樹上靜觀其變" //
        )

        game.chooseButtonOne(() => {
            branch2111.start()
        })

        game.chooseButtonTwo(() => {
            branch2112.start()
        })
    })

})

// #endregion

// branch2111
// #region

branch2111.addAction(() => {

    game.toggleButton()

    game.setContent("你發現周圍的光越來越暗，直到最後竟是看不見一絲光亮。且除了視覺外，感覺其他五感也被剝奪了，你聽不見任何聲音..")

    main.addAction(() => {
        game.setContent("甚至擊打自己也沒有絲毫觸感 巨大的絕望與恐懼包裹著你的內心 你感到身子越來越虛弱... ...")
    })

    main.addAction(() => {
        game.setContent("你死了(回到節點從白天走到黑夜)獲得怪物情報-弒月-隱藏夜習性怪物，具有剝奪五感的能力。以對方的恐懼與絕望作為鏈接點吸取生命力直至對方死亡，弱點是周圍明亮度越高能力越弱。")
    })

    main.addAction(() => {
        game.setContent("可隨身攜帶火摺子之類的物品進行有效的能力剋制，一旦失去能力效果弒月本身的物理攻擊能力並不強，凡胎人身都可以輕易擊敗他。<br><br>收錄劇情<span class='plot' title='被怪物殺死'>《好黑喔 好可怕喔》</span>")
    })
})

// #endregion

// branch2112
// #region

branch2112.addAction(() => {
    
    game.toggleButton()

    game.setContent("很快 被尾隨的感覺消失殆盡 對方走前貌似發出了惱怒的聲音")

    main.addAction(() => {
        game.setContent("甚至擊打自己也沒有絲毫觸感 巨大的絕望與恐懼包裹著你的內心 你感到身子越來越虛弱... ...")
    })

    main.addAction(() => {
        game.setContent("你慶幸自己逃過一劫 方才怪物帶給你的精神壓力造成的疲勞使你決定就這樣睡在樹上 (這裏就不是主角能決定的了 你決定讓他：")
    })

    game.setButtonText(
        "睡到一半從樹上滾下來", // branch21121
        "安穩地在樹上睡過一晚上" // branch21122
    )

    game.chooseButtonOne(() => {
        branch21121.start()
    })

    game.chooseButtonTwo(() => {
        branch21122.start()
    })

});

// #endregion

// branch21121
// #region

branch21121.addAction(() => {
    
    game.toggleButton()

    game.setContent("劇痛席捲全身 你掙扎著爬起來 發現除了疼痛身子並無大礙")

    main.addAction(() => {
        game.setContent("慶幸現在是雪天 雪地對你的墜落進行了緩衝與保護")
    })

    main.addAction(() => {
        game.setContent("放眼望去此刻身處黑夜 且那股不安的感覺再次襲來")
    })

    game.setButtonText(
        "媽的拼了", // branch211211
        "爬回樹上故技重施" // branch211212
    )

    game.chooseButtonOne(() => {
        branch211221.start()
    })

    game.chooseButtonTwo(() => {
        branch211222.start()
    })
});

// #endregion

// branch21122
// #region

branch21122.addAction(() => {

    game.toggleButton()

    game.setContent("再度睜眼 是被刺眼的光亮給刺激醒來的 昨天還是冰天雪地 今天的天氣卻變得艷陽高照 萬物復甦 儼然是一副春至的景象！")

    main.addAction(() => {
        game.setContent("極大的反差讓你急於尋求答案 一路上你避開了一些看著就很有問題的傢伙 還是那隻身上裹著一層白漿的巨大人偶")
    })

    main.addAction(() => {
        game.setContent("天空中飛過一臉大叔樣的...鮟鱇魚...？-？等等的 甚至你在蹲下里休息時意外發現會走動的小蘑菇正在悄咪咪朝你靠近！")
    })

    main.addAction(() => {
        game.setContent("這個世界真是危機四伏 你開始擔心自己還能苟多久了... ...")
    })

    main.addAction(() => {
        game.setContent("突然 你感覺腳板踩到了什麼機關 緊接著落葉平鋪的地面上彈出一張巨網將你包裹並收束 就這麽把你懸吊在空中")
    })

});

// #endregion

// branch211221
// #region

branch211221.addAction(() => {

    game.toggleButton()

    game.setContent("你選擇站在原地大聲怒吼 卻發現周圍一根鳥毛都沒有 過了一會兒 你決定爬回樹上繼續睡")

    main.addAction(() => {
        game.setContent("抬頭時卻突然發現月亮消失了 周圍的光線也消失殆盡 不僅是視力 其他五感也被剝奪了")
    })

    main.addAction(() => {
        game.setContent("你聽不見任何聲音..甚至擊打自己也沒有絲毫觸感 巨大的絕望與恐懼包裹著你的內心 你感到身子越來越虛弱... ...")
    })

    main.addAction(() => {
        game.setContent("你死了(回到節點劇痛席捲全身)獲得怪物情報-弒月-隱藏夜習性怪物 具有逐漸剝奪五感的能力 以對方的恐懼與絕望作為鏈接點吸取生命力直至對方死亡")
    })

    main.addAction(() => {
        game.setContent(" 弱點是周圍明亮度越高能力越弱 可隨身攜帶火摺子之類的物品進行有效的能力剋制 一旦失去能力效果弒月本身的物理攻擊能力並不強 凡胎人身都可以輕易擊敗他弒月還有一個特殊能力是消耗更多生命力")
    })

    main.addAction(() => {
        game.setContent("達到遮天蔽月的效果 使剝奪五感能力在短時間內發揮到最大化 在這裏正是使用了這能力導致玩家快速昇天<span class='plot' title='被怪物打爆了'>收錄劇情《我焯！外掛！！》</span>")
    })

});

// #endregion

// branch211222
// #region

branch211222.addAction(() => {

    game.toggleButton()

    game.setContent("這次對方顯然對於你的戲耍感到十分惱怒 你聽見夾帶著不甘與憤怒的嘶吼 你也在這聲明亮的嘶吼聲中鎖定看清對方的存在 ")

    main.addAction(() => {
        game.setContent("是一個渾身漆黑的怪物 體型與人類如出一轍 但你看著他時總是有種他很腎虛的感覺")
    })

    game.setButtonText(
        "跳下去皇城pk", // branch2112221
        "繼續躲在樹上靜觀其變" // branch2112222
    )

    game.chooseButtonOne(() => {
        branch211221.start()
    })

    game.chooseButtonTwo(() => {
        branch211222.start()
    })

});

// branch2112221
// #region

branch2112221.addAction(() => {

    game.setContent("被他追了那麽久你早就感到不耐煩了 看到那副腎虛的模樣你更是氣不打一處來 敢情自己就被這樣一個腎虛仔給嚇得魂不守舍？")

    main.addAction(() => {
        game.setContent("你決定重拳出擊 從樹上跳下來後 你猛地向他撲去 卻發現他似乎沒有半點力氣般地被你撲倒 後腦勺與身後的樹猛烈碰撞 他就這樣沒了生息")
    })

    main.addAction(() => {
        game.setContent("站在原地發呆片刻的你察覺到了異樣 剛剛那隻腎虛仔體內冒出一層白色的仙氣 湧入你身體裏 你感覺到精力更充沛了")
    })

    main.addAction(() => {
        game.setContent("渾身都有用不完的力氣似的 雖然不知道什麼原因 反正不是什麼壞事？你睡意全無 決定繼續在森林裏閑逛")
    })

    main.addAction(() => {
        game.setContent("你成功尋找到一些熟悉的水果 香蕉 芭樂 吃飽喝足後天邊也露出了魚肚白 你又踏上了漫無目的的旅途")
    })

    main.addAction(() => {
        game.setContent("走著走著 你找到了一棵參天大樹 但..看著不怎麼有安全感吶 為什麼附近會有那麽多怪物走動 你還看見白漿人偶從樹下的地面''長''了出來")
    })

    main.addAction(() => {
        game.setContent("這下你理解了白漿人偶的原型 他是(土地公！不是啦幹)由天然黏土形成的 到了晚上就會回歸大地 怪不得晚上就不見蹤影")
    })

    main.addAction(() => {
        game.setContent("此時你注意到樹上有一顆果實般的半透明物體 裏邊有一隻像是幼年的腎虛仔 殘缺的記憶逐漸浮現 你發現你這是誤打誤撞遇上孕育怪物的巨樹了 近在咫尺的巨樹 摧毀它的大好機會擺在眼前 你決定")
    })

    game.setButtonText(
        "掏出火摺子 找機會一把火給他燒了", // branch21122211
        "歐拉巨樹！！！" // branch21122212
    )

    game.chooseButtonOne(() => {
        branch211221.start()
    })

    game.chooseButtonTwo(() => {
        branch211222.start()
    })

});

// branch2112222
// #region

branch2112222.addAction(() => {

});

// branch21122211
// #region

branch21122211.addAction(() => {

    game.setContent("在等了兩個小時半後 怪物們都已經四散活動了 留下來把守巨樹的寥寥無幾 你意識到這是那萬里挑一的完美時機")

    main.addAction(() => {
        game.setContent(" 於是打開火摺子點燃了一些乾柴後 就往巨樹的頭上扔去 儘管在殺死腎虛仔後你精力充沛 成功將火種扔到巨樹身上 卻發現他竟然沒有起火的跡象 反而你的舉動引起了怪物們的注意力")
    })

    main.addAction(() => {
        game.setContent("你死了")
    })

    main.addAction(() => {
        branch2112221.start()
    })

});

// branch21122212
// #region

branch21122212.addAction(() => {

    game.setContent("雖然獲得了腎虛仔提供的仙氣加持但似乎沒啥作用 巨大的擊打聲引起了怪物們的注意")

    main.addAction(() => {
        game.setContent("加大力量歐拉！！！！")
    })

    main.addAction(() => {
        game.setContent("依舊沒什麼效果 怪物們已經朝你靠近了")
    })

    main.addAction(() => {
        game.setContent("拼了！！！！！！！！！")
    })

    main.addAction(() => {
        game.setContent("絕望中 你的拳頭開始散發出如腎虛仔身上冒出的那層白色仙氣 打向巨樹 其他怪物不約而同地停了下來 隨著毆打的次數不斷增多 你也感覺到自身漸漸虛弱")
    })

    main.addAction(() => {
        game.setContent("在你即將失去意識的時候 巨樹彷彿發出了一陣古老的低語 在你眼睛閉上的前一刻 你看到一股相似的仙氣從巨樹傳出來 湧入你的身體裏")
    })

    main.addAction(() => {
        game.setContent("你的腦袋裏出現了一段不屬於你的回憶 看來這是屬於巨樹 亦或是 世界的回憶：(這裏建議就是採用電影謝幕的方式？)")
    })

    main.addAction(() => {
        game.setContent("在你即將失去意識的時候 巨樹彷彿發出了一陣古老的低語 在你眼睛閉上的前一刻 你看到一股相似的仙氣從巨樹傳出來 湧入你的身體裏")
    })

});

// #endregion
main.start();