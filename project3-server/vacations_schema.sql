-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations_schema
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrators`
--

DROP TABLE IF EXISTS `administrators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrators` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrators`
--

LOCK TABLES `administrators` WRITE;
/*!40000 ALTER TABLE `administrators` DISABLE KEYS */;
INSERT INTO `administrators` VALUES (1,'admin','admin','peleg','o');
/*!40000 ALTER TABLE `administrators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `id_vacations_follow`
--

DROP TABLE IF EXISTS `id_vacations_follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `id_vacations_follow` (
  `user_id` varchar(45) NOT NULL,
  `vacation_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `id_vacations_follow`
--

LOCK TABLES `id_vacations_follow` WRITE;
/*!40000 ALTER TABLE `id_vacations_follow` DISABLE KEYS */;
INSERT INTO `id_vacations_follow` VALUES ('1234',8),('user1',2),('user1',1),('user1',4),('user1',7),('user1',6),('user1',11),('user1',13),('user1',19),('user1',16),('user2',1),('user2',4),('user2',5),('user2',6),('user2',10),('user2',14),('user2',18),('user2',17),('user3',2),('user3',4),('user3',1),('user3',8),('user3',7),('user3',6),('user3',5),('user3',9),('user3',10),('user3',11),('user3',12),('user3',16),('user3',20),('user3',19),('user3',15),('user3',18),('user3',14),('user3',13),('user3',17),('4321',2),('4321',3),('4321',8),('4321',7),('4321',10),('4321',6),('1234',12),('1234',6),('1234',4),('1234',3),('1234',6),('1234',10);
/*!40000 ALTER TABLE `id_vacations_follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) DEFAULT NULL,
  `image` varchar(330) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'Paris','https://www.rts-travel.com/wp-content/uploads/st_uploadfont/paris-1.jpg'),(2,'Paris','https://cdn.civitatis.com/francia/paris/galeria/inscripciones-arco-triunfo.jpg'),(3,'Paris','https://cdn.civitatis.com/francia/paris/galeria/arco-triunfo-paris.jpg'),(4,'New york','https://cdn.civitatis.com/estados-unidos/nueva-york/galeria/estatua-libertad-manhattan.jpg'),(5,'New york','https://cdn.cheapism.com/images/Where_You_Live_or_Work.2e16d0ba.fill-1440x605.png'),(6,'New york','https://reloadvisor.org/wp-content/uploads/2019/10/NY-ReloAdvisor.org_.jpg'),(7,'Rome','https://cdn.civitatis.com/italia/roma/galeria/via-imperial-roma.jpg'),(8,'Rome','https://cdn.civitatis.com/italia/roma/galeria/basilica-san-pedro.jpg'),(9,'Rome','https://cdn.civitatis.com/italia/roma/galeria/exterior-museos-vaticanos-roma.jpg'),(10,'Cancun','https://ns.clubmed.com/dream/RESORTS_3T___4T/Caraibes_et_Cotes_Americaines/Cancun_Yucatan/14401-e5rmtcnl7f-swhr.jpg'),(11,'Cancun','https://upload.wikimedia.org/wikipedia/commons/a/ae/Cancun_aerial_photo_by_safa.jpg'),(12,'Cancun','https://r-cf.bstatic.com/images/hotel/max1024x768/139/139773969.jpg'),(13,'London','https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'),(14,'London','https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1536268316/london-england-STAYLDN0918.jpg?itok=06KSVnUn'),(15,'London','https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'),(16,'Miami','https://blog-www.pods.com/wp-content/uploads/2019/08/MG_6_1_Miami.jpg'),(17,'Miami','https://a.travel-assets.com/findyours-php/viewfinder/images/res70/471000/471674-Miami.jpg'),(18,'Miami','https://humanists.international/wp-content/uploads/2019/09/miami.jpg'),(19,'Orlando','https://media-cdn.tripadvisor.com/media/photo-s/14/1f/c8/10/universal-studios-entrance.jpg'),(20,'Orlando','https://lp-cms-production.imgix.net/2019-06/402a086ef3d2265cd694c8f29f0d3639-orlando.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'),(21,'Orlando','https://cache.marriott.com/marriottassets/marriott/MCOWC/mcowc-exterior-0197-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*'),(22,'San Francisco','https://www.ergomedplc.com/wp-content/uploads/2020/01/SFO.jpg'),(23,'San Francisco','https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/16/15/san-francisco.jpg?w968h681'),(24,'San Francisco','https://image.cnbcfm.com/api/v1/image/105284147-GettyImages-673632588.jpg?v=1557935343&w=1400&h=950'),(25,'Dubai','https://www.masala.com/sites/default/files/images/2020/01/08/dubai-palmiye-ada.jpg'),(26,'Dubai','https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Ffeb9a1d0-2a50-11ea-84be-a548267b914b?fit=scale-down&source=next&width=700'),(27,'Dubai','https://cdn.getyourguide.com/img/tour_img-372390-146.jpg'),(28,'Barcelona','https://www.bcdtravel.com/move-be/wp-content/uploads/sites/122/Move_CityGuide_Barcelona_image_Sept2018.jpg'),(29,'Barcelona','https://r-cf.bstatic.com/images/hotel/max1024x768/112/112393493.jpg'),(30,'Barcelona','https://www.fcbarcelonanoticias.com/uploads/s1/11/81/40/2/barca-eleven.jpeg'),(31,'Tokyo','https://static.businessinsider.sg/2019/07/07/5d26280921a86107bb51bd92.png'),(32,'Tokyo','https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'),(33,'Tokyo','https://static1.bigstockphoto.com/3/7/2/large1500/273044566.jpg'),(34,'Austria','https://img.travelawaits.com/filter:centercrop/quill/8/b/5/e/3/3/8b5e330cee217ff200abb9db9558598bc0cf420a.jpg?w=800&h=800'),(35,'Austria','https://cdn.cnn.com/cnnnext/dam/assets/190508160346-most-beautiful-places-in-austria---hallstatt-full-169.jpg'),(36,'Austria','https://travelpassionate.com/wp-content/uploads/2019/04/Hallstatt-village-in-Austria-Image-min.jpg'),(37,'Cairo','https://egypttraveldeals.net/wp-content/uploads/2019/09/Cairo-final-resized.jpg'),(38,'Cairo','https://www.signium.com/sites/default/files/styles/industry_page_1393x693/public/office-main-images/2019-05/Cairo-Office-Executive-Search.jpg?itok=DP2TwUuO'),(39,'Cairo','https://www.tripsavvy.com/thmb/QdyL8XFOquFpmRYEwNXHCs4Ipvs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/high-angle-view-of-cairo-during-daytime--egypt-940395494-5c572f4246e0fb00013a2bb8.jpg'),(40,'Kochi','https://pix10.agoda.net/hotelImages/200/200337/200337_17071908190054536454.jpg?s=1024x768'),(41,'Kochi','https://www.tripsavvy.com/thmb/XYGGZ9zG0t2yZj_tNw68trZhROY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-895741070-4c8450bb0db64e9fb8906d8b5c1068e7.jpg'),(42,'Kochi','https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/06/74/7d/59.jpg'),(43,'Bonn','https://www.nrw-tourism.com/images/vxokmcu0dti-/bonn-city.jpeg'),(44,'Bonn','https://bonn.homecompany.de/images/Media/bonn-homecompany-start-top.jpg'),(45,'Bonn','https://www.carbonbrief.org/wp-content/uploads/2015/06/castle-bonn-germany.jpg'),(46,'La Paz','https://www.kevinandamanda.com/wp-content/uploads/2018/05/best-things-to-do-la-paz-bolivia-01.jpg'),(47,'La Paz','https://www.gravitybolivia.com/wp-content/uploads/lapaz_maravilla-1.jpg'),(48,'La Paz','https://s3.amazonaws.com/yodeviajes1/wp-content/uploads/2019/06/la-paz-bolivia-cathedral-san-francisco-catedral.jpeg\r '),(49,'Kyoto','https://www.travellens.co/content/images/2019/07/Kyoto-Yasaka-Pagoda.jpg\r '),(50,'Kyoto','https://pix10.agoda.net/hotelImages/178116/-1/549cb00bc7e6e31465fd85904cd2e367.jpg?s=1024x768\r '),(51,'Kyoto','https://explorejapan.net/wp-content/uploads/2019/07/Kyoto-Itzik-Tal.jpg\r '),(52,'Osaka','https://i1.wp.com/www.agoda.com/wp-content/uploads/2018/12/City-guides_things-to-do-in-Osaka_Osaka-Castle.jpg?fit=1200%2C800&ssl=1&cid=-1\r '),(53,'Osaka','https://r-cf.bstatic.com/images/hotel/max1024x768/229/229975207.jpg\r '),(54,'Osaka','https://www.travellens.co/content/images/2019/12/osaka-skyline.jpg\r '),(55,'Bangkok','http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/attraction-palace/grand-palace/pagePropertiesImage/bangkok-grand-palace.jpg.jpg\r '),(56,'Bangkok','https://a.cdn-hotels.com/gdcs/production106/d607/852e809f-f614-40a7-80a0-88ca9cc97065.jpg\r '),(57,'Bangkok','https://www.grasshopperadventures.com/wp-content/uploads/2019/05/evening-shot-of-the-chedis-at-wat-pho-in-bangkok.jpg\r '),(58,'Angkor Wat','https://www.tripsavvy.com/thmb/xiTpZl786MpwdUVL-jU7tCpDwzU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/angkor-wat-in-cambodia-5a3abd59aad52b003646e1fc.jpg\r '),(59,'Angkor Wat','https://media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/68E585C2-3665-4605-A017-759E1BAF0F07.jpg?itok=8RMidCc3'),(60,'Angkor Wat','https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5434711148001_5413965430001-vs.jpg?pubId=5104226627001&videoId=5413965430001\r ');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `password` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `first_name` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `last_name` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (9,'1234','1234','peleg1234','peleg1234'),(10,'admin','admin','peleg','o'),(11,'user1','user1','user1','user1'),(12,'user2','user2','user2','user2'),(13,'hey@gg','1234','4321','4321'),(14,'user3','user3','user3','user3'),(15,'qwer','qwer','qwer','qwer'),(18,'test','test','test','test'),(19,'4321','4321','4321','4321');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(400) DEFAULT NULL,
  `departure` date DEFAULT NULL,
  `returning` date DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (2,'aaaaa','2020-02-09','2020-03-19','852.53$','New York'),(4,'Miles of beaches, endless luxury accommodations and a nonstop party atmosphere in Cancun have transformed this once sleepy village on the Yucatan coast into one of Mexico\'s most popular tourist attractions, particularly during spring break.','2020-02-08','2020-03-30','2488.72$','Cancun'),(6,'miami','2020-02-20','2020-03-11','3007.62$','Miami'),(7,'There’s fun around every corner in Orlando with wild roller coasters, twisting waterslides and theme-park fun. Mickey Mouse certainly plays a starring role in the festivities, but there’s plenty of magic beyond the realm of Disney.','2020-02-19','2020-03-03','1748.40$','Orlando'),(8,'Bring a hearty appetite and good walking shoes to the City by the Bay. For a quintessential San Francisco experience, climb aboard a cable car, peruse the farm-fresh goods at the Ferry Market, stroll through Golden Gate Park and board a ferry to the island of Alcatraz for a dose of history and great city views.','2020-02-02','2020-03-30','1293.21$','San Francisco'),(9,'Boasting more than 1,200 stores, the world’s largest mall is undoubtedly a shopper’s paradise, but it’s far more than just a retail experience. Entertainment at Dubai Mall ranges from kids’ zones, cinema and SEGA Republic, to art exhibitions, acrobatic performances and DubaiDino -- the 155-million-year-old skeleton of a Diplodocus Longus dinosaur, on display in the mall’s Grand Atrium.','2020-02-10','2020-03-19','759.69$','Dubai'),(10,'Barcelona is famously known for being home to the ageless masterpieces of architectural legend Antoni Gaudi. The Sagrada Familia is perhaps his grandest work of all, so it’s only fitting that this be your first stop of the day. When you get off the metro, follow the signs that say sortida. These will point you to the way out and will be your friend for the remainder of the day.','2020-02-15','2020-03-11','2534.65$','Barcelona'),(11,'With 23 “special wards” (municipalities) and dozens of diverse neighborhoods, Tokyo offers a little bit of everything. Planning to explore the world’s largest city can be an intimidating prospect, so we’ve broken down the megalopolis into a more manageable list. Here are some of Tokyo’s most popular neighborhoods, and the attractions that make them worth a visit.','2020-02-26','2020-03-26','3168.42$','Tokyo'),(12,'the Salzburg Festival is turning 100, and this heart-stealer of an Alpine city is singing about it at the top of its voice. One of the world’s greatest classical music shindigs, the festival is always a riotous feast of opera, classical music and drama – and never more so than in 2020','2020-02-18','2020-03-16','1522.73$','Austria'),(13,'Egypt waved Tutankhamun’s treasures off on a globetrotting tour in 2018, declaring it the last time the pharaoh’s burial-booty would leave its shores. Want to gawk at ancient Egypt’s wealth in the future? You’ll need to visit Cairo’s Grand Egyptian Museum','2020-02-18','2020-03-07','992.52$','Cairo'),(14,'This nicely chilled city in southern India has seen the light. Grafted onto the tropical Malabar Coast in Kerala, Kochi has become a shining example in renewable energy in recent years, launching the world’s first fully solar-powered airport, which snagged it a UN Champions of the Earth award.','2020-02-12','2020-03-26','850.60$','Kochi'),(15,'Once capital of West Germany, Bonn slipped off the radar when Berlin reseized the reins in 1990. But it’s back in the spotlight with a cymbal roll in 2020, as the city gears up to mark Beethoven’s 250th birthday.','2020-02-25','2020-03-11','2238.88$','Bonn'),(16,'Perhaps it’s the Jetsonian capsules gliding over La Paz along the world’s largest cable-car system that are the most obvious signs of its new-found ambition.','2020-02-21','2020-03-30','1386.95$','La Paz'),(17,'Kyoto (京都, Kyōto) served as Japan\'s capital and the emperor\'s residence from 794 until 1868. It is one of the country\'s ten largest cities with a population of 1.5 million people and a modern face.','2020-02-26','2020-03-21','1692.53$','Kyoto'),(18,'Osaka (大阪, Ōsaka) is Japan\'s second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. Osaka was formerly known as Naniwa. Before the Nara Period, when the capital used to be moved with the reign of each new emperor, Naniwa was once Japan\'s capital city, the first one ever known.','2020-02-12','2020-03-06','4155.00$','Osaka'),(19,'Bangkok is the hub of travel activity for Southeast Asia. You’ll be able to get anywhere you want from here, experience amazing food, find cheap shopping deals, and experience a great nightlife that will keep you up until dawn.','2020-02-20','2020-03-07','1400.50$','Bangkok'),(20,'One of the greatest human creations in history, the Angkor Wat temple complex is best done over the course of a few days. Even if you don’t like temples, the place is still amazing to see as it’s a testament to the genius of humanity.','2020-02-10','2020-03-09','882.40$','Angkor Wat');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations_bu`
--

DROP TABLE IF EXISTS `vacations_bu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations_bu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(400) DEFAULT NULL,
  `departure` date DEFAULT NULL,
  `returning` date DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `destination` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations_bu`
--

LOCK TABLES `vacations_bu` WRITE;
/*!40000 ALTER TABLE `vacations_bu` DISABLE KEYS */;
INSERT INTO `vacations_bu` VALUES (1,'Like all great cities, you can spend months in Paris and barely scratch the surface of the city’s cultural treasures. It has museums galore, stellar shopping and busy cafés perfect for people-watching.','2020-02-05','2020-03-31','643.41$','Paris'),(2,'New York is true to its roots and remains a city of immigrants with inspiring architecture and a thriving arts scene. Take in a show on Broadway, shop in SoHo, spend a lazy day in Central Park and explore the city’s diverse neighborhoods.','2020-02-09','2020-03-19','852.53$','New York'),(3,'The Eternal City Rome celebrates its long history with monuments, churches and restored ruins that offer a glimpse into life during the days of the great Roman Empire. Celebrate the city’s roots and immerse yourself in the culture over a heaping bowl of pasta and a taste of gelato.','2020-02-18','2020-03-02','1343.11$','Rome'),(4,'Miles of beaches, endless luxury accommodations and a nonstop party atmosphere in Cancun have transformed this once sleepy village on the Yucatan coast into one of Mexico\'s most popular tourist attractions, particularly during spring break.','2020-02-08','2020-03-30','2488.72$','Cancun'),(5,'London is a cosmopolitan city with a unique blend of historic traditions and a hip, modern culture. You can enjoy tea and crumpets and celebrate the city’s royal roots before heading out to a slick gastropub for gourmet dinner and drinks.','2020-02-23','2020-03-11','798.01$','London'),(6,'The American Riviera, Hollywood of the East, SoBe, or the Art Deco District -- whatever you call it, Miami\'s South Beach is hot year-round. The embodiment of excess, South Beach is an international playground offering non-stop nightlife, sandy shores, unique architecture and plenty of eye candy.','2020-02-20','2020-03-11','3007.62$','Miami'),(7,'There’s fun around every corner in Orlando with wild roller coasters, twisting waterslides and theme-park fun. Mickey Mouse certainly plays a starring role in the festivities, but there’s plenty of magic beyond the realm of Disney.','2020-02-19','2020-03-03','1748.40$','Orlando'),(8,'Bring a hearty appetite and good walking shoes to the City by the Bay. For a quintessential San Francisco experience, climb aboard a cable car, peruse the farm-fresh goods at the Ferry Market, stroll through Golden Gate Park and board a ferry to the island of Alcatraz for a dose of history and great city views.','2020-02-02','2020-03-30','1293.21$','San Francisco'),(9,'Boasting more than 1,200 stores, the world’s largest mall is undoubtedly a shopper’s paradise, but it’s far more than just a retail experience. Entertainment at Dubai Mall ranges from kids’ zones, cinema and SEGA Republic, to art exhibitions, acrobatic performances and DubaiDino -- the 155-million-year-old skeleton of a Diplodocus Longus dinosaur, on display in the mall’s Grand Atrium.','2020-02-10','2020-03-19','759.69$','Dubai'),(10,'Barcelona is famously known for being home to the ageless masterpieces of architectural legend Antoni Gaudi. The Sagrada Familia is perhaps his grandest work of all, so it’s only fitting that this be your first stop of the day. When you get off the metro, follow the signs that say sortida. These will point you to the way out and will be your friend for the remainder of the day.','2020-02-15','2020-03-11','2534.65$','Barcelona'),(11,'With 23 “special wards” (municipalities) and dozens of diverse neighborhoods, Tokyo offers a little bit of everything. Planning to explore the world’s largest city can be an intimidating prospect, so we’ve broken down the megalopolis into a more manageable list. Here are some of Tokyo’s most popular neighborhoods, and the attractions that make them worth a visit.','2020-02-26','2020-03-26','3168.42$','Tokyo'),(12,'the Salzburg Festival is turning 100, and this heart-stealer of an Alpine city is singing about it at the top of its voice. One of the world’s greatest classical music shindigs, the festival is always a riotous feast of opera, classical music and drama – and never more so than in 2020','2020-02-18','2020-03-16','1522.73$','Austria'),(13,'Egypt waved Tutankhamun’s treasures off on a globetrotting tour in 2018, declaring it the last time the pharaoh’s burial-booty would leave its shores. Want to gawk at ancient Egypt’s wealth in the future? You’ll need to visit Cairo’s Grand Egyptian Museum','2020-02-18','2020-03-07','992.52$','Cairo'),(14,'This nicely chilled city in southern India has seen the light. Grafted onto the tropical Malabar Coast in Kerala, Kochi has become a shining example in renewable energy in recent years, launching the world’s first fully solar-powered airport, which snagged it a UN Champions of the Earth award.','2020-02-12','2020-03-26','850.60$','Kochi'),(15,'Once capital of West Germany, Bonn slipped off the radar when Berlin reseized the reins in 1990. But it’s back in the spotlight with a cymbal roll in 2020, as the city gears up to mark Beethoven’s 250th birthday.','2020-02-25','2020-03-11','2238.88$','Bonn'),(16,'Perhaps it’s the Jetsonian capsules gliding over La Paz along the world’s largest cable-car system that are the most obvious signs of its new-found ambition.','2020-02-21','2020-03-30','1386.95$','La Paz'),(17,'Kyoto (京都, Kyōto) served as Japan\'s capital and the emperor\'s residence from 794 until 1868. It is one of the country\'s ten largest cities with a population of 1.5 million people and a modern face.','2020-02-26','2020-03-21','1692.53$','Kyoto'),(18,'Osaka (大阪, Ōsaka) is Japan\'s second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. Osaka was formerly known as Naniwa. Before the Nara Period, when the capital used to be moved with the reign of each new emperor, Naniwa was once Japan\'s capital city, the first one ever known.','2020-02-12','2020-03-06','4155.00$','Osaka'),(19,'Bangkok is the hub of travel activity for Southeast Asia. You’ll be able to get anywhere you want from here, experience amazing food, find cheap shopping deals, and experience a great nightlife that will keep you up until dawn.','2020-02-20','2020-03-07','1400.50$','Bangkok'),(20,'One of the greatest human creations in history, the Angkor Wat temple complex is best done over the course of a few days. Even if you don’t like temples, the place is still amazing to see as it’s a testament to the genius of humanity.','2020-02-10','2020-03-09','882.40$','Angkor Wat');
/*!40000 ALTER TABLE `vacations_bu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-08 19:13:38
