-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2022 at 03:17 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vision`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `mobile` char(10) NOT NULL,
  `drsph` varchar(6) DEFAULT NULL,
  `drcyl` varchar(6) DEFAULT NULL,
  `draxis` varchar(6) DEFAULT NULL,
  `drva` varchar(6) DEFAULT NULL,
  `nrsph` varchar(6) DEFAULT NULL,
  `nrcyl` varchar(6) DEFAULT NULL,
  `nraxis` varchar(6) DEFAULT NULL,
  `nrva` varchar(6) DEFAULT NULL,
  `dlsph` varchar(6) DEFAULT NULL,
  `dlcyl` varchar(6) DEFAULT NULL,
  `dlaxis` varchar(6) DEFAULT NULL,
  `dlva` varchar(6) DEFAULT NULL,
  `nlsph` varchar(6) DEFAULT NULL,
  `nlcyl` varchar(6) DEFAULT NULL,
  `nlaxis` varchar(6) DEFAULT NULL,
  `nlva` varchar(6) DEFAULT NULL,
  `purpose` varchar(50) DEFAULT NULL,
  `quality` varchar(50) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL,
  `f1name` varchar(20) DEFAULT NULL,
  `g1name` varchar(20) DEFAULT NULL,
  `f1prise` int(5) DEFAULT NULL,
  `g1prise` int(5) DEFAULT NULL,
  `f2name` varchar(20) DEFAULT NULL,
  `g2name` varchar(20) DEFAULT NULL,
  `f3name` varchar(20) DEFAULT NULL,
  `g3name` varchar(20) DEFAULT NULL,
  `f2prise` int(5) DEFAULT NULL,
  `g2prise` int(5) DEFAULT NULL,
  `f3prise` int(5) DEFAULT NULL,
  `g3prise` int(5) DEFAULT NULL,
  `gst` int(5) DEFAULT NULL,
  `total` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `date`, `name`, `city`, `mobile`, `drsph`, `drcyl`, `draxis`, `drva`, `nrsph`, `nrcyl`, `nraxis`, `nrva`, `dlsph`, `dlcyl`, `dlaxis`, `dlva`, `nlsph`, `nlcyl`, `nlaxis`, `nlva`, `purpose`, `quality`, `remark`, `f1name`, `g1name`, `f1prise`, `g1prise`, `f2name`, `g2name`, `f3name`, `g3name`, `f2prise`, `g2prise`, `f3prise`, `g3prise`, `gst`, `total`) VALUES
(1, '2022-07-24', 'Deep', 'Ahmedabad', '8732957902', '-0.22', '-0.33', '', '', '', '', '', '', '', '', '', '+0.6', '', '', '', '', '', '', '', '', '', 100, 100, '', '', '', '', 0, 0, 0, 0, NULL, 200);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
