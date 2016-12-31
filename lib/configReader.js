var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

var donationAddresses = {
    devDonation: {
        XMR: '44UW4sPKb4XbWHm8PXr6K8GQi7jUs9i7t2mTsjDn2zK7jYZwNERfoHaC1Yy4PYs1eTCZ9766hkB6RLUf1y95EvCQNpCZnuu'
    },
    coreDevDonation: {
        XMR: '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A'
    },
    extraFeaturesDevDonation: {
        XDN: 'dddcPW8VjhJA9U2QDPunnkL8Yky83TdEBGThXsETtmAx8q7jvni7Kt4hn8pqS3ks7GhM2z9BeD22jgKewZ2kQhWK27ZaGfLHQ',
        BCN: '23emzdEQqoWAifE1ZQLTrGAmVkdzjami82xgX4zWoX2VbiuGuunMJ1oF14PPa1cVRgGFz8tUWevsSNzMcPqHiQmF7iSzS1g',
        BBR: '1Gy4NimzTgyhcZ22432N4ojP9HC6mHpML2g8SsmmjPZS4o8SYNFND99LAihRPHA2ddarf3okkJ3umTC2gLpysKBfLi4hfTF',
        XMR: '4AabFTaEt6KG18tux7yqS8Fv63JoyXsitjGSksrXCqZwBeJKKnphSx4KNsocn5kqWg6cMjeuNzssTHeefHvN8m1V6QqseCH',
        QCN: '1MafhBsdrkW3ssQexQzHf8Q2VBEWE3DmrbySKJzXXNJFeHHTWahDkJ3iLkiKnAMMtzHPeLrsYVmkQJJ9DJx3ToodKUapV8p',
        FCN: '6iAu6xDGnSFekMxJj7S61aepNVXbyCrV7PgWWKSfsEPyXbUjHAxjgq3KwED3dWrgddCRRtwBrrYgmVLZR7vdBr3KLe9Cowd',
        MCN: 'Vdufe8Pjkp2apvJC2N3Q7KdqiDDnLR3cH8hPhB2hjBtdXRxnHmHdgESbCjAD5dv1oiFrA1jKJQqszHWELdNygCGW2Ri6qRH1B',
        AEON: 'Wmsfi4rDdUC4xQyMo7f4BkfuPtSooPZ3wfx8e7JFXaKyfFY5buDJF4UakwhLp3FXxKVwB3ZFLQ3bTUBksCoG3tVQ2tzkrCZDm',
        OEC: 'C53KdM3sWk2P27yvqihNDEVsCtDQH9koJTdmEX96ftqgTvSsuvg5HMJ2dLnynwcWr5d3oMvwzsQVKdVeYchG5iU6L5rNJjd',
        DSH: 'D9t1KjB9w2haRp29ueJ9jHfTyq1FSzpMqavKpfFuwa8yEdHKuryfmh4W6ZzbHC71JFLoRD4ny7HWm15jb52JYcye7bBjD62',
        INF8: 'inf8FtwGgmaATeXKvycUT7BfxiawxqhfRXaahPog7s4c7L8qreSvnebNDvwfDBXrip8ptgKgbToV73mS5M1cNviY5sbKhKitCd'
    }
};

global.donations = {};

for(var configOption in donationAddresses) {
    var percent = config.blockUnlocker[configOption];
    var wallet = donationAddresses[configOption][config.symbol];
    if(percent && wallet) {
        global.donations[wallet] = percent;
    }
}

global.version = "v1.1.5_uni";
