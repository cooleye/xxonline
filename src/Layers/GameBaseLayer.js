/**
 * Created by kdj on 15-9-8.
 *
 * Ò³Ãæ»ùÀà
 */
var GameBaseLayer = cc.Layer.extend({

    ctor : function(){
        this._super();
        var bg = new cc.Sprite(res.page1_bg_png);
        bg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,30)));
        this.addChild(bg,1);

        var menu = new cc.Menu();
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,10);

        var self = this;
        var closebtn = new cc.MenuItemImage(res.closebtn_png,res.closebtn_png,function(){
            self.setVisible(false);
        },this);
        closebtn.setPosition(cc.pAdd(cc.visibleRect.top,cc.p(236,-104)));
        menu.addChild(closebtn);
    }
})