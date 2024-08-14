const welcomeSignupEmail = (email) => `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
\t<title></title>
\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
\t<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
\t<style>
\t\t* {
\t\t\tbox-sizing: border-box;
\t\t}

\t\tbody {
\t\t\tmargin: 0;
\t\t\tpadding: 0;
\t\t}

\t\ta[x-apple-data-detectors] {
\t\t\tcolor: inherit !important;
\t\t\ttext-decoration: inherit !important;
\t\t}

\t\t#MessageViewBody a {
\t\t\tcolor: inherit;
\t\t\ttext-decoration: none;
\t\t}

\t\tp {
\t\t\tline-height: inherit
\t\t}

\t\t.desktop_hide,
\t\t.desktop_hide table {
\t\t\tmso-hide: all;
\t\t\tdisplay: none;
\t\t\tmax-height: 0px;
\t\t\toverflow: hidden;
\t\t}

\t\t.image_block img+div {
\t\t\tdisplay: none;
\t\t}

\t\tsup,
\t\tsub {
\t\t\tline-height: 0;
\t\t\tfont-size: 75%;
\t\t}

\t\t@media (max-width:670px) {

\t\t\t.desktop_hide table.icons-inner,
\t\t\t.social_block.desktop_hide .social-table {
\t\t\t\tdisplay: inline-block !important;
\t\t\t}

\t\t\t.icons-inner {
\t\t\t\ttext-align: center;
\t\t\t}

\t\t\t.icons-inner td {
\t\t\t\tmargin: 0 auto;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tdisplay: none;
\t\t\t}

\t\t\t.row-content {
\t\t\t\twidth: 100% !important;
\t\t\t}

\t\t\t.stack .column {
\t\t\t\twidth: 100%;
\t\t\t\tdisplay: block;
\t\t\t}

\t\t\t.mobile_hide {
\t\t\t\tmin-height: 0;
\t\t\t\tmax-height: 0;
\t\t\t\tmax-width: 0;
\t\t\t\toverflow: hidden;
\t\t\t\tfont-size: 0px;
\t\t\t}

\t\t\t.desktop_hide,
\t\t\t.desktop_hide table {
\t\t\t\tdisplay: table !important;
\t\t\t\tmax-height: none !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-3.spacer_block {
\t\t\t\theight: 20px !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-2.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 16px !important;
\t\t\t}

\t\t\t.row-3 .column-2 .block-1.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 14px !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-1.paragraph_block td.pad,
\t\t\t.row-3 .column-2 .block-1.paragraph_block td.pad {
\t\t\t\tpadding: 0 !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-3.paragraph_block td.pad>div,
\t\t\t.row-7 .column-1 .block-3.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t}

\t\t\t.row-4 .column-1 .block-3.paragraph_block td.pad,
\t\t\t.row-7 .column-1 .block-3.paragraph_block td.pad {
\t\t\t\tpadding: 5px !important;
\t\t\t}

\t\t\t.row-3 .column-1 .block-1.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 36px !important;
\t\t\t}

\t\t\t.row-5 .column-1 .block-3.paragraph_block td.pad>div {
\t\t\t\tfont-size: 15px !important;
\t\t\t}

\t\t\t.row-7 .column-1 .block-2.paragraph_block td.pad>div {
\t\t\t\ttext-align: center !important;
\t\t\t\tfont-size: 32px !important;
\t\t\t}

\t\t\t.row-7 .column-1 .block-2.paragraph_block td.pad {
\t\t\t\tpadding: 5px 5px 0 !important;
\t\t\t}

\t\t\t.row-9 .column-1 .block-1.spacer_block {
\t\t\t\theight: 40px !important;
\t\t\t}

\t\t\t.row-3 .column-1 {
\t\t\t\tpadding: 30px 30px 0 !important;
\t\t\t}

\t\t\t.row-3 .column-2 {
\t\t\t\tpadding: 0 30px !important;
\t\t\t}
\t\t}
\t</style><!--[if mso ]><style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style> <![endif]--><!--[if true]><style>.forceBgColor{background-color: white !important}</style><![endif]-->
</head>

<body class="body forceBgColor" style="background-color: transparent; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
\t<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: transparent; background-repeat: no-repeat; background-image: none; background-position: top left; background-size: auto;">
\t\t<tbody>
\t\t\t<tr>
<h1>Welcome to ${email}</h1> 
<!--$사인이 붙으면서 email을 받아서 직접 사용할 수 있게 됐다.-->
\t\t\t\t<td>
\t\t\t\t\t<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-size: auto; background-color: #ffffff; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="width:100%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center" style="line-height:10px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/BEE_May20_MarketingAgency_DashboardMetrics_v01.png" style="display: block; height: auto; border: 0; width: 100%;" width="650" height="auto"></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-size: auto; background-color: #f6f5f1; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="width:100%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center" style="line-height:10px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/BEE_May20_MarketingAgency_Invoice_v01.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="650" height="auto"></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-repeat: no-repeat; border-radius: 0; color: #000000; background-size: auto; background-color: #007c86; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/BEE_May20_MarketingAgency_Invoice_v02.jpg'); width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 50px; padding-left: 50px; padding-top: 60px; vertical-align: bottom; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-bottom:15px;padding-left:5px;padding-right:5px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:70px;font-weight:400;letter-spacing:-2px;line-height:120%;text-align:left;mso-line-height-alt:84px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;"><em><span style="word-break: break-word; color: #ffffff;">Invoice</span></em></p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:21.599999999999998px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;">#1234<br>Date: 07/01/2024</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="spacer_block block-3" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 50px; padding-right: 50px; padding-top: 50px; vertical-align: bottom; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:right;mso-line-height-alt:21.599999999999998px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;">Bill to:<br>Jane Doe<br>Company<br>123 Street Adress<br>janedoe@example.com</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="spacer_block block-2" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-size: auto; background-color: #f6f5f1; border-left: 30px solid transparent; border-right: 30px solid transparent; border-top: 30px solid transparent; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #ffffff; padding-bottom: 30px; padding-top: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="text-align:center;width:100%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h1 style="margin: 0; color: #222222; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 400; letter-spacing: -1px; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 28.799999999999997px;"><span class="tinyMce-placeholder" style="word-break: break-word;">Amount due:</span></h1>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:40px;font-weight:700;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:48px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><strong>$565</strong></p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-top:5px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:150%;text-align:center;mso-line-height-alt:21px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;">Due on 07/15/2024.</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f5f1; border-radius: 0; color: #000000; background-size: auto; border-left: 30px solid transparent; border-right: 30px solid transparent; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="button_block block-1" width="100%" border="0" cellpadding="25" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:40px;width:203px;v-text-anchor:middle;" arcsize="25%" strokeweight="0.75pt" strokecolor="#222222" fillcolor="#f2c9c4">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#222222;font-family:Arial, sans-serif;font-size:14px">
<![endif]--><a href="http://www.example.com" target="_blank" style="background-color:#f2c9c4;border-bottom:1px solid #222222;border-left:1px solid #222222;border-radius:10px;border-right:1px solid #222222;border-top:1px solid #222222;color:#222222;display:inline-block;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;mso-border-alt:none;padding-bottom:5px;padding-top:5px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 14px; display: inline-block; letter-spacing: 2px;"><span style="margin: 0; word-break: break-word; line-height: 28px;">REVIEW AND PAY</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:24px;font-weight:400;letter-spacing:-1px;line-height:120%;text-align:left;mso-line-height-alt:28.799999999999997px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;">Dear <em>Jane</em>,</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-top:10px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.<br><br>Thank you,<br>Your name</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f5f1; border-radius: 0; color: #000000; border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 20px solid transparent; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 30px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="table_block mobile_hide block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; width: 100%; table-layout: fixed; direction: ltr; background-color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; color: #222222; text-align: right; letter-spacing: 0px; word-break: break-all;" width="100%">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead style="vertical-align: top; background-color: #eddab2; color: #222222; font-size: 16px; line-height: 120%; text-align: right;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Service</strong></th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Qty</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Price</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Total</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody style="vertical-align: top; font-size: 14px; line-height: 120%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">SEO</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Website Design</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Social Media</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Content</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">PPC Ads</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Subtotal</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$500.00</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Taxes (%)</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$65.00</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>GRAND TOTAL</strong></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>$565.00</strong></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="table_block desktop_hide block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-hide: all; display: none; max-height: 0; overflow: hidden; border-collapse: collapse; width: 100%; table-layout: fixed; direction: ltr; background-color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400; color: #222222; text-align: right; letter-spacing: 0px; word-break: break-all;" width="100%">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead style="vertical-align: top; background-color: #eddab2; color: #222222; font-size: 11px; line-height: 120%; text-align: right;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>Service</strong></th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Qty</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Price</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th width="25%" style="padding: 10px; word-break: break-word; font-weight: 700; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Total</th>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody style="vertical-align: top; font-size: 11px; line-height: 120%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">SEO</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Website Design</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Social Media</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Content</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">PPC Ads</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">1</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$100</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Subtotal</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$500.00</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">Taxes (%)</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">$65.00</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr style="background-color:#f9f9f9;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;">&#8203;</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>GRAND TOTAL</strong></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width="25%" style="padding: 10px; word-break: break-word; border-top: 1px solid transparent; border-right: 1px solid transparent; border-bottom: 1px solid transparent; border-left: 1px solid transparent;"><strong>$565.00</strong></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="button_block block-3" width="100%" border="0" cellpadding="25" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:38px;width:232px;v-text-anchor:middle;" arcsize="27%" stroke="false" fillcolor="#222222">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Arial, sans-serif;font-size:14px">
<![endif]--><a href="http://www.example.com" target="_blank" style="background-color:#222222;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:10px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;mso-border-alt:none;padding-bottom:5px;padding-top:5px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 14px; display: inline-block; letter-spacing: 2px;"><span style="margin: 0; word-break: break-word; line-height: 28px;">DOWNLOAD INVOICE</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-repeat: no-repeat; background-color: #f6f5f1; border-radius: 0; color: #000000; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/BG-yellow_2.jpg'); background-size: cover; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 40px; padding-left: 15px; padding-right: 15px; padding-top: 40px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="width:100%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center" style="line-height:10px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 28px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/Flower-green_1.png" style="display: block; height: auto; border: 0; width: 100%;" width="28" height="auto"></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-left:25px;padding-right:25px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;font-size:38px;font-weight:400;letter-spacing:-1px;line-height:120%;text-align:center;mso-line-height-alt:45.6px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;">Have<em> questions?</em></p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:5px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#222222;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:15px;font-weight:400;line-height:150%;text-align:center;mso-line-height-alt:22.5px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;">We have answers. Get in touch with us via email, phone or support chat.</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-top:10px;text-align:center;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:38px;width:181px;v-text-anchor:middle;" arcsize="27%" stroke="false" fillcolor="#222222">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center dir="false" style="color:#ffffff;font-family:Arial, sans-serif;font-size:14px">
<![endif]--><a href="http://www.example.com" target="_blank" style="background-color:#222222;border-bottom:0px solid transparent;border-left:0px solid transparent;border-radius:10px;border-right:0px solid transparent;border-top:0px solid transparent;color:#ffffff;display:inline-block;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;mso-border-alt:none;padding-bottom:5px;padding-top:5px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="word-break: break-word; padding-left: 30px; padding-right: 30px; font-size: 14px; display: inline-block; letter-spacing: 2px;"><span style="margin: 0; word-break: break-word; line-height: 28px;">GET IN TOUCH</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-size: auto; background-color: #f6f5f1; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="width:100%;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center" style="line-height:10px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 650px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/BEE_May20_MarketingAgency_Invoice_v01.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="650" height="auto"></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #007c86; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-left: 20px; padding-right: 20px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center" style="line-height:10px">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="max-width: 91.5px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8746/MC-logo-white.png" style="display: block; height: auto; border: 0; width: 100%;" width="91.5" height="auto"></div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:20px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;letter-spacing:2px;line-height:120%;text-align:center;mso-line-height-alt:14.399999999999999px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0; word-break: break-word;">MAILCOMET MARKETING AGENCY</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="social_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="padding-bottom:10px;text-align:center;padding-right:0px;padding-left:0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="alignment" align="center">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="social-table" width="168px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding:0 5px 0 5px;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding:0 5px 0 5px;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding:0 5px 0 5px;"><a href="https://www.pinterest.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/pinterest@2x.png" width="32" height="auto" alt="Pinterest" title="Pinterest" style="display: block; height: auto; border: 0;"></a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="padding:0 5px 0 5px;"><a href="https://www.tiktok.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-outline-circle-white/tiktok@2x.png" width="32" height="auto" alt="TikTok" title="TikTok" style="display: block; height: auto; border: 0;"></a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;">1234 Example Street<br>City, State 01234, Country</p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="paragraph_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style="color:#ffffff;direction:ltr;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:16.8px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style="margin: 0;"><a href="http://example.com/unsubcribe" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">Unsubscribe</a> or <a href="http://www.example.com" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">Manage Preferences</a></p>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="spacer_block block-7" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t\t<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t\t<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 650px; margin: 0 auto;" width="650">
\t\t\t\t\t\t\t\t\t\t<tbody>
\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--[if !vml]><!-->
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center; line-height: normal;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t\t\t\t\t</tbody>
\t\t\t\t\t\t\t\t\t</table>
\t\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t</tr>
\t\t\t\t\t\t</tbody>
\t\t\t\t\t</table>
\t\t\t\t</td>
\t\t\t</tr>
\t\t</tbody>
\t</table><!-- End -->
</body>

</html>
`;
export default welcomeSignupEmail;
