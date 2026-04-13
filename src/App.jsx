export default function App() {
  const products = [
    {
      title: "初めてセット",
      text: "初めての方向けに選びやすくまとめた定番セットです。LINEミニアプリからご注文いただけます。",
      meta: "内容例：お試し用セット / 価格帯：1,000円〜2,000円",
    },
    {
      title: "オリジナルセット",
      text: "磯屋らしさをしっかり味わえる人気構成です。日常用にも贈答用にも使いやすい商品です。",
      meta: "内容例：定番詰め合わせ / 価格帯：2,000円〜4,000円",
    },
    {
      title: "法人・卸対応",
      text: "小売だけでなく、法人注文、卸相談、継続取引にも対応しています。数量や納期のご相談も可能です。",
      meta: "対応例：法人注文 / 卸相談 / 継続取引相談",
    },
  ];

  const services = [
    {
      title: "通販案内",
      text: "ご家庭向けに、えびせんべい商品のご案内とご注文受付を行っています。",
    },
    {
      title: "受注対応",
      text: "LINEミニアプリを活用し、受注確認から発送案内まで整理された導線で対応しています。",
    },
    {
      title: "法人・卸相談",
      text: "法人向け注文、継続取引、卸相談など、取引条件に応じたご相談窓口を設けています。",
    },
  ];

  const features = [
    "LINEミニアプリで注文・案内・連絡を一元化",
    "受注から発送案内まで丁寧に対応",
    "ご自宅用・ギフト・法人取引まで柔軟に対応",
    "小さくても整った運営体制で相談しやすい窓口設計",
  ];

  const steps = [
    {
      no: "01",
      title: "商品確認",
      text: "商品案内やセット内容をご確認いただき、用途に応じて商品をお選びいただけます。",
    },
    {
      no: "02",
      title: "ご注文・お問い合わせ",
      text: "LINEミニアプリまたは各種窓口から、ご注文やご相談を受け付けています。",
    },
    {
      no: "03",
      title: "受注確認・発送案内",
      text: "ご注文内容を確認し、必要に応じて発送予定やご案内をお知らせします。",
    },
    {
      no: "04",
      title: "発送・継続対応",
      text: "商品発送後も、継続注文や法人・卸相談に対応しています。",
    },
  ];

  const companyInfo = [
    { label: "法人名", value: "磯屋コマース合同会社" },
    { label: "屋号・ブランド", value: "手づくりえびせんべい 磯屋" },
    { label: "代表者", value: "木村 太郎" },
    { label: "所在地", value: "〒470-3412 愛知県知多郡南知多町豊浜字清水谷25-5 },
    {
      label: "事業内容",
      value: "えびせんべいの販売、通販、受注対応、法人対応、卸相談",
    },
    { label: "メール", value: "info@isoya.co.jp" },
    { label: "電話", value: "090-xxxx-xxxx" },
    { label: "営業時間", value: "平日 9:00〜17:00" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="block">
            <div className="text-sm tracking-[0.25em] text-neutral-500">
              ISOYA COMMERCE
            </div>
            <div className="text-xl font-bold">磯屋コマース</div>
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#company" className="hover:text-neutral-600">
              会社概要
            </a>
            <a href="#services" className="hover:text-neutral-600">
              事業内容
            </a>
            <a href="#products" className="hover:text-neutral-600">
              商品案内
            </a>
            <a href="#flow" className="hover:text-neutral-600">
              ご利用の流れ
            </a>
            <a href="#contact" className="hover:text-neutral-600">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-amber-50" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-orange-200 bg-white px-4 py-2 text-sm text-orange-700 shadow-sm">
                通販対応 / LINE注文 / 法人・卸相談
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                手づくりえびせんべい「磯屋」の
                <br />
                販売・受注・法人対応窓口
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                磯屋コマースは、手づくりえびせんべい「磯屋」の通販案内、
                受注対応、発送案内、法人・卸相談に対応する公式窓口です。
                個人向けのご注文から、法人・継続取引のご相談まで対応しています。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  お問い合わせ
                </a>
                <a
                  href="#products"
                  className="rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5"
                >
                  商品案内を見る
                </a>
              </div>

              <p className="mt-5 text-sm leading-7 text-neutral-500">
                会社概要・事業内容・商品案内・ご利用の流れ・お問い合わせ窓口を掲載しています。
              </p>
            </div>

            <div className="grid gap-4 md:pl-10">
              <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-orange-100">
                <div className="text-sm text-neutral-500">事業内容</div>
                <div className="mt-2 text-2xl font-bold">
                  通販・受注対応・発送案内・法人対応
                </div>
                <p className="mt-3 leading-7 text-neutral-600">
                  EC販売だけでなく、LINEを活用した受注導線、発送連絡、
                  継続案内、法人・卸相談まで一体で対応しています。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-neutral-900 p-6 text-white shadow-xl">
                  <div className="text-sm text-white/70">取扱内容</div>
                  <div className="mt-2 text-xl font-bold">
                    販売・受注・発送案内
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    ご家庭向け通販から継続注文のご案内まで、
                    必要な窓口機能を整えています。
                  </p>
                </div>

                <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-lg">
                  <div className="text-sm text-neutral-500">対応先</div>
                  <div className="mt-2 text-xl font-bold">個人 / 法人 / 卸相談</div>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    個人注文、法人注文、卸・継続取引のご相談に対応しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
                COMPANY
              </div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                会社概要
              </h2>

              <div className="mt-8 rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  {companyInfo.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="text-sm font-semibold text-neutral-500">
                        {item.label}
                      </div>
                      <div className="mt-1 text-base leading-7 text-neutral-800">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-lg">
              <div className="text-lg font-bold">事業説明</div>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                磯屋コマースは、手づくりえびせんべい「磯屋」の販売案内、
                受注対応、発送案内を行う法人窓口です。LINEミニアプリを活用し、
                注文しやすさと継続しやすさの両立を目指しています。
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                ご家庭向けのご注文だけでなく、法人注文、卸相談、
                継続取引のご相談にも対応しています。
              </p>

              <div className="mt-8">
                <div className="text-lg font-bold">特徴</div>
                <ul className="mt-5 space-y-4">
                  {features.map((item) => (
                    <li key={item} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-500" />
                      <span className="leading-7 text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
              SERVICES
            </div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              事業内容
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              何を、誰に、どのように提供しているかが分かるように整理しています。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-7 shadow-sm"
                >
                  <div className="text-2xl font-bold">{item.title}</div>
                  <p className="mt-4 leading-8 text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
            PRODUCTS / BUSINESS
          </div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            商品案内
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
            実際の取扱商品と取引内容が分かるように、商品区分ごとにご案内しています。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <div className="text-2xl font-bold">{item.title}</div>
                <p className="mt-4 leading-8 text-neutral-600">{item.text}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {item.meta}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="flow" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
              FLOW
            </div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              ご利用の流れ
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600">
              商品確認から発送案内までの流れを掲載しています。
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.no}
                  className="rounded-[30px] bg-neutral-900 p-8 text-white shadow-xl"
                >
                  <div className="text-sm tracking-[0.25em] text-white/50">
                    {step.no}
                  </div>
                  <div className="mt-3 text-2xl font-bold">{step.title}</div>
                  <p className="mt-4 leading-8 text-white/80">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-sm font-semibold tracking-[0.25em] text-orange-300">
                  CONTACT
                </div>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  お問い合わせ・ご相談
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-white/80">
                  商品に関するご質問、法人取引、卸相談、継続発注など、
                  お気軽にご連絡ください。LINE案内だけでなく、
                  メール・所在地・電話番号を含めた窓口情報を掲載しています。
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 text-neutral-900 shadow-2xl">
                <div className="text-lg font-bold">会社情報</div>

                <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-700">
                  <p>
                    <span className="font-semibold">法人名：</span>
                    磯屋コマース合同会社
                  </p>
                  <p>
                    <span className="font-semibold">事業内容：</span>
                    えびせんべいの販売、通販、受注対応、法人対応、卸相談
                  </p>
                  <p>
                    <span className="font-semibold">メール：</span>
                    info@isoya.co.jp
                  </p>
                  <p>
                    <span className="font-semibold">電話：</span>
                    090-xxxx-xxxx
                  </p>
                  <p>
                    <span className="font-semibold">所在地：</span>
                    愛知県知多郡南知多町豊浜字清水谷25-5
                  </p>
                  <p>
                    <span className="font-semibold">営業時間：</span>
                    平日 9:00〜17:00
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@isoya.co.jp"
                    className="inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white"
                  >
                    メールで問い合わせる
                  </a>
                  <a
                    href="#"
                    className="inline-flex rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900"
                  >
                    LINE案内ボタン
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© Isoya Commerce</div>

          <div className="flex flex-col gap-2 md:items-end">
            <div>手づくりえびせんべい 磯屋のオンライン案内・販売窓口</div>
            <div className="flex gap-4">
              <a href="/legal" className="hover:text-neutral-700">
                特定商取引法に基づく表記
              </a>
              <a href="/privacy" className="hover:text-neutral-700">
                プライバシーポリシー
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}