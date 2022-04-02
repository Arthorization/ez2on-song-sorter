﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa
// 2014/6/29 Modified by nkeronkow
// 2018/11/26 Added to relick's github, changes tracked there
// 2021/03/26 Adapted to DJMAX Respect songs by shockdude
// github.com/shockdude/djmax-song-sorter
// 2022/04/02 Adapted to EZ2ON Reboot R songs by Arthorization
// 2022/04/02 Assets Extracted by Melone

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = '';
str_YouPath = 'https://www.youtube.com/embed/';
str_YouLink = 'https://www.youtube.com/watch?v=';

// Up to which position should images be shown for?
var int_ResultRank = 3;

// Maximum number of result rows before being broken off into another table.
var maxRows = 42;

// * Game and album titles
var ary_TitleData = [
	  "1st Trax"
	, "Special Edition"
	, "2nd Trax"
	, "3rd Trax"
	, "4th Trax"
	, "Platinum"
	, "6th Trax"
	, "7th Trax"
	, "EZ2ON 2008"
	, "EZ2ON 2013"
	, "EZ2ON 2021"
	, "Time Traveler"
	, "Codename Violet"
	, "Priestige Pass"
	, "O2JAM"
	];


// Number of columns in the selection list.
var int_Colspan = 3;

// * Music information
// [Index: Meaning]
// 0: unused
// 1: Track name
const TRACK_NAME = 1;
// 2: Array that maps to ary_TitleData, 0 = track not in title, 1 = track in title.
const TRACK_TITLES = 2;
// 3: Image filename
const TRACK_IMAGE = 3;
// 4: Youtube video ID
const TRACK_YOUTUBE_ID = 4;
// 5: Title (game/album) name
const TRACK_TITLE_NAME = 5;
// 6: Title (game/album) abbreviation
const TRACK_TITLE_ABBREV = 6;
// 7: Track Artist
const TRACK_ARTIST = 7;
// 8: Track type - regular song, V exclusive, link disc
const TRACK_TYPE = 8;
	const REGULAR_SONG = 1;
	const REMIXED_SONG = 2;
	const EXTERIOR_GAME = 3;

// 9: Extended Mix type - short, extended
const EXTENDED_TYPE = 9;
	const SHORT_MIX = 1;
	const EXTENDED_MIX = 2;

