/**
 * Created by kdj on 15-9-6.
 * 配置
 */

var DJ = DJ || {};

/***************************** 玩家数据 *************************************/
DJ.UserData = {
    tex : res.robot01_png,
    Sunshine : 100,
    Money  : 10,
    Blood : 200,
    Attack : 100,
    Defense : 10,
    Agile : 8
}

/***************************** 物品价格 *************************************/
DJ.ObjectData = {
    SingleSunValue : 2,
    SingleBloodPrice : 10,
    SingleAttackPrice : 11,
    SingleDefensePrice : 8,
    SingleAgilePrice : 6
}

/***************************** 层标签 *************************************/
DJ.LayerTag = {
    MainLayer : 100,
    XLLayer : 101,
    PassLayer : 102,
    PKLayer : 103,
    StoreLayer : 104
}

/***************************** 系数 *************************************/
DJ.Coefficient = {
    Deffence : 0.1, //防御系数

    RandomEnemy : 0.1   //敌人数据随机系数
}

/***************************** 机器人贴图 *************************************/
DJ.RobotTexIndex = 0;
DJ.RobotTex = [
    res.robot01_png,
    res.robot02_png,
    res.robot03_png,
    res.robot04_png
]
