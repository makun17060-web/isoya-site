export default function App() {
  const products = [
    {
      title: "初めてセット",
      text: "初めての方向けに選びやすくまとめた定番セット。LINEミニアプリから気軽に注文できます。",
    },
    {
      title: "オリジナルセット",
      text: "磯屋らしさをしっかり味わえる人気構成。贈答にも日常用にも使いやすい商品です。",
    },
    {
      title: "法人・卸対応",
      text: "小売だけでなく、卸・業務用のご相談にも対応。継続取引やロット相談も受け付けています。",
    },
  ];

  const features = [
    "LINEミニアプリで注文・案内・連絡を一元化",
    "受注から発送まで丁寧に対応",
    "ご自宅用・ギフト・法人取引まで柔軟に対応",
    "小さくても整った運営体制で安心して相談できる",
  ];

  const steps = [
    {
      no: "01",
      title: "商品を見る",
      text: "おすすめ商品やセット内容を確認します。",
    },
    {
      no: "02",
      title: "LINEから注文",
      text: "LINEミニアプリ経由で、わかりやすく注文できます。",
    },
    {
      no: "03",
      title: "発送・受け取り",
      text: "発送状況の案内や受け取りまで、スムーズに対応します。",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm tracking-[0.25em] text-neutral-500">
              ISOYA COMMERCE
            </div>
            <div className="text-xl font-bold">磯屋コマース</div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-neutral-600">
              会社案内
            </a>
            <a href="#products" className="hover:text-neutral-600">
              商品・取引
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
                LINEミニアプリ対応 / 通販 / 法人・卸相談
              </div>

              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                えびせんべいを、
                <br />
                もっと届けやすく。
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                磯屋コマースは、手づくりえびせんべい「磯屋」の販売・案内・受注を支えるためのオンライン窓口です。
                個人のお客様はもちろん、法人・卸のご相談にも対応します。
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
                  商品・取引を見る
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:pl-10">
              <div className="rounded-[28px] bg-white p-6 shadow-xl shadow-orange-100">
                <div className="text-sm text-neutral-500">事業内容</div>
                <div className="mt-2 text-2xl font-bold">
                  通販・LINE注文・法人対応
                </div>
                <p className="mt-3 leading-7 text-neutral-600">
                  EC販売だけでなく、LINEを活用した注文導線、発送連絡、継続案内まで一体で運営しています。
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-neutral-900 p-6 text-white shadow-xl">
                  <div className="text-sm text-white/70">強み</div>
                  <div className="mt-2 text-xl font-bold">
                    小さく、速く、丁寧に
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    現場感のある運営で、商品とお客様の距離を近く保ちます。
                  </p>
                </div>

                <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-lg">
                  <div className="text-sm text-neutral-500">対応</div>
                  <div className="mt-2 text-xl font-bold">個人 / 法人</div>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    ご家庭向けのご注文から、卸・継続取引のご相談まで対応可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
                ABOUT
              </div>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                磯屋コマースについて
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-600">
                磯屋コマースは、手づくりえびせんべいの魅力をオンラインでもわかりやすく届けるための販売窓口です。
                ただ商品を並べるだけでなく、注文しやすさ、連絡しやすさ、継続しやすさを意識して設計しています。
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                LINEミニアプリを活用し、受注から案内、発送後のフォローまでを整理。
                小さな事業だからこそできる柔軟さと、仕組み化による安定運営の両立を目指しています。
              </p>
            </div>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-lg">
              <div className="text-lg font-bold">特徴</div>
              <ul className="mt-5 space-y-4">
                {features.map((item) => (
                  <li key={item} className="flex gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                    <span className="leading-7 text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
              PRODUCTS / BUSINESS
            </div>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              商品・取引案内
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {products.map((item) => (
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

        <section id="flow" className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-sm font-semibold tracking-[0.25em] text-orange-600">
            FLOW
          </div>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            ご利用の流れ
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                  商品に関するご質問、法人取引、卸相談、継続発注など、お気軽にご連絡ください。
                  LINEでのご案内を中心に、必要に応じてメールや各種連絡方法にも対応します。
                </p>
              </div>

              <div className="rounded-[32px] bg-white p-8 text-neutral-900 shadow-2xl">
                <div className="text-lg font-bold">掲載例</div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-700">
                  <p>
                    <span className="font-semibold">会社名：</span>
                    磯屋コマース
                  </p>
                  <p>
                    <span className="font-semibold">事業内容：</span>
                    えびせんべいの販売、通販、卸対応
                  </p>
                  <p>
                    <span className="font-semibold">お問い合わせ：</span>
                    LINE / メール
                  </p>
                  <p>
                    <span className="font-semibold">対応時間：</span>
                    平日・土日祝の案内方針にあわせて調整
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  LINE案内ボタンを設置
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© Isoya Commerce</div>
          <div>手づくりえびせんべい 磯屋のオンライン案内・販売窓口</div>
        </div>
      </footer>
    </div>
  );
}