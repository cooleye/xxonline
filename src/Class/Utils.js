/**
 * Created by kdj on 2015/9/22.
 */
/*
* 工具类
* */


//************************* 初始化动作 ********************************//
/*
* @aniList  :  动作list
* @framName :  帧名称
* @number   ： 帧数
* @isRepeat :  是否重复
* @framTime :  每一帧动画的时间
* */

var Utils = Utils || {};

Utils.initAnimation = function(aniList,framName,number,isRepeat,framTime){
    cc.spriteFrameCache.addSpriteFrames(aniList);
    //this.spriteSheet = cc.SpriteBatchNode.create(res.peoplelist_png);

    var animFrames = [];
    for (var i = 0; i <= number; i++) {
        var str = framName + i + ".png";
        var frame = cc.spriteFrameCache.getSpriteFrame(str);
        animFrames.push(frame);
    }

    var animation = cc.Animation.create(animFrames,framTime);
    var action;
    if(isRepeat){
        action =  new cc.RepeatForever(new cc.Animate(animation));
    }else{
        action =  new cc.Animate(animation);
    }

    return action;
}

/*
*
* */

Array.prototype.remove = function (e) {
    var index = this.indexOf(e);
    if (index > -1) {
        this.splice(index, 1);
    }
}