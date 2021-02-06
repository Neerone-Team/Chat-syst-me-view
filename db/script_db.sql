-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema chat_app
-- -----------------------------------------------------
-- base de données relative au système de méssagerie instantanée

-- -----------------------------------------------------
-- Schema chat_app
--
-- base de données relative au système de méssagerie instantanée
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chat_app` ;
USE `chat_app` ;

-- -----------------------------------------------------
-- Table `chat_app`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `chat_app`.`user` (
  `id_user` INT ZEROFILL UNSIGNED NOT NULL AUTO_INCREMENT,
  `pseudo_user` VARCHAR(45) NOT NULL,
  `nom_user` VARCHAR(45) NOT NULL,
  `prenom_user` VARCHAR(45) NOT NULL,
  `email_user` VARCHAR(100) NOT NULL,
  `avatar_user` VARCHAR(255) NULL,
  `date_inscription` DATETIME NULL DEFAULT NOW(),
  `status_compte` TINYINT(1) UNSIGNED ZEROFILL NULL COMMENT 'permet de savoir si le compte de l\'utilisateur à belle et bien été valider par mail\n',
  `matricule_user` VARCHAR(6) NOT NULL,
  `password` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `email_user_UNIQUE` (`email_user` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
