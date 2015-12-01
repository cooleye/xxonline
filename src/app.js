/*
* ҳ����
* ϵͳ�˵� �� ����Ϸ�����ڴ����
* */
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        /*------------------------------����ɫ-------------------------------*/
        var bg = new cc.LayerColor(cc.color(0,0,0),size.width,size.height);
        this.addChild(bg,0)

        /*------------------------------����ͼ-------------------------------*/
        var page1_bg = new cc.Sprite(res.page1_bg_png);
        page1_bg.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,30)));
        this.addChild(page1_bg,1);

        this.initPage();

        this.initUI();

        return true;
    },
    /*
    * �����ʼ��
    * */
    initUI : function(){

        //UI��
        var uilayer = new cc.Layer();
        this.addChild(uilayer,10);

        var menu = new cc.Menu();
        menu.attr({
            x:0,y:0
        });
        uilayer.addChild(menu,2);

        var self = this;

        //************************* ��ȡ���� ********************************//
        var xllayer = self.getChildByTag(DJ.LayerTag.XLLayer);
        var passlayer = self.getChildByTag(DJ.LayerTag.PassLayer);
        var pklayer = self.getChildByTag(DJ.LayerTag.PKLayer);
        var stolayer = self.getChildByTag(DJ.LayerTag.StoreLayer);


        //************************* ���ϵͳ�˵� ********************************//
        var xl = new cc.MenuItemImage(res.xlbtn_png,res.xlbtn_png,function(){
            xllayer.setVisible(true);
            passlayer.setVisible(false);
            pklayer.setVisible(false);
            stolayer.setVisible(false);
        })
        xl.setPosition(cc.pAdd(cc.visibleRect.bottom,cc.p(-200,70)));
        menu.addChild(xl);

        var cg = new cc.MenuItemImage(res.cgbtn_png,res.cgbtn_png,function(){
            xllayer.setVisible(false);
            passlayer.setVisible(true);
            pklayer.setVisible(false);
            stolayer.setVisible(false);
        })
        cg.setPosition(cc.pAdd(cc.visibleRect.bottom,cc.p(-70,70)));
        menu.addChild(cg);

        var pk = new cc.MenuItemImage(res.pkbtn_png,res.pkbtn_png,function(){
            xllayer.setVisible(false);
            passlayer.setVisible(false);
            pklayer.setVisible(true);
            stolayer.setVisible(false);
        })
        pk.setPosition(cc.pAdd(cc.visibleRect.bottom,cc.p(70,70)));
        menu.addChild(pk);

        var store = new cc.MenuItemImage(res.storebtn_png,res.storebtn_png,function(){
            xllayer.setVisible(false);
            passlayer.setVisible(false);
            pklayer.setVisible(false);
            stolayer.setVisible(true);
        })
        store.setPosition(cc.pAdd(cc.visibleRect.bottom,cc.p(200,70)));
        menu.addChild(store);


        //************************* ��������� ********************************//
        var sunhine = this.sunhine = new cc.LabelTTF('SS' + DJ.UserData.Sunshine,'Times New Roman', 32, cc.size(320,40), cc.TEXT_ALIGNMENT_LEFT);
        sunhine.setPosition(cc.pAdd(cc.visibleRect.top,cc.p(-100,-40)));
        uilayer.addChild(sunhine);
        sunhine.setColor(cc.color(255,255,255));

        //************************* ����� ********************************//
        var money = this.money = new cc.LabelTTF('Coin' + DJ.UserData.Money,'Times New Roman', 32, cc.size(320,40), cc.TEXT_ALIGNMENT_LEFT);
        money.setPosition(cc.pAdd(cc.visibleRect.top,cc.p(200,-40)));
        uilayer.addChild(money);
        money.setColor(cc.color(255,255,255));


    },
    /*
    * ��Ӹ���
    * */
    initPage : function(){

        /*-------------------------�����ҳ��---------------------------*/
        var mainlayer = new MainLayer(this);
        this.addChild(mainlayer,10,DJ.LayerTag.MainLayer);

        /*-------------------------���������---------------------------*/
        var xlLayer = new XiuLianLayer(this);
        this.addChild(xlLayer,20,DJ.LayerTag.XLLayer);
        xlLayer.setVisible(false);

        /*-------------------------��Ӵ�����---------------------------*/
        var passLayer = new BreakPassLayer();
        this.addChild(passLayer,20,DJ.LayerTag.PassLayer);
        passLayer.setVisible(false);

        /*-------------------------���PK��---------------------------*/
        var pkLayer = new PKLayer();
        this.addChild(pkLayer,20,DJ.LayerTag.PKLayer);
        pkLayer.setVisible(false);

        /*-------------------------����̵���---------------------------*/
        var storeLayer = new StoreLayer();
        this.addChild(storeLayer,20,DJ.LayerTag.StoreLayer);
        storeLayer.setVisible(false);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