var ary_SongData = [
	//1st Trax
	[1, "Baby Dance",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Catch the Flow",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Confete",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Dirty D",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Do you Remember?",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Envy Mask",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune/Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Freedom",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Funny Funky",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Get the Beat",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "DJ. Hong", REGULAR_SONG, SHORT_MIX],
	[1, "I Do Love You",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu/CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "I've Fallen",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Look Out",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 1 (HD Mix)",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Danmal_G", REGULAR_SONG, SHORT_MIX],
	[1, "Quake in Kyoto",								[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "Southwest Cadillac",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Stay",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Yes Yes",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Creatune", REGULAR_SONG, SHORT_MIX],
	[1, "You live the life you live",									[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Ztar warZ",							[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/huKR2f0-wEQ/sddefault.jpg", "", "1st Trax", "1st", "DJ. Melong", REGULAR_SONG, SHORT_MIX],
	
	
	// Special Edition
	[1, "Catch the Flow (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Combonation",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Kim Jin Kwon", REGULAR_SONG, SHORT_MIX],
	[1, "Confete (Evening Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Dieoxin",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "DJ. Yonda", REGULAR_SONG, SHORT_MIX],
	[1, "Do You Remember? (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Remix Station", REMIXED_SONG, SHORT_MIX],
	[1, "Envy Mask (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "For 3 Weeks",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Lee So-eun", REGULAR_SONG, SHORT_MIX],
	[1, "The Future",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Remix Station", REGULAR_SONG, SHORT_MIX],
	[1, "Let it Go (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Ruby Tuesday", REMIXED_SONG, SHORT_MIX],
	[1, "Love & Ectasy",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Baby Vox", REGULAR_SONG, SHORT_MIX],
	[1, "My Honey",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Lee Seung-Hwan", REGULAR_SONG, SHORT_MIX],
	[1, "Mystic Dream 9903 (Horror Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Danmal_G", REMIXED_SONG, SHORT_MIX],
	[1, "Quake in Kyoto (Mega Mix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	[1, "R.D.M.",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Red Hot",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "DR. YONDA", REGULAR_SONG, SHORT_MIX],
	[1, "The Rhythm (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Creatune", REMIXED_SONG, SHORT_MIX],
	[1, "Special K",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Stay (Radio Edit)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Jeon Jun-Kyu", REMIXED_SONG, SHORT_MIX],
	[1, "You live the life you love (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Ztar warZ (Remix)",								[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EIZ_NW0Mhpo/maxresdefault.jpg", "6-N2540l3ZI", "Special Edition", "S/E", "xxdbxx", REMIXED_SONG, SHORT_MIX],
	
	// 2nd Trax
	[1, "Another Time",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Appeal",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee, Jennifer", REGULAR_SONG, SHORT_MIX],
	[1, "Back for More",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Back to Bed",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Be my Baby",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Damnation",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Departure",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Bae Hee-Kyoung", REGULAR_SONG, SHORT_MIX],
	[1, "Exist",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Funky 5",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Kim Seung-Hyun", REGULAR_SONG, SHORT_MIX],
	[1, "Get it Up",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Lee Jong-Pil, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Hyponotize",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "It's my secret",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "I've Got this Feeling",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Jam",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Minus One (Space Mix)",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "CROOVE", REMIXED_SONG, SHORT_MIX],
	[1, "Moving On",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Red Ocean",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Say That U",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Seize The Day",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Sentimental No No",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Showdown",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "We Luv Music",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Jeon Jun-Kyu", REGULAR_SONG, SHORT_MIX],
	[1, "Where's My Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "With U Girl",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Yang Joon-young", REGULAR_SONG, SHORT_MIX],
	[1, "You are the one for me",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Jeon Jun-Kyu, Mario Bolden", REGULAR_SONG, SHORT_MIX],
	[1, "Changa",				[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/bVk29Uksj5Q/maxresdefault.jpg", "zxe6gk_HXO8", "2nd Trax", "2nd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	
	// 3rd Trax
	[1, "2.14",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "20000000000",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "2nd Jewel",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "The 3rd Place",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Anemia",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Black Market",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Cosmic Bird",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Give it 2 me",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "FE", REGULAR_SONG, SHORT_MIX],
	[1, "In a nutshell",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Ruby Tuesday", REGULAR_SONG, SHORT_MIX],
	[1, "Lie Lie",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Minus 2",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "M-Police",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Night Watcher",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "R.F.C.",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sand Storm",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Shake",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Smash",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Sparrow",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx, CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Substance",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Y-Gate",							[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/k2ceAZBZW1U/hqdefault.jpg", "1CGzQDyyZOk", "3rd Trax", "3rd", "Lee Jong-Phil", REGULAR_SONG, SHORT_MIX],
		
	
	// 4th Trax 
	[1, "Aquaris",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "B.O.W.",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Blue",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Calling me Now",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Climax",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Complex",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Delight",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Eye of the Beholder",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Feel so Sad",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Fire Storm",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Futurist",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Go!",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "J.M.J.",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Judgement",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Lovely Day",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	[1, "Mad Robot",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Metagalactic",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Ready to Yah",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "xxdbxx", REGULAR_SONG, SHORT_MIX],
	[1, "Shout",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "CROOVE", REGULAR_SONG, SHORT_MIX],
	[1, "Tokyo 9 PM",					[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/EHY8nLuSrsg/maxresdefault.jpg", "ahdGgpeQVfg", "4th Trax", "4th", "Andy Lee", REGULAR_SONG, SHORT_MIX],
	
	// Platinum
	[1, "Any way you want it",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "Aquaris (Physical Inspiration Hyper Blue Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "Cellauve",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "I've fallen (Hot Dog Boogie Groove Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "I've got this feeling (DJ. FE Restless Acid Soul Mix)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "J.M.J. (DFC Space Gear Re-Formation)",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REMIXED_SONG, SHORT_MIX],
	[1, "Memories",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Night Madness",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Joyrock", REGULAR_SONG, SHORT_MIX],
	[1, "Panic Strike",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Q Factor",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Riff Guy",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Eridanus", REGULAR_SONG, SHORT_MIX],
	[1, "Spotlight",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "Unknown H2",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "BIGDUCK", REGULAR_SONG, SHORT_MIX],
	[1, "Weird Wave",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Joyrock", REMIXED_SONG, SHORT_MIX],
	[1, "Zeroize",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	[1, "느낌",							[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/7Jksr5Tvv_Y/maxresdefault.jpg", "Y8GOUA747Ig", "Platinum", "PT", "Eridanus, Kang Eun Soo", REGULAR_SONG, SHORT_MIX],
	
	// 6th Trax
	[1, "Baby Dance (Club Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Bacardi on the Beach",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Be Mine",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "TY:F", REGULAR_SONG, SHORT_MIX],
	[1, "Be my Baby (Funky Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Be-at Feedback",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "B-E", REGULAR_SONG, SHORT_MIX],
	[1, "The Boy (EK2-Beat Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Curse It!!",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	[1, "Dance Machine",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Dance With Me",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Frantic",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "I've got this feeling (Extended Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REGULAR_SONG, EXTENDED_MIX],
	[1, "Jam (A.C Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Lie Lie (Ceave Beat Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REMIXED_SONG, SHORT_MIX],
	[1, "Move Your Body",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sean Kim", REGULAR_SONG, SHORT_MIX],
	[1, "One Two Three Four",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Refresh",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Stay with Me",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	[1, "Up and Down",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Soulzean", REGULAR_SONG, SHORT_MIX],
	[1, "With U Girl(Beach Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Itdie", REGULAR_SONG, SHORT_MIX],
	[1, "You were the one",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Kim Min", REGULAR_SONG, SHORT_MIX],
	[1, "Your Style",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "DaKick", REGULAR_SONG, SHORT_MIX],
	[1, "느낌 (Sonic A.P.E Ver.)",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Sonic A.P.E", REGULAR_SONG, SHORT_MIX],
	[1, "Changa II",				[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/ZSGRwp-gov4/maxresdefault.jpg", "4psK3x42jrg", "6th Trax", "6th", "Han Tae-Soo", REGULAR_SONG, SHORT_MIX],
	
	// 7th Trax
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
	[1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],
        [1, "An Old Story",				[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://i.ytimg.com/vi/kWHKS-ya9nk/maxresdefault.jpg", "G3aRgjqL_I8", "7th Trax", "7th", "Memme", REGULAR_SONG, SHORT_MIX],

	
	
	
	
	
	// EZ2ON 2008
	[1, "ALiCE",					[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "s8W2A7GVQ54", "Respect", "DMR", "seibin", REGULAR_SONG, SHORT_MIX],
			
	// EZ2ON 2013
	[1, "Cosmic Elevator",				[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1238760/capsule_616x353.jpg", "Kd72hDtQ77w", "Emotional Sense", "ES", "Forte Escape", REGULAR_SONG, SHORT_MIX],
	
	// EZ2ON 2021
	[1, "Attack",								[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1080550/capsule_616x353.jpg", "0Lt2NERKgG4", "V Extension", "VE", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	
	// Time Traveler
	[1, "Only On", [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], "https://i.scdn.co/image/ab67616d00001e02fdf812e9da9c76233ecddc3c", "BeNk6oN65dY", "Event", "DOK2", "Dok2 / HELIXX", REGULAR_SONG, SHORT_MIX],
	
	// Codename Violet
	[1, "Break a Spell",					[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "_kK3J0052pU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Holy Orders (Be Just Or Be Dead)",	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "SMIXv7WuCZ4", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	[1, "Marionette",						[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1281340/capsule_616x353.jpg", "4RYTgFia0RU", "Guilty Gear", "GG", "Daisuke Ishiwatari / Norichika Sato", REGULAR_SONG, SHORT_MIX],
	
	// Prestige Pass
	[1, "Barbarous Funera",			[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "DA9OlHVHRK0", "Girls' Frontline", "GF", "Rikako Watanabe", REGULAR_SONG, SHORT_MIX],
	[1, "Frontline",				[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "RH_8HOfRmp4", "Girls' Frontline", "GF", "B@kamin / M2U", REGULAR_SONG, SHORT_MIX],
	[1, "What am I fighting for?",	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472191/capsule_616x353.jpg", "IOGxyC_Dar0", "Girls' Frontline", "GF", "Haloweak", REGULAR_SONG, SHORT_MIX],
	
	// Groove Coaster
	[1, "Black MInD",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "_7iEZimewKE", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "Good Night, Bad Luck.",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "mZXNt08GfK4", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Got more raves?",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "JNnQOs5zkk0", "Groove Coaster", "GC", "E.G.G.", REGULAR_SONG, SHORT_MIX],
	[1, "Groove Prayer",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "LGH7kNXqXGc", "Groove Coaster", "GC", "COSIO", REGULAR_SONG, SHORT_MIX],
	[1, "HB-axeleration",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "4EeFWe2lLek", "Groove Coaster", "GC", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Marry me, Nightmare",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wbgjJ84SZmw", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "ouroboros -twin stroke of the end-",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "BozGJJJUrUU", "Groove Coaster", "GC", "cranky / MASAKI", REGULAR_SONG, SHORT_MIX],
	[1, "OVER THE NIGHT",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "TanjhRfa6eo", "Groove Coaster", "GC", "REDALiCE", REGULAR_SONG, SHORT_MIX],
	[1, "Satisfiction",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "wUxyWSpopXo", "Groove Coaster", "GC", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Warrior",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1271671/capsule_616x353.jpg", "p55PziQGLDA", "Groove Coaster", "GC", "cranky", REGULAR_SONG, SHORT_MIX],

	// Deemo
	[1, "Angelic Sphere",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "BDIWrU3TbYE", "Deemo", "DM", "3R2", REGULAR_SONG, SHORT_MIX],
	[1, "ANiMA",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "tJFjBCe20H4", "Deemo", "DM", "xi", REGULAR_SONG, SHORT_MIX],
	[1, "Dream",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "FXkrjfZQUuQ", "Deemo", "DM", "Rabpit", REGULAR_SONG, SHORT_MIX],
	[1, "Legacy",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "H3TpRoDC9SU", "Deemo", "DM", "switchworks", REGULAR_SONG, SHORT_MIX],
	[1, "Magnolia",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "jDEQ7UTIKsA", "Deemo", "DM", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Nine point eight",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "YlOWFOSsaCI", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "Sairai",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "trzogtjYcTc", "Deemo", "DM", "Shinichi Kobayashi", REGULAR_SONG, SHORT_MIX],
	[1, "Undo",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Rf_NobfcyvY", "Deemo", "DM", "Yuk-cheung Chun", REGULAR_SONG, SHORT_MIX],
	[1, "Utopiosphere",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "KazdHqs1fvU", "Deemo", "DM", "Mili", REGULAR_SONG, SHORT_MIX],
	[1, "YUBIKIRI-GENMAN",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356220/capsule_616x353.jpg", "Ju-JhfKO1o0", "Deemo", "DE", "Mili", REGULAR_SONG, SHORT_MIX],

	// Cytus
	[1, "AXION",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "vF-y-Ap1NiI", "Cytus", "CY", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "CODE NAME: ZERO",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "WIiG8bHoAbM", "Cytus", "CY", "NeLIME", REGULAR_SONG, SHORT_MIX],
	[1, "conflict",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "fEcI8wW_omw", "Cytus", "CY", "Cranky + siromaru", REGULAR_SONG, SHORT_MIX],
	[1, "EMber",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "OjTzVsy5xtw", "Cytus", "CY", "SIHanatsuka", REGULAR_SONG, SHORT_MIX],
	[1, "Entrance",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "C3Hum0ej_rc", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "L",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "1bt6S4DbyJI", "Cytus", "CY", "Ice", REGULAR_SONG, SHORT_MIX],
	[1, "Les Parfums de L'Amour",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "PFukE8XmhKE", "Cytus", "CY", "naotyu-", REGULAR_SONG, SHORT_MIX],
	[1, "Mammal",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "sZtBIP2SgL4", "Cytus", "CY", "Teikyou", REGULAR_SONG, SHORT_MIX],
	[1, "Myosotis",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "netCEsALPhw", "Cytus", "CY", "M2U", REGULAR_SONG, SHORT_MIX],
	[1, "Old Gold",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "uevVv8zo0oU", "Cytus", "CY", "Cranky", REGULAR_SONG, SHORT_MIX],
	[1, "Shoot Out",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "o2htkoZWW8A", "Cytus", "CY", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Ververg",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1356221/capsule_616x353.jpg", "329pzl2R38U", "Cytus", "CY", "onoken", REGULAR_SONG, SHORT_MIX],

	// // Chunithm
	[1, "Cyberozar",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "cGxEd3rgvqA", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "Garakuta Doll Play",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "iSPJM2xiw9E", "Chunithm", "CHU", "t+pazolite", REGULAR_SONG, SHORT_MIX],
	[1, "Ikazuchi",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "0Z77JgHr7Pk", "Chunithm", "CHU", "Takenobu Mitsuyoshi", REGULAR_SONG, SHORT_MIX],
	[1, "Ray Tuning",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "hBHEDoRSLQg", "Chunithm", "CHU", "sakuzyo", REGULAR_SONG, SHORT_MIX],
	[1, "The wheel to the right",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "o-fzrbk--o4", "Chunithm", "CHU", "Sampling Masters MEGA", REGULAR_SONG, SHORT_MIX],
	[1, "Trrricksters!!",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1472190/capsule_616x353.jpg", "RrIyhEq7TX0", "Chunithm", "CHU", "s-don vs. Hino Isuka", REGULAR_SONG, SHORT_MIX],
	
	// Portable 3
	[1, "glory day (JHS Remix)",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "Fdu3kT2aAi4", "Respect", "DMR", "Bexter & Mycin.T / JHS", REGULAR_SONG, SHORT_MIX],
	[1, "glory day (Mintorment Remix)",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/960170/capsule_616x353.jpg", "FtEmR9zdTGY", "Respect", "DMR", "Bexter & Mycin.T / Mintorment", REGULAR_SONG, SHORT_MIX],
	[1, "Become Myself",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "GKg07PKWJow", "Portable 3", "DMP3", "PIA", REGULAR_SONG, SHORT_MIX],
	[1, "Break!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "NppRvfIWVX4", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Desperado ~Nu Skool Mix~",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "cY3cKPKl5jw", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Enemy Storm ~Dark Jungle Mix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "hxnVTJHimgU", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Everything",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "z9HpAgYDHV4", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "Gone Astray",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "nCumwaA9UM4", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "Hanz Up!",							[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "6N4qEY9V5Hw", "Portable 3", "DMP3", "Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "IF",								[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "LsMms1I5-VI", "Portable 3", "DMP3", "Vanilla Unity", REGULAR_SONG, SHORT_MIX],
	[1, "Leave Me Alone",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "KVry8-jlr5s", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Luv Flow ~Funky House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "4-sYjg5ciS4", "Portable 3", "DMP3", "3rd Coast / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Luv is True",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "-b-yKbvdxU0", "Portable 3", "DMP3", "3rd Coast", REGULAR_SONG, SHORT_MIX],
	[1, "MASAI ~Electro House Mix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "yY_Lpk8etvo", "Portable 3", "DMP3", "Croove / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Mellow D Fantasy",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "0qw3T3l78Wk", "Portable 3", "DMP3", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "NB Ranger : NonStop Remix",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "qmIUEv4zoxY", "Portable 3", "DMP3", "M2U, NieN, Sugar Donut / Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Out Law - Reborn",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "AT0rNlMjTWQ", "Portable 3", "DMP3", "Croove / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "Raise Me Up",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "SAPsOzFA_hQ", "Portable 3", "DMP3", "Planetboom", REGULAR_SONG, SHORT_MIX],
	[1, "Season (Warm Mix)",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "lYwMbNDlVeY", "Portable 3", "DMP3", "makou", REGULAR_SONG, SHORT_MIX],
	[1, "SuperSonic ~Mr.Funky Remix~",		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "IGHGxVsbTok", "Portable 3", "DMP3", "Planetboom / Mr.Funky", REGULAR_SONG, SHORT_MIX],
	[1, "The Rain Maker",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "_p0JuJ-FCfM", "Portable 3", "DMP3", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "Waiting for the Sun",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "WBWZDbuCYcs", "Portable 3", "DMP3", "MindCube", REGULAR_SONG, SHORT_MIX],
	[1, "Your Smile",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "49bqK4ogNMQ", "Portable 3", "DMP3", "Cistrans (Roseline)", REGULAR_SONG, SHORT_MIX],
	[1, "ZET ~Mr.Funky Remix~",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1568680/capsule_616x353.jpg", "8dcys2h6eSM", "Portable 3", "DMP3", "BEXTER / Mr.Funky", REGULAR_SONG, SHORT_MIX],

	// ESTIMATE
	[1, "Helix",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "kHgRkFN6M18", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "In My Heart ~ESTi Remix~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "rW5Z3uPqGkk", "ESTIMATE", "ESTI", "Tsukasa / ESTi", REGULAR_SONG, SHORT_MIX],
	[1, "Obelisque",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "x30u10gtGco", "ESTIMATE", "ESTI", "ESTi & M2U", REGULAR_SONG, SHORT_MIX],
	[1, "pit-a-pet",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "XH6_O9ljmTk", "ESTIMATE", "ESTI", "TAK / seibin", REGULAR_SONG, SHORT_MIX],
	[1, "U-NIVUS",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], "https://cdn.cloudflare.steamstatic.com/steam/apps/1664550/capsule_616x353.jpg", "eoUXRvI6wLE", "ESTIMATE", "ESTI", "ESTi", REGULAR_SONG, SHORT_MIX],
	
	
	// V Extension II
	[1, "Arcade Love (feat. KNVWN)",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "9M11lQpl7fk", "V Extension II", "VE2", "Newton / KNVWN", REGULAR_SONG, SHORT_MIX],
	[1, "Chrysanthemum",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "EM_PmOfPeRM", "V Extension II", "VE2", "Kanallia", REGULAR_SONG, SHORT_MIX],
	[1, "Cocked Pistol",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "wwTe0a4kqg0", "V Extension II", "VE2", "Pierre Blanche", REGULAR_SONG, SHORT_MIX],
	[1, "Daydream",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "sayzAjrOvEs", "V Extension II", "VE2", "Mycin.T / SiNA", REGULAR_SONG, SHORT_MIX],
	[1, "FALLING IN LOVE",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "I3M_CNtzATY", "V Extension II", "VE2", "NieN", REGULAR_SONG, SHORT_MIX],
	[1, "Flowering ~Original Ver.~",	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "3vhA8njtoQg", "V Extension II", "VE2", "ampstyle", V_LINK, EXTENDED_MIX],
	[1, "Forgotten",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "uHIPr8nVg18", "V Extension II", "VE2", "Paul Bazooka", REGULAR_SONG, SHORT_MIX],
	[1, "I've got a feeling",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "a_CR9J6H2rI", "V Extension II", "VE2", "LeeZu", REGULAR_SONG, SHORT_MIX],
	[1, "Imaginary dance",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "VBFHPRE7ixc", "V Extension II", "VE2", "CHUCK", REGULAR_SONG, SHORT_MIX],
	[1, "Melonaid",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "b7kwTlwD1m0", "V Extension II", "VE2", "KATOMORI", REGULAR_SONG, SHORT_MIX],
	[1, "Memories of dreams",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "ALH4U12WuPQ", "V Extension II", "VE2", "Pory", REGULAR_SONG, SHORT_MIX],
	[1, "Never let you go",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "KBk2bZ87kPY", "V Extension II", "VE2", "Blosso", REGULAR_SONG, SHORT_MIX],
	[1, "Odysseus",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "7bJFJzOnN3c", "V Extension II", "VE2", "XeoN", REGULAR_SONG, SHORT_MIX],
	[1, "Over Me",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "gg6WiPwd25M", "V Extension II", "VE2", "SSOMbo", REGULAR_SONG, SHORT_MIX],
	[1, "Red Eyes",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "k9YXXZjpYCA", "V Extension II", "VE2", "Cosmograph", REGULAR_SONG, SHORT_MIX],
	[1, "Sweet On You",					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "2DIz_n_y9e4", "V Extension II", "VE2", "jam-jam", REGULAR_SONG, SHORT_MIX],
	[1, "Underwater Castle",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "XO5s7zDpenQ", "V Extension II", "VE2", "Nauts", REGULAR_SONG, SHORT_MIX],
	[1, "Vertical Floating",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "AQDfyASsHig", "V Extension II", "VE2", "Tsukasa", REGULAR_SONG, SHORT_MIX],
	[1, "Voyage",						[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "JWd-ck93WE0", "V Extension II", "VE2", "SOPHI", REGULAR_SONG, SHORT_MIX],
	[1, "Won't Back Down",				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "rc3p4rVa77M", "V Extension II", "VE2", "Pure 100% / KASA", REGULAR_SONG, SHORT_MIX],
	[1, "Zero to the hunnit",			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], "https://cdn.cloudflare.steamstatic.com/steam/apps/1843020/capsule_616x353.jpg", "e4cULGHvpnc", "V Extension II", "VE2", "SiNA", REGULAR_SONG, SHORT_MIX],
];
