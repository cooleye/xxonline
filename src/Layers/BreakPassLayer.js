/**
 * Created by kdj on 15-9-6.
 *
 * ���ؽ���
 */
var BreakPassLayer = GameBaseLayer.extend({

    fightIndex : 0,
    hero : null,
    enemy : null,
    FightState : false,

    sunshineLayer : null,
    sunshineArray : [],

    ctor : function(){
        this._super();

        this.init();
    },
    init : function(){

        /***************************** ����������Ϣ��ʼ����� *************************************/
        this.sunshineLayer = new cc.Layer();
        this.addChild(this.sunshineLayer,50);

        /***************************** ����������Ϣ��ʼ����� *************************************/
        var hero = this.hero = new Role();
        hero.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-150)));
        this.addChild(hero,1);

        /***************************** �ӷ����ȡ������Ϣ��ʼ�� *************************************/
        var enemy = this.enemy = new Role();
        enemy.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,250)));
        this.addChild(enemy,1);

        //ս����ʼǰ����
        var l = this.resultLayer= new cc.LayerColor(cc.color(0,0,0,100),640,400);
        l.setPosition(cc.p(0,300));
        this.addChild(l,10);

        var menu = new cc.Menu();
        menu.setPosition(cc.p(0,0));
        l.addChild(menu);

        var self = this;
        //��ʼս����ť
        var fightbt = this.fightbt = new cc.MenuItemFont("Fight!",function(){
            l.setVisible(false);
            self.FightState = true;
            self.startFight(true);
        },l);
        menu.addChild(fightbt);
        fightbt.setFontSize(50);
        fightbt.setPosition(cc.p(320,200));

        var desc = this.desc = new cc.LabelTTF('fight over','Aril', 50);
        desc.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-180)));
        desc.setColor(cc.color(255,0,0));
        l.addChild(desc);

        //��ʼ������
        this.initFightAnimation();
    },
    /*
    * ��ʼ���������
    * */
    initPlayerData : function (boo) {

        this.hero.initRole(DJ.UserData);

        this.initEmemyData(boo);

    },
    /*
    * ��ʼ���������ݡ�
    * �������������������
    * �㷨�� ���ֵ �Ӽ� 10% ���ٷֱ�ϵ����
    * */
    initEmemyData : function(boo) {

        if(boo){
            var uDdata = DJ.UserData;
            var tex = PassEnemyTex[Math.floor(Math.random()*10)];

            var blood = uDdata.Blood*(cc.randomMinus1To1()*DJ.Coefficient.RandomEnemy + 1);
            var attack = uDdata.Attack*(cc.randomMinus1To1()*DJ.Coefficient.RandomEnemy + 1);
            var defense = uDdata.Defense*(cc.randomMinus1To1()*DJ.Coefficient.RandomEnemy + 1);
            var agile = uDdata.Agile*(cc.randomMinus1To1()*DJ.Coefficient.RandomEnemy + 1);

            EnemyData.tex = tex;
            EnemyData.Blood = blood;
            EnemyData.Attack = attack;
            EnemyData.Defense = defense;
            EnemyData.Agile = agile;
        }else{
            EnemyData = EnemyData;
        }

        this.enemy.initRole(EnemyData);
    },
    /*
    * ս��״̬��
    * ���� FightState �ж��Ƿ� ս��״̬
    * ���� this.fightIndex �ж� �غ�
    * */
    fightWithEnemy : function () {

        if(this.FightState){
            if(this.fightIndex == 0){
                this.heroAttack();
            }else{
                this.enemyAttack();
            }
        }
    },
   /*
   * ��ҹ���
   * */
    heroAttack : function () {
        this.fightIndex = 1;

        var rb = this.enemy.beAttackedBy(this.hero);
        if(rb == 0){
            this.FightState = false;
            this.fightOver(true);
            cc.log('-------- WIN --------')
        }

        this.effectSprite.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,250)));
        this.effectSprite.runAction(this.fightEffect);      //������Ч

    },
   /*
   * ���˹���
   * */
    enemyAttack : function(){
        this.fightIndex = 0;

        var rb = this.hero.beAttackedBy(this.enemy);
        if(rb == 0){
            this.FightState = false;
            this.fightOver(false);
            cc.log('-------- LOSE --------')
        }

        this.effectSprite.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,-150)));
        this.effectSprite.runAction(this.fightEffect);
    },
    /*
    * ��ʼս��
    * */
    startFight : function(boo){

        this.initPlayerData(boo);

        var hag = this.hero.getAgile();
        var eag = this.enemy.getAgile();

        if(hag > eag){
            this.fightIndex = 0;
        }else{
            this.fightIndex = 1;
        }
        this.schedule(this.fightWithEnemy,1);
    },
    /*
    * ս������
    *
    * ���� bool �������� �Ƿ����
    * */
    fightOver : function (bool) {

        var self = this;
        function win(){
            self.resultLayer.setVisible(false);
            self.FightState = true;
            self.startFight(true);
        }

        function fail(){
            self.resultLayer.setVisible(false);
            self.FightState = true;
            self.startFight(false);
        }

        var c = self.sunshineLayer.getChildrenCount();
        cc.log('................................-' + c)


        function dropCoins(){

            for(var i = 0; i < 10; i++){
                var sun = new cc.Sprite(res.sunshie_small_png);

                var dt = Math.random();

                sun.setPosition(cc.p(100 +dt*450,600));
                self.sunshineLayer.addChild(sun);

                var action = cc.sequence(cc.moveBy(dt,cc.p(0,-450)),cc.delayTime(1),cc.moveTo(0.5,cc.p(500,950)),cc.callFunc(function(){
                    sun.removeFromParent();
                    DJ.UserData.Sunshine += 10;
                    self.parent.sunhine.setString(DJ.UserData.Sunshine);
                }))
                sun.runAction(action);
            }
        }

        if(bool){
            dropCoins(); // ������

            self.resultLayer.runAction(cc.sequence(cc.delayTime(2.5),cc.callFunc(function () {
                self.resultLayer.setVisible(true);
                self.sunshineLayer.removeAllChildren();
            })))
            self.desc.setString('---- WIN ----');
            self.fightbt.initWithString('-- NEXT --');
            self.fightbt.setCallback(win);
        }else{
            self.resultLayer.setVisible(true);
            self.desc.setString('---- FAIL ----');
            self.fightbt.initWithString('-- RETRY --');
            self.fightbt.setCallback(fail);
        }
    },
    /*
    * ��ʼ��������Ч
    * */
    initFightAnimation : function(){

        var effectSprite = this.effectSprite =  new cc.Sprite();
        this.addChild(effectSprite,10);
        effectSprite.setPosition(cc.pAdd(cc.visibleRect.center,cc.p(0,250)));

        var fightEffect = this.fightEffect = Utils.initAnimation(res.skillEffect_plist,'',6,false,0.05);

    }
})