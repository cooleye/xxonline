/**
 * Created by kdj on 15-9-6.
 * 主页面
 * 玩家在此页面收集阳光能量，获取资源
 */

var MainLayer = cc.Layer.extend({

    Sunshines : [],
    scene : null,

    ctor: function(scene){
        this._super();

        this.scene = scene;

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan: this.onTouchBegan,
            onTouchEnded:this.onTouchEnded
        }, this);

        this.init();
    },
    init : function(){

        var robot = new cc.Sprite(res.robot01_png);
        robot.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,0)));
        this.addChild(robot);

        this.schedule(this.addSunshine,1);

    },
    /*
    * 添加阳光
    * */
    addSunshine : function(){
        var self = this;
        var ss = new cc.Sprite(res.sunshie_png);
        var x = Math.random()* 440 + 100;
        var y = Math.random()*200 + 700;
        ss.scale = 0.8;
        ss.setPosition(cc.p(x,y));
        this.addChild(ss);
        this.Sunshines.push(ss);

        ss.runAction(cc.sequence(cc.moveTo(2,cc.p(x,220)),cc.delayTime(5),cc.callFunc(function(){
            ss.removeFromParent();
            self.Sunshines.remove(ss);
        })))
    },
    /*
    * 手机阳光
    * */
    onTouchBegan : function(t,e){
        var pos = t.getLocation();
        var target = e.getCurrentTarget();

        var l = target.Sunshines.length;
        for(var i = 0;i < l;i++){
            var s = target.Sunshines[i];
            if(s){
                var r = s.getBoundingBox();
                if(cc.rectContainsPoint(r,pos)){
                    s.removeFromParent();
                    target.Sunshines.splice(i,1);

                    DJ.UserData.Sunshine += DJ.ObjectData.SingleSunValue;
                    target.scene.sunhine.setString('SS:' + DJ.UserData.Sunshine);
                }
            }
        }
    },
    onTouchEnded : function(){

    }
})