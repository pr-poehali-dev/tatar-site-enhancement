import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div 
        className="absolute top-0 left-0 w-full h-64 opacity-20 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/b87f5d8e-d806-44da-873c-7dff7e3164a1/files/bf70a425-aa2b-4c60-a63a-1ecd4629c039.jpg')` }}
      />

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 animate-fade-in">
            Татар Мәдәнияте
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Безнең халкыбызның байлыгы һәм тарихы
          </p>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="costume" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="costume" className="flex items-center gap-2">
                <Icon name="Shirt" size={18} />
                <span className="hidden sm:inline">Киемнәр</span>
              </TabsTrigger>
              <TabsTrigger value="song" className="flex items-center gap-2">
                <Icon name="Music" size={18} />
                <span className="hidden sm:inline">Җырлар</span>
              </TabsTrigger>
              <TabsTrigger value="tale" className="flex items-center gap-2">
                <Icon name="BookOpen" size={18} />
                <span className="hidden sm:inline">Әкиятләр</span>
              </TabsTrigger>
              <TabsTrigger value="landmarks" className="flex items-center gap-2">
                <Icon name="MapPin" size={18} />
                <span className="hidden sm:inline">Урыннар</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="costume" className="animate-fade-in">
              <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="text-4xl flex items-center gap-3">
                    <Icon name="Shirt" size={36} className="text-primary" />
                    Татар Милли Киемнәре
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <img 
                        src="https://cdn.poehali.dev/projects/b87f5d8e-d806-44da-873c-7dff7e3164a1/files/33ae696e-df6f-4c34-a041-e6c35e9e5516.jpg"
                        alt="Татар милли киеме"
                        className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p className="text-foreground/90">
                        Татар милли киемнәре – безнең халкыбызның күренекле үзенчәлекләреннән берсе. Аның төп элементлары: күлмәк, камзул, калфак һәм читек.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                          <Icon name="Sparkles" size={24} className="text-secondary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-xl mb-1">Күлмәк</h3>
                            <p className="text-foreground/80">Җәен – якалы, кышын – туры яклы кисемдә тегелгән күлмәкләр.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                          <Icon name="Crown" size={24} className="text-accent flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-xl mb-1">Калфак</h3>
                            <p className="text-foreground/80">Алтын җепләр белән бизәлгән матур баш киеме, татар хатын-кызларының символы.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                          <Icon name="Gem" size={24} className="text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-xl mb-1">Камзул</h3>
                            <p className="text-foreground/80">Матур чигүләр һәм бизәкләр белән бизәлгән җиләкле кием.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="song" className="animate-fade-in">
              <Card className="border-2 border-primary/20 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
                  <CardTitle className="text-4xl flex items-center gap-3">
                    <Icon name="Music" size={36} className="text-secondary" />
                    Татар Халык Җыры
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl font-bold text-primary">«Туган Тел»</h3>
                    <p className="text-muted-foreground">Габдулла Тукай</p>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-xl space-y-4 text-lg leading-relaxed border border-primary/10">
                    <p className="text-center font-medium">
                      Туган тел – туган ана тел,<br />
                      Дөньяда күп нәрсә белдем синнән.<br />
                      Туган тел! Һәр сүзең – бер тылсым,<br />
                      Җанлы тел, серле тел – туган тел!
                    </p>
                    <div className="border-t border-primary/20 pt-4 mt-4">
                      <p className="text-center font-medium">
                        Беренче сүзне әйтә башлагач,<br />
                        Аңласам сине, туган тел.<br />
                        Ишетсәм йөрәктән таң моңнары,<br />
                        Сихри тел, матур тел – туган тел!
                      </p>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-inner border border-primary/20">
                    <div className="flex items-center justify-center gap-4">
                      <Button 
                        onClick={togglePlay}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                      >
                        <Icon name={isPlaying ? "Pause" : "Play"} size={24} className="mr-2" />
                        {isPlaying ? "Туктату" : "Тыңларга"}
                      </Button>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      {isPlaying ? "Җыр уйный..." : "Җырны тыңлау өчен төймәгә басыгыз"}
                    </p>
                  </div>

                  <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                    <h4 className="font-semibold text-xl mb-3 flex items-center gap-2">
                      <Icon name="Info" size={20} className="text-accent" />
                      Җыр турында
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      «Туган тел» – бөек татар шагыйре Габдулла Тукайның иң мәшһүр шигырьләреннән берсе. 
                      Бу әсәр туган телгә, аның матурлыгына һәм әһәмиятенә багышланган. 
                      Шигырь татар халкының рухи байлыгын һәм милли үзаңын чагылдыра.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tale" className="animate-fade-in">
              <Card className="border-2 border-primary/20 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                  <CardTitle className="text-4xl flex items-center gap-3">
                    <Icon name="BookOpen" size={36} className="text-accent" />
                    Татар Халык Әкияте
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-3xl font-bold text-accent">«Өч Кыз»</h3>
                    <p className="text-muted-foreground italic">Татар халык әкияте</p>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-xl space-y-4 text-lg leading-relaxed border border-accent/10">
                      <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-accent first-letter:mr-2 first-letter:float-left">
                        Борынгы заманнарда бер бай яшәгән. Аның өч кызы булган: өлкәне, уртанчысы һәм кечкенәсе. 
                        Өлкән ике кыз горурлыклы һәм тәкәббер булганнар, ә кечкенәсе – акыллы, җылы күңелле һәм 
                        үз әтисен чын күңелдән яратучан иде.
                      </p>
                      
                      <p>
                        Көннәрнең берсендә бай кызларына сорады: «Сез мине ничек яратасыз?» Өлкән кыз әйтте: 
                        «Әти, мин сине алтын кебек яратам!» Уртанчысы әйтте: «Әти, мин сине көмеш кебек яратам!» 
                        Ә кечкенәсе уйланып торып җавап бирде: «Әти, мин сине тоз кебек яратам.»
                      </p>

                      <p className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                        Бай ачуланды: «Минем кадерем сиңа тоз кадәре генәме?» – дип, кызын өеннән куып җибәрде. 
                        Кечкенә кыз урманга китте һәм анда матур сарайда яшәүче карчык белән очрашты.
                      </p>

                      <p>
                        Карчык аңа ярдәм итте, һәм ул анда хезмәт иткән вакытта акыллылыгы һәм матурлыгы белән 
                        якын илнең патшасының игътибарын җәлеп итте. Патша аны хатынлыкка алды.
                      </p>

                      <p>
                        Туйда кыз әтисен дә чакырды, әмма ашларга тоз өстәмәде. Бай ашап карагач, барысы да 
                        тәмсез икәнен аңлады. Шунда кызы әйтте: «Әти, хәзер сез тозның кадерен аңладыгызмы? 
                        Тоз кирәксез кебек күренсә дә, ансыз тормыш тәмсез булыр.»
                      </p>

                      <p className="text-center font-semibold text-xl text-primary mt-6 pt-6 border-t border-primary/20">
                        Бай кызының гафу үтенеп, аларның бәхетле яшәвенә шатланды.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg mt-6 border border-primary/20">
                      <h4 className="font-semibold text-xl mb-3 flex items-center gap-2">
                        <Icon name="Lightbulb" size={20} className="text-primary" />
                        Әкияттән чыгарылган гыйбрәт
                      </h4>
                      <p className="text-foreground/80 leading-relaxed">
                        Бу әкият безгә өйрәтә: чын мәхәббәт һәм кадерне бай бүләкләр белән генә күрсәтеп 
                        булмый. Кайбер кенә, гади әйберләр тормышта иң кирәкле булырга мөмкин. Кешене 
                        тышкы күренеше белән генә бәяләү ярамый – эчке сыйфатлары мөһимрәк.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="landmarks" className="animate-fade-in">
              <Card className="border-2 border-primary/20 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="text-4xl flex items-center gap-3">
                    <Icon name="MapPin" size={36} className="text-primary" />
                    Татарстанның Күренекле Урыннары
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-8">
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-full">
                          <Icon name="Building" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">Казан Кремле</h3>
                          <p className="text-muted-foreground">ЮНЕСКО Бөтендөнья мирасы исемлегендә</p>
                        </div>
                      </div>
                      <div className="space-y-4 text-foreground/90 leading-relaxed">
                        <img 
                          src="https://cdn.poehali.dev/projects/b87f5d8e-d806-44da-873c-7dff7e3164a1/files/e8f16f06-5c5a-48bd-aad5-5293a7c223ef.jpg"
                          alt="Казан Кремле"
                          className="w-full rounded-lg shadow-lg mb-4"
                        />
                        <p className="text-lg">
                          Казан Кремле – Татарстанның иң зур тарихи һәм архитектура комплексы. Ул X гасырда 
                          корылган һәм безнең көннәргә кадәр үз матурлыгын саклап калган.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <Icon name="Star" size={18} className="text-secondary" />
                              Кол Шәриф мәчете
                            </h4>
                            <p className="text-sm">
                              Европаның иң зур мәчетләреннән берсе. 2005 елда яңадан төзелгән, 
                              аның күк күмбәзләре Казанның символына әверелгән.
                            </p>
                          </div>
                          
                          <div className="bg-white/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <Icon name="Church" size={18} className="text-accent" />
                              Благовещение соборы
                            </h4>
                            <p className="text-sm">
                              XVI гасырда салынган, Россиянең иң борынгы православ гыйбадәтханәләреннең берсе.
                            </p>
                          </div>
                          
                          <div className="bg-white/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <Icon name="Castle" size={18} className="text-primary" />
                              Сөембикә манарасы
                            </h4>
                            <p className="text-sm">
                              58 метр биеклектәге манара, Италиядәге Пиза манарасы кебек бераз авышлык.
                              Татар дәүләтчелегенең символы.
                            </p>
                          </div>
                          
                          <div className="bg-white/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <Icon name="Home" size={18} className="text-secondary" />
                              Губернатор сарае
                            </h4>
                            <p className="text-sm">
                              XIX гасыр башында төзелгән классицизм стилендәге матур бина. 
                              Хәзерге вакытта Татарстан Президенты резиденциясе.
                            </p>
                          </div>
                        </div>

                        <div className="bg-accent/10 p-5 rounded-lg border border-accent/20 mt-4">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Icon name="Info" size={20} className="text-accent" />
                            Мәгълүмат
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <Icon name="Clock" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span><strong>Ачык вакыт:</strong> көн саен 9:00 – 18:00</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="MapPin" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span><strong>Урнашуы:</strong> Казан шәһәре, Кремль урамы</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Calendar" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span><strong>Төзелү елы:</strong> X–XVI гасырлар</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Icon name="Users" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span><strong>Еллык килүчеләр:</strong> 1.5 миллионнан артык кеше</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-secondary/10 p-5 rounded-lg border border-secondary/20">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Icon name="Heart" size={20} className="text-secondary" />
                            Ни өчен барырга кирәк?
                          </h4>
                          <p className="text-foreground/80">
                            Казан Кремле – татар һәм рус мәдәниятләренең уңай аралашуының символы. 
                            Монда мәчет белән чиркәү янәшә урнашкан, бу төрле диннәр һәм мәдәниятләр 
                            арасында тату яшәүнең гаҗәеп мисалы. Кремльдә йөргәндә, сез гасырлар 
                            буена килгән тарихны тоеп карый аласыз.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-xl border border-secondary/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-secondary text-foreground p-3 rounded-full">
                          <Icon name="Waves" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-secondary mb-2">Раифа монастыре</h3>
                          <p className="text-muted-foreground">Рухи тынычлык урыны</p>
                        </div>
                      </div>
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        Казаннан 30 километр ераклыкта, Раифа күле буенда урнашкан матур монастырь. 
                        XVII гасырда нигез салынган бу изге урын хәзерге вакытта да зур рухи әһәмияткә ия.
                      </p>
                      <div className="bg-white/50 p-4 rounded-lg">
                        <p className="text-sm text-foreground/80">
                          <strong>Кызыклы факт:</strong> Монастырь яны урманнары табигать саклагычы булып тора. 
                          Монда 200 ел үткән нарат агачлары һәм сирәк үсемлекләр очрый.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl border border-accent/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-accent text-accent-foreground p-3 rounded-full">
                          <Icon name="Mountain" size={28} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-accent mb-2">Болгар шәһәре</h3>
                          <p className="text-muted-foreground">Татар халкының тамырлары</p>
                        </div>
                      </div>
                      <img 
                        src="https://cdn.poehali.dev/projects/b87f5d8e-d806-44da-873c-7dff7e3164a1/files/fab39640-279e-4798-abe1-e2f02ecc00ac.jpg"
                        alt="Болгар шәһәре"
                        className="w-full rounded-lg shadow-lg mb-4"
                      />
                      <p className="text-foreground/90 leading-relaxed mb-4">
                        Борынгы Болгар шәһәре – Идел Болгары дәүләтенең баш шәһәре булган. 
                        XIII гасырда монда ислам дине рәсми дин буларак кабул ителгән. Бүген бу урын 
                        татар халкының рухи башлангыч ноктасы санала.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Icon name="Landmark" size={18} className="text-accent" />
                            Зур гыйбадәтханә
                          </h4>
                          <p className="text-sm">XIII гасырда төзелгән, Идел Болгарының иң зур мәчете калдыклары.</p>
                        </div>
                        <div className="bg-white/50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Icon name="BookMarked" size={18} className="text-accent" />
                            Изге Коръән музее
                          </h4>
                          <p className="text-sm">Дөньяның иң зур басма Коръәне саклана – 800 кг авырлыкта.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
                    <h4 className="text-2xl font-bold mb-3">Татарстанга рәхим итегез!</h4>
                    <p className="text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                      Безнең җирдә һәр кеше үзенә уңайлы тәҗрибә таба ала – тарих һәм мәдәният, 
                      табигать матурлыгы һәм рухи үсеш. Татарстан – Көнчыгыш белән Көнбатыш 
                      очрашкан гаҗәеп урын.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="container mx-auto px-4 py-8 mt-12 text-center border-t border-primary/20">
          <div className="mb-6">
            <div className="inline-block p-4 bg-white rounded-xl shadow-lg">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`}
                alt="QR код сайта"
                className="w-48 h-48"
              />
              <p className="text-sm text-foreground/60 mt-2">Сканируйте QR код</p>
            </div>
          </div>
          <p className="text-foreground/70 text-lg">
            © 2025 Татар Мәдәнияте • Барлык хокуклар сакланган
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a href="#" className="text-primary hover:text-secondary transition-colors flex items-center gap-2">
              <Icon name="Mail" size={20} />
              <span>Элемтә</span>
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors flex items-center gap-2">
              <Icon name="Globe" size={20} />
              <span>Сайт</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;