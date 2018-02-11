/* From: production-mt-wfe-50-87-use1 : 12371 */

.group:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
* html .group             { zoom: 1; } 
*:first-child+html .group { zoom: 1; } 

.listicle {
	min-width: 570px;
	display: block;
	font-family: 'Arial';
	font-size: 18px;
	color: #000000;
	margin: 0px !important;
}
@media only screen and (min-width : 320px) and (max-width : 480px) {
	.listicle {
		width: 100%;
		min-width: 0;
		margin: 0px !important;
	}
}

.no-number {
	border-top: 1px solid #999999;
	max-width: 900px;
	width: 100%;
	height: 3px;
	margin-bottom: 14px;
}

.slide-number {
    background: url('/images/listicles/number_bg.png') no-repeat top left;
    background-size: auto 100%;
    font-family: Arial, sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 13px;
    position: absolute;
    top: -40px;
    left: 0px;
    width: 553px;
    height: 24px;
    border-top: 1px solid #999999;
}

.slide-number-wide {
	width: 893px !important;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.slide-number {
		width: 100%;
	}
}

.number {
	display: block;
	width: 39px;
	text-align: center;
}

.slide {
	list-style: none inside none !important;
	margin-top: 68px;
	position: relative;
}

.title {
	font-family: Arial, sans-serif;
	font-weight: bold;
	color: #333333;
	font-size: 21px;
	max-width: 900px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.title {
		font-family: Droid Sans;
		font-weight: bold;
		color: #2a2a2a;
		font-size: 15px;
		line-height: 19px;
	}
}


.listicle-content {
	border: 1px solid #DFDFDF;
	padding: 20px;
	margin: 15px;
	background-color: #FFFFFF;
	min-height: 165px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.listicle-content {
		margin: 15px 0px 15px 0px;
	}
}

.credits {
	font-family: Arial, sans-serif;
	color: #999999;
	font-size: 9px;
	margin: 5px 0 5px 0;
	background: #FFFFFF;
	position: absolute;
	bottom: 15px;
	right: 28px;
	background: none;
}

.credits-wide {
	font-family: Arial, sans-serif;
	color: #999999;
	font-size: 9px;
	margin-top: 6px;
	background: #FFFFFF;
	background: none;
	display: block;
	height: 6px;
	line-height: 6px;
}

.listicle .caption {
	font-family: Georgia, sans-serif;
	font-weight: normal;
	color: #666666;
	font-size: 15px;
	line-height: 21px;
}

.caption-wide {
	font-family: Georgia, sans-serif;
	font-weight: normal;
	color: #666666;
	font-size: 15px;
	line-height: 21px;
	max-width: 100%;
	width: 900px !important;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.listicle .caption {
		font-size: 13px;
		line-height: 18px;
	}
}


.video {
	border: 0 !important;
	padding: 3px;
}

.video .slide-number {
	top: -33px !important;
}

.video .slide {
	margin-top:	71px
}

.video iframe {
	width: 540px;
	min-height: 400px;
	max-height: 400px;
}

.video iframe.twitter-tweet {
	min-height: 0px;
	max-height: none;
}

.video-wide iframe {
	width: 900px !important;
	height: 665px !important;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.video iframe {
		width: auto;
		height: auto;
	}
}

.video .listicle-content {
	border: none;
	margin: 5px 0 -20px 0;
	padding: 0 0 20px 0 !important;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.video .listicle-content {
		background-color: transparent !important;
	}
}

.video .credits {
	background-color: #000000;
	bottom: 33px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.video .credits {
		background-color: none;
	}
}

.tweet .listicle-content {
	padding: 15px 15px 5px 15px;
}

.tweet-headshot {
	float: left;
	margin-right: 10px;  
	height: 48px;
	width: 48px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.tweet-headshot {
		float: none;
	}
}

.twitter {
	font-weight: bold;
	font-size: 14px;
	display: block;
	color: #999999;
	font-family: Arial, sans-serif;
}

.twitter-follow {
	float: right;
	height: 22px;
	width: 60px;
}

.twitter-follow a {
	height: 22px !important;
}

.tweet-name {
	font-family: Arial, sans-serif;
	color: #000000;
	font-size: 18px;
	font-weight: bold;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.tweet-name {
		display: block;
	}
}

.tweet-text {
	font-size: 18px;
	line-height: 24px;
	display: block;
	padding-top: 12px;
}

.tweet-created {
	color: #999999;
	font-size: 13px;
	display: block;
	margin-top: 10px;
}

.tweet-hr {
	border-top: 1px solid #999999;
	margin: 5px 0 5px 0;
}

.tweet-user-info {
	height: 22px;
	font-size: 13px;
	float: left;
	color: #999999;
}

.tweet-action-bar {
	height: 22px;
	width: 80px;
	float: right;
	position: relative;
}

.tweet-reply {
	display: block;
	position: absolute;
	height: 15px;
	width: 20px;
	background: url('/images/listicles/tweet_reply.png') no-repeat left top;
}

