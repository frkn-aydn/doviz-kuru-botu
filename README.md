Döviz Kuru Botu
==================

Belli aralıklar ile döviz kurunu çeken ve bunu twitter da paylaşan basit bir bot. 

**Şu an demo amaçlı şu hesaptan paylaşım yapılmaktadır : https://twitter.com/doviz_botu**

Botu çalıştırmak için bilgisayarınızda Nodejs(V6+) ve npm(V5+) kurulu olmalıdır. Ayrıca bilgisayarınızda GIT kurulu olduğunu farz ediyorum. [Eğer yüklü değilse...](https://www.youtube.com/watch?v=dOvAxitwNVE)

Kurulum : 

 * Projeyi kurmak istediğiniz klasörde bir terminal açınız ve sırayla şu komutları çalıştırınız : **git clone https://github.com/turkishdeveloper/doviz-kuru-botu**
 * **cd doviz-kuru-botu**
 * **npm install**

Yukarıdaki işlemleri doğru bir şekilde yapmanız programın çalışması için maalesef yeterli değil. son bir işlem daha yapmanız gerekmekte. Öncelikle [Twitter uygulama oluşturma](https://apps.twitter.com/) sayfasına gidip kendiniz için bir uygulama oluşturmalısınız. Sonrasında ise oradaki **Keys and Access Tokens** adlı sekmeye tıklayın. Oradan kendiniz için bir access token ve Access Token Secret oluşturacaksınız. 

Access Token ve Access Token Secret oluşturduktan sonra indirdiğiniz proje dosyasında bulunan server.js dosyasını açın ve üst tarafta bulunan TwitterConfig adlı değişkeni düzenleyin. Eğer dosyayı açıp düzenlemek için uğraşamam diyorsanız bash dosyasına aşağıda vereceğim değişkenleri ekleyebilirsiniz.

Bash Dosyasına Eklenecek Değişkenler

```bash
export TWITTER_CONSUMER_KEY="uygulama key i"
export TWITTER_CONSUMER_SECRET="uygulama secret key i"
export TWITTER_TOKEN_KEY="oluşturduğunuz access token"
export TWITTER_TOKEN_SECRET="oluşturduğunuz access token secret" 
```

Tüm bunları yaptıktan sonra programın çalışması için gereken her şey hazır demektir. Aklınızda kalan bir soru olursa lütfen bildiriniz :) 

