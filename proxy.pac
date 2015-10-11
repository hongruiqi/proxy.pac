var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8\u5207\u6362", {
    "+\u81ea\u52a8\u5207\u6362": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)paddle\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)google\.com\.sg$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)c3\.cx$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)weibo\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sina\.cn$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)tanx\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sinajs\.cn$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sina\.com\.cn$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sinaimg\.cn$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)googlesyndication\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)slideshare\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)linkedin\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)virtualbox\.org$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sstatic\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)freemacsoft\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)bttrack\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)crwdcntrl\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)serving-sys\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)truste\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)cbsi\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)fdlstatic\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)cnet\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)segment\.io$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)sourcetreeapp\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)scootersoftware\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)change-vision\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)xiaxue\.sg$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)blogspot\./.test(host)) return "+shadowsocks";
        if (/(?:^|\.)wp\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)google\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)content\.googleapis\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)cloudconvert\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)box\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)dropbox\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)github\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)ftnew\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)blogblog\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)blogger\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)bruzah\.blogspot\.sg$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)bruzah\.blogspot\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)blogspot\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)wolfman\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)addthis\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)leetcode\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)gmail\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)akamaihd\.net$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)xg4ken\.com$/.test(host)) return "+shadowsocks";
        if (/(?:^|\.)google\./.test(host)) return "+shadowsocks";
        return "+__ruleListOf_\u81ea\u52a8\u5207\u6362";
    },
    "+__ruleListOf_\u81ea\u52a8\u5207\u6362": "DIRECT",
    "+shadowsocks": function(url, host, scheme) {
        "use strict";
        if (host === "[::1]" || host === "localhost" || host === "127.0.0.1") return "DIRECT";
        return "SOCKS5 127.0.0.1:8001; SOCKS 127.0.0.1:8001";
    }
});