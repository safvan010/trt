﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: ct.js
 * 	Chinese Traditional language file.
 * 
 * File Author:
 * 		Eyes Blue (kingofeyesblue@yahoo.com.tw)
 */
 
 var theUILang =
 {
 //all used
 kbs			: "kB/s",
 
 
 //Settings window
 
 General		: "一般",
 Downloads		: "下載",
 Connection		: "連線",
 BitTorrent		: "任務",
 Queueing		: "隊列",
 Scheduler		: "排程器",
 Advanced		: "進階",
 User_Interface		: "使用者界面",
 Confirm_del_torr	: "刪除 Torrent 時要求確認",
 Update_GUI_every	: "更新圖形介面頻率",
 ms			: "ms",
 Alt_list_bckgnd	: "交替顯示列表背景色",
 Show_cat_start		: "啟動時顯示類別",
 Show_det_start		: "啟動時顯示詳細內容",
 Dnt_start_down_auto	: "不要自動開始下載",
 Other_sett		: "其他設定",
 Listening_Port		: "連接埠設定",
 Port_f_incom_conns	: "本機連接埠",
 Rnd_port_torr_start	: "rTorrent 啟動時使用隨機連接埠",
 Type			: "類型",
 Bandwidth_Limiting 	: "頻寬限制",
 Global_max_upl		: "整體最大上傳速度",
 unlimited		: "無限制",
 Glob_max_downl		: "整體最大下載速度",
 Add_bittor_featrs	: "其他功能選項",
 En_DHT_ntw		: "啟用 DHT 網絡",
 Peer_exch		: "啟用使用者資訊交換",
 Ip_report_track	: "提供給 Tracker 的本機 IP 地址/主機名稱",
 Disabled		: "禁用",
 Enabled		: "啟用",
 Advanced		: "進階",
 Cancel			: "取消",
 uTorrent_settings	: "rTorrent 設定",
 
// Main window
 Doesnt_support		: "這個 ruTorrent 不支援您使用的瀏覽器",
 Name			: "名稱",
 Status			: "狀態",
 Size			: "大小",
 Done			: "完成率",
 Downloaded		: "已下載",
 Uploaded		: "已上傳",
 Ratio			: "分享率",
 DL			: "下載速度",
 UL			: "上傳速度",
 ETA			: "剩餘時間",
 Label			: "標籤",
 Peers			: "用戶數量",
 Seeds			: "種子數量",
 Avail			: "健康度",
 Remaining		: "剩餘時間",
 Priority		: "優先等級",
 Download		: "下載",
 Upload			: "上傳",
 Not_torrent_file	: "該檔案不是有效的 torrent 檔案",
 Pausing		: "暫停中",
 Seeding		: "做種中",
 Downloading		: "下載中",
 Checking		: "檢查中",
 Error			: "錯誤",
 Queued			: "排隊中",
 Finished		: "已完成",
 Stopped		: "已停止",
 Request_timed_out	: "連接 rTorrent 逾時",
 
 Start			: "開始",
 Pause			: "暫停",
 Stop			: "停止",
 Force_recheck		: "強制重新檢查",
 New_label		: "新建標籤...",
 Remove_label		: "移除標籤",
 Labels			: "標籤",
 Remove			: "移除",
 Delete_data		: "刪除下載的資料",
 Remove_and		: "移除並",
 Details		: "詳細內容...",
 Properties		: "屬性...",
 of			: "的", 		//this two creates line 
 connected		: "已連接",	//  XX of YY connected
 High_priority		: "較高優先權",
 Normal_priority	: "正常優先權",
 Low_priority		: "較低優先權",
 Dont_download		: "不要下載",
 Files			: "文件",
 Logger			: "紀錄",
 
 s			: "s",    // part of "KB/s"
 bytes			: "bytes",
 KB			: "KB",
 MB			: "MB",
 GB			: "GB",
 TB			: "TB",
 PB			: "PB",
 
 // main WND s
 Loading		: "載入中...",
 Torrent_file		: "Torrent 檔案",
 Torrent_URL		: "Torrent 網址",
 Torrent_properties	: "Torrent 屬性",
 Trackers		: "Tracker",
 Bandwidth_sett		: "頻寬設定",
 Number_ul_slots	: "上傳通道數",
 Peer_ex		: "用戶資料交換",
 About			: "關於",
 Enter_label_prom	: "為選擇的 Torrent 輸入新的標籤",
 Remove_torrents	: "移除 Torrent(s)",
 Rem_torrents_prompt	: "您確定要移除選擇的 Torrent 嗎?",
 All			: "全部",
 Active			: "活動",
 Inactive		: "停止",
 No_label		: "其他",
 Transfer		: "傳輸",
 Time_el		: "已用時間",
 Remaining		: "剩餘時間",
 Share_ratio		: "分享比率",
 Down_speed		: "下載速度",
 Down_limit		: "下載限制",
 Ul_speed		: "上傳速度",
 Ul_limit		: "上傳限制",
 Wasted			: "丟棄數據",
 Tracker		: "Tracker",
 Track_URL		: "Tracker 連接",
 Track_status		: "Tracker 狀態",
 Save_as		: "檔案儲存位置",
 Created_on		: "建立時間",
 Comment		: "附註說明",
 
 
 //buttons
 add_button		: "開啟",
 add_url		: "下載",
 ok			: "   確定   ",
 Cancel			: " 取消 ",
 no			: "   否   ",
 
 mnu_add		: "開啟 Torrent",
 mnu_remove		: "移除",
 mnu_start		: "開始",
 mnu_pause		: "暫停",
 mnu_stop		: "停止",
 mnu_rss		: "RSS 下載器",
 mnu_settings		: "設定",
 mnu_search		: "搜尋",
 mnu_lang		: "語言",
 
 //Other variables added by spide
 torrent_add		: "開啟 Torrent", /*Caption of torrent add box*/
 time_w			: "週 ", /*for x weeks*/
 time_d			: "日 ", /*for x days remaining*/
 time_h			: "時 ", /*for x hours remaining*/
 time_m			: "分 ", /*for x minutes remaining*/
 time_s			: "秒 ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    	: "存放目錄",
 Number_Peers_min	: "與其他使用者連線的最小數量",
 Number_Peers_max	: "與其他使用者連線的最大數量",
 Tracker_Numwant	: "向tracker查詢使用者資訊時，期望一次回應的數量",
 Number_Peers_For_Seeds_min	: "作種時與其他使用者連線的最小數量",
 Number_Peers_For_Seeds_max	: "作種時與其他使用者連線的最大數量",
 Enable_port_open	: "監聽連接埠",
 dht_port		: "DHT 使用的 UDP 連接埠",
 Ather_Limiting		: "其他限制",
 Number_dl_slots	: "最大下載連線數量",
 Glob_max_memory	: "整體最大記憶體可用量",
 Glob_max_files		: "整體最大可開啟的檔案數量",
 Glob_max_http		: "整體最大 HTTP 連線數量",
 Glob_max_sockets	: "整體最大可開啟的 socket 數量",
 Ather_sett		: "其他設定",
 Directory_For_Dl	: "預設下載目錄",
 Check_hash		: "下載完成後使用 Hash 完整驗證所有檔案",
 Hash			: "Hash",
 IsOpen			: "已開啟",
 DisableTracker		: "停用",
 EnableTracker		: "啟用",
 ClientVersion		: "Client",
 Flags			: "Flags",
 ReqTimeout		: "判定逾時",
 GetTrackerMessage	: "從tracker接收使用者資訊",
 Help			: "Help",
 PHPDoesnt_enabled	: "您的網頁伺服器不支援PHP，請修正後再嘗試",
 Speed			: "速度",
 Dont_add_tname		: "請勿將 torrent 名稱作為目錄名稱", 
 Free_Disk_Space	: "磁碟可用空間",
 badXMLRPCVersion	: "rTorrent使用了錯誤的xmlrpc-c版本編譯, 該版本不含i8支援,版本必須大於或等於1.11版,某些功能將無法使用",
 badLinkTorTorrent	: "錯誤的rTorrent連結, 請檢查rTorrent是否已經正確執行, 請確認rTorrent設定檔與config.php中的 $scgi_port 與 $scgi_host 相符合",
 badUploadsPath		: "網頁伺服器無法存取(讀/寫/執行) torrent 的存放目錄，您無法從 ruTorrent 新增 torrent",
 badSettingsPath	: "網頁伺服器無法存取(讀/寫/執行)設定檔存放目錄，ruTorrent 無法儲存設定",
 mnu_help		: "關於",
 badUploadsPath2	: "rTorrent's 所設定的使用者無法讀/執行 torrent 的存放目錄，您無法從 ruTorrent 新增 torrent",
 View			: "檢視",
 AsList			: "列表檢視",
 AsTree			: "樹狀檢視",
 Group			: "群組",
 SuperSeed		: "超級種子",
 badTestPath		: "rTorrent's 所設定的使用者無權限讀/執行./test.sh，ruTorrent 無法正常運作",
 badSettingsPath2	: "rTorrent's 無法存取(讀/寫/執行)您所設定的使用者家目錄，ruTorrent 無法正常運作",
 scrapeDownloaded	: "已下載",
 Total			: "總計",
 PCRENotFound		: "PHP 中未安裝 PCRE 模組，ruTorrent 無法正常運>作",
 addTorrentSuccess	: "torrent 檔案上傳完成",
 addTorrentFailed	: "錯誤: torrent 檔案無法傳送到 rTorrent",
 pnlState		: "狀態",
 newLabel		: "新標籤",
 enterLabel		: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limit",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable.",
 gzipNotFound			: "Web-server can't access 'gzip' program. ruTorrent will not work.",
 cantObtainUser			: "ruTorrent can't detect the uid or rtorrent user. Some functionality will be unavailable.",
 retryOnErrorTitle		: "If rtorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" },
 statNotFound			: "rTorrent's user can't access 'stat' program. Some functionality will be unavailable.",
 statNotFoundW			: "Web-server user can't access 'stat' program. Some functionality will be unavailable.",
 badrTorrentVersion		: "This version of rTorrent doesn't support this plugin. Plugin will not work. rTorrent version must be >=",
 badPHPVersion                  : "This version of PHP doesn't support this plugin. Plugin will not work. PHP version must be >=",
 rTorrentExternalNotFoundError	: "Plugin will not work. rTorrent's user can't access external program",
 rTorrentExternalNotFoundWarning: "Some functionality will be unavailable. rTorrent's user can't access external program",
 webExternalNotFoundError	: "Plugin will not work. Web-server user can't access external program",
 webExternalNotFoundWarning	: "Some functionality will be unavailable. Web-server user can't access external program",
 rTorrentBadScriptPath		: "Plugin will not work. rTorrent's user can't access file for read/execute",
 rTorrentBadPHPScriptPath	: "Plugin will not work. rTorrent's user can't access file for read",
 dependenceError		: "Plugin will not work. It require existence of plugin(s)",
 peerAdd			: "Add peer...",
 peerBan			: "Ban",
 peerKick			: "Kick",
 peerSnub			: "Snub",
 peerDetails			: "Details",
 peerUnsnub			: "Unsnub",
 peerAddLabel			: "Enter IP/Hostname[:port]",
 noTorrentList			: "Torrent list not yet available, connection to rtorrent not established.",
 yes				: "yes",
 no				: "no",
 DateFormat			: "Date format",
 DLStrategy			: "Download strategy",
 prioritizeFirst		: "Leading chunk first",
 prioritizeLast			: "Trailing chunk first",
 prioritizeNormal		: "Normal",
 updateTracker			: "Update trackers",
 scrapeUpdate			: "Was updated",
 trkInterval			: "Interval",
 logAutoSwitch			: "Autoswitch to 'Log' tab"
 };
