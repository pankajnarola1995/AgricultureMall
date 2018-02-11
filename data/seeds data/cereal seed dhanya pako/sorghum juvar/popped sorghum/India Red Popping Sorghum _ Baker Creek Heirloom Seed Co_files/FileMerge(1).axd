
/* shopping cart */

.shoppingCart .item { 
	display: table;
	padding: 1em 0; 
	width: 100%;
	border-top: 1px solid #ccc; 
	margin:0px;
}
.shoppingCart .item:first-child { border-top:0; }
.shoppingCart .item:last-child { padding-bottom: 0; }

.shoppingCart .item > .content {
	display: table-cell;
	width: 100%;
	vertical-align: top;
}

.shoppingCart .item .contentExtra {
	display: table-cell;
	vertical-align: top;
}

.shoppingCart { margin:0 0 10px; border-top:10px solid #444444;}

.cartList { }
	
.cartList .item:before, .cartList .item:after { content: " "; display: table; }
.cartList .item:after { clear: both; }
.cartList .item { *zoom: 1; }

.cartList .media { display:table-cell; width:90px; min-width:90px; }
.cartList .content { display:table-cell; padding-left:10px; vertical-align:top; font-size:0.813em; border:0px; margin:0px; }
.cartList .content p { margin-bottom:0.725em; }
.cartList .itemInfo > .title { font-size:1.231em; margin:0 0 10px 0;}
.cartList .cartItemDetails { display:table; width:100%; }
.cartList .contentExtra { padding-left:10px; }
.cartList .itemInfo { /*width:36%;*/ padding-right:20px; padding-left:0; }
.cartList .itemRecipient { min-width:50px; vertical-align:top; }
.cartList .itemQty { width:50px; }
.cartList .itemGiftMessage { width:100px; padding-left:20px; text-align:center; font-size:0.923em; }
.cartList .itemTotal { width:125px; vertical-align:top; text-align:right; }
.cartList .itemTotal li { margin-bottom:5px; }
.cartList .itemPrice { margin-bottom:8px; font-size:1.1em; font-weight:bold; }
.cartList .itemTotal .itemPrice {font-size:1.2em;}
.cartList .itemMessage { padding:12px 17px; background-color:#f1f9fa; }
.cartList .cartItemDetails ul {list-style-type:none; margin:0 0 5px 0; padding:0px;}
.cartList a.removeLink { text-decoration:none; }
	
.cartHistory .contentExtra { width:21%; text-align:left; }
.cartHistory .itemPrice { font-weight:normal; font-size:1em; }
.cartHistory .itemStatus { font-weight:bold; }
.cartHistory .itemStatus span { font-weight:normal; }
	
.cartTools { padding:5px; margin:0 0 10px 0; border:1px solid #D2D2D2; background:#eeeeee; position:relative;}
.cartTools .title {  }
.cartTools .content { padding:10px 7px; border-top:1px solid #e3e3e3; }
.cartTools ul { margin:0; padding:0; list-style-type:none; position:relative; }
.cartTools li { margin:0 10px 0 0; display:inline-block; position:relative;}
.cartTools .popup { 
	position:absolute;
	left:-14px;
	right:-14px;
	margin-top:-1px;
	padding:20px 15px;
	margin-bottom:2px;
	border:1px solid #3f3f3f;
	background:#fff;
	z-index:2;
	visibility:hidden;
	width:210px;
	-webkit-box-shadow:1px 2px 5px 1px rgba(0, 0, 0, 0.25);
			box-shadow:1px 2px 5px 1px rgba(0, 0, 0, 0.25);    
}
.cartTools .icon-close { position:absolute; right:3px; top:3px; cursor:pointer; }
.cartTools .popup li { position:static; display:block; }

.cartTools .showTool { display:block; }
	
.cartTools a,
.cartTools a:link,
.cartTools a:visited { font-size:0.813em; font-weight:bold; text-decoration:none; cursor:pointer;}
	
.cartTools a:hover,
.cartTools a:active {text-decoration:underline;}


.backTo { margin:0 0 10px; float:right; font-size:.875em; position:relative; z-index: 10;}
.backTo a.bringBackTo {padding:0 0 0 10px;}

.cartTools .note {font-size:.75em; padding:10px 0 0 0;}

.cartTools .sf-menu ul {float:none; background-color:#fff;}
	
.cartwrpr {margin:0 auto; padding:2px 0 13px 0;}

.shiphdng {margin:0 0 10px 0; padding:5px; font-weight:bold; background-color:#efefef; border:1px solid #D2D2D2;}
.shipAddr {border-width:1px 1px 0 1px; border-style:solid; border-color:#999999;}
.shipAddr table td {padding: 5px 10px 5px 3px;}

.cart {width:100%; margin:0 auto 5px auto; border-collapse:collapse;}

/* ******** */
/* Cart Fix */
/* ******** */
.cart table tr td {border-bottom:none;}
.cart .edit table tr td{font-size:.9em;}
.cart .edit div a {font-size:.9em;}
/* ************ */
/* End Cart Fix */
/* ************ */

.cart table.innerTable td {border:0; vertical-align:top; padding:0;}
.cart table.innerTable td.pImg {padding-right:10px;}
.cart th {padding:5px; color:#fff; background-color:#3F3F3F;}
.cart td {background-color:#fff; vertical-align:top; padding:10px 0 10px 5px; border-bottom:1px solid #d2d2d2;}
.cart tr.noborder td {border-bottom-width:0;}
.cart td.edit div {padding:5px 0 0 0; font-size:.9em;}
.cart td.qty input.text, table.cart td.wrapping input.text {width:20px; padding-left:3px; padding-right:3px; text-align:center;}
.cart td .name {font-weight:bold; margin:0; color:#000;}
.cart td ul {margin:0; padding:0; list-style-type:none;}
.cart td ul.selections li {margin-bottom:5px; padding-left:10px; background:url(/cms/images/arrowRight.gif) no-repeat 0 4px; font-weight:bold;font-size:13px;}
.cart .prodInfo { font-size:.9em; }
	
.cartInfo {height:1%; margin:0 auto;}
.cartInfo .promoCode { margin-bottom:10px; padding:15px 10px 10px; border:1px solid #D2D2D2; }
.cartInfo .promoCode input.select {width:117px; background-color:#f7f7f7;}
	
.updateCart { margin-bottom:10px; }
	
.cartSupport {margin:0 0 15px 0; background:#eeeeee; border:1px solid #d2d2d2; padding:4px;}
.cartSupport .clear {width:0px;}

.cartSupport .supportHeader {font-size:1em; font-weight:bold; margin:0px; padding:10px; background:#ffffff; border:1px solid #d2d2d2; margin:0 0 2px 0; cursor:pointer;}
.cartSupport .ui-state-active {background:#444444; color:#ffffff;}
.cartSupport .supportContent {padding:10px; font-size:.875em; color:#444444;}

.checkoutBlock {}

.multipleShips {padding:0 0 10px 0; margin:0 0 20px 0; border-bottom: 1px solid #D2D2D2;}

.chkoutBoxes {
	display:table;
	width:100%;
	margin:0 0 10px;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-size:0.875em; }
.chkoutBoxes .chkoutRow {display:table-row;}
.chkoutBoxes .chkoutRow.hide {display:none;}
.chkoutBoxes .chkoutRow .title {display:table-cell; padding:10px 10px; text-align:right; font-weight:normal; font-size:1em; text-transform:none; vertical-align:middle; background:#444444; color:#ffffff; border-bottom:1px solid #ffffff; }
.chkoutBoxes .chkoutRow .price {display:table-cell; width:35%; padding:10px 10px; text-align:right; vertical-align:middle;}
.chkoutBoxes .chkoutTotalRow .price {font-weight:bold;}

.chkoutBoxes a.enterZip, .chkoutBoxes a.enterZip:link, .chkoutBoxes a.enterZip:visited {position:absolute; top:9px; left:5px; font-size:0.75em; color:#000000; text-decoration:underline; z-index:10;}


.checkoutBlock .promoCode {margin:0 0 10px 0; border:1px solid #D2D2D2; padding:5px;}
.checkoutBlock .promoCode label {font-size:.9em;}

.paypal {text-align:center;}
.paypal p {text-align:left; font-size:.75em; color:#444444;}

.costSummary { 
	display:table;
	width:100%;
	margin:0 0 10px;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-size:0.875em;
}
.costSummary .costRow { display:table-row; }
.costSummary .title { display:table-cell; padding:10px 10px; text-align:right; font-weight:normal; font-size:1em; text-transform:none; vertical-align:middle; background:#444444; color:#ffffff; border-bottom:1px solid #ffffff;  }
.costSummary .title a { display:inline-block; font-size:0.8em; color:#ffffff;}
.costSummary .price { display:table-cell; width:35%; padding:10px 10px; text-align:right; vertical-align:middle; }
.costSummary .totalPrice { font-size:1.2em; font-weight:bold; }
	
.recipientSummary { margin-bottom:20px; border-bottom:2px solid #000; }
.recipientSummary .costSummary { border:0; font-size:0.9em;}
.recipientSummary .costSummary .price { padding-right:0; }
	
.shipData {
	position:absolute;
	display:none;
	left:-5px;
	right:-5px;
	margin-top:-1px;
	padding:20px 15px;
	margin-bottom:2px;
	border:1px solid #3f3f3f;
	background:#fff;
	z-index:2;
	-webkit-box-shadow:1px 2px 5px 1px rgba(0, 0, 0, 0.25);
			box-shadow:1px 2px 5px 1px rgba(0, 0, 0, 0.25);
}
.shipData .icon-cancel-circle { position:absolute; top:-4px; right:-4px; font-size:1.5em; cursor:pointer; }
.shipData .shipRow {height:1%; padding:10px 0 0 0;}
.shipData .shipTitle {float:left; display:block; width:95px; margin-top:3px;}
.shipData .icon-close { position:absolute; right:3px; top:3px; cursor:pointer; }
		
.promoOffer {border:1px dashed #ff0000; padding:10px; margin-bottom:10px; color:#FF0000; font-size:1.2em; font-weight:bold; text-align:center;}
#promoOfferPopup {position:realtive; display:none; padding:10px; border:2px solid #1C4E87;}

#promoOfferPopup .pagination .paging {padding-right:0; border-right:0;}

#promoOfferPopup .collectionItems {margin-bottom:10px;}
#promoOfferPopup .collectionItems .itemWrapper a.itemLink,
#promoOfferPopup .collectionItems .itemWrapper a.itemLink:link,
#promoOfferPopup .collectionItems .itemWrapper a.itemLink:visited {width:101px;}
#promoOfferPopup .closeBtn {
	position: absolute;
	right: 0;
	top: -15px;
	width: 53px;
	height: 15px;
	z-index: 1000;
	background: url(/cms/images/layout/ui/icon_close.gif) 0 0 no-repeat;
	overflow:hidden;
	text-indent:-9999em;
	cursor:pointer;
}
	
.checkoutSummary { position:relative; margin:0 0 10px; padding:1px; border:1px solid #D2D2D2; }
.checkoutSummary > .title { margin:0; padding:5px 7px; font-weight:bold; color:#fff; background:#3f3f3f; font-size:1em; }
.checkoutSummary > .content { padding:0 20px 10px; }
.checkoutSummary .totalPrice { margin:0 0 10px; font-weight:bold; text-align:center; }
.checkoutSummary .totalPrice > .price { display:block; font-size:1.5em; }
	
.checkoutSummary .costSummary { border:0; }
.checkoutSummary .costSummary .price { border-bottom:1px dashed #ccc; }
.checkoutSummary .costSummary .title { text-align:left; border-bottom:1px dashed #ccc; }



.slideCart {
	padding:0;
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
			box-sizing: border-box;
}

.slideCartRail { position:relative; }


/* one page checkout */

.memberBar {min-height:1px; margin:0 0 7px 0; padding:5px; background:#E1E1E1; border:1px solid #ccc; font-size:.9em;}
.memberBar label {margin-right:2px; font-weight:bold; vertical-align:baseline;}
.memberBar a {text-decoration:none;}

.useSavedAddress {padding:4px; font-size:.9em; color:#4e4e4e; background:#e2e2e2;}
.useSavedAddress label { margin:0 !important; cursor:pointer; }
.useSavedAddress input {margin-right:5px; vertical-align:middle;}

.onePageCheckout { position:relative; }
.onePageCheckout .checkoutSteps { margin-right:300px; }


dl.checkoutProcess {min-height:1px; margin:0 0 9px 0;}
dl.checkoutProcess dt.stepTitle {border:1px solid #3f3f3f;}
dl.checkoutProcess dt.stepTitle span.stepTitleInner {position:relative; display:block; padding:7px 65px 7px 10px; color:#fff; font-size:0.875em; background-color:#3f3f3f;}
dl.checkoutProcess dt.inactive {margin-bottom:1px; border:1px solid #d2d2d2;}
dl.checkoutProcess dt.inactive span.stepTitleInner {color:#707070; background-color:#e3e3e3;}
dl.checkoutProcess dt.previous {margin-bottom:1px; border:1px solid #d2d2d2;}
dl.checkoutProcess dt.previous span.stepTitleInner {color:#707070; background-color:#e3e3e3;}
dl.checkoutProcess dd.stepContent {margin:0 0 1px 0; padding:20px 10px; border:1px solid #d2d2d2 ; border-top:0;}
dl.checkoutProcess .stepGroupTitle { margin-bottom:10px; padding:5px 10px; text-align:left; background-color:#E1E1E1; border:1px solid #ccc; }
dl.checkoutProcess .stepGroupTitle .hdng { margin:0; font-size:18px; border:0; font-weight:normal; }
dl.checkoutProcess .stepGroupTitle .formRow { float:right; display:inline; margin-top:5px; }
dl.checkoutProcess .stepGroupContent { margin-bottom:20px; }
dl.checkoutProcess .stepGroupContent .accountBlocks {margin:0; border:0;}
dl.checkoutProcess .stepGroupTitle .hdng span { font-size:0.786em; font-weight:normal; text-transform:none; }
dl.checkoutProcess .stepGroupTitle .hdng .formRow { margin:0; font-size:0.857em; font-weight:normal; }

.checkoutProcess .forms fieldset {position:relative; margin:0 0 10px 130px;}
.checkoutProcess .forms fieldset legend {position:absolute; left:-130px; top:0; width:110px; color: #4E4E4E; font-size: 17px; font-weight: normal; white-space:normal;}
.checkoutProcess .forms fieldset legend span {float:left;}
.checkoutProcess .forms fieldset legend span.note {float:none; font-size:11px;}
	
.checkoutSummary {}
.checkoutCart {}
.checkoutCart .cartHeader {position:relative; display:block; padding:7px 65px 7px 10px; color:#fff; font-size:0.875em; background-color:#3f3f3f; border:1px solid #3f3f3f;}
.checkoutCart .cartHeader .titleTab {font-weight:bold;}
.checkoutCartInner {margin:0 0 2px 0;}
.checkoutCart #divItems { padding:1px 10px; border:1px solid #D2D2D2;}
.checkoutCart .itemWrapper { padding:10px 0; border-bottom:1px dashed #ccc; }
.checkoutCart .itemWrapper:last-child { border-bottom:0; }
.checkoutCart .itemImage {float:left; display:inline; height:auto;}
.checkoutCart .itemContent {position:static; padding:0; text-align:left; font-size:1em;}
.checkoutCart .itemContent .itemTitle { float:left; width:58%; margin:0; text-align:left; font-size:0.875em; font-weight:normal; padding:0px; border:0px; }
.checkoutCart .recipHeader { padding:10px 0 0 0; border-bottom:1px dotted #ccc; display:none; }
.checkoutCart .itemWrapper .itemSwatch {float:left; display:inline; margin:7px 0 12px 0;}
.checkoutCart .itemWrapper .itemPrice { float:right; display:inline; width:40%; margin:0; font-size:1em; text-align:right; font-weight:bold; padding:0px; height:auto; color:#222222; border:0px; }
.checkoutCart .itemWrapper .qtyNum {float:right; font-weight:normal; font-size:.9em;}
	

.siteStamps { margin:10px 0; }
.siteStamps img { vertical-align:middle; }

dl.checkoutProcess dt.stepTitle a.editLink,
dl.checkoutProcess dt.stepTitle a.editLink:link,
dl.checkoutProcess dt.stepTitle a.editLink:visited {position:absolute; right:10px; top:8px; font-size:1em; font-weight:bold; text-decoration:none; text-transform:none; }
.checkoutCart .cartHeader a.editLink,
.checkoutCart .cartHeader a.editLink:link,
.checkoutCart .cartHeader a.editLink:visited {position:absolute; right:10px; top:8px; font-size:0.875em; font-weight:bold; text-decoration:none; text-transform:none; color:#fff; }

.dateSelection .selector {float:left; display:inline; width:90px; margin-right:10px;}
.dateSelection div.selector span {width:60px;}
.dateSelection div.selector select {width:97px;}

.checkoutProcess .supportedPayments { margin:0 0 10px; }
	
.userMessage {width:46%; padding:10px 15px; margin-bottom:10px; background:#E0E0E0; border:1px solid #c7c7c7;}

.helpfulInfo {font-size:14px; color:#4e4e4e; line-height:1.7em;}
.helpfulInfo .hdng2 {margin:0; font-size:18px; font-weight:normal; color:#4e4e4e;}
.cartQuestionsText {float:left; display:inline; width:255px; padding:0 20px;}
.helpLinks {float:left; display:inline; width:320px;}
.helpLinks ul.linkList {}
.helpLinks ul.linkList li {float:left; display:inline; width:140px; margin:0 10px 0 0; padding:0 0 0 10px; background:url(/images/layout/arrow_right_red_open.gif) no-repeat 0 8px;}
.helpLinks ul.linkList a,
.helpLinks ul.linkList a:link,
.helpLinks ul.linkList a:visited {color:#4e4e4e; text-decoration:none;}

.shippingOptions { margin-bottom:7px; font-size:0.9em; }
.shippingOptions .shipOpt {float:left; display:inline; margin: 0 5px 5px 0; padding:5px 10px 5px 5px;}
.shippingOptions .shipOpt label {margin:0 0 0 5px; cursor:pointer;}
.shipping-selected {background-color:#EFEFEF;}
	
.checkoutSummaryHeading { margin-bottom:5px; padding-bottom:5px; font-weight:bold; border-bottom:1px solid #CCCCCC; }
.checkoutBox { padding:20px 9px; background:#efefef; border:1px solid #e3e3e3; }
.checkoutSubBox { padding:10px; background:#F9F9F9; border:1px solid #e3e3e3; }


/* ## Checkout Review ## */

.checkoutFinalOptions {font-size:.9em; margin:0 0 10px 0; padding:8px; background:#eeeeee;}
.checkoutFinalOptions  label {margin:0px;}
.newsletterField {font-size:.9em;}
.billingEmail {  word-wrap: break-word; }

.checkoutReviewTotals { text-align:center; }
.checkoutReviewTotals .reviewTotalBreakdown { display:inline-block; text-align:right; }
.checkoutReviewTotals .grandTotal { font-size:1.2em; font-weight:bold; }

.reviewOptions { border-top:1px dashed #999; padding-top:20px; }


/* 16px baseline (0 - 479px) */
@media only screen and (max-width:29.938em){	
	.cartList .itemTotal { display:block; float:none !important; margin-bottom:10px; clear:both; text-align:left; }
	.cartList .media { float:left; display:inline; margin:0 10px 10px 0; }
	.cartList .content { display:block; padding:0; }
	.cartList .cartItemDetails { display:block; width:auto; }
	.cartList .contentExtra { clear:left; margin-bottom:10px; padding-left:0; }
	.cartList .itemInfo { clear:left !important; padding-left:0 !important; }
	.cartList .itemGiftMessage { clear:none; text-align:left; padding-left:10px }
}

/* 16px baseline (0 - 641px) */
@media only screen and (max-width:40.063em) {	
	.cartList .contentExtra { display:block; float:left; }
	.cartList .itemInfo { clear:none; display:block; float:none; width:auto; max-width:100%; padding-left:10px; clear:left !important; padding-left:0 !important;  }
	.shoppingCart .item .contentExtra {display:block; clear:left; margin-bottom:15px; padding-left:0;}
	.cartList .itemTotal { display:block; float:none !important; margin-bottom:10px; clear:both; text-align:left; }
}

/* 16px baseline (0 - 767px) */
@media only screen and (max-width:47.938em){
	.cartTools {display:block;}

	.slideCartRail { min-height:0 !important; }
	.slideCartCompanion { min-height:0 !important; }

    .checkoutReviewTotals { border-top:1px dashed #999; }
    .reviewTotalBreakdown { display:inline-block; padding-top:10px; }
    .reviewTotalBreakdown .grandTotal {}
}
	
/* 16px baseline (768px+) */
@media only screen and (min-width:48em){
	.slideCartWrapper { position:absolute; top:0; right:0; width:100%; height:100%; }
	.slideCart { position:absolute; top:0; left:0; right:0; max-width:320px; }
	.slideCartRail .stickyTop {}
	.slideCartRail .stickyFixed { position:fixed; left:auto; right:auto; width:25%; padding:0 10px; margin-left:-10px; }
	.slideCartRail .stickyBottom { top:auto; bottom:0; }
}

/* 16px baseline (960px+) */
@media only screen and (min-width:60em) {
    .checkoutReviewTotals { border-top:1px dashed #999; }
    .reviewTotalBreakdown { padding-top:10px; }
    .reviewTotalBreakdown .grandTotal {}
}
