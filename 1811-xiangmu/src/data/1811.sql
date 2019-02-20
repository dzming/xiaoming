/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 1811

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-02-20 19:49:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `uid` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `imgurl` varchar(60) NOT NULL,
  `goodsname` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `allprice` decimal(10,2) NOT NULL,
  `qty` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for goodsleft
-- ----------------------------
DROP TABLE IF EXISTS `goodsleft`;
CREATE TABLE `goodsleft` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(60) NOT NULL,
  `goodsname` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsleft
-- ----------------------------
INSERT INTO `goodsleft` VALUES ('1', '../images/shouji_mix1.png', 'Apple iPhone X（A1865）全网通版', '5960.00');
INSERT INTO `goodsleft` VALUES ('2', '../images/shouji_mix2.png', 'Apple iPhone XR（A2108）全网通版', '5299.00');
INSERT INTO `goodsleft` VALUES ('3', '../images/shouji_mix3.png', '华为Mate 20 Pro（LVA-ALO0）全网通版', '5399.00');
INSERT INTO `goodsleft` VALUES ('4', '../images/shouji_mix3.png', '华为Mate 20（HMA-AL00）全网通版', '3999.00');
INSERT INTO `goodsleft` VALUES ('5', '../images/shouji_mix2.png', 'Apple iPhone XS Max（A2104）全网通版', '8750.00');
INSERT INTO `goodsleft` VALUES ('6', '../images/shouji_mix1.png', 'Apple iPhone XS（A2100）全网通版', '7899.00');

-- ----------------------------
-- Table structure for goodsright
-- ----------------------------
DROP TABLE IF EXISTS `goodsright`;
CREATE TABLE `goodsright` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(60) NOT NULL,
  `goodsname` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `pinjia` varchar(60) NOT NULL,
  `fenqi` varchar(50) NOT NULL,
  `heat` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodsright
-- ----------------------------
INSERT INTO `goodsright` VALUES ('1', '../images/mr_bg1.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '5960.00', '已有22894人评价', '九机分期：低至 ¥516.53 x 12期', '手机单品当日销量第2名');
INSERT INTO `goodsright` VALUES ('2', '../images/mr_bg2.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '5299.00', '已有3954人评价', '九机分期：低至 ¥459.25 x 12期', '手机单品当日销量第1名');
INSERT INTO `goodsright` VALUES ('3', '../images/mr_bg2.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '5399.00', '已有1094人评价', '九机分期：低至 ¥467.91 x 12期', '手机单品当日销量第10名');
INSERT INTO `goodsright` VALUES ('4', '../images/mr_bg4.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3999.00', '已有2838人评价', '九机分期：低至 ¥346.58 x 12期', '手机单品当日销量第3名');
INSERT INTO `goodsright` VALUES ('5', '../images/mr_bg4.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '8750.00', '已有4561人评价', '九机分期：低至 ¥785.33 x 12期', '手机单品当日销量第5名');
INSERT INTO `goodsright` VALUES ('6', '../images/mr_bg3.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '7899.00', '已有1784人评价', '九机分期：低至 ¥684.58 x 12期', '手机单品当日销量第14名');
INSERT INTO `goodsright` VALUES ('7', '../images/mr_bg1.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3499.00', '已有100人评价', '九机分期：低至 ¥303.25 x 12期', '手机单品当日销量第18名');
INSERT INTO `goodsright` VALUES ('8', '../images/mr_bg3.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3099.00', '已有134人评价', '九机分期：低至 ¥268.58 x 12期', '手机单品当日销量第8名');
INSERT INTO `goodsright` VALUES ('9', '../images/mr_bg1.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '4998.00', '已有167人评价', '九机分期：低至 ¥433.16 x 12期', '手机单品当日销量第7名');
INSERT INTO `goodsright` VALUES ('10', '../images/mr_bg4.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '1899.00', '已有2640人评价', '九机分期：低至 ¥164.58 x 12期', '手机单品当日销量第11名');
INSERT INTO `goodsright` VALUES ('11', '../images/mr_bg1.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '0.00', '已有0人评价', '九机分期：低至 ¥995.43 x 12期', '手机单品当日销量第16名');
INSERT INTO `goodsright` VALUES ('12', '../images/mr_bg4.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '2798.00', '已有460人评价', '九机分期：低至 ¥242.49 x 12期', '手机单品当日销量第15名');
INSERT INTO `goodsright` VALUES ('13', '../images/mr_bg3.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '4299.00', '已有529人评价', '九机分期：低至 ¥372.58 x 12期', '手机单品当日销量第4名');
INSERT INTO `goodsright` VALUES ('14', '../images/mr_bg1.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '2599.00', '已有5155人评价', '九机分期：低至 ¥225.25 x 12期', '手机单品当日销量第9名');
INSERT INTO `goodsright` VALUES ('15', '../images/mr_bg3.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '4899.00', '已有18390人评价', '九机分期：低至 ¥424.53 x 12期', '手机单品当日销量第6名');
INSERT INTO `goodsright` VALUES ('16', '../images/mr_bg2.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '999.00', '已有0人评价', '九机分期：低至 ¥86.58 x 12期', '手机单品当日销量第17名');
INSERT INTO `goodsright` VALUES ('17', '../images/mr_bg17.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3460.00', '已有443人评价', '九机分期：低至 ¥299.87 x 12期', '手机单品当日销量第13名');
INSERT INTO `goodsright` VALUES ('18', '../images/mr_bg18.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '1699.00', '已有1539人评价', '九机分期：低至 ¥147.25 x 12期', '手机单品当日销量第12名');
INSERT INTO `goodsright` VALUES ('19', '../images/mr_bg4.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3198.00', '已有1221人评价', '九机分期：低至 ¥277.25 x 12期', '手机单品当日销量第20名');
INSERT INTO `goodsright` VALUES ('20', '../images/mr_bg3.png', 'Apple iPhone X 全网通版 银色 64GB【新春专享价】1.16-2.11爆款特...', '3198.00', '已有745人评价', '九机分期：低至 ¥277.16 x 12期', '手机单品当日销量第19名');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `pwd` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', 'xiaoming', '123');
INSERT INTO `login` VALUES ('2', '123', '123');
INSERT INTO `login` VALUES ('3', '1234', '123');
SET FOREIGN_KEY_CHECKS=1;
