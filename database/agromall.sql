-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 28, 2017 at 05:11 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `agromall`
--
CREATE DATABASE IF NOT EXISTS `agromall` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `agromall`;

-- --------------------------------------------------------

--
-- Table structure for table `admin_chat_master`
--

CREATE TABLE IF NOT EXISTS `admin_chat_master` (
  `chat_id` varchar(15) NOT NULL,
  `sender_id` varchar(15) NOT NULL,
  `reciver_id` varchar(15) NOT NULL,
  `message` text NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` varchar(10) NOT NULL,
  `time` varchar(10) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`chat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_chat_master`
--

INSERT INTO `admin_chat_master` (`chat_id`, `sender_id`, `reciver_id`, `message`, `subject`, `date`, `time`, `status`) VALUES
('2ouh8MAt', 'hz2sXMac', 'mFaJzRCe', 'n', 'hello', 'Dec 28', '09:38', 0),
('IM39rsgW', 'mFaJzRCe', 'Bha7871', 'kklkl\r\n', 'gdfgd', 'Apr 18', '11:40', 0),
('itqfUKuB', 'hz2sXMac', 'hz2sXMac', 'b', 'n', 'Dec 28', '09:39', 0),
('N1SL5CuW', 'Bha7871', 'XmgJbTsS', 'FXNHFH', 'GHDF`', 'Apr 04', '11:05', 0),
('qKuxUvP9', 'mFaJzRCe', 'Select here..', 'fndndffd', 'gdfgd', 'Apr 18', '11:33', 0),
('xGJ8jedv', 'Bha7871', 'SUBqeED8', 'plz enter valid seed', 'Seed Enter Valid', 'Mar 24', '05:27', 0),
('YXw6PCjb', 'Bha7871', 'SUBqeED8', 'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ', 'HHHHHHHHHHHHHHH', 'Mar 28', '11:10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
  `admin_login_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` varchar(70) NOT NULL,
  PRIMARY KEY (`admin_login_id`),
  UNIQUE KEY `email_id` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`admin_login_id`, `email_id`, `password`) VALUES
('', 'pankajnarola1995@gmail.com', 'pankaj1234'),
('1', 'jyotisapariya1995@gmail.com', 'sapariya1234');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE IF NOT EXISTS `advertisement` (
  `advertisement_id` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`advertisement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `area_master`
--

CREATE TABLE IF NOT EXISTS `area_master` (
  `area_id` varchar(15) NOT NULL,
  `city_id` varchar(15) NOT NULL,
  `area_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`area_id`),
  UNIQUE KEY `area_name` (`area_name`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `area_master`
--

INSERT INTO `area_master` (`area_id`, `city_id`, `area_name`, `status`) VALUES
('1', '18', 'A K Road', 0),
('10', '18', 'Ashwini Kumar', 0),
('100', '18', 'Pipodara', 0),
('101', '18', 'pisad', 0),
('102', '18', 'Puna', 0),
('103', '18', 'Ramnagar', 0),
('104', '18', 'Rampura', 0),
('105', '18', 'Rander Road', 0),
('106', '18', 'Raniya', 0),
('107', '18', 'Ring Road', 0),
('108', '18', 'Rustampura', 0),
('109', '18', 'Sachin', 0),
('11', '18', 'Athwa Gate', 0),
('110', '18', 'Sachin GIDC', 0),
('111', '18', 'Sachin Railway Station', 0),
('112', '18', 'Sagrampura Putil', 0),
('113', '18', 'salabatpura', 0),
('114', '18', 'sarthana', 0),
('115', '18', 'Sayedpura', 0),
('116', '18', 'Segva Chhama', 0),
('117', '18', 'Selut', 0),
('118', '18', 'simada', 0),
('119', '18', 'singanpore', 0),
('12', '18', 'Athwa Lines', 0),
('120', '18', 'sumul dairy', 0),
('121', '18', 'SVR College', 0),
('122', '18', 'tadwadi', 0),
('123', '18', 'Textile market', 0),
('124', '18', 'tunki', 0),
('125', '18', 'Udhana Magdalla Road', 0),
('126', '18', 'Udhna', 0),
('127', '18', 'Udhnagam', 0),
('128', '18', 'ugat area', 0),
('129', '18', 'umarwada', 0),
('13', '18', 'Atodara', 0),
('130', '18', 'Umra', 0),
('131', '18', 'unn Area', 0),
('132', '18', 'utran', 0),
('133', '18', 'Vadod', 0),
('134', '18', 'Varachha Road', 0),
('135', '18', 'Varachhali', 0),
('136', '18', 'Variavi Bhagal', 0),
('137', '18', 'Vasta Devdi Road', 0),
('138', '18', 'Vesu', 0),
('139', '18', 'VNUnivercity Road', 0),
('14', '18', 'Bamroli', 0),
('140', '18', 'Yogi chock', 0),
('15', '18', 'Barbodhan', 0),
('16', '18', 'Begampura', 0),
('17', '18', 'Bhagal', 0),
('18', '18', 'Bhagvanpura', 0),
('19', '18', 'Bhandut', 0),
('2', '18', 'Abhva', 0),
('20', '18', 'Bharthana', 0),
('21', '18', 'Bhatar Road', 0),
('22', '18', 'Bhatha', 0),
('23', '18', 'Bhatpore', 0),
('24', '18', 'Bhavanivad', 0),
('25', '18', 'Bhedwad', 0),
('26', '18', 'Bhesan', 0),
('27', '18', 'Bhestan', 0),
('28', '18', 'Bhimpore', 0),
('29', '18', 'Bhimrad', 0),
('3', '18', 'Abrama', 0),
('30', '18', 'Bombay Market', 0),
('31', '18', 'Chapra Bhatha', 0),
('32', '18', 'City Light Road', 0),
('33', '18', 'Dabholi', 0),
('34', '18', 'Dihen', 0),
('35', '18', 'Dindoli', 0),
('36', '18', 'Dumad Crossing', 0),
('37', '18', 'Dumas', 0),
('38', '18', 'Dumas Road', 0),
('39', '18', 'Dumasgam', 0),
('4', '18', 'Adajan', 0),
('40', '18', 'Dumbhal', 0),
('41', '18', 'Fulpada', 0),
('42', '18', 'Fulwadi', 0),
('43', '18', 'Gandhi Chowk', 0),
('44', '18', 'Ghod Dod Road', 0),
('45', '18', 'GIPCL', 0),
('46', '18', 'Godadara', 0),
('47', '18', 'Gopi Talav', 0),
('48', '18', 'Gopipura', 0),
('49', '18', 'Gotalawadi', 0),
('5', '18', 'Althan', 0),
('50', '18', 'Gothan', 0),
('51', '18', 'Goverment Medical College', 0),
('52', '18', 'Hajira', 0),
('53', '18', 'Hojiwala Indust Estate', 0),
('54', '18', 'Honey park area', 0),
('55', '18', 'Ichchanath Road', 0),
('56', '18', 'Ichhapura', 0),
('57', '18', 'Indrapura', 0),
('58', '18', 'Jahangirabad', 0),
('59', '18', 'Jahangirpura', 0),
('6', '18', 'Amroli', 0),
('60', '18', 'Jhampa', 0),
('61', '18', 'Joganinagar', 0),
('62', '18', 'kansanagar', 0),
('63', '18', 'Kapodra', 0),
('64', '18', 'Karanj', 0),
('65', '18', 'Katargam', 0),
('66', '18', 'katargam GIDC', 0),
('67', '18', 'Khajod', 0),
('68', '18', 'Khatodara', 0),
('69', '18', 'Kribhconagar', 0),
('7', '18', 'Anand-Mahal Road', 0),
('70', '18', 'Kumbharia', 0),
('71', '18', 'LH Road', 0),
('72', '18', 'Limbayat', 0),
('73', '18', 'Magdalla', 0),
('74', '18', 'Magob', 0),
('75', '18', 'Mahidharpura', 0),
('76', '18', 'Majura', 0),
('77', '18', 'mangaldeep', 0),
('78', '18', 'Mora', 0),
('79', '18', 'Mota Varachha', 0),
('8', '18', 'Anjana', 0),
('80', '18', 'Motived', 0),
('81', '18', 'Muglisara', 0),
('82', '18', 'Nana Varachha', 0),
('83', '18', 'Nanavat', 0),
('84', '18', 'Nani Naroli', 0),
('85', '18', 'Nanpura', 0),
('86', '18', 'Narthan', 0),
('87', '18', 'Navyug College', 0),
('88', '18', 'Nawabwadi', 0),
('89', '18', 'Olpad', 0),
('9', '18', 'Antroli', 0),
('90', '18', 'ONGC Nagar', 0),
('91', '18', 'Pal Bhatha', 0),
('92', '18', 'Palanpur Nd', 0),
('93', '18', 'Pandesara', 0),
('94', '18', 'Pandol', 0),
('95', '18', 'Parle Point', 0),
('96', '18', 'Parvat', 0),
('97', '18', 'Pasodara', 0),
('98', '18', 'Pinjrat', 0),
('99', '18', 'Piplod', 0);

-- --------------------------------------------------------

--
-- Table structure for table `city_master`
--

CREATE TABLE IF NOT EXISTS `city_master` (
  `city_id` varchar(15) NOT NULL,
  `state_id` varchar(15) NOT NULL,
  `city_name` varchar(25) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`city_id`),
  UNIQUE KEY `city_name` (`city_name`),
  KEY `state_id` (`state_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city_master`
--

INSERT INTO `city_master` (`city_id`, `state_id`, `city_name`, `status`) VALUES
('1', '12', 'Ahmedabad', 0),
('10', '12', 'Jamnagar ', 0),
('11', '12', 'Junagadh ', 0),
('12', '12', 'Morbi ', 0),
('13', '12', 'Nadiad ', 0),
('14', '12', 'Navsari ', 0),
('15', '12', 'Porbandar ', 0),
('16', '12', 'Rajkot ', 0),
('17', '12', 'sidhpur ', 0),
('18', '12', 'Surat ', 0),
('19', '12', 'Surendranagar ', 0),
('2', '12', 'Anand ', 0),
('20', '12', 'Vadodara ', 0),
('21', '12', 'Veraval', 0),
('3', '12', 'Amreli', 0),
('4', '12', 'Bharuch', 0),
('5', '12', 'Bhavnagar', 0),
('6', '12', 'Botad ', 0),
('7', '12', 'Gandhidham', 0),
('8', '12', 'Gandhinagar', 0),
('9', '12', 'Godhra ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `color_master`
--

CREATE TABLE IF NOT EXISTS `color_master` (
  `color_id` varchar(15) NOT NULL,
  `color_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`color_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `color_master`
--

INSERT INTO `color_master` (`color_id`, `color_name`, `status`) VALUES
('60LH2GBN', 'Yellow', 0),
('JvMA4FE1', 'Blue', 0),
('Pq2zVY9A', 'pink', 0),
('ve4ipg50', 'Red', 0),
('yUTZ8fqa', 'White', 0);

-- --------------------------------------------------------

--
-- Table structure for table `country_master`
--

CREATE TABLE IF NOT EXISTS `country_master` (
  `country_id` varchar(15) NOT NULL,
  `country_name` varchar(20) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`country_id`),
  UNIQUE KEY `country_name` (`country_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country_master`
--

INSERT INTO `country_master` (`country_id`, `country_name`, `status`) VALUES
('10', 'Australia', 0),
('100', 'Liechtenstein', 0),
('101', 'Lithuania', 0),
('102', 'Luxembourg', 0),
('103', 'Macedonia', 0),
('104', 'Madagascar', 0),
('105', 'Malawi', 0),
('106', 'Malaysia', 0),
('107', 'Maldives', 0),
('108', 'Mali', 0),
('109', 'Malta', 0),
('11', 'Austria', 0),
('110', 'Marshall Islands', 0),
('111', 'Mauritania', 0),
('112', 'Mauritius', 0),
('113', 'Mexico', 0),
('114', 'Micronesia', 0),
('115', 'Moldova', 0),
('116', 'Monaco', 0),
('117', 'Mongolia', 0),
('118', 'Montenegro', 0),
('119', 'Morocco', 0),
('12', 'Azerbaijan', 0),
('120', 'Mozambique', 0),
('121', 'Myanmar (Burma)', 0),
('122', 'Namibia', 0),
('123', 'Nauru', 0),
('124', 'Nepal', 0),
('125', 'Netherlands', 0),
('126', 'New Zealand', 0),
('127', 'Nicaragua', 0),
('128', 'Niger', 0),
('129', 'Nigeria', 0),
('13', 'Bahamas, The', 0),
('130', 'Norway', 0),
('131', 'Oman', 0),
('132', 'Pakistan', 0),
('133', 'Palau', 0),
('134', 'Panama', 0),
('135', 'Papua New Guinea', 0),
('136', 'Paraguay', 0),
('137', 'Peru', 0),
('138', 'Philippines', 0),
('139', 'Poland', 0),
('14', 'Bahrain', 0),
('140', 'Portugal', 0),
('141', 'Qatar', 0),
('142', 'Romania', 0),
('143', 'Russia', 0),
('144', 'Rwanda', 0),
('145', 'Saint Kitts and Nevi', 0),
('146', 'Saint Lucia', 0),
('147', 'Saint Vincent and th', 0),
('148', 'Samoa', 0),
('149', 'San Marino', 0),
('15', 'Bangladesh', 0),
('150', 'Sao Tome and Princip', 0),
('151', 'Saudi Arabia', 0),
('152', 'Senegal', 0),
('153', 'Serbia', 0),
('154', 'Seychelles', 0),
('155', 'Sierra Leone', 0),
('156', 'Singapore', 0),
('157', 'Slovakia', 0),
('158', 'Slovenia', 0),
('159', 'Solomon Islands', 0),
('16', 'Barbados', 0),
('160', 'Somalia', 0),
('161', 'South Africa', 0),
('162', 'Spain', 0),
('163', 'Sri Lanka', 0),
('164', 'Sudan', 0),
('165', 'Suriname', 0),
('166', 'Swaziland', 0),
('167', 'Sweden', 0),
('168', 'Switzerland', 0),
('169', 'Syria', 0),
('17', 'Belarus', 0),
('170', 'Tajikistan', 0),
('171', 'Tanzania', 0),
('172', 'Thailand', 0),
('173', 'Timor-Leste (East Ti', 0),
('174', 'Togo', 0),
('175', 'Tonga', 0),
('176', 'Trinidad and Tobago', 0),
('177', 'Tunisia', 0),
('178', 'Turkey', 0),
('179', 'Turkmenistan', 0),
('18', 'Belgium', 0),
('180', 'Tuvalu', 0),
('181', 'Uganda', 0),
('182', 'Ukraine', 0),
('183', 'United Arab Emirates', 0),
('184', 'United Kingdom', 0),
('185', 'United States', 0),
('186', 'Uruguay', 0),
('187', 'Uzbekistan', 0),
('188', 'Vanuatu', 0),
('189', 'Vatican City', 0),
('19', 'Belize', 0),
('190', 'Venezuela', 0),
('191', 'Vietnam', 0),
('192', 'Yemen', 0),
('193', 'Zambia', 0),
('194', 'Zimbabwe', 0),
('195', 'Abkhazia', 0),
('196', 'China, Republic of (', 0),
('197', 'Nagorno-Karabakh', 0),
('198', 'Northern Cyprus', 0),
('199', 'Pridnestrovie (Trans', 0),
('20', 'Benin', 0),
('200', 'Somaliland', 0),
('201', 'South Ossetia', 0),
('202', 'Ashmore and Cartier ', 0),
('203', 'Christmas Island', 0),
('204', 'Cocos (Keeling) Isla', 0),
('205', 'Coral Sea Islands', 0),
('206', 'Heard Island and McD', 0),
('207', 'Norfolk Island', 0),
('208', 'New Caledonia', 0),
('209', 'French Polynesia', 0),
('21', 'Bhutan', 0),
('210', 'Mayotte', 0),
('211', 'Saint Barthelemy', 0),
('212', 'Saint Martin', 0),
('213', 'Saint Pierre and Miq', 0),
('214', 'Wallis and Futuna', 0),
('215', 'French Southern and ', 0),
('216', 'Clipperton Island', 0),
('217', 'Bouvet Island', 0),
('218', 'Cook Islands', 0),
('219', 'Niue', 0),
('22', 'Bolivia', 0),
('220', 'Tokelau', 0),
('221', 'Guernsey', 0),
('222', 'Isle of Man', 0),
('223', 'Jersey', 0),
('224', 'Anguilla', 0),
('225', 'Bermuda', 0),
('226', 'British Indian Ocean', 0),
('227', 'British Sovereign Ba', 0),
('228', 'British Virgin Islan', 0),
('229', 'Cayman Islands', 0),
('23', 'Bosnia and Herzegovi', 0),
('230', 'Falkland Islands (Is', 0),
('231', 'Gibraltar', 0),
('232', 'Montserrat', 0),
('233', 'Pitcairn Islands', 0),
('234', 'Saint Helena', 0),
('235', 'South Georgia and th', 0),
('236', 'Turks and Caicos Isl', 0),
('237', 'Northern Mariana Isl', 0),
('238', 'Puerto Rico', 0),
('239', 'American Samoa', 0),
('24', 'Botswana', 0),
('240', 'Baker Island', 0),
('241', 'Guam', 0),
('242', 'Howland Island', 0),
('243', 'Jarvis Island', 0),
('244', 'Johnston Atoll', 0),
('245', 'Kingman Reef', 0),
('246', 'Midway Islands', 0),
('247', 'Navassa Island', 0),
('248', 'Palmyra Atoll', 0),
('249', 'U.S. Virgin Islands', 0),
('25', 'Brazil', 0),
('250', 'Wake Island', 0),
('251', 'Hong Kong', 0),
('252', 'Macau', 0),
('253', 'Faroe Islands', 0),
('254', 'Greenland', 0),
('255', 'French Guiana', 0),
('256', 'Guadeloupe', 0),
('257', 'Martinique', 0),
('258', 'Reunion', 0),
('259', 'Aland', 0),
('26', 'Brunei', 0),
('260', 'Aruba', 0),
('261', 'Netherlands Antilles', 0),
('262', 'Svalbard', 0),
('263', 'Ascension', 0),
('264', 'Tristan da Cunha', 0),
('265', 'Antarctica', 0),
('266', 'Kosovo', 0),
('267', 'Palestinian Territor', 0),
('268', 'Western Sahara', 0),
('269', 'Australian Antarctic', 0),
('27', 'Bulgaria', 0),
('270', 'Ross Dependency', 0),
('271', 'Peter I Island', 0),
('272', 'Queen Maud Land', 0),
('273', 'British Antarctic Te', 0),
('28', 'Burkina Faso', 0),
('29', 'Burundi', 0),
('3', 'Albania', 0),
('30', 'Cambodia', 0),
('31', 'Cameroon', 0),
('32', 'Canada', 0),
('33', 'Cape Verde', 0),
('34', 'Central African Repu', 0),
('35', 'Chad', 0),
('36', 'Chile', 0),
('37', 'China, People''s Repu', 0),
('38', 'Colombia', 0),
('39', 'Comoros', 0),
('4', 'Algeria', 0),
('40', 'Congo, Democratic Re', 0),
('41', 'Congo, Republic of t', 0),
('42', 'Costa Rica', 0),
('43', 'Cote d''Ivoire (Ivory', 0),
('44', 'Croatia', 0),
('45', 'Cuba', 0),
('46', 'Cyprus', 0),
('47', 'Czech Republic', 0),
('48', 'Denmark', 0),
('49', 'Djibouti', 0),
('5', 'Andorra', 0),
('50', 'Dominica', 0),
('51', 'Dominican Republic', 0),
('52', 'Ecuador', 0),
('53', 'Egypt', 0),
('54', 'El Salvador', 0),
('55', 'Equatorial Guinea', 0),
('56', 'Eritrea', 0),
('57', 'Estonia', 0),
('58', 'Ethiopia', 0),
('59', 'Fiji', 0),
('6', 'Angola', 0),
('60', 'Finland', 0),
('61', 'France', 0),
('62', 'Gabon', 0),
('63', 'Gambia, The', 0),
('64', 'Georgia', 0),
('65', 'Germany', 0),
('66', 'Ghana', 0),
('67', 'Greece', 0),
('68', 'Grenada', 0),
('69', 'Guatemala', 0),
('7', 'Antigua and Barbuda', 0),
('70', 'Guinea', 0),
('71', 'Guinea-Bissau', 0),
('72', 'Guyana', 0),
('73', 'Haiti', 0),
('74', 'Honduras', 0),
('75', 'Hungary', 0),
('76', 'Iceland', 0),
('77', 'India', 0),
('78', 'Indonesia', 0),
('79', 'Iran', 0),
('8', 'Argentina', 0),
('80', 'Iraq', 0),
('81', 'Ireland', 0),
('82', 'Israel', 0),
('83', 'Italy', 0),
('84', 'Jamaica', 0),
('85', 'Japan', 0),
('86', 'Jordan', 0),
('87', 'Kazakhstan', 0),
('88', 'Kenya', 0),
('89', 'Kiribati', 0),
('9', 'Armenia', 0),
('90', 'Korea, Democratic Pe', 0),
('91', 'Korea, Republic of  ', 0),
('92', 'Kuwait', 0),
('93', 'Kyrgyzstan', 0),
('94', 'Laos', 0),
('95', 'Latvia', 0),
('96', 'Lebanon', 0),
('97', 'Lesotho', 0),
('98', 'Liberia', 0),
('99', 'Libya', 0);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `feedback_id` varchar(12) NOT NULL,
  `user_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`feedback_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `email_id` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_appearance_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_appearance_master` (
  `fertilizer_appearance_id` varchar(15) NOT NULL,
  `fertilizer_appearance_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`fertilizer_appearance_id`),
  UNIQUE KEY `fertilizer_appearance_name` (`fertilizer_appearance_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fertilizer_appearance_master`
--

INSERT INTO `fertilizer_appearance_master` (`fertilizer_appearance_id`, `fertilizer_appearance_name`, `status`) VALUES
('Afx1UX7S', 'Liquid', 0),
('bamXf1ji', 'Solid', 0),
('JcKD5aeo', 'Powder', 0);

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_classification_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_classification_master` (
  `fertilizer_classification_id` varchar(15) NOT NULL,
  `fertilizer_classification_name` varchar(30) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`fertilizer_classification_id`),
  UNIQUE KEY `fertilizer_classification_name` (`fertilizer_classification_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fertilizer_classification_master`
--

INSERT INTO `fertilizer_classification_master` (`fertilizer_classification_id`, `fertilizer_classification_name`, `status`) VALUES
('TK3X2k9E', 'Bio-fertilizer', 0),
('yKp0vl6m', 'Organic Fertilizer', 0);

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_detail_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_detail_master` (
  `fertilizer_detail_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `fertilizer_type_id` varchar(15) NOT NULL,
  `fertilizer_subtype_id` varchar(15) NOT NULL,
  `fertilizer_submenu_id` varchar(15) DEFAULT NULL,
  `fertilizer_detail_name` text NOT NULL,
  `fertilizer_price` double NOT NULL,
  `fertilizer_price_type` varchar(10) NOT NULL,
  `fertilizer_total_qty` bigint(10) NOT NULL,
  `fertilizer_min_order` bigint(10) NOT NULL,
  `model_no` text NOT NULL,
  `classification` varchar(30) NOT NULL,
  `appearance` varchar(30) NOT NULL,
  `payment_terms` text NOT NULL,
  `trade_terms` text NOT NULL,
  `origin_country` text NOT NULL,
  `hs_code` text NOT NULL,
  `description` text NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`fertilizer_detail_id`),
  KEY `fertilizer_id` (`fertilizer_type_id`,`fertilizer_subtype_id`,`fertilizer_submenu_id`),
  KEY `seller_id` (`seller_id`),
  KEY `seller_id_2` (`seller_id`),
  KEY `fertilizer_id_2` (`fertilizer_type_id`),
  KEY `fertilizer_subtype_id` (`fertilizer_subtype_id`),
  KEY `fertilizer_submenu_id` (`fertilizer_submenu_id`),
  KEY `classification` (`classification`),
  KEY `appearance` (`appearance`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_submenu_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_submenu_master` (
  `fertilizer_submenu_id` varchar(15) NOT NULL,
  `fertilizer_subtype_id` varchar(15) NOT NULL,
  `fertilizer_submenu_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`fertilizer_submenu_id`),
  UNIQUE KEY `fertilizer_submenu_name` (`fertilizer_submenu_name`),
  KEY `fertilizer_subtype_id` (`fertilizer_subtype_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fertilizer_submenu_master`
--

INSERT INTO `fertilizer_submenu_master` (`fertilizer_submenu_id`, `fertilizer_subtype_id`, `fertilizer_submenu_name`, `status`) VALUES
('3S4gA0y9', 'kTivYjJ3 ', 'endo', 0),
('4zKZRLjQ', '65MCwWuZ ', 'citric solube phosphatic', 0),
('5Vk63C0R', 'DcpJ9VRX ', 'rhizobiums', 0),
('6SV3OErs', 'bLqX5MTI ', 'bacillus phosphate solubelizer', 0),
('DpSNGb7x', 'LJ1XqDQj ', 'azospirilium', 0),
('DRUFGabj', 'LJ1XqDQj ', 'azotobacter', 0),
('ehaSr31N', 'bLqX5MTI ', 'pseudomonas phosphate solubelizer', 0),
('Ldxlb2e9', 'DcpJ9VRX ', 'azolla ', 0),
('rMoD7cLU', '65MCwWuZ ', 'water solube phosphatic', 0),
('S0ByFxKV', '65MCwWuZ ', 'Monopotassium Phosphate', 0),
('YrR4GETC', 'LJ1XqDQj ', 'blue green algae ', 0),
('yVcAF9Eh', 'kTivYjJ3 ', 'ecto', 0);

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_subtype_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_subtype_master` (
  `fertilizer_subtype_id` varchar(15) NOT NULL,
  `fertilizer_type_id` varchar(15) NOT NULL,
  `fertilizer_subtype_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`fertilizer_subtype_id`),
  UNIQUE KEY `fertilizer_subtype_name` (`fertilizer_subtype_name`),
  KEY `fertilizer_type_id` (`fertilizer_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fertilizer_subtype_master`
--

INSERT INTO `fertilizer_subtype_master` (`fertilizer_subtype_id`, `fertilizer_type_id`, `fertilizer_subtype_name`, `status`) VALUES
('65MCwWuZ', '4poNLavg', 'phosphatic fertilizer', 0),
('8gjUQM1z', 'x8pC2ROl', 'calcium organic', 0),
('bLqX5MTI', '4poNLavg', 'phosphate solubelizer fertilizer', 0),
('DcpJ9VRX', 'fz9umSnI', 'symbolic biofertilizer', 0),
('iYGLCBqf', 'x8pC2ROl', 'cholarian organic', 0),
('kTivYjJ3', '4poNLavg', 'phosphate absorber fertilizer', 0),
('LJ1XqDQj', 'fz9umSnI', 'nonsymbolic biofertilizer', 0),
('wv6JfFuW', 'x8pC2ROl', 'green organic fertilizer', 0),
('XotR84Gl', 'x8pC2ROl', 'dung manure organic', 0);

-- --------------------------------------------------------

--
-- Table structure for table `fertilizer_type_master`
--

CREATE TABLE IF NOT EXISTS `fertilizer_type_master` (
  `fertilizer_type_id` varchar(15) NOT NULL,
  `fertilizer_type_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`fertilizer_type_id`),
  UNIQUE KEY `fertilizer_type_name` (`fertilizer_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fertilizer_type_master`
--

INSERT INTO `fertilizer_type_master` (`fertilizer_type_id`, `fertilizer_type_name`, `status`) VALUES
('4poNLavg', 'phosphate fertilizer', 0),
('fz9umSnI', 'biofertilizer', 0),
('x8pC2ROl', 'organic fertilizer', 0);

-- --------------------------------------------------------

--
-- Table structure for table `image_master`
--

CREATE TABLE IF NOT EXISTS `image_master` (
  `image_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) DEFAULT NULL,
  `user_id` varchar(15) DEFAULT NULL,
  `tools_detail_id` varchar(15) DEFAULT NULL,
  `seed_detail_id` varchar(15) DEFAULT NULL,
  `fertilizer_detail_id` varchar(15) DEFAULT NULL,
  `pesticide_detail_id` varchar(15) DEFAULT NULL,
  `image_name` text,
  PRIMARY KEY (`image_id`),
  KEY `product_id` (`fertilizer_detail_id`),
  KEY `seed_data_id` (`seed_detail_id`),
  KEY `fertilizer_data_id` (`fertilizer_detail_id`),
  KEY `tools_data_id` (`tools_detail_id`),
  KEY `user_id` (`user_id`),
  KEY `seller_id` (`seller_id`),
  KEY `pesticide_detail_id` (`pesticide_detail_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image_master`
--

INSERT INTO `image_master` (`image_id`, `seller_id`, `user_id`, `tools_detail_id`, `seed_detail_id`, `fertilizer_detail_id`, `pesticide_detail_id`, `image_name`) VALUES
('6EOnoWkK', 'hz2sXMac', NULL, NULL, NULL, NULL, NULL, 'user.png'),
('GErtsye', NULL, 'LEFqxrsO', NULL, NULL, NULL, NULL, 'Tulips.jpg'),
('hmy5TC96', NULL, 'yc31j8fD', NULL, NULL, NULL, NULL, '47.jpg'),
('I9sNAXvP', NULL, NULL, NULL, NULL, NULL, NULL, 'fertilizer_image/12121.jpg'),
('kpAKc2wl', 'mFaJzRCe', NULL, NULL, NULL, NULL, NULL, 'ajwaain.jpg'),
('SIiG2yEp', NULL, 'lHEZQY19', NULL, NULL, NULL, NULL, '25520955_1753953061362695_582708055_o.jpg'),
('V5GzA2s0', NULL, NULL, NULL, 'ecz41QZB', NULL, NULL, 'seed_image/black.jpg'),
('VW7obqfI', NULL, NULL, NULL, 'ecz41QZB', NULL, NULL, 'seed_image/267351.jpg'),
('zXMDNTyS', NULL, NULL, NULL, NULL, NULL, NULL, 'fertilizer_image/124578.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `order_book_master`
--

CREATE TABLE IF NOT EXISTS `order_book_master` (
  `order_book_id` varchar(15) NOT NULL,
  `order_id` varchar(15) NOT NULL,
  `user_id` varchar(15) NOT NULL,
  `product_name` varchar(25) NOT NULL,
  `qty` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `subtotal` int(10) NOT NULL,
  `delivery_details` varchar(30) NOT NULL,
  `order_status` varchar(10) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `status` int(2) NOT NULL,
  `reason_of_cancel` varchar(30) NOT NULL,
  `image_name` varchar(50) NOT NULL,
  PRIMARY KEY (`order_book_id`),
  KEY `order_id` (`order_id`),
  KEY `seller_id` (`seller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_book_master`
--

INSERT INTO `order_book_master` (`order_book_id`, `order_id`, `user_id`, `product_name`, `qty`, `price`, `subtotal`, `delivery_details`, `order_status`, `seller_id`, `status`, `reason_of_cancel`, `image_name`) VALUES
('a93QLt5w', 'LFXroypO', 'LEFqxrsO', 'Black Tea Seed', 1, 200, 200, '25-Apr-2016 , Monday', 'inprogress', 'mFaJzRCe', 0, '', 'seed_image/black.jpg'),
('cV2OzNPI', 'I3ZWzf45', 'LEFqxrsO', 'Rodancide', 2, 300, 600, '25-Apr-2016 , Monday', 'inprogress', 'mFaJzRCe', 1, 'emj', 'pesticide_image/chawli.jpg'),
('GxlWe8Kg', '9Pyv0TDK', 'LEFqxrsO', 'Black Tea Seed', 1, 200, 200, '25-Apr-2016 , Monday', 'inprogress', 'mFaJzRCe', 0, '', 'seed_image/black.jpg'),
('kPv6ul7H', 'qd0UBpPx', 'LEFqxrsO', 'AZola Fertilizer', 1, 300, 300, '25-Apr-2016 , Monday', 'complete', 'mFaJzRCe', 0, '', 'fertilizer_image/Desert.jpg'),
('LAneFya0', 'co2xz9F3', 'LEFqxrsO', 'Black Tea Seed', 1, 200, 200, '25-Apr-2016 , Monday', 'inprogress', 'mFaJzRCe', 0, '', 'seed_image/black.jpg'),
('O0Yum98S', 'rSYn2QMx', 'lHEZQY19', 'Black Tea Seed', 3, 200, 600, '03-Jan-2018 , Wednesday', 'inprogress', 'mFaJzRCe', 0, '', 'seed_image/black.jpg'),
('P9AiFCgc', 'mf8sj5gr', 'LEFqxrsO', 'AZola Fertilizer', 1, 300, 300, '24-Apr-2016 , Sunday', 'shipped', 'mFaJzRCe', 1, 'no intrest', 'fertilizer_image/Desert.jpg'),
('v74XSUoe', 'GSiOocIf', 'lHEZQY19', 'Black Tea Seed', 2, 200, 400, '03-Jan-2018 , Wednesday', 'inprogress', 'mFaJzRCe', 1, 's', 'seed_image/black.jpg'),
('X8k36fWr', 'VqPezgHp', 'LEFqxrsO', 'Two wheel tractot', 1, 50000, 50000, '25-Apr-2016 , Monday', 'complete', 'mFaJzRCe', 0, '', 'tools_image/bajra.jpg'),
('zmOoLtV6', '62uLjT0i', 'LEFqxrsO', 'Black tea Seed', 2, 200, 400, '25-Apr-2016 , Monday', 'cancel ord', 'mFaJzRCe', 0, '', 'seed_image/black.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `order_master`
--

CREATE TABLE IF NOT EXISTS `order_master` (
  `order_id` varchar(15) NOT NULL,
  `user_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `name` varchar(25) NOT NULL,
  `address` varchar(70) NOT NULL,
  `city` varchar(20) NOT NULL,
  `pincode` int(7) NOT NULL,
  `mobile_number` bigint(12) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_master`
--

INSERT INTO `order_master` (`order_id`, `user_id`, `email_id`, `name`, `address`, `city`, `pincode`, `mobile_number`, `status`) VALUES
('62uLjT0i', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('9Pyv0TDK', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('co2xz9F3', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('dSYExsVO', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', 'B-2/Rachhna soc.', '18', 395006, 9601278714, 0),
('GSiOocIf', 'lHEZQY19', 'jyotisapariya1995@gmail.com', 'JYOTIBEN gs', 'Eichenbegrskamp', '18 ', 395006, 9112345678, 0),
('I3ZWzf45', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('LFXroypO', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('mf8sj5gr', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('OpsP152R', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', 'B-2/Rachhna soc.', '18', 395006, 9601278714, 0),
('qd0UBpPx', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('rSYn2QMx', 'lHEZQY19', 'jyotisapariya1995@gmail.com', 'JYOTIBEN gs', 'Eichenbegrskamp', '18 ', 395006, 9112345678, 0),
('rWgvYIMm', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', 'B-2/Rachhna soc.', '18', 395006, 9601278714, 0),
('t98U4cJA', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0),
('VqPezgHp', 'LEFqxrsO', 'nakranibhavesh78714@gmail.com', 'Nakrani Bhavesh', '183/parimal soc.', '18', 395006, 9601278714, 0);

-- --------------------------------------------------------

--
-- Table structure for table `payment_master`
--

CREATE TABLE IF NOT EXISTS `payment_master` (
  `payment_id` varchar(15) NOT NULL,
  `order_id` varchar(15) NOT NULL,
  `payment_type` varchar(30) NOT NULL,
  `card_number` bigint(22) NOT NULL,
  `expiry_date` varchar(9) NOT NULL,
  `cvv` int(4) NOT NULL,
  `name_on_card` varchar(30) NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `user_id` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_appearance_master`
--

CREATE TABLE IF NOT EXISTS `pesticide_appearance_master` (
  `pesticide_appearance_id` varchar(15) NOT NULL,
  `pesticide_appearance_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`pesticide_appearance_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesticide_appearance_master`
--

INSERT INTO `pesticide_appearance_master` (`pesticide_appearance_id`, `pesticide_appearance_name`, `status`) VALUES
('cUmTdMJ2', 'Liqvid', 0),
('jcPFIUE3', 'Powder', 0),
('LaHOijJ9', 'Solid', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_classification_master`
--

CREATE TABLE IF NOT EXISTS `pesticide_classification_master` (
  `pesticide_classification_id` varchar(15) NOT NULL,
  `pesticide_classification_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`pesticide_classification_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesticide_classification_master`
--

INSERT INTO `pesticide_classification_master` (`pesticide_classification_id`, `pesticide_classification_name`, `status`) VALUES
('3vQ10VY6', 'Rodenticide Pesticide ', 0),
('nDNmz245', 'Insecticides Pesticide', 0),
('ovx6RwI5', 'Fungicide Pesticide', 0),
('YfJIS4Ep', 'Herbicides pesticide', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_detail_master`
--

CREATE TABLE IF NOT EXISTS `pesticide_detail_master` (
  `pesticide_detail_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `pesticide_type_id` varchar(15) NOT NULL,
  `pesticide_subtype_id` varchar(15) NOT NULL,
  `pesticide_detail_name` text NOT NULL,
  `pesticide_brand_name` text NOT NULL,
  `pesticide_price` double NOT NULL,
  `pesticide_price_type` varchar(10) NOT NULL,
  `pesticide_total_qty` bigint(10) NOT NULL,
  `pesticide_min_order` bigint(10) NOT NULL,
  `pesticide_weight` int(10) NOT NULL,
  `pesticide_shipping_weight` int(10) NOT NULL,
  `model_no` varchar(20) NOT NULL,
  `classification` varchar(15) NOT NULL,
  `appearance` varchar(15) NOT NULL,
  `origin_country` varchar(15) NOT NULL,
  `cas_no` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`pesticide_detail_id`),
  KEY `seller_id` (`seller_id`,`pesticide_type_id`,`pesticide_subtype_id`),
  KEY `pesticide_type_id` (`pesticide_type_id`),
  KEY `pesticide_subtype_id` (`pesticide_subtype_id`),
  KEY `classification` (`classification`),
  KEY `appearance` (`appearance`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_subtype_master`
--

CREATE TABLE IF NOT EXISTS `pesticide_subtype_master` (
  `pesticide_subtype_id` varchar(15) NOT NULL,
  `pesticide_type_id` varchar(15) NOT NULL,
  `pesticide_subtype_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`pesticide_subtype_id`),
  UNIQUE KEY `pesticide_subtype_name` (`pesticide_subtype_name`),
  KEY `pesticide_type_id` (`pesticide_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesticide_subtype_master`
--

INSERT INTO `pesticide_subtype_master` (`pesticide_subtype_id`, `pesticide_type_id`, `pesticide_subtype_name`, `status`) VALUES
('8kXyhNAq', 'sCcOYxmP', 'plant sysmetic herbicide', 0),
('8WjeZqr7', 'sCcOYxmP', 'selective herbicide', 0),
('AbDo3Xt8', 'v0WSUNtx', 'inorganic insecticide', 0),
('eaod3gI5', 'v0WSUNtx', 'synthetic insecticide', 0),
('HG0uLRTk', 'UhTypZks', 'systemic fungicide', 0),
('hl2NxE7G', 'v0WSUNtx', 'brod spetrum insecticide', 0),
('kACD0Pai', 'UhTypZks', 'penetrant fungicide', 0),
('m0s7qQC6', 'QL9iUKrk', 'Anticoagulant rodenticide', 0),
('QOWPS8eZ', 'sCcOYxmP', 'nonselective herbicide', 0),
('rdwWh5cz', 'UhTypZks', 'protectent fungicide', 0),
('uUZR1ln0', 'QL9iUKrk', 'nonanticoagulant rodenticide', 0),
('vB871SkN', 'v0WSUNtx', 'larvicide insecticide', 0),
('xZvujno9', 'v0WSUNtx', 'organic insecticide', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pesticide_type_master`
--

CREATE TABLE IF NOT EXISTS `pesticide_type_master` (
  `pesticide_type_id` varchar(15) NOT NULL,
  `pesticide_type_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`pesticide_type_id`),
  UNIQUE KEY `pesticide_type_name` (`pesticide_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesticide_type_master`
--

INSERT INTO `pesticide_type_master` (`pesticide_type_id`, `pesticide_type_name`, `status`) VALUES
('QL9iUKrk', 'rodenticide pesticide', 0),
('sCcOYxmP', 'herbicide pesticide', 0),
('UhTypZks', 'fungicide pesticide', 0),
('v0WSUNtx', 'insecticide pestidide', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seed_cultivation_master`
--

CREATE TABLE IF NOT EXISTS `seed_cultivation_master` (
  `seed_cultivation_id` varchar(15) NOT NULL,
  `seed_cultivation_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`seed_cultivation_id`),
  UNIQUE KEY `seed_cultivation_name` (`seed_cultivation_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seed_cultivation_master`
--

INSERT INTO `seed_cultivation_master` (`seed_cultivation_id`, `seed_cultivation_name`, `status`) VALUES
('5XBab1CK', 'Normal', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seed_detail_master`
--

CREATE TABLE IF NOT EXISTS `seed_detail_master` (
  `seed_detail_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `seed_type_id` varchar(15) NOT NULL,
  `seed_subtype_id` varchar(15) NOT NULL,
  `seed_submenu_id` varchar(15) DEFAULT NULL,
  `seed_detail_name` text NOT NULL,
  `seed_price` double NOT NULL,
  `seed_price_type` varchar(10) NOT NULL,
  `seed_total_qty` bigint(10) NOT NULL,
  `seed_min_order` bigint(10) NOT NULL,
  `cultivation_type` varchar(30) NOT NULL,
  `model_no` varchar(14) NOT NULL,
  `payment_terms` text NOT NULL,
  `trade_terms` text NOT NULL,
  `item_weight` double NOT NULL,
  `shipping_weight` double NOT NULL,
  `origin_country` text NOT NULL,
  `description` text NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`seed_detail_id`),
  KEY `seed_type_id` (`seed_type_id`,`seed_subtype_id`,`seed_submenu_id`),
  KEY `seller_id` (`seller_id`),
  KEY `seed_subtype_id` (`seed_subtype_id`),
  KEY `seed_submenu_id` (`seed_submenu_id`),
  KEY `cultivation_type` (`cultivation_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seed_detail_master`
--

INSERT INTO `seed_detail_master` (`seed_detail_id`, `seller_id`, `seed_type_id`, `seed_subtype_id`, `seed_submenu_id`, `seed_detail_name`, `seed_price`, `seed_price_type`, `seed_total_qty`, `seed_min_order`, `cultivation_type`, `model_no`, `payment_terms`, `trade_terms`, `item_weight`, `shipping_weight`, `origin_country`, `description`, `status`) VALUES
('ecz41QZB', 'mFaJzRCe', 'OGoYC83Z', '8F6J43ei', 'j0fCMOxw', 'Black Tea Seed', 200, 'Kilogram', 50, 1, '5XBab1CK', 'NHABESG', ' DD L/C', ' FOB CIF', 1, 1, '222 ', 'Good Product for tea Plant', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seed_submenu_master`
--

CREATE TABLE IF NOT EXISTS `seed_submenu_master` (
  `seed_submenu_id` varchar(15) NOT NULL,
  `seed_subtype_id` varchar(15) NOT NULL,
  `seed_submenu_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`seed_submenu_id`),
  UNIQUE KEY `seed_submenu_name` (`seed_submenu_name`),
  KEY `seed_subtype_id` (`seed_subtype_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seed_submenu_master`
--

INSERT INTO `seed_submenu_master` (`seed_submenu_id`, `seed_subtype_id`, `seed_submenu_name`, `status`) VALUES
('1aeY7SNW', 'GPluoS5e ', 'mrc cotton seed', 0),
('1uVSjpCZ', 'QaNgW74k ', 'black sesame seed ', 0),
('2EaZPFLe', 'DjdMPbz7 ', 'burley tobacco seed', 0),
('2SKZk5V0', 'DjdMPbz7 ', 'perique tobacco seed', 0),
('3qSQ2Oh5', 'EV5Oezdo ', 'chinis paddy seed', 0),
('5YHMQEIa', 'EV5Oezdo ', 'himliya paddy seed', 0),
('6VsDOeCp', 'uOicsjh9 ', 'bran sorghun seed', 0),
('8GxKYSpB', 'GPluoS5e ', 'asiatic cotton seed', 0),
('8iodHUpX', 'keZiRdOj ', 'sweet corn seed', 0),
('8wvaSdOk', 'uOicsjh9 ', 'flaked sorghun seed', 0),
('95NBTxFW', 'EV5Oezdo ', 'long paddy seed', 0),
('aFMSzXx7', 'w8dVrOsm ', 'black cane seed', 0),
('BdaWvVS6', 'DjdMPbz7 ', 'fluecured tobacco seed', 0),
('fyiGscjP', 'keZiRdOj ', 'hominy corn seed', 0),
('FZ6MExg4', 'wDb5EsOZ ', 'common wheat seed', 0),
('gTLljCpN', 'RxmJufpb ', 'dudhi seed', 0),
('iBKu6nQI', 'GPluoS5e ', 'rajhans cotton seed', 0),
('j0fCMOxw', '8F6J43ei ', 'black tea seed', 0),
('K4GYZXWr', 'wDb5EsOZ ', 'durum wheat seed', 0),
('KCfwAunG', '4qejJEpK ', 'long groundnut seed', 0),
('LdeCt8lQ', 'wDb5EsOZ ', 'ancient wheat seed', 0),
('lSH8Dqt3', '8F6J43ei ', 'green tea seed', 0),
('MCWN6L2f', '4qejJEpK ', 'round groundnut seed', 0),
('o8ahyWAt', 'EV5Oezdo ', 'basmati paddy seed', 0),
('OloE4Sy6', 'uOicsjh9 ', 'black sorghun seed', 0),
('PHvo6sYC', 'RxmJufpb ', 'karela seed', 0),
('qhQbgIM8', 'QaNgW74k ', 'golden sesame seed', 0),
('qxNbjar3', 'keZiRdOj ', 'polenta corn seed', 0),
('RpbWd5mh', '8F6J43ei ', 'dark tea seed', 0),
('SGBLQc0P', 'RxmJufpb ', 'tindora seed', 0),
('SZx6cn4w', 'keZiRdOj ', 'dent corn seed', 0),
('t8W0izvw', 'uOicsjh9 ', 'popped sorghun seed', 0),
('Uk6748GQ', '8F6J43ei ', 'white tea seed', 0),
('WxjwLyAp', 'w8dVrOsm ', 'white cane seed', 0),
('XpMsfJIh', 'QaNgW74k ', 'white sesame seed', 0),
('yfzJi3v4', 'uOicsjh9 ', 'pearled sorghun seed', 0),
('Z6oTSiCH', 'DjdMPbz7 ', 'darkfired tobacco seed', 0),
('zDnu7m5x', 'DjdMPbz7 ', 'rustica tobacco seed', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seed_subtype_master`
--

CREATE TABLE IF NOT EXISTS `seed_subtype_master` (
  `seed_subtype_id` varchar(15) NOT NULL,
  `seed_type_id` varchar(15) NOT NULL,
  `seed_subtype_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`seed_subtype_id`),
  UNIQUE KEY `seed_subtype_name` (`seed_subtype_name`),
  KEY `seed_type_id` (`seed_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seed_subtype_master`
--

INSERT INTO `seed_subtype_master` (`seed_subtype_id`, `seed_type_id`, `seed_subtype_name`, `status`) VALUES
('2PczH4IT', 'PAn9DudE', 'kiwi fruit seed', 0),
('3AySMRpE', 'PAn9DudE', 'custard apple seed', 0),
('40jnxEVr', 'ySzltscD', 'okra seed', 0),
('4qejJEpK', 'RnJH3W1u', 'groundnut seed', 0),
('8F6J43ei', 'OGoYC83Z', 'tea seed', 0),
('ADEVhkb4', 'GuJHWmPF', 'field beans seed', 0),
('bFXZ9wm6', 'PAn9DudE', 'guava fruit seed', 0),
('D8sgBPiE', 'PAn9DudE', 'papaya fruit seed', 0),
('DjdMPbz7', 'OGoYC83Z', 'tobacco seed', 0),
('DXOQZbV4', 'GuJHWmPF', 'pigeon pea seed', 0),
('EV5Oezdo', 'uln6I51V', 'paddy seed', 0),
('FsHdyPhq', 'ySzltscD', 'onion seed', 0),
('fsRQJ3ha', 'ySzltscD', 'garlic seed', 0),
('GPluoS5e', 'OGoYC83Z', 'cotton seed', 0),
('iT8zxULW', 'ySzltscD', 'potatoes seed', 0),
('j1BZbFAo', 'GuJHWmPF', 'chickpeas seed', 0),
('keZiRdOj', 'uln6I51V', 'corn seed', 0),
('LCSkag3q', 'ySzltscD', 'ginger seed', 0),
('mE6k49wU', 'ySzltscD', 'cauliflower seed', 0),
('MGfyOCh3', 'PAn9DudE', 'mango seed', 0),
('QaNgW74k', 'RnJH3W1u', 'sesame seed', 0),
('RxmJufpb', 'ySzltscD', 'rambler seed', 0),
('S0X4Lr8i', 'GuJHWmPF', 'moth seed', 0),
('Sp7Lz6d3', 'GuJHWmPF', 'mung seed', 0),
('uOicsjh9', 'uln6I51V', 'sorghun seed', 0),
('w8dVrOsm', 'OGoYC83Z', 'cane seed', 0),
('wDb5EsOZ', 'uln6I51V', 'wheat seed', 0),
('xmkJSWZv', 'GuJHWmPF', 'black gram seed', 0),
('y4emojXs', 'RnJH3W1u', 'castor seed', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seed_type_master`
--

CREATE TABLE IF NOT EXISTS `seed_type_master` (
  `seed_type_id` varchar(12) NOT NULL,
  `seed_type_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`seed_type_id`),
  UNIQUE KEY `seed_type_name` (`seed_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seed_type_master`
--

INSERT INTO `seed_type_master` (`seed_type_id`, `seed_type_name`, `status`) VALUES
('GuJHWmPF', 'pulse seeds', 0),
('OGoYC83Z', 'cash seeds', 0),
('PAn9DudE', 'fruits seeds', 0),
('RnJH3W1u', 'oil seeds', 0),
('uln6I51V', 'cereal seeds', 0),
('ySzltscD', 'vegetables seeds', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seller_chat_master`
--

CREATE TABLE IF NOT EXISTS `seller_chat_master` (
  `chat_id` varchar(15) NOT NULL,
  `sender_id` varchar(15) NOT NULL,
  `reciver_id` varchar(15) NOT NULL,
  `message` text NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` varchar(10) NOT NULL,
  `time` varchar(10) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`chat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller_chat_master`
--

INSERT INTO `seller_chat_master` (`chat_id`, `sender_id`, `reciver_id`, `message`, `subject`, `date`, `time`, `status`) VALUES
('2ouh8MAt', 'hz2sXMac', 'mFaJzRCe', 'n', 'hello', 'Dec 28', '09:38', 0),
('IM39rsgW', 'mFaJzRCe', 'Bha7871', 'kklkl\r\n', 'gdfgd', 'Apr 18', '11:40', 0),
('itqfUKuB', 'hz2sXMac', 'hz2sXMac', 'b', 'n', 'Dec 28', '09:39', 0),
('N1SL5CuW', 'Bha7871', 'XmgJbTsS', 'FXNHFH', 'GHDF`', 'Apr 04', '11:05', 0),
('W9q0HwOb', 'XmgJbTsS', 'Bha7871', 'sssssssssssssssssssss', 'sryyyy', 'Mar 26', '10:48', 0),
('xGJ8jedv', 'Bha7871', 'SUBqeED8', 'plz enter valid seed', 'Seed Enter Valid', 'Mar 24', '05:27', 0),
('YXw6PCjb', 'Bha7871', 'SUBqeED8', 'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ', 'HHHHHHHHHHHHHHH', 'Mar 28', '11:10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `seller_login`
--

CREATE TABLE IF NOT EXISTS `seller_login` (
  `seller_login_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `allow_status` int(2) NOT NULL,
  PRIMARY KEY (`seller_login_id`),
  UNIQUE KEY `email_id` (`email_id`),
  KEY `seller_id` (`seller_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller_login`
--

INSERT INTO `seller_login` (`seller_login_id`, `seller_id`, `email_id`, `password`, `allow_status`) VALUES
('kKBDWVow', 'hz2sXMac', 'jyotisapariya1995@gmail.com', 'sapariya1234', 1),
('xRbVjLkc', 'mFaJzRCe', 'pankajnarola1995@gmail.com', 'narola1234', 1);

-- --------------------------------------------------------

--
-- Table structure for table `seller_registration`
--

CREATE TABLE IF NOT EXISTS `seller_registration` (
  `seller_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` varchar(70) NOT NULL,
  `seller_name` varchar(25) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(25) NOT NULL,
  `gender` varchar(12) NOT NULL,
  `company_name` varchar(25) NOT NULL,
  `mobile_number` bigint(12) NOT NULL,
  `security_question` varchar(30) NOT NULL,
  `security_answer` varchar(30) NOT NULL,
  `allow_status` int(2) NOT NULL,
  PRIMARY KEY (`seller_id`),
  UNIQUE KEY `email_id` (`email_id`,`mobile_number`),
  KEY `seller_id` (`seller_id`),
  KEY `seller_id_2` (`seller_id`),
  KEY `city` (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller_registration`
--

INSERT INTO `seller_registration` (`seller_id`, `email_id`, `password`, `seller_name`, `address`, `city`, `gender`, `company_name`, `mobile_number`, `security_question`, `security_answer`, `allow_status`) VALUES
('hz2sXMac', 'jyotisapariya1995@gmail.com', 'sapariya1234', 'JYOTIBEN Sapariya', 'Eichenbegrskamp', '18 ', 'Female', 'Sapariya', 9033834315, 'Your Mobile No', '90993366558', 1),
('mFaJzRCe', 'pankajnarola1995@gmail.com', 'narola1234', 'PANKAJ NAROLA', '183/parimal soc.', '14', 'Male', 'RAKSH', 9033834315, 'Your Mobile No', '1234567890', 1);

-- --------------------------------------------------------

--
-- Table structure for table `state_master`
--

CREATE TABLE IF NOT EXISTS `state_master` (
  `state_id` varchar(15) NOT NULL,
  `country_id` varchar(15) NOT NULL,
  `state_name` varchar(25) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE KEY `state_name` (`state_name`),
  KEY `country_id` (`country_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `state_master`
--

INSERT INTO `state_master` (`state_id`, `country_id`, `state_name`, `status`) VALUES
('1', '77', 'Andaman and Nicobar', 0),
('11', '77', 'Goa', 0),
('12', '77', 'Gujarat', 0),
('13', '77', 'Haryana', 0),
('14', '77', 'Himachal Pradesh', 0),
('15', '77', 'Jammu and Kashmir', 0),
('16', '77', 'Jharkhand', 0),
('17', '77', 'Karnataka', 0),
('18', '77', 'Kerala', 0),
('19', '77', 'Lakshadweep', 0),
('2', '77', 'Andhra Pradesh', 0),
('20', '77', 'Madhya Pradesh', 0),
('21', '77', 'Maharashtra', 0),
('22', '77', 'Manipur', 0),
('23', '77', 'Meghalaya', 0),
('24', '77', 'Mizoram', 0),
('25', '77', 'Nagaland', 0),
('26', '77', 'Orissa', 0),
('27', '77', 'Pondicherry', 0),
('28', '77', 'Punjab', 0),
('29', '77', 'Rajasthan', 0),
('3', '77', 'Arunachal Pradesh', 0),
('30', '77', 'Sikkim', 0),
('31', '77', 'Tamil Nadu', 0),
('32', '77', 'Tripura', 0),
('33', '77', 'Uttaranchal', 0),
('34', '77', 'Uttar Pradesh', 0),
('35', '77', 'West Bengal', 0),
('4', '77', 'Assam', 0),
('5', '77', 'Bihar', 0),
('6', '77', 'Chandigarh', 0),
('7', '77', 'Chhattisgarh', 0),
('8', '77', 'Dadra and Nagar Have', 0),
('9', '77', 'Daman and Diu', 0);

-- --------------------------------------------------------

--
-- Table structure for table `stock_available_data_master`
--

CREATE TABLE IF NOT EXISTS `stock_available_data_master` (
  `pincode` int(6) NOT NULL,
  `city_id` varchar(15) NOT NULL,
  `days` int(5) NOT NULL,
  `delivery_charge` int(5) NOT NULL,
  PRIMARY KEY (`pincode`),
  KEY `city_id` (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tools_detail_master`
--

CREATE TABLE IF NOT EXISTS `tools_detail_master` (
  `tools_detail_id` varchar(15) NOT NULL,
  `seller_id` varchar(15) NOT NULL,
  `tools_type_id` varchar(15) NOT NULL,
  `tools_subtype_id` varchar(15) NOT NULL,
  `tools_detail_name` varchar(50) NOT NULL,
  `tools_price` double NOT NULL,
  `tools_total_qty` bigint(10) NOT NULL,
  `tools_detail_type_id` varchar(20) DEFAULT NULL,
  `tools_uses` text NOT NULL,
  `model_no` varchar(20) NOT NULL,
  `origin_country` varchar(20) NOT NULL,
  `color_id` varchar(20) NOT NULL,
  `tools_fuel_id` varchar(15) NOT NULL,
  `tools_drive_id` varchar(20) NOT NULL,
  `tools_shipping_weight` varchar(25) NOT NULL,
  `tools_engine_id` varchar(20) NOT NULL,
  `tools_weight` varchar(20) NOT NULL,
  `tools_material` varchar(30) NOT NULL,
  `tools_eye_shape` varchar(30) NOT NULL,
  `tools_package_detail` text NOT NULL,
  `description` text NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_detail_id`),
  KEY `tools_subtype_id` (`tools_subtype_id`,`tools_type_id`),
  KEY `seller_id` (`seller_id`),
  KEY `tools_type_id` (`tools_type_id`),
  KEY `tools_detail_type_id` (`tools_detail_type_id`),
  KEY `tools_detail_type_id_2` (`tools_detail_type_id`),
  KEY `tools_fuel_id` (`tools_fuel_id`),
  KEY `tools_drive_id` (`tools_drive_id`),
  KEY `tools_engine_id` (`tools_engine_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tools_detail_type_master`
--

CREATE TABLE IF NOT EXISTS `tools_detail_type_master` (
  `tools_detail_type_id` varchar(15) NOT NULL,
  `tools_type_id` varchar(15) NOT NULL,
  `tools_detail_type_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_detail_type_id`),
  KEY `tools_type_id` (`tools_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tools_drive_master`
--

CREATE TABLE IF NOT EXISTS `tools_drive_master` (
  `tools_drive_id` varchar(15) NOT NULL,
  `tools_drive_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_drive_id`),
  UNIQUE KEY `tools_drive_name` (`tools_drive_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tools_drive_master`
--

INSERT INTO `tools_drive_master` (`tools_drive_id`, `tools_drive_name`, `status`) VALUES
('CFJlRXiE', 'Auto Strering', 0),
('DG8uW6yp', 'Strering with gear', 0),
('Rs7MVtpm', 'Auto Strering with grar', 0),
('RTWfkSwd', 'Strering', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tools_engine_master`
--

CREATE TABLE IF NOT EXISTS `tools_engine_master` (
  `tools_engine_id` varchar(15) NOT NULL,
  `tools_engine_name` varchar(30) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`tools_engine_id`),
  UNIQUE KEY `tools_engine_name` (`tools_engine_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tools_engine_master`
--

INSERT INTO `tools_engine_master` (`tools_engine_id`, `tools_engine_name`, `status`) VALUES
('HXeWGRdc', '1000cc', 0),
('iK6hSolL', '100cc', 0),
('xOuQlBVF', '200cc', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tools_fuel_master`
--

CREATE TABLE IF NOT EXISTS `tools_fuel_master` (
  `tools_fuel_id` varchar(15) NOT NULL,
  `tools_fuel_name` varchar(30) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_fuel_id`),
  UNIQUE KEY `tools_fuel_name` (`tools_fuel_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tools_fuel_master`
--

INSERT INTO `tools_fuel_master` (`tools_fuel_id`, `tools_fuel_name`, `status`) VALUES
('GmOWKTr4', 'patrol', 0),
('ZhRajrkM', 'Disal', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tools_subtype_master`
--

CREATE TABLE IF NOT EXISTS `tools_subtype_master` (
  `tools_subtype_id` varchar(15) NOT NULL,
  `tools_type_id` varchar(15) NOT NULL,
  `tools_subtype_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_subtype_id`),
  UNIQUE KEY `tools_subtype_name` (`tools_subtype_name`),
  KEY `tool_type_id` (`tools_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tools_subtype_master`
--

INSERT INTO `tools_subtype_master` (`tools_subtype_id`, `tools_type_id`, `tools_subtype_name`, `status`) VALUES
('0qoHAvjy', 'w3pLj1zq', 'Buckrake for silage making', 0),
('0uCH3YD5', 'Gb8dcj5g', 'Orhard Tractor', 0),
('3tzMgNhn', 'ADPZ87LB', 'Hak Saw', 0),
('46DXpem7', 'PSAItWX9', 'Spray Bottle', 0),
('4dGfTqkA', 'hMUJ0Yog', 'Rake', 0),
('5VAeGw0F', 'w3pLj1zq', 'Harvestor', 0),
('6byCaoxg', 'w3pLj1zq', 'Beet Cleaner Loader', 0),
('aJorlcNU', 'hMUJ0Yog', 'Harrow Tools', 0),
('cUClQ2Ts', 'PSAItWX9', 'Hand Held Insecticide', 0),
('d5DLSJ8p', 'w3pLj1zq', 'Axe', 0),
('dmXTKrOz', 'w3pLj1zq', 'Ricehuller', 0),
('dt1jFcrm', 'hMUJ0Yog', 'Shovel', 0),
('FfzRZWmv', 'w3pLj1zq', 'Nicehuller', 0),
('fpxIqmGd', 'PSAItWX9', 'Part Washer', 0),
('gjyA5O8l', 'PSAItWX9', 'Pressure Washer', 0),
('Gtai7y4K', 'hMUJ0Yog', 'Cultipacker', 0),
('HCz5aLvr', 'hMUJ0Yog', 'Pickax Tools', 0),
('hgZHwbpB', 'PSAItWX9', 'Pumps', 0),
('Ihj9UAb4', 'Gb8dcj5g', 'Two-Wheeler Tractor', 0),
('JcWhtVY3', 'Gb8dcj5g', 'Row-Crop Tractor', 0),
('k1ybrIo4', 'hMUJ0Yog', 'Trowel', 0),
('kb7tuCi2', 'wmFW7aRb', 'Trailer', 0),
('LKc4dYv1', 'w3pLj1zq', 'Cotton Picker', 0),
('mOWho9z7', 'w3pLj1zq', 'Reaping-hook', 0),
('mq3OTLSt', 'w3pLj1zq', 'Tree Shaker', 0),
('nkvsEGrO', 'wmFW7aRb', 'Grain Auger', 0),
('Nwf0DLoS', 'ADPZ87LB', 'Pipe Wrench', 0),
('OkKMDPAf', 'Gb8dcj5g', 'Garden Tractor', 0),
('qFCSYahJ', 'hMUJ0Yog', 'Plow', 0),
('UiC34f6G', 'PSAItWX9', 'Air Brush', 0),
('Usj5NTOc', 'PSAItWX9', 'Bottel With Hand Pump', 0),
('vfGocpD1', 'PSAItWX9', 'Air Sprayer Trailed Model', 0),
('VJIsD3xt', 'ADPZ87LB', 'Measure Tap', 0),
('xeOYzt1g', 'wmFW7aRb', 'Wagon', 0),
('Xh3ARarq', 'Gb8dcj5g', 'Alternative Machine Type', 0),
('xzWkfX69', 'w3pLj1zq', 'Hand Hay Tools', 0),
('yf4PWJKk', 'ADPZ87LB', 'Pvc Pipe Cutter', 0),
('YnlQbSh1', 'hMUJ0Yog', 'BroadFrok', 0),
('zi2NHARL', 'wmFW7aRb', 'Winnowing', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tools_type_master`
--

CREATE TABLE IF NOT EXISTS `tools_type_master` (
  `tools_type_id` varchar(15) NOT NULL,
  `tools_type_name` varchar(50) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`tools_type_id`),
  UNIQUE KEY `tools_type_name` (`tools_type_name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tools_type_master`
--

INSERT INTO `tools_type_master` (`tools_type_id`, `tools_type_name`, `status`) VALUES
('ADPZ87LB', 'Irrigation', 0),
('Gb8dcj5g', 'Tractor & Power', 0),
('hMUJ0Yog', 'Soil & Cultivation', 0),
('PSAItWX9', 'Furtilizer & Pest Control', 0),
('Qa6njRD1', 'aaa', 1),
('w3pLj1zq', 'Horvesting', 0),
('wmFW7aRb', 'Transport Tools', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_registration`
--

CREATE TABLE IF NOT EXISTS `user_registration` (
  `user_id` varchar(15) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `mobile_number` bigint(12) NOT NULL,
  `password` varchar(65) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `dob` date NOT NULL,
  `city` varchar(20) NOT NULL,
  `status` int(2) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_id` (`email_id`,`mobile_number`),
  KEY `city` (`city`),
  KEY `city_2` (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_registration`
--

INSERT INTO `user_registration` (`user_id`, `email_id`, `mobile_number`, `password`, `name`, `gender`, `address`, `dob`, `city`, `status`) VALUES
('LEFqxrsO', 'nakranibhavesh78714@gmail.com', 9601278714, '9601278714', 'Nakrani Bhavesh', 'MALE', '183/parimal soc.', '2016-03-15', '18', 0),
('lHEZQY19', 'jyotisapariya1995@gmail.com', 9112345678, 'liveforpapa1432', 'JYOTIBEN gs', 'FEMALE', 'Eischenbegrskamp', '2017-12-05', '18', 0),
('yc31j8fD', 'Nakrani@Gmail.Com', 9601278714, '9601278714', 'BHAVESH NAKRANI', 'MALE', '183/parimal', '2016-04-20', '18 ', 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `area_master`
--
ALTER TABLE `area_master`
  ADD CONSTRAINT `area_master_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `city_master` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `city_master`
--
ALTER TABLE `city_master`
  ADD CONSTRAINT `city_master_ibfk_1` FOREIGN KEY (`state_id`) REFERENCES `state_master` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fertilizer_detail_master`
--
ALTER TABLE `fertilizer_detail_master`
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_2` FOREIGN KEY (`fertilizer_type_id`) REFERENCES `fertilizer_type_master` (`fertilizer_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_3` FOREIGN KEY (`fertilizer_subtype_id`) REFERENCES `fertilizer_subtype_master` (`fertilizer_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_4` FOREIGN KEY (`fertilizer_submenu_id`) REFERENCES `fertilizer_submenu_master` (`fertilizer_submenu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_5` FOREIGN KEY (`classification`) REFERENCES `fertilizer_classification_master` (`fertilizer_classification_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fertilizer_detail_master_ibfk_6` FOREIGN KEY (`appearance`) REFERENCES `fertilizer_appearance_master` (`fertilizer_appearance_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fertilizer_submenu_master`
--
ALTER TABLE `fertilizer_submenu_master`
  ADD CONSTRAINT `fertilizer_submenu_master_ibfk_1` FOREIGN KEY (`fertilizer_subtype_id`) REFERENCES `fertilizer_subtype_master` (`fertilizer_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fertilizer_subtype_master`
--
ALTER TABLE `fertilizer_subtype_master`
  ADD CONSTRAINT `fertilizer_subtype_master_ibfk_1` FOREIGN KEY (`fertilizer_type_id`) REFERENCES `fertilizer_type_master` (`fertilizer_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `image_master`
--
ALTER TABLE `image_master`
  ADD CONSTRAINT `image_master_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_master_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user_registration` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_master_ibfk_3` FOREIGN KEY (`tools_detail_id`) REFERENCES `tools_detail_master` (`tools_detail_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_master_ibfk_5` FOREIGN KEY (`fertilizer_detail_id`) REFERENCES `fertilizer_detail_master` (`fertilizer_detail_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_master_ibfk_6` FOREIGN KEY (`seed_detail_id`) REFERENCES `seed_detail_master` (`seed_detail_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `image_master_ibfk_7` FOREIGN KEY (`pesticide_detail_id`) REFERENCES `pesticide_detail_master` (`pesticide_detail_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_book_master`
--
ALTER TABLE `order_book_master`
  ADD CONSTRAINT `order_book_master_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_master` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_master`
--
ALTER TABLE `payment_master`
  ADD CONSTRAINT `payment_master_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_master` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pesticide_detail_master`
--
ALTER TABLE `pesticide_detail_master`
  ADD CONSTRAINT `pesticide_detail_master_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pesticide_detail_master_ibfk_2` FOREIGN KEY (`pesticide_type_id`) REFERENCES `pesticide_type_master` (`pesticide_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pesticide_detail_master_ibfk_3` FOREIGN KEY (`pesticide_subtype_id`) REFERENCES `pesticide_subtype_master` (`pesticide_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pesticide_detail_master_ibfk_4` FOREIGN KEY (`classification`) REFERENCES `pesticide_classification_master` (`pesticide_classification_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pesticide_detail_master_ibfk_5` FOREIGN KEY (`appearance`) REFERENCES `pesticide_appearance_master` (`pesticide_appearance_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pesticide_subtype_master`
--
ALTER TABLE `pesticide_subtype_master`
  ADD CONSTRAINT `pesticide_subtype_master_ibfk_1` FOREIGN KEY (`pesticide_type_id`) REFERENCES `pesticide_type_master` (`pesticide_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seed_detail_master`
--
ALTER TABLE `seed_detail_master`
  ADD CONSTRAINT `seed_detail_master_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seed_detail_master_ibfk_2` FOREIGN KEY (`seed_type_id`) REFERENCES `seed_type_master` (`seed_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seed_detail_master_ibfk_3` FOREIGN KEY (`seed_subtype_id`) REFERENCES `seed_subtype_master` (`seed_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seed_detail_master_ibfk_4` FOREIGN KEY (`seed_submenu_id`) REFERENCES `seed_submenu_master` (`seed_submenu_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seed_submenu_master`
--
ALTER TABLE `seed_submenu_master`
  ADD CONSTRAINT `seed_submenu_master_ibfk_1` FOREIGN KEY (`seed_subtype_id`) REFERENCES `seed_subtype_master` (`seed_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seed_subtype_master`
--
ALTER TABLE `seed_subtype_master`
  ADD CONSTRAINT `seed_subtype_master_ibfk_1` FOREIGN KEY (`seed_type_id`) REFERENCES `seed_type_master` (`seed_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seller_login`
--
ALTER TABLE `seller_login`
  ADD CONSTRAINT `seller_login_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `seller_registration`
--
ALTER TABLE `seller_registration`
  ADD CONSTRAINT `seller_registration_ibfk_1` FOREIGN KEY (`city`) REFERENCES `city_master` (`city_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `state_master`
--
ALTER TABLE `state_master`
  ADD CONSTRAINT `state_master_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `country_master` (`country_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tools_detail_master`
--
ALTER TABLE `tools_detail_master`
  ADD CONSTRAINT `tools_detail_master_ibfk_1` FOREIGN KEY (`tools_subtype_id`) REFERENCES `tools_subtype_master` (`tools_subtype_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_2` FOREIGN KEY (`tools_type_id`) REFERENCES `tools_type_master` (`tools_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_3` FOREIGN KEY (`seller_id`) REFERENCES `seller_registration` (`seller_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_4` FOREIGN KEY (`tools_detail_type_id`) REFERENCES `tools_detail_type_master` (`tools_detail_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_6` FOREIGN KEY (`tools_fuel_id`) REFERENCES `tools_fuel_master` (`tools_fuel_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_7` FOREIGN KEY (`tools_drive_id`) REFERENCES `tools_drive_master` (`tools_drive_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_detail_master_ibfk_8` FOREIGN KEY (`tools_engine_id`) REFERENCES `tools_engine_master` (`tools_engine_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tools_detail_type_master`
--
ALTER TABLE `tools_detail_type_master`
  ADD CONSTRAINT `tools_detail_type_master_ibfk_1` FOREIGN KEY (`tools_type_id`) REFERENCES `tools_type_master` (`tools_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tools_subtype_master`
--
ALTER TABLE `tools_subtype_master`
  ADD CONSTRAINT `tools_subtype_master_ibfk_1` FOREIGN KEY (`tools_type_id`) REFERENCES `tools_type_master` (`tools_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
