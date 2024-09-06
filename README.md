# cloudflare_chat_safe

这是我利用Cloudflare的REST API搭建的一个聊天机器人界面，使用的是Cloudflare中的通义千问API，为了避免跨域请求，我使用Workers进行代理。

项目的密钥和cloudflare的接口地址不写在在前端的版本，以workers进行代理的接口大家也可以拿过去随意使用。

另外还有一个密钥直接写入前端的版本地址为：https://github.com/MisterHuhua/cloudflare_chat

接口代码移步至：https://github.com/MisterHuhua/chat_api
