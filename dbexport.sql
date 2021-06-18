-- MySQL dump 10.13  Distrib 5.5.23, for Win64 (x86)
--
-- Host: localhost    Database: web_2_2
-- ------------------------------------------------------
-- Server version	5.5.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_data`
--

DROP TABLE IF EXISTS `admin_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_data` (
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_data`
--

LOCK TABLES `admin_data` WRITE;
/*!40000 ALTER TABLE `admin_data` DISABLE KEYS */;
INSERT INTO `admin_data` VALUES ('kir','afan');
/*!40000 ALTER TABLE `admin_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands_info`
--

DROP TABLE IF EXISTS `brands_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE latin1_bin NOT NULL,
  `url` varchar(500) COLLATE latin1_bin DEFAULT NULL,
  `img_url` varchar(500) COLLATE latin1_bin DEFAULT NULL,
  `rating` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands_info`
--

LOCK TABLES `brands_info` WRITE;
/*!40000 ALTER TABLE `brands_info` DISABLE KEYS */;
INSERT INTO `brands_info` VALUES (1,'Yakitoriya','https://yakitoriya.ru/','https://kuhnya-crimea.ru/userfiles/image/catalog/unagi.png',0),(2,'MacDonalds','https://vk.com/mcdonaldsrussia','https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald\'s_Golden_Arches.svg/2000px-McDonald\'s_Golden_Arches.svg.png',0),(5,'KFC','https://www.kfc.ru/','https://cdn.worldvectorlogo.com/logos/kfc-2.svg',0),(6,'Burger King','https://i.otzovik.com/objects/b/750000/748703.png','https://i.otzovik.com/objects/b/750000/748703.png',0),(7,'Chili Pizza','https://www.chili-pizza.ru/','https://i.otzovik.com/objects/b/760000/752119.png',0),(8,'Do Do Pizza','https://dodopizza.ru/','https://i.otzovik.com/objects/b/1050000/1047932.png',0),(9,'Sushi Store','https://sushistore.ru/','https://i.otzovik.com/objects/b/1880000/1878444.png',0),(10,'Sushi Bar','https://pizzasushiwok.ru/','https://i.pinimg.com/originals/81/72/cc/8172cc99b84609aebd1b64136a041907.jpg',0);
/*!40000 ALTER TABLE `brands_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger prevent_null_brand before insert on brands_info
for each row
begin
    if (REPLACE(new.title,' ','') = '')  then
        signal sqlstate '45000' set message_text = 'VALIDATION ERROR';
    end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `food_category`
--

DROP TABLE IF EXISTS `food_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE latin1_bin NOT NULL,
  `image_url` varchar(500) COLLATE latin1_bin DEFAULT 'http://cdn.onlinewebfonts.com/svg/download_58143.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_category`
--

LOCK TABLES `food_category` WRITE;
/*!40000 ALTER TABLE `food_category` DISABLE KEYS */;
INSERT INTO `food_category` VALUES (1,'Rolls','http://cdn.onlinewebfonts.com/svg/img_58517.png'),(2,'FastFood','http://cdn.onlinewebfonts.com/svg/download_561498.png'),(3,'Pizza','http://cdn.onlinewebfonts.com/svg/img_427249.png'),(5,'Coffe','https://freepngimg.com/thumb/coffee/29967-5-coffee-cup-transparent-background.png');
/*!40000 ALTER TABLE `food_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_info`
--

DROP TABLE IF EXISTS `food_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `food_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `food_name` varchar(30) NOT NULL,
  `price` float(6,2) NOT NULL,
  `description` varchar(500) DEFAULT 'NO INFO',
  `category_id` bigint(20) NOT NULL,
  `image_url` varchar(400) DEFAULT 'https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg',
  `brand_id` bigint(20) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `food_info_FK` (`category_id`),
  KEY `food_info_FK_1` (`brand_id`),
  CONSTRAINT `food_info_FK` FOREIGN KEY (`category_id`) REFERENCES `food_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `food_info_FK_1` FOREIGN KEY (`brand_id`) REFERENCES `brands_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_info`
--

LOCK TABLES `food_info` WRITE;
/*!40000 ALTER TABLE `food_info` DISABLE KEYS */;
INSERT INTO `food_info` VALUES (2,'Set #1',19.99,'NO INFO',1,'https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg',1),(4,'Set #2',11.99,'NO INFO',5,'https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg',2),(5,'Set #3',33.98,'NO INFO',1,'https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg',1),(6,'Tom-Yum',11.99,'NO INFO',1,'https://i1.wp.com/4ao3uo2687rn3u1b6w2vblpy-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/15735694_web1_190125-WLT-FoodGuide.jpg',2),(7,'Chicken Burger',3.39,'New fresh burger with chicken',2,'https://zhit-vkusno.ru/wp-content/uploads/2020/10/1179745_1584964840.2804_original.jpg',2);
/*!40000 ALTER TABLE `food_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger prevent_null before insert on food_info
for each row
begin
    if (REPLACE(new.food_name,' ','') = '')  then
        signal sqlstate '45000' set message_text = 'VALIDATION ERROR';
    end if;
    if (new.price<0)  then
        signal sqlstate '45000' set message_text = 'VALIDATION ERROR';
    end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `restouraunt_info`
--

DROP TABLE IF EXISTS `restouraunt_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restouraunt_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(200) COLLATE latin1_bin NOT NULL,
  `rating` float(1,1) DEFAULT '0.0',
  `brand_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `restouraunt_info_FK` (`brand_id`),
  CONSTRAINT `restouraunt_info_FK` FOREIGN KEY (`brand_id`) REFERENCES `brands_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restouraunt_info`
--

LOCK TABLES `restouraunt_info` WRITE;
/*!40000 ALTER TABLE `restouraunt_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `restouraunt_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 trigger prevent_null_rest before insert on restouraunt_info
for each row
begin
    if (REPLACE(new.address,' ','') = '')  then
        signal sqlstate '45000' set message_text = 'VALIDATION ERROR';
    end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-19  1:04:17
