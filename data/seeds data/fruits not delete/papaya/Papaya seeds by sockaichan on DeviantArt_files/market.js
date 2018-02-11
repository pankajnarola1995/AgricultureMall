var rp_response = 
    { "valuation": { "pmp": { }, "ads": [ { "type": "partner", "cpm": 0.028500, "dcpm": 0.028500, "fcc": 0, "fcl": 5, "fcp": 86400, "pacing": 0.000076, "ad_id": 3608310 }, { "type": "house", "cpm": 0.000000, "dcpm": 0.000000, "ad_id": 3855108 } ], "cpm_cnt": 2, "invalid_cpm_cnt": 0, "bid_cnt": 0, "invalid_bid_cnt": 0 }, "context": { "site_session_count": "0", "country": "in" } };

var rp_valuation = rp_response.valuation;
try { oz_onValuationLoaded_1339_15(rp_response); } catch (ignore) {}

/*
Data Center: FRA1
pid: 25456
BE Status: T
BEms: 211
AEms: 215
Alg: PT
Session Count: 1
Continent: au
Country: in
*/