.tweet-retweet {
	display: block;
	position: absolute;
	right: 29px;
	height: 17px;
	width: 18px;
	background: url('/images/listicles/tweet_retweet.png') no-repeat center top;
}

.tweet-favorite {
	display: block;
	position: absolute;
	bottom: 8px;
	right:	0px;
	height: 16px;
	width: 22px;
	background: url('/images/listicles/tweet_favorite.png') no-repeat right top;
}

.blog .listicle-content {	
	padding: 20px 20px 5px 20px;
}

.blog-headshot {
	float: left;
	margin-right: 10px;  
	width: 62px;
	height: 62px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.blog-headshot {
		float: none;
	}
}

.blog-author {
	line-height: 24px;
	font-size: 18px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.blog-author {
		display: block; 
		font-family: Arial, sans-serif; 
		font-weight: bold;
	}
}

.blog-teaser {
	display: block;
	line-height: 24px;
	font-size: 18px;
	font-weight: bold;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.blog-teaser {
		font-family: Arial, sans-serif; 
		font-weight: normal;
	}
}

.blog-text {
	margin: 5px 0 15px 0;
}

.blog-more-arrow {
	font-size: 18px;
	line-height: 24px;
	margin-bottom: -1px;
}


.blog .button:after {
	content: "";
	display: block;
	width: 29px;
	height: 22px;
	position: absolute;
	right: 5px; 
	top: 6px;
	background: url("http://s.huffpost.com/images/icons/arrows/chrome/arrow-right.png") no-repeat;
}   

.blog .button {
	float: right;
	margin-bottom: 10px;
	position: relative;
	padding-right: 40px;
}

.comment .listicle-content header {
	padding-left: 15px;
	margin-bottom: 15px;
}

.comment .listicle-content {
	padding: 0px;
}

.comment-text {
	font-size: 18px;
	margin: 15px;
	line-height: 24px;
	border: 1px solid #000000;
	padding: 10px;
	-moz-border-radius: 8px;
	-webkit-border-radius: 8px;
	border-radius: 8px;
	position: relative;
}

.comment-text:after {
	content: "";
	display: block;
	width: 12px;
	height: 20px;
	position: absolute;
	left: 35px;
	bottom: -12px;
	background: url('/images/listicles/comment_arrow.png') no-repeat;
}

.comment-headshot {
	height: 77px;
	width: 77px;
	float: left;
	margin-right: 10px;
	border: 1px solid #000000;
	-moz-border-radius: 8px;
	-webkit-border-radius: 8px;
	border-radius: 8px;
}

.comment-username {
	padding-top: 12px;
	display: block;
}

.comment-source {
	background: none repeat scroll 0 0 #333333;
	border-radius: 4px 4px 4px 4px;
	display: inline-block;
	margin: 9px 0 0;
	padding: 5px 12px;
	font-family: Arial, sans-serif;
	font-size: 12px;
}

.comment-source a {
	color: #009BD5 !important;
	text-decoration: none !important;
}

.text .listicle-content {
	padding: 20px !important;
}

.text-image {
	width: 160px;
	height: 160px;
	float: left;
	border: 1px solid #000000;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	margin-right: 10px;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.text-image {
		width: 100%;
		height: auto;
	}
}

.text-title {
	font-family: Arial, sans-serif;
	font-size: 22px;
	padding: 0 0 10px;
}

.text-caption {
	font-family: Arial, sans-serif;
	font-size: 14px;
	line-height: 18px;
	text-align: left;
}

.quote .listicle-content {
	padding: 20px;
	color: #FFFFFF;
	background-color: #000000;
}

.quote .credits {
	background-color: #000000;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.quote .credits {
		background-color: none;
	}
}

.quote-text {
	font-family: Georgia,Times,serif;
	font-size: 17px;
	line-height: 26px;
	padding: 20px;
}

.quote-quote {
	float: left;
	border: medium none;
}

.quote-source {
	display: block;
	padding-left: 20px;
}

.image {
	border: 0 !important;
}

.image .slide-number {
	top: -33px !important;
}

.image .slide {
	margin-top:	71px
}

.image .listicle-content {
	border: none;
	padding: 0 0 5px 0 !important;
	margin: 5px 0 7px 0 !important;
	position: relative;
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.image .listicle-content {
		margin: 5px 0px 7px 0 !important;
	}
}

.image-image {
	margin: 0 0 -6px 0 !important;
	max-width: 100%;
}

.image-image-wide {
	vertical-align: middle;
	max-width: 100%;
	width: 900px !important;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
	.image-image {
		width: 100%;
		height: auto !important;
	}
}

.image .credits {
	right: auto;
	bottom: -23px;
	left: 0px;
}

.image .caption {
	margin-top: 15px;
}


/* From: production-mt-wfe-50-87-use1 : 12371 *//* b33309d61458b4ab524931690243196b3a1fd094 */