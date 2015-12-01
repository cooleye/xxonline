/**
 * Created by kdj on 15-9-8.
 *
 * 角色类
 * 通过 new 此类创建新角色
 */
var Role = cc.Sprite.extend({

    _bloodValue : 0, //血量
    _attackValue : 0,//攻击
    _defenseValue : 0,//防御
    _agileValue : 0,//敏捷
    _FULLBlOOD : 0,//满血量

    _blood : null,

    ctor : function(){
        this._super();

        var blood = this._blood = new cc.Sprite(res.blood_png);
        blood.setAnchorPoint(cc.p(0,0));
        this.addChild(blood);
        var x = this.getContentSize().width/2;
        blood.setPosition(cc.p(0,250));
    },
    initRole : function(data){

        this.initWithFile(data.tex);
        this._bloodValue = data.Blood;
        this._FULLBlOOD = data.Blood;
        this._attackValue = data.Attack;
        this._defenseValue = data.Defense;
        this._agileValue = data.Agile;

        this._blood.scaleX = 200;
    },
    getAgile : function(){
        return this._agileValue;
    },
    getAttackValue : function(){
        return this._attackValue;
    },
    getBlood : function(){
        return this._bloodValue;
    },
    setBloodValue : function(b){
        this._bloodValue = b;
    },
    setBloodSprite : function(v){
        this._blood.scaleX = v;
    },
    beAttackedBy : function(role){
        var decrement = role.getAttackValue() - this._defenseValue*DJ.Coefficient.Deffence;
        this._bloodValue -= decrement;

        var action =  cc.jumpBy(0.5, cc.p(0, 0), 20, 4);
        this.runAction(action);

        if(this._bloodValue <= 0){
            this._bloodValue = 0;
            this._blood.scaleX = 0;
        }else{
            this._blood.scaleX -= (decrement/this._FULLBlOOD)*200;
        }
        return this._bloodValue;
    }
})