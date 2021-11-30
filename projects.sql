-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 28, 2021 at 11:53 PM
-- Server version: 5.7.34
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mariaPortData`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `project` varchar(40) DEFAULT NULL,
  `category` varchar(40) DEFAULT NULL,
  `description` text,
  `technical` text,
  `biopic` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `project`, `category`, `description`, `technical`, `biopic`) VALUES
(1, 'Jewelry', 'h.p.lafaurie Jewelry Design', 'WebDesign', 'h.p.lafaurie is a jewellery designer, located in Toronto, Canada. \r\nAt this project I created the wireframes designs, coding, photo enhancement and web design.\r\n', 'Software and code technologies I used on this project:\r\nHTML5, CSS3, Javascript, Ilustrator, Photoshop, Adobe XD.\r\n', 'jewelry.jpg'),
(2, 'Covid', 'Covid&me', 'VideoEditing', 'Covid&me was a project for the Interactive Media Design Program at Fanshawe college. \r\nFor this project, I had to create a short videoclip telling a story about the effect took on COVID pandemic on me.\r\n', 'Software and code technologies I used on this project:\r\nPhotoshop, Premiere.\r\n', 'covid.jpg'),
(3, 'Anesthesia', 'LASRA educational videos', 'VideoEditing', 'LASRA is the Latin-American Society of Regional Anesthesia. For this project I did the editing and production of a series of short videoclips to teach how to perform different anesthetic techniques.', 'Software and code technologies I used on this project:\r\nPhotoshop, Premiere.\r\n', 'anesthesia.jpg'),
(4, 'Oldspice', 'Oldspice Beer', 'Branding/ Advertisement', 'Oldspice beer was a project for the Interactive Media Design Program at Fanshawe College.  For this project I had to create the entire branding/advertising for a fake beer named OldSpice.  Logo, symbol, infomercial, promotional product pictures and website.', 'Software and code technologies I used on this project:\r\nHTML5, CSS3, Javascript, Ilustrator, Photoshop, Adobe XD, Cinema4D, AfterEffects.', 'oldspice.jpg'),
(5, 'Hyatt', 'Hyatt Hotel Room', '3D modeling', 'Hyatt Hotel room was a project for Interactive Media Design Program at Fanshawe College. For this project I had to modeling a modern room for Hyatt Hotels, using Cinema4D. ', 'Software and code technologies I used on this project:\r\nCinema4D, AfterEffects.\r\n\r\n', 'hyatt.jpg'),
(6, 'Sportsnet', 'Sportsnet promotional video', '3D animation', 'Promotional Video created to promote Monday Night Football Game between Dallas and Cowboys.', 'Cinema 4D\r\nAfter Effects', NULL),
(7, 'sonoart', 'Sonoart', '3D animation', 'Cell\'s animation for educational purpose', 'Cinema 4D', NULL),
(8, 'Ceci', 'Ceci cosmetics', 'VideoEditing', 'Video commercial for Ceci Cosmetics', 'After Effects', NULL),
(9, 'Ceci', 'Ceci Cosmetics', 'Branding/Advertisement', 'Marketing/Branding for ceci cosmetics. Included banner adds, double sheet magazine, logo design.', 'Illustrator\r\nPhotoshop\r\nAfter Effects\r\nInDesign', NULL),
(10, 'Yamaha', 'Yamaha music instruments', '3D animation', 'Promotional video for Yamaha music instruments.', 'Cinema 4D\r\nAfter Effects', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
