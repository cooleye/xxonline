/**
 * Created by kdj on 15-9-6.
 * ����
 */

var DJ = DJ || {};

/***************************** ������� *************************************/
DJ.UserData = {
    tex : res.robot01_png,
    Sunshine : 100,
    Money  : 10,
    Blood : 200,
    Attack : 100,
    Defense : 10,
    Agile : 8
}

/***************************** ��Ʒ�۸� *************************************/
DJ.ObjectData = {
    SingleSunValue : 2,
    SingleBloodPrice : 10,
    SingleAttackPrice : 11,
    SingleDefensePrice : 8,
    SingleAgilePrice : 6
}

/***************************** ���ǩ *************************************/
DJ.LayerTag = {
    MainLayer : 100,
    XLLayer : 101,
    PassLayer : 102,
    PKLayer : 103,
    StoreLayer : 104
}

/***************************** ϵ�� *************************************/
DJ.Coefficient = {
    Deffence : 0.1, //����ϵ��

    RandomEnemy : 0.1   //�����������ϵ��
}

/***************************** ��������ͼ *************************************/
DJ.RobotTexIndex = 0;
DJ.RobotTex = [
    res.robot01_png,
    res.robot02_png,
    res.robot03_png,
    res.robot04_png
]
