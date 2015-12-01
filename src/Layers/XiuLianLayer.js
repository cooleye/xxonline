/**
 * Created by kdj on 15-9-6.
 *
 * ����ҳ
 *
 * ����ڴ�ҳ�������������
 */
var XiuLianLayer = GameBaseLayer.extend({
    scene : null,
    ctor : function(scene){
       this._super();
        this.scene = scene;
        this.init();
    },
    init : function(){

        /***************************** ���ͷ�� *************************************/
        var avatar = new cc.Sprite(res.robot01_png);
        avatar.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,200)));
        this.addChild(avatar,1);

        var menu = new cc.Menu();
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,10);
        var self = this;



        /***************************** Ѫ��ֵ���� *************************************/
        var bloodbg = new cc.Sprite(res.labelbg_png);
        bloodbg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-20)));
        this.addChild(bloodbg,1);

        /***************************** ����ֵ���� *************************************/
        var attackbg = new cc.Sprite(res.labelbg_png);
        attackbg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-100)));
        this.addChild(attackbg,1);

        /***************************** ����ֵ���� *************************************/
        var defensebg = new cc.Sprite(res.labelbg_png);
        defensebg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-180)));
        this.addChild(defensebg,1);

        /***************************** ����ֵ���� *************************************/
        var agilebg = new cc.Sprite(res.labelbg_png);
        agilebg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-260)));
        this.addChild(agilebg,1);


        /***************************** Ѫ��ֵ *************************************/
        var bloodvalue = new cc.LabelTTF(DJ.UserData.Blood,'Times New Roman', 32, cc.size(300,40), cc.TEXT_ALIGNMENT_RIGHT);
        bloodvalue.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-20)));
        this.addChild(bloodvalue,2);
        bloodvalue.setColor(cc.color(255,255,255));

        /***************************** ����ֵ *************************************/
        var attackvalue = new cc.LabelTTF(DJ.UserData.Attack,'Times New Roman', 32, cc.size(300,40), cc.TEXT_ALIGNMENT_RIGHT);
        attackvalue.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-100)));
        this.addChild(attackvalue,2);
        attackvalue.setColor(cc.color(255,255,255));

        /***************************** ����ֵ *************************************/
        var defensevalue = new cc.LabelTTF(DJ.UserData.Defense,'Times New Roman', 32, cc.size(300,40), cc.TEXT_ALIGNMENT_RIGHT);
        defensevalue.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-180)));
        this.addChild(defensevalue,2);
        defensevalue.setColor(cc.color(255,255,255));

        /***************************** ����ֵ *************************************/
        var agilevalue = new cc.LabelTTF(DJ.UserData.Agile,'Times New Roman', 32, cc.size(300,40), cc.TEXT_ALIGNMENT_RIGHT);
        agilevalue.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-260)));
        this.addChild(agilevalue,2);
        agilevalue.setColor(cc.color(255,255,255));



        /***************************** ��Ѫ��ť *************************************/
        var pb = new cc.MenuItemImage(res.plusebtn_png,res.plusebtn_png,function(){
            if(DJ.UserData.Sunshine >= DJ.ObjectData.SingleBloodPrice){
                DJ.UserData.Sunshine -= DJ.ObjectData.SingleBloodPrice;
                self.scene.sunhine.setString('SS:' + DJ.UserData.Sunshine);
                DJ.UserData.Blood += 1;
                bloodvalue.setString(DJ.UserData.Blood);
            }
        },this);
        pb.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(190,-20)));
        menu.addChild(pb);

        /***************************** �ӹ�����ť *************************************/
        var pa = new cc.MenuItemImage(res.plusebtn_png,res.plusebtn_png,function(){
            if(DJ.UserData.Sunshine >= DJ.ObjectData.SingleAttackPrice){
                DJ.UserData.Sunshine -= DJ.ObjectData.SingleAttackPrice;
                self.scene.sunhine.setString('SS:' + DJ.UserData.Sunshine);
                DJ.UserData.Attack += 1;
                attackvalue.setString(DJ.UserData.Attack);
            }
        },this);
        pa.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(190,-100)));
        menu.addChild(pa);

        /***************************** �ӷ�����ť *************************************/
        var pd = new cc.MenuItemImage(res.plusebtn_png,res.plusebtn_png,function(){
            if(DJ.UserData.Sunshine >= DJ.ObjectData.SingleDefensePrice){
                DJ.UserData.Sunshine -= DJ.ObjectData.SingleDefensePrice;
                self.scene.sunhine.setString('SS:' + DJ.UserData.Sunshine);
                DJ.UserData.Defense += 1;
                defensevalue.setString(DJ.UserData.Defense);
            }
        },this);
        pd.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(190,-180)));
        menu.addChild(pd);

        /***************************** �����ݰ�ť *************************************/
        var pag = new cc.MenuItemImage(res.plusebtn_png,res.plusebtn_png,function(){
            if(DJ.UserData.Sunshine >= DJ.ObjectData.SingleAgilePrice){
                DJ.UserData.Sunshine -= DJ.ObjectData.SingleAgilePrice;
                self.scene.sunhine.setString('SS:' + DJ.UserData.Sunshine);
                DJ.UserData.Agile += 1;
                agilevalue.setString(DJ.UserData.Agile);
            }
        },this);
        pag.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(190,-260)));
        menu.addChild(pag);
    }
})