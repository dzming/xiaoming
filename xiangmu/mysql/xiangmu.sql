/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-29 11:56:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for aleftgoods
-- ----------------------------
DROP TABLE IF EXISTS `aleftgoods`;
CREATE TABLE `aleftgoods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(60) NOT NULL,
  `goodsname` varchar(50) NOT NULL,
  `lprice` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) NOT NULL,
  `quantity` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aleftgoods
-- ----------------------------
INSERT INTO `aleftgoods` VALUES ('1', '../images/ma_l_goods1.png', '迈蔻MAIKO 孙悟空变身装', '60.00', '41.40', '30');
INSERT INTO `aleftgoods` VALUES ('2', '../images/ma_l_goods2.png', 'RetKingDow 超仙蕾丝打底衫', '40.00', '29.00', '117');
INSERT INTO `aleftgoods` VALUES ('3', '../images/ma_l_goods1.png', '迈蔻MAIKO 孙悟空变身装', '67.00', '42.00', '69');

-- ----------------------------
-- Table structure for arightgoods
-- ----------------------------
DROP TABLE IF EXISTS `arightgoods`;
CREATE TABLE `arightgoods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(60) NOT NULL,
  `goodsname` varchar(100) NOT NULL,
  `lprice` decimal(10,2) NOT NULL,
  `oprice` decimal(10,2) NOT NULL,
  `quantity` varchar(20) NOT NULL,
  `heat` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of arightgoods
-- ----------------------------
INSERT INTO `arightgoods` VALUES ('1', '../images/mr_goods1.png', '2017年新款 妮克威尔 华夫格休闲亲子外套 狗狗装 白色 M号', '249.00', '236.00', '554', '1465');
INSERT INTO `arightgoods` VALUES ('2', '../images/mr_goods2.png', 'PETCIRCLE宠物圈 奥弗里小狮子毛衣', '312.00', '284.00', '88', '248');
INSERT INTO `arightgoods` VALUES ('3', '../images/mr_goods3.png', '2018年新款俏尾巴SmartTail 猪朋狗友款带帽卫衣 红色 S号', '22.00', '18.90', '153', '1642');
INSERT INTO `arightgoods` VALUES ('4', '../images/mr_goods4.png', '2017年新款 妮克威尔 华夫格休闲亲子外套 狗狗装 白色 M号', '167.70', '77.40', '105', '149');
INSERT INTO `arightgoods` VALUES ('5', '../images/mr_goods5.png', 'Petcircle宠物圈 大白队长变身装 S', '36.00', '25.20', '347', '3485');
INSERT INTO `arightgoods` VALUES ('6', '../images/mr_goods6.png', '丑丑H.CHOUCHOU 白色羊羔绒毛裙 16号', '89.00', '64.00', '264', '845');
INSERT INTO `arightgoods` VALUES ('7', '../images/mr_goods7.png', '美国奥柯特alcott 高反光宠物围巾 警示橙L号脖围39-58cm', '129.00', '114.00', '219', '2245');
INSERT INTO `arightgoods` VALUES ('8', '../images/mr_goods8.png', '迈蔻MKO 孙悟空变身装 M号', '67.00', '54.00', '447', '645');
INSERT INTO `arightgoods` VALUES ('9', '../images/mr_goods9.png', 'PetKingdow 宠物服饰 超仙蕾丝打底衫 配镶钻胸花', '241.00', '219.00', '614', '774');
INSERT INTO `arightgoods` VALUES ('10', '../images/mr_goods1.png', '2017年新款 妮克威尔 华夫格休闲亲子外套 狗狗装 白色 M号', '147.00', '136.00', '497', '648');
INSERT INTO `arightgoods` VALUES ('11', '../images/mr_goods2.png', 'PETCIRCLE宠物圈 奥弗里小狮子毛衣', '416.00', '398.00', '156', '295');
INSERT INTO `arightgoods` VALUES ('12', '../images/mr_goods3.png', '2018年新款俏尾巴SmartTail 猪朋狗友款带帽卫衣 红色 S号', '228.00', '197.00', '451', '169');
INSERT INTO `arightgoods` VALUES ('13', '../images/mr_goods4.png', '2017年新款 妮克威尔 华夫格休闲亲子外套 狗狗装 白色 M号', '55.00', '45.00', '1050', '1491');
INSERT INTO `arightgoods` VALUES ('14', '../images/mr_goods5.png', 'Petcircle宠物圈 大白队长变身装 S', '368.00', '350.00', '426', '348');
INSERT INTO `arightgoods` VALUES ('15', '../images/mr_goods6.png', '丑丑H.CHOUCHOU 白色羊羔绒毛裙 16号', '359.00', '324.00', '614', '425');
INSERT INTO `arightgoods` VALUES ('16', '../images/mr_goods7.png', '美国奥柯特alcott 高反光宠物围巾 警示橙L号脖围39-58cm', '195.00', '188.00', '512', '496');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `pwd` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'xiaoming', '123456');
INSERT INTO `login` VALUES ('2', 'xiaolin', '123456');
INSERT INTO `login` VALUES ('3', 'xiaotian', '444555');
INSERT INTO `login` VALUES ('4', 'zc', '468684');
INSERT INTO `login` VALUES ('5', 'xiaoer', '123456');
INSERT INTO `login` VALUES ('6', 'xiaohong', '123');
INSERT INTO `login` VALUES ('7', 'xiaomings', '111');
SET FOREIGN_KEY_CHECKS=1;
