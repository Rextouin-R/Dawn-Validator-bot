# Register HERE
[![Static Badge](https://img.shields.io/badge/Telegram-Bot%20Link-Link?style=for-the-badge&logo=Telegram&logoColor=white&logoSize=auto&color=blue)](https://t.me/birdx2_bot/birdx?startapp=7350641156)

# Join Telegram  ♾︎ 
[![Static Badge](https://img.shields.io/badge/Telegram-Airdrop◾unlimited-Link?style=for-the-badge&logo=Telegram&logoColor=white&logoSize=auto&color=blue)](https://t.me/UNLXairdop)

# DAWN Validator Extension automatic claim

## Memerlukan 
- Node JS

## Features

- Automatically send keep-alive requests to claim points.
- Multi-account.
- Auto loop.
- Proxy support.

## Install
1. Cloning repositorynya
   ```
   git clone https://github.com/recitativonika/Dawn-Validator-bot.git
   ```
   ```
   cd Dawn-Validator-bot
   ```
2. Install paketnya
   ```
   npm install
   ```
   atau
   ```
   npm i
   ```
### Persiapan untum menjalankan

1. Login/register Dawn Validator account dan login, ambil token di bagian "getpoint?appid=" -> "authorization:" klik titik tiga di bagian kanan atas browser kalian,scroll ke bawah klik bagian mode developer. 
2.Ambil has token di bagian "berear" , dan copy semua has "berear"nya.
3. Buka file `Dawn-Validator-bot` edit berkas `accounts.js isi bagian "email" dengan akun DAWN kalian dan paste has tokennya di bagian "token1" atau "token2", seperti ini contoh berkasnya.
	```
	// accounts.js
	module.exports = [
		{ email: "user1@example.com", token: "token1" },
		{ email: "user2@example.com", token: "token2" },
		// Add more accounts as needed
	];
	```
4. Edit berkas `config.js`. dan jika tidak ingin menggunakan proxy biarkan "false".
	```
	// config.js
	module.exports = {
	    useProxy: false, // biarkan false jika tidak ingin menggunakan proxy
	    minDelay: 3, // 
	    maxDelay: 10, // 
	    restartDelay: 241, // 
	    accountDelay: 121, //
	};
	```
5. Untuk menjalankan svriptnya, ketikan perintah :
    ```
    node index.js
    ```
	
	
	
Dawn Validator Extension : https://chromewebstore.google.com/detail/dawn-validator-chrome-ext/fpdkjdnhkakefebpekbdhillbhonfjjp?authuser=0&hl=en
