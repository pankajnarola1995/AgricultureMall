document.write('&nbsp');
var pendingHide = null;var tooltip = null;var chartId = null;function hideTooltip() {		if (tooltip) pendingHide = setTimeout("tooltip.style.display = 'none';", 200);	}	function showTooltip (e, label) {		if (pendingHide) {			clearTimeout(pendingHide);			pendingHide = null;		}		e = e || window.event;		var tooltipText;		if (!tooltip) {			tooltip = document.createElement('div');			tooltip.style.position = 'absolute';			tooltip.id = 'tooltip';			tooltipText = document.createElement('div');			tooltipText.className = 'tooltip';			tooltip.appendChild(tooltipText);			document.body.appendChild(tooltip);		} else {			tooltipText = tooltip.firstChild;		}		tooltipText.innerHTML = label;		var left = e.pageX || (e.clientX +			(document.documentElement.scrollLeft || document.body.scrollLeft));		var top = e.pageY || (e.clientY +			  (document.documentElement.scrollTop || document.body.scrollTop));		tooltip.style.display = '';		tooltip.style.top = (top+5)+'px';		tooltip.style.left = (left+20)+'px';	}document.write(' <table cellpadding=0 cellspacing=0 border =\'0\' class="marketview_quoteboard" id="bcSnapshotQuoteboard">\n<tr><td colspan="4" class ="marketview_date">As of 1/11/16/ 3:46 AM</td></tr><tr><td colspan ="4" class="marketview_topheader">Electronic Trade</td></tr><tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=CL">Light Sweet Crude Oil</td></tr><tr class=marketview_TRe id=\'sync-target-CL-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (CLG16)</b><br /><br /><b>Open:</b> 32.94<br /><b>High:</b> 32.94<br /><b>Low:</b> 32.24<br /><b>Last:</b> 32.63<br /><b>Chg:</b> -0.53<br /><b>%Chg:</b> -1.60%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">32.63</td><td class="marketview_changeDn sync-change" >-0.53</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-CL-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (CLH16)</b><br /><br /><b>Open:</b> 34.11<br /><b>High:</b> 34.11<br /><b>Low:</b> 33.39<br /><b>Last:</b> 33.75<br /><b>Chg:</b> -0.57<br /><b>%Chg:</b> -1.66%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">33.75</td><td class="marketview_changeDn sync-change" >-0.57</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-CL-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Apr-2016 (CLJ16)</b><br /><br /><b>Open:</b> 35.18<br /><b>High:</b> 35.24<br /><b>Low:</b> 34.56<br /><b>Last:</b> 34.92<br /><b>Chg:</b> -0.56<br /><b>%Chg:</b> -1.58%\')" onmouseout="hideTooltip();">Apr-2016</span></td>\n<td class="marketview_quote sync-last">34.92</td><td class="marketview_changeDn sync-change" >-0.56</td>\n</tr>\n<tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=NG">Natural Gas</td></tr><tr class=marketview_TRe id=\'sync-target-NG-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (NGG16)</b><br /><br /><b>Open:</b> 2.446<br /><b>High:</b> 2.480<br /><b>Low:</b> 2.416<br /><b>Last:</b> 2.421<br /><b>Chg:</b> -0.051<br /><b>%Chg:</b> -2.06%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">2.421</td><td class="marketview_changeDn sync-change" >-0.051</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-NG-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (NGH16)</b><br /><br /><b>Open:</b> 2.447<br /><b>High:</b> 2.484<br /><b>Low:</b> 2.424<br /><b>Last:</b> 2.430<br /><b>Chg:</b> -0.041<br /><b>%Chg:</b> -1.66%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">2.430</td><td class="marketview_changeDn sync-change" >-0.041</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-NG-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Apr-2016 (NGJ16)</b><br /><br /><b>Open:</b> 2.468<br /><b>High:</b> 2.511<br /><b>Low:</b> 2.458<br /><b>Last:</b> 2.462<br /><b>Chg:</b> -0.035<br /><b>%Chg:</b> -1.40%\')" onmouseout="hideTooltip();">Apr-2016</span></td>\n<td class="marketview_quote sync-last">2.462</td><td class="marketview_changeDn sync-change" >-0.035</td>\n</tr>\n<tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=RB">Unleaded Gasoline</td></tr><tr class=marketview_TRe id=\'sync-target-RB-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (RBG16)</b><br /><br /><b>Open:</b> 1.1211<br /><b>High:</b> 1.1253<br /><b>Low:</b> 1.1032<br /><b>Last:</b> 1.1215<br /><b>Chg:</b> -0.0062<br /><b>%Chg:</b> -0.55%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">1.1215</td><td class="marketview_changeDn sync-change" >-0.0062</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-RB-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (RBH16)</b><br /><br /><b>Open:</b> 1.1506<br /><b>High:</b> 1.1530<br /><b>Low:</b> 1.1324<br /><b>Last:</b> 1.1494<br /><b>Chg:</b> -0.0079<br /><b>%Chg:</b> -0.68%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">1.1494</td><td class="marketview_changeDn sync-change" >-0.0079</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-RB-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Apr-2016 (RBJ16)</b><br /><br /><b>Open:</b> 1.3723<br /><b>High:</b> 1.3745<br /><b>Low:</b> 1.3549<br /><b>Last:</b> 1.3717<br /><b>Chg:</b> -0.0079<br /><b>%Chg:</b> -0.57%\')" onmouseout="hideTooltip();">Apr-2016</span></td>\n<td class="marketview_quote sync-last">1.3717</td><td class="marketview_changeDn sync-change" >-0.0079</td>\n</tr>\n<tr></tr><tr><td colspan=\'4\' class="marketview_title"><a href="/markets/futures/?&page=quote&sym=ZK">Ethanol</td></tr><tr class=marketview_TRe id=\'sync-target-ZK-1\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Feb-2016 (ZKG16)</b><br /><br /><b>Open:</b> 1.322<br /><b>High:</b> 1.335<br /><b>Low:</b> 1.315<br /><b>Last:</b> 1.335s<br /><b>Chg:</b> +0.015<br /><b>%Chg:</b> +1.14%\')" onmouseout="hideTooltip();">Feb-2016</span></td>\n<td class="marketview_quote sync-last">1.335s</td><td class="marketview_changeUp sync-change" >+0.015</td>\n</tr>\n<tr class=marketview_TRo id=\'sync-target-ZK-2\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Mar-2016 (ZKH16)</b><br /><br /><b>Open:</b> 1.343<br /><b>High:</b> 1.359<br /><b>Low:</b> 1.340<br /><b>Last:</b> 1.359s<br /><b>Chg:</b> +0.017<br /><b>%Chg:</b> +1.27%\')" onmouseout="hideTooltip();">Mar-2016</span></td>\n<td class="marketview_quote sync-last">1.359s</td><td class="marketview_changeUp sync-change" >+0.017</td>\n</tr>\n<tr class=marketview_TRe id=\'sync-target-ZK-3\'>\n<td width = "5%"></td>\n<td class="marketview_symbol sync-name"> <span onmousemove="showTooltip(event, \'<b>Apr-2016 (ZKJ16)</b><br /><br /><b>Open:</b> 1.377<br /><b>High:</b> 1.380<br /><b>Low:</b> 1.377<br /><b>Last:</b> 1.380s<br /><b>Chg:</b> +0.019<br /><b>%Chg:</b> +1.40%\')" onmouseout="hideTooltip();">Apr-2016</span></td>\n<td class="marketview_quote sync-last">1.380s</td><td class="marketview_changeUp sync-change" >+0.019</td>\n</tr>\n</table>');
