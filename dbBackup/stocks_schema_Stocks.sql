CREATE DATABASE  IF NOT EXISTS `stocks_schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `stocks_schema`;
-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: stocks_schema
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
-- Table structure for table `Stocks`
--

DROP TABLE IF EXISTS `Stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stocks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userID` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `symbol` varchar(16) NOT NULL,
  `currency` varchar(16) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `symbol_UNIQUE` (`symbol`),
  KEY `fk_Stocks_1_idx` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stocks`
--

LOCK TABLES `Stocks` WRITE;
/*!40000 ALTER TABLE `Stocks` DISABLE KEYS */;
INSERT INTO `Stocks` VALUES (43,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Agilent Technologies, Inc.','A','USD','2023-06-15 22:16:07'),(44,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Alcoa Corp','AA','USD','2023-06-15 22:16:09'),(45,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','AAC Holdings Inc','AAC','USD','2023-06-15 22:16:13'),(46,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Ares Acquisition Corporation II Class A Ordinary Shares','AACT','USD','2023-06-15 22:16:15'),(47,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Apollo Global Management, Inc.','AAM.PR.B','USD','2023-06-15 22:16:22'),(48,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Ares Acquisition Corporation','AAC.UN','USD','2023-06-15 22:16:36'),(50,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Ares Acquisition Corporation Re','AAC.WT','USD','2023-06-15 22:16:54'),(51,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Arlington Asset Investment Corp.','AAIC','USD','2023-06-15 22:17:01'),(52,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Arlington Asset Investment Corp.','AAIC.PR.B','USD','2023-06-15 22:17:35'),(53,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Arlington Asset Investment Corp.','AAIC.PR.C','USD','2023-06-15 22:17:39'),(54,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Arlington Asset Investment Corp','AAIN','USD','2023-06-15 22:17:46'),(55,'ed1a8ea992d7a0792867b3eae7f02ee418e4b408df00906934e2c29cca28a453','Apollo Asset Management, Inc. 6','AAM-B','USD','2023-06-15 22:17:49');
/*!40000 ALTER TABLE `Stocks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-15 19:31:41
