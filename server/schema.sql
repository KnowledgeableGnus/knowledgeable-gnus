-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- CREATE DATABASE routend;

USE routend;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(60),
  `hash` VARCHAR(160),
  `salt` VARCHAR(60),
  `address` VARCHAR(120),
  `email` VARCHAR(60),
  `createdAt` DATETIME,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Coordinates'
-- 
-- ---

DROP TABLE IF EXISTS `coordinates`;
    
CREATE TABLE `coordinates` (
  `id` INTEGER AUTO_INCREMENT,
  `id_users` INTEGER,
  `time` DATETIME,
  `lat` DECIMAL(10, 6),
  `lng` DECIMAL(10, 6),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Locations'
-- 
-- ---

DROP TABLE IF EXISTS `locations`;
    
CREATE TABLE `locations` (
  `id` INTEGER AUTO_INCREMENT,
  `id_users` INTEGER,
  `name` VARCHAR(60),
  `category` VARCHAR(60),
  `lat` DECIMAL(10, 6),
  `lng` DECIMAL(10, 6),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Profile'
-- 
-- ---

DROP TABLE IF EXISTS `profiles`;
    
CREATE TABLE `profiles` (
  `id` INTEGER AUTO_INCREMENT,
  `id_users` INTEGER,
  `first_name` VARCHAR(60),
  `last_name` VARCHAR(60),
  `img` VARCHAR(120),
  `city` VARCHAR(60),
  `state` VARCHAR(60),
  `push` BOOLEAN,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Interests'
-- 
-- ---

DROP TABLE IF EXISTS `interests`;
    
CREATE TABLE `interests` (
  `id` INTEGER AUTO_INCREMENT,
  `id_users` INTEGER,
  `interest` VARCHAR(60),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `coordinates` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `locations` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `profiles` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);
ALTER TABLE `interests` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Coordinates` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Username`,`Password`,`Address`,`Email`,`CreatedAt`) VALUES
-- ('','','','','','');
-- INSERT INTO `Coordinates` (`id`,`id_Users`,`Time`,`Lat`,`Lng`) VALUES
-- ('','','','','');
-- INSERT INTO `Locations` (`id`,`id_Users`,`Name`,`Lat`,`Lng`) VALUES
-- ('','','','','');