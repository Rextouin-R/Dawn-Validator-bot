const axios = require('axios');
const https = require('https');
const accountsData = require('./accounts');
const proxies = require('./proxy');
const config = require('./config');

const apiEndpoints = {
    keepalive: "https://www.aeropres.in/chromeapi/dawn/v1/userreward/keepalive",
    getPoints: "https://www.aeropres.in/api/atom/v1/userreferral/getpoint"
};

const ignoreSslAgent = new https.Agent({  
    rejectUnauthorized: false
});

const randomDelay = (min, max) => {
    return new Promise(resolve => {
        const delayTime = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delayTime * 1000);
    });
};

const displayWelcome = () => {
    console.log(`
▄▀█ █ █▀█ █▀▄ █▀█ █▀█ █▀█ ∞
█▀█ █ █▀▄ █▄▀ █▀▄ █▄█ █▀▀   
┏━┓ ┏━┓         ┏━┓ ╔═╗             ╔═╗ ┏━┓__            ┏━┓
┃ ┃ ┃ ┃ ┏━╻━━━┓ ┃ ┃ ┏━┓ ┏━╻━━╻━━━━┓ ┏━┓ ┃ ┏━┛  ┏━━━━╮ ╭━━╹ ┃
┃ ┗━┛ ┃ ┃ ┏━┓ ┃ ┃ ┃ ┃ ┃ ┃ ┏━┓ ┏━┓ ┃ ┃ ┃ ┃ ┗━━┓ ┃ ┏━━┛ ┃ ━━ ┃
┗━━━ ━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━┛ ┗━━━━┛ ┗━━━━┛ ╰━━━━┛
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                                             █▀▄ ▄▀█ █░█░█ █▄░█
                                             █▄▀ █▀█ ▀▄▀▄▀ █░▀█
  `);

  console.log("==> 🟦 join channel : https://t.me/UNLXairdop");
  console.log("==> 🟦 join chat : https://t.me/+aXm5TBeS-QMyMGZl");
  console.log("==================================≠===============");
  console.log("==> ⬛ github : https://github.com/Rextouin-R/");
  console.log("====================================≠=============");
  console.log(`
 -----------------------------------------------
|🌟 DAWN Validator Extension automatic claim 🌟|
 -----------------------------------------------
    `);
};

const fetchPoints = async (headers) => {
    try {
        const response = await axios.get(apiEndpoints.getPoints, { headers, httpsAgent: ignoreSslAgent });
        if (response.status === 200 && response.data.status) {
            const { rewardPoint, referralPoint } = response.data.data;
            const totalPoints = (
                (rewardPoint.points || 0) +
                (rewardPoint.registerpoints || 0) +
                (rewardPoint.signinpoints || 0) +
                (rewardPoint.twitter_x_id_points || 0) +
                (rewardPoint.discordid_points || 0) +
                (rewardPoint.telegramid_points || 0) +
                (rewardPoint.bonus_points || 0) +
                (referralPoint.commission || 0)
            );
			console.log(` `);
            console.log(`📊 Points: ${totalPoints}`);
            return totalPoints;
        } else {
            console.error(`❌ Failed to retrieve the points: ${response.data.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error(`⚠️ Error during fetching the points: ${error.message}`);
    }
    return 0;
};

const keepAliveRequest = async (headers, email) => {
    const payload = {
        username: email,
        extensionid: "fpdkjdnhkakefebpekbdhillbhonfjjp",
        numberoftabs: 0,
        _v: "1.0.8"
    };
    
    try {
        const response = await axios.post(apiEndpoints.keepalive, payload, { headers, httpsAgent: ignoreSslAgent });
        if (response.status === 200) {
            console.log(`✅ Sukses : Sedang menjalankan akun ${email}: ${response.data.message}`);
            return true;
        } else {
            console.warn(`🚫 Kesalahan akun ${email}: ${response.status} - ${response.data.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error(``);
    }
    return false;
};

const countdown = async (seconds) => {
    for (let i = seconds; i > 0; i--) {
        process.stdout.write(`⏳ Proses selanjutnya sedang berjalan: ${i} seconds...\r`);
        await randomDelay(1, 1);
    }
    console.log("\n🔄 Restarting...\n");
};

const countdownAccountDelay = async (seconds) => {
    for (let i = seconds; i > 0; i--) {
        process.stdout.write(`⏳ Tunggu proses akun: ${i} seconds...\r`);
        await randomDelay(1, 1);
    }
    console.log("\n");
};

const processAccounts = async () => {
    displayWelcome();
    const totalProxies = proxies.length;

    while (true) {
        let totalPoints = 0;

        for (let i = 0; i < accountsData.length; i++) {
            const { email, token } = accountsData[i];
            const proxy = config.useProxy ? proxies[i % totalProxies] : undefined;

            const headers = {
                "Accept": "*/*",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
            };

            if (proxy) headers['Proxy'] = proxy;
            console.log(`----------------------------------------------------------------`);
            console.log(`🔍 Memproses: ${email} using proxy: ${proxy || 'No Proxy'}...`);
            const points = await fetchPoints(headers);
            totalPoints += points;

            if (points > 0) {
                const success = await keepAliveRequest(headers, email);
                if (!success) {
                    console.log(`✅ Sukses : Sedang menjalankan akun ${email} account.\n`);
                }
            } else {
                console.error(`❌ Tidak ada nilai point ${email}.`);
                console.log(`----------------------------------------------------------------`);
            }

            await countdownAccountDelay(config.accountDelay);
        }

        console.log(`📋 Memproses semua akun. Total points: ${totalPoints}`);
	console.log(`☕🚬 Sambil ngopi bang biar enjoy. 🙏🙏🙏🙏`);
        await countdown(config.restartDelay);
    }
};

processAccounts();
